import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@/lib/auth';

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
        const categoryFilter = searchParams.get('cat') || 'All';
        const trainingTypeFilter = searchParams.get('trainingType') || 'All';
        const organizingAgencyFilter = searchParams.get('agency') || 'All';

        const where: any = {
            AND: [
                searchTerm ? {
                    OR: [
                        { course_name: { contains: searchTerm } },
                        { course_code: { contains: searchTerm } },
                    ]
                } : {},
                categoryFilter && categoryFilter !== 'All' ? { course_category: categoryFilter } : {},
                trainingTypeFilter && trainingTypeFilter !== 'All' ? { training_type: trainingTypeFilter } : {},
                organizingAgencyFilter && organizingAgencyFilter !== 'All' ? { organizing_agency: { contains: organizingAgencyFilter } } : {},
            ]
        };

        const [courses, total] = await Promise.all([
            prisma.course.findMany({
                where,
                skip,
                take: limit,
                orderBy: { id: 'desc' },
                include: {
                    descriptions: true,
                }
            }),
            prisma.course.count({ where }),
        ]);

        return NextResponse.json({ data: courses, total, page, limit: limit || total });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});

export const POST = auth(async (req) => {
    if (!req.auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        const data = await req.json();
        const course = await prisma.course.create({
            data: {
                course_code: data.course_code,
                course_name: data.course_name,
                course_category: data.course_category,
                training_type: data.training_type,
                organizing_agency: data.organizing_agency,
                certificate_required: data.certificate_required || false,
                ...(data.descriptions && {
                    descriptions: {
                        create: data.descriptions.map((desc: string) => ({
                            description: desc
                        }))
                    }
                })
            },
        });

        return NextResponse.json(course, { status: 201 });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
});
