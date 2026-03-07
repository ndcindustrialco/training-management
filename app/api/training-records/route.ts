import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { withAuth } from '@/lib/auth';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { mkdirSync, existsSync } from 'fs';

export const GET = withAuth(async (req: Request) => {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limitStr = searchParams.get('limit') || '50';
        const isExport = limitStr === 'all';
        const limit = isExport ? undefined : parseInt(limitStr);
        const skip = isExport ? undefined : (page - 1) * (limit || 50);

        const searchTerm = searchParams.get('search') || '';
        const resultFilter = searchParams.get('result') || 'All';

        const where: any = {
            AND: [
                searchTerm ? {
                    OR: [
                        { employee: { employee_name_th: { contains: searchTerm } } },
                        { employee: { employee_code: { contains: searchTerm } } },
                        { course: { course_name: { contains: searchTerm } } },
                    ]
                } : {},
                resultFilter !== 'All' ? { training_result: resultFilter } : {},
            ]
        };

        const [records, total] = await Promise.all([
            prisma.trainingRecord.findMany({
                where,
                skip,
                take: limit,
                orderBy: { id: 'desc' },
                select: {
                    id: true,
                    employee_id: true,
                    course_id: true,
                    training_date: true,
                    training_hour: true,
                    training_result: true,
                    trainer_name: true,
                    location: true,
                    expire_date: true,
                    attachment: true,
                    note: true,
                    employee: { select: { employee_code: true, employee_name_th: true, employee_name_en: true } },
                    course: { include: { descriptions: true } }
                }
            }),
            prisma.trainingRecord.count({ where }),
        ]);

        return NextResponse.json({ data: records, total, page, limit: limit || total });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});

export const POST = withAuth(async (req: Request) => {
    try {
        const formData = await req.formData();
        const course_id = formData.get('course_id') as string;
        const training_date = formData.get('training_date') as string;
        const training_hour = formData.get('training_hour') as string;
        const training_result = formData.get('training_result') as string;
        const trainer_name = formData.get('trainer_name') as string;
        const location = formData.get('location') as string;
        const expire_date = formData.get('expire_date') as string;
        const note = formData.get('note') as string;
        const file = formData.get('attachment') as File | null;

        let attachmentPath: string | null = null;
        if (file && file.size > 0) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const uploadDir = join(process.cwd(), 'public/uploads');
            if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });
            const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
            const filePath = join(uploadDir, fileName);
            await writeFile(filePath, buffer);
            attachmentPath = `/uploads/${fileName}`;
        }

        const employeeIds = formData.getAll('employee_id') as string[];
        if (employeeIds.length === 0) return NextResponse.json({ error: 'กรุณาเลือกพนักงาน' }, { status: 400 });

        const parseDate = (val: any) => {
            if (!val || val === "undefined" || val === "null") return null;
            const d = new Date(val);
            return isNaN(d.getTime()) ? null : d;
        };

        const recordsData = employeeIds.map(empId => ({
            employee_id: parseInt(empId),
            course_id: parseInt(course_id),
            training_date: parseDate(training_date) || new Date(),
            training_hour: training_hour ? parseFloat(training_hour) : null,
            training_result,
            trainer_name,
            location,
            expire_date: parseDate(expire_date),
            attachment: attachmentPath,
            note
        }));

        await prisma.trainingRecord.createMany({ data: recordsData });

        return NextResponse.json({
            message: `บันทึกข้อมูลเรียบร้อยแล้ว (${recordsData.length} รายการ)`,
            count: recordsData.length
        }, { status: 201 });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});
