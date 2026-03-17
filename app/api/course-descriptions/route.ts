import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const GET = auth(async (req) => {
    if (!req.auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '50');
        const skip = (page - 1) * limit;

        const [descriptions, total] = await Promise.all([
            prisma.courseDescription.findMany({
                skip,
                take: limit,
                orderBy: { id: 'desc' },
                select: {
                    id: true,
                    description: true,
                    course_id: true,
                    course: {
                        select: {
                            course_name: true,
                            course_code: true
                        }
                    }
                }
            }),
            prisma.courseDescription.count(),
        ]);

        return NextResponse.json({ data: descriptions, total, page, limit });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});

export const POST = auth(async (req) => {
    if (!req.auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        const data = await req.json();
        const desc = await prisma.courseDescription.create({
            data: {
                course_id: parseInt(data.course_id),
                description: data.description,
            },
        });

        return NextResponse.json(desc);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});
