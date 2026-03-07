import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { withAuth } from '@/lib/auth';

export const GET = withAuth(async (req: Request) => {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limitStr = searchParams.get('limit') || '50';
        const isExport = limitStr === 'all';
        const limit = isExport ? undefined : parseInt(limitStr);
        const skip = isExport ? undefined : (page - 1) * (limit || 50);

        const searchTerm = searchParams.get('search') || '';
        const deptFilter = searchParams.get('dept') || 'All';
        const statusFilter = searchParams.get('status') || 'All';

        const where: any = {
            AND: [
                searchTerm ? {
                    OR: [
                        { employee_name_th: { contains: searchTerm } },
                        { employee_name_en: { contains: searchTerm } },
                        { employee_code: { contains: searchTerm } },
                    ]
                } : {},
                deptFilter !== 'All' ? { department: deptFilter } : {},
                statusFilter !== 'All' ? { status: statusFilter } : {},
            ]
        };

        const [employees, total] = await Promise.all([
            prisma.employee.findMany({
                where,
                skip,
                take: limit,
                orderBy: { id: 'desc' }
            }),
            prisma.employee.count({ where })
        ]);

        return NextResponse.json({ data: employees, total, page, limit: limit || total });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});

export const POST = withAuth(async (req: Request) => {
    try {
        const body = await req.json();
        const employeesData = Array.isArray(body) ? body : [body];

        const formattedData = employeesData.map((emp) => ({
            employee_code: emp.employee_code,
            employee_name_th: emp.employee_name_th,
            employee_name_en: emp.employee_name_en,
            gender: emp.gender,
            position: emp.position,
            department: emp.department,
            work_location: emp.work_location,
            supervisor_name: emp.supervisor_name,
            start_date: emp.start_date ? new Date(emp.start_date) : null,
            end_date: emp.end_date ? new Date(emp.end_date) : null,
            status: emp.status || "Active",
        }));

        if (Array.isArray(body)) {
            const result = await prisma.employee.createMany({
                data: formattedData,
                skipDuplicates: true,
            });
            return NextResponse.json({
                message: `Successfully imported ${result.count} employees.`,
                count: result.count
            }, { status: 201 });
        } else {
            const result = await prisma.employee.create({
                data: formattedData[0]
            });
            return NextResponse.json(result, { status: 201 });
        }
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});
