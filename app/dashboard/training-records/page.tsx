import prisma from '@/lib/prisma';
import TrainingRecordsClient from './_components/TrainingRecordsClient';
import { Metadata } from 'next';
import { Prisma } from '@/generated/prisma/client';

export const metadata: Metadata = {
    title: 'บันทึกการอบรม | Training Management System',
};

export default async function TrainingRecordsPage({
    searchParams,
}: {
    searchParams: any;
}) {
    const params = await searchParams;
    const page = parseInt(params.page || '1');
    const limit = 50;
    const skip = (page - 1) * limit;

    const searchTerm = params.search || '';
    const resultFilter = params.result || 'All';
    const sortField = params.sort || 'id';
    const sortOrder = params.dir || 'desc';

    const where: Prisma.TrainingRecordWhereInput = {
        AND: [
            searchTerm ? {
                OR: [
                    { employee: { employee_name_th: { contains: searchTerm } } },
                    { employee: { employee_code: { contains: searchTerm } } },
                    { course: { course_name: { contains: searchTerm } } },
                ]
            } : {},
            resultFilter !== 'All' ? { training_result: resultFilter } : {},
        ]
    };

    const orderBy: any = {};
    if (sortField === 'employee_name_th') {
        orderBy.employee = { employee_name_th: sortOrder };
    } else if (sortField === 'course_name') {
        orderBy.course = { course_name: sortOrder };
    } else {
        orderBy[sortField] = sortOrder;
    }

    const [records, total, employees, courses] = await Promise.all([
        prisma.trainingRecord.findMany({
            where,
            skip,
            take: limit,
            include: {
                employee: { select: { employee_name_th: true, employee_name_en: true, employee_code: true } },
                course: {
                    include: {
                        descriptions: true
                    }
                },
            },
            orderBy,
        }),
        prisma.trainingRecord.count({ where }),
        prisma.employee.findMany({
            select: { id: true, employee_name_th: true, employee_code: true },
            orderBy: { employee_name_th: 'asc' },
            take: 1000
        }),
        prisma.course.findMany({
            select: { id: true, course_name: true, course_code: true },
            orderBy: { course_name: 'asc' },
            take: 1000
        }),
    ]);

    return (
        <TrainingRecordsClient
            initialRecords={JSON.parse(JSON.stringify(records))}
            employees={JSON.parse(JSON.stringify(employees))}
            courses={JSON.parse(JSON.stringify(courses))}
            total={total}
            page={page}
            limit={limit}
            currentSearch={searchTerm}
            currentResult={resultFilter}
            currentSort={{ key: sortField, direction: sortOrder as 'asc' | 'desc' }}
        />
    );
}
