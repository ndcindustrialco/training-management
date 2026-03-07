import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { withAuth } from '@/lib/auth';

export const GET = withAuth(async (
    req: Request,
    { params }: { params: Promise<{ employeeId: string }> }
) => {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const skip = (page - 1) * limit;

        const p = await params;
        const employee_id = parseInt(p.employeeId);

        const [records, total] = await Promise.all([
            prisma.trainingRecord.findMany({
                where: { employee_id },
                skip,
                take: limit,
                orderBy: { training_date: 'desc' },
                select: {
                    id: true,
                    training_date: true,
                    training_hour: true,
                    training_result: true,
                    trainer_name: true,
                    location: true,
                    attachment: true,
                    course: {
                        include: {
                            descriptions: true
                        }
                    }
                }
            }),
            prisma.trainingRecord.count({ where: { employee_id } }),
        ]);

        return NextResponse.json({ data: records, total, page, limit });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});
