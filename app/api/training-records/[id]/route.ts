import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { uploadFile, deleteFile } from '@/lib/storage';

export const GET = auth(async (req, ctx) => {
    if (!req.auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { params } = ctx as { params: Promise<{ id: string }> };
    try {
        const p = await params;
        const record = await prisma.trainingRecord.findUnique({
            where: { id: parseInt(p.id) },
            include: {
                employee: { select: { employee_name_th: true, employee_name_en: true } },
                course: { select: { course_name: true, course_code: true } }
            }
        });

        if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
        return NextResponse.json(record);
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
        const targetId = parseInt(p.id);

        // Using formData here because of potential file uploads on updates too.
        const formData = await req.formData();

        const updateData: any = {};
        const parseDate = (val: any) => {
            if (!val || val === "undefined" || val === "null") return null;
            const d = new Date(val);
            return isNaN(d.getTime()) ? null : d;
        };

        if (formData.has('employee_id')) updateData.employee_id = parseInt(formData.get('employee_id') as string);
        if (formData.has('course_id')) updateData.course_id = parseInt(formData.get('course_id') as string);
        if (formData.has('training_date')) updateData.training_date = parseDate(formData.get('training_date')) || new Date();

        if (formData.has('training_hour')) updateData.training_hour = parseFloat(formData.get('training_hour') as string);
        if (formData.has('training_result')) updateData.training_result = formData.get('training_result') as string;
        if (formData.has('trainer_name')) updateData.trainer_name = formData.get('trainer_name') as string;
        if (formData.has('location')) updateData.location = formData.get('location') as string;
        if (formData.has('expire_date')) updateData.expire_date = parseDate(formData.get('expire_date'));
        if (formData.has('note')) updateData.note = formData.get('note') as string;

        const file = formData.get('attachment') as File | null;

        if (file && file.size > 0) {
            try {
                // Upload new file
                const newUrl = await uploadFile(file, file.name);
                updateData.attachment = newUrl;

                // Attempt to delete old attachment from Supabase
                const oldRecord = await prisma.trainingRecord.findUnique({
                    where: { id: targetId },
                    select: { attachment: true }
                });
                if (oldRecord?.attachment) {
                    await deleteFile(oldRecord.attachment);
                }
            } catch (err) {
                console.error('File update failed:', err);
            }
        }

        const record = await prisma.trainingRecord.update({
            where: { id: targetId },
            data: updateData,
        });

        return NextResponse.json(record);
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
        const targetId = parseInt(p.id);

        // Optional: Delete physical file attachment before deleting db map
        const oldRecord = await prisma.trainingRecord.findUnique({
            where: { id: targetId },
            select: { attachment: true }
        });
        if (oldRecord?.attachment) {
            await deleteFile(oldRecord.attachment);
        }

        await prisma.trainingRecord.delete({ where: { id: targetId } });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});
