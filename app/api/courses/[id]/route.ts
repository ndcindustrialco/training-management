import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

export const GET = auth(async (req, ctx) => {
    if (!req.auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { params } = ctx as { params: Promise<{ id: string }> };
    try {
        const p = await params;
        const course = await prisma.course.findUnique({
            where: { id: parseInt(p.id) },
            include: { descriptions: true },
        });

        if (!course) return NextResponse.json({ error: 'Not found' }, { status: 404 });
        return NextResponse.json(course);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});

export const PUT = auth(async (req, ctx) => {
    if (!req.auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { params } = ctx as { params: Promise<{ id: string }> };
    try {
        const p = await params;
        const data = await req.json();

        const course = await prisma.course.update({
            where: { id: parseInt(p.id) },
            data: {
                course_code: data.course_code,
                course_name: data.course_name,
                course_category: data.course_category,
                training_type: data.training_type,
                organizing_agency: data.organizing_agency,
                certificate_required: data.certificate_required,
            },
        });
        return NextResponse.json(course);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});

export const DELETE = auth(async (req, ctx) => {
    if (!req.auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { params } = ctx as { params: Promise<{ id: string }> };
    try {
        const p = await params;
        await prisma.course.delete({ where: { id: parseInt(p.id) } });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});
