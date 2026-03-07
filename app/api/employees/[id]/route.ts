import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { withAuth } from '@/lib/auth';

export const GET = withAuth(async (
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) => {
    try {
        const p = await params;
        const employee = await prisma.employee.findUnique({
            where: { id: parseInt(p.id) },
        });

        if (!employee) return NextResponse.json({ error: 'Not found' }, { status: 404 });
        return NextResponse.json(employee);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});

export const PUT = withAuth(async (
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) => {
    try {
        const p = await params;
        const data = await req.json();

        const employee = await prisma.employee.update({
            where: { id: parseInt(p.id) },
            data: {
                employee_code: data.employee_code,
                employee_name_th: data.employee_name_th,
                employee_name_en: data.employee_name_en,
                gender: data.gender,
                position: data.position,
                department: data.department,
                work_location: data.work_location,
                supervisor_name: data.supervisor_name,
                start_date: data.start_date ? new Date(data.start_date) : null,
                end_date: data.end_date ? new Date(data.end_date) : null,
                status: data.status,
            },
        });
        return NextResponse.json(employee);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});

export const DELETE = withAuth(async (
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) => {
    try {
        const p = await params;
        await prisma.employee.delete({ where: { id: parseInt(p.id) } });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});
