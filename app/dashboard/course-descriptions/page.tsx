import prisma from '@/lib/prisma';
import CourseDescriptionsClient from './_components/CourseDescriptionsClient';
import { Metadata } from 'next';
import { Prisma } from '@/generated/prisma/client';

export const metadata: Metadata = {
    title: 'รายละเอียดหลักสูตร | Training Management System',
};

export default async function CourseDescriptionsPage({
    searchParams,
}: {
    searchParams: any;
}) {
    const params = await searchParams;
    const page = parseInt(params.page || '1');
    const limit = 50;
    const skip = (page - 1) * limit;

    const searchTerm = params.search || '';
    const sortField = params.sort || 'id';
    const sortOrder = params.dir || 'desc';

    const where: Prisma.CourseDescriptionWhereInput = {
        AND: [
            searchTerm ? {
                OR: [
                    { description: { contains: searchTerm } },
                    { course: { course_name: { contains: searchTerm } } },
                    { course: { course_code: { contains: searchTerm } } },
                ]
            } : {},
        ]
    };

    const orderBy: any = {};
    if (sortField === 'course_name') {
        orderBy.course = { course_name: sortOrder };
    } else {
        orderBy[sortField] = sortOrder;
    }

    const [descriptions, courses, total] = await Promise.all([
        prisma.courseDescription.findMany({
            where,
            skip,
            take: limit,
            include: {
                course: { select: { course_name: true, course_code: true } },
            },
            orderBy,
        }),
        prisma.course.findMany({
            select: { id: true, course_name: true, course_code: true },
            orderBy: { course_name: 'asc' },
            take: 1000
        }),
        prisma.courseDescription.count({ where }),
    ]);

    return (
        <CourseDescriptionsClient
            initialDescriptions={JSON.parse(JSON.stringify(descriptions))}
            courses={JSON.parse(JSON.stringify(courses))}
            total={total}
            page={page}
            limit={limit}
            currentSearch={searchTerm}
            currentSort={{ key: sortField, direction: sortOrder as 'asc' | 'desc' }}
        />
    );
}
