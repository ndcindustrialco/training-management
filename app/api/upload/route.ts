import { NextResponse } from 'next/server';
import { uploadFile } from '@/lib/storage';
import { auth } from '@/lib/auth';

export const POST = auth(async (req) => {
    if (!req.auth) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const publicUrl = await uploadFile(file, file.name);

        return NextResponse.json({ 
            success: true, 
            url: publicUrl,
            fileName: file.name
        });
    } catch (error: any) {
        console.error('Upload API Error:', error);
        return NextResponse.json({ 
            error: error.message || 'Failed to upload file' 
        }, { status: 500 });
    }
});
