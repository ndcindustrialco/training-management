import prisma from '@/lib/prisma';
import CoursesClient from './_components/CoursesClient';
import { Metadata } from 'next';
import { Prisma } from '@/generated/prisma/client';

export const metadata: Metadata = {
    title: 'หลักสูตร | Training Management System',
};

export default async function CoursesPage({
    searchParams,
}: {
    searchParams: any;
}) {
    const params = await searchParams;
    const page = parseInt(params.page || '1');
    const limit = 50;
    const skip = (page - 1) * limit;

    const searchTerm = params.search || '';
    const categoryFilter = params.cat || 'All';
    const sortField = params.sort || 'id';
    const sortOrder = params.dir || 'desc';

    const where: Prisma.CourseWhereInput = {
        AND: [
            searchTerm ? {
                OR: [
                    { course_name: { contains: searchTerm } },
                    { course_code: { contains: searchTerm } },
                ]
            } : {},
            categoryFilter !== 'All' ? { course_category: categoryFilter } : {},
        ]
    };

    const [courses, total, categoriesList] = await Promise.all([
        prisma.course.findMany({
            where,
            skip,
            take: limit,
            orderBy: { [sortField]: sortOrder },
        }),
        prisma.course.count({ where }),
        prisma.course.findMany({
            select: { course_category: true },
            distinct: ['course_category'],
            where: { course_category: { not: null } }
        })
    ]);

    const categories = categoriesList.map(c => c.course_category).filter(Boolean) as string[];

    return (
        <CoursesClient
            initialCourses={JSON.parse(JSON.stringify(courses))}
            total={total}
            page={page}
            limit={limit}
            categories={categories}
            currentSearch={searchTerm}
            currentCat={categoryFilter}
            currentSort={{ key: sortField, direction: sortOrder as 'asc' | 'desc' }}
        />
    );
}
