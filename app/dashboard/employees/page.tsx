import prisma from '@/lib/prisma';
import EmployeesClient from './_components/EmployeesClient';
import { Metadata } from 'next';
import { Prisma } from '@/generated/prisma/client';

export const metadata: Metadata = {
    title: 'จัดการพนักงาน | Training Management System',
};

export default async function EmployeesPage({
    searchParams,
}: {
    searchParams: any;
}) {
    const params = await searchParams;
    const page = parseInt(params.page || '1');
    const limit = 50;
    const skip = (page - 1) * limit;

    const searchTerm = params.search || '';
    const deptFilter = params.dept || 'All';
    const statusFilter = params.status || 'All';
    const sortField = params.sort || 'id';
    const sortOrder = params.dir || 'desc';

    // Construct "where" clause for Prisma
    const where: Prisma.EmployeeWhereInput = {
        AND: [
            searchTerm ? {
                OR: [
                    { employee_name_th: { contains: searchTerm } },
                    { employee_name_en: { contains: searchTerm } },
                    { employee_code: { contains: searchTerm } },
                ]
            } : {},
            deptFilter !== 'All' ? { department: deptFilter } : {},
            statusFilter !== 'All' ? { status: statusFilter } : {},
        ]
    };

    // Fetch data and total count
    const [employees, total, departmentsList] = await Promise.all([
        prisma.employee.findMany({
            where,
            skip,
            take: limit,
            orderBy: { [sortField]: sortOrder },
        }),
        prisma.employee.count({ where }),
        prisma.employee.findMany({
            select: { department: true },
            distinct: ['department'],
            where: { department: { not: null } }
        })
    ]);

    const departments = departmentsList.map(d => d.department).filter(Boolean) as string[];

    return (
        <EmployeesClient
            initialEmployees={JSON.parse(JSON.stringify(employees))}
            total={total}
            page={page}
            limit={limit}
            departments={departments}
            currentSearch={searchTerm}
            currentDept={deptFilter}
            currentStatus={statusFilter}
            currentSort={{ key: sortField, direction: sortOrder }}
        />
    );
}
