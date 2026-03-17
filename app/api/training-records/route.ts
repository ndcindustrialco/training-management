import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { uploadFile } from '@/lib/storage';

export const GET = auth(async (req) => {
    if (!req.auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limitStr = searchParams.get('limit') || '50';
        const isExport = limitStr === 'all';
        const limit = isExport ? undefined : parseInt(limitStr);
        const skip = isExport ? undefined : (page - 1) * (limit || 50);

        const searchTerm = searchParams.get('search') || '';
        const resultFilter = searchParams.get('result') || 'All';
        const startDate = searchParams.get('startDate');
        const endDate = searchParams.get('endDate');
        const employeeId = searchParams.get('employee_id');
        const courseId = searchParams.get('course_id');
        const trainerName = searchParams.get('trainer');
        const location = searchParams.get('location');

        const where: any = {
            AND: [
                searchTerm ? {
                    OR: [
                        { employee: { employee_name_th: { contains: searchTerm } } },
                        { employee: { employee_code: { contains: searchTerm } } },
                        { course: { course_name: { contains: searchTerm } } },
                    ]
                } : {},
                resultFilter && resultFilter !== 'All' ? { training_result: resultFilter } : {},
                startDate ? { training_date: { gte: new Date(startDate) } } : {},
                endDate ? { training_date: { lte: new Date(endDate) } } : {},
                employeeId ? { employee_id: parseInt(employeeId) } : {},
                courseId ? { course_id: parseInt(courseId) } : {},
                trainerName ? { trainer_name: { contains: trainerName } } : {},
                location ? { location: { contains: location } } : {},
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

export const POST = auth(async (req) => {
    if (!req.auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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
            try {
                attachmentPath = await uploadFile(file, file.name);
            } catch (err) {
                console.error('File upload failed:', err);
                // Optionally handle error, but for now we continue without attachment if it fails
            }
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
