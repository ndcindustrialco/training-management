import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { withAuth } from '@/lib/auth';

export const GET = withAuth(async (
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) => {
    try {
        const p = await params;
        const desc = await prisma.courseDescription.findUnique({
            where: { id: parseInt(p.id) },
        });

        if (!desc) return NextResponse.json({ error: 'Not found' }, { status: 404 });
        return NextResponse.json(desc);
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

        const desc = await prisma.courseDescription.update({
            where: { id: parseInt(p.id) },
            data: {
                course: data.course_id ? { connect: { id: parseInt(data.course_id) } } : undefined,
                description: data.description,
            },
        });
        return NextResponse.json(desc);
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
        await prisma.courseDescription.delete({ where: { id: parseInt(p.id) } });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});
