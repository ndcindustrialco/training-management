import prisma from './prisma';

export async function getDashboardStats() {
    const [
        employees,
        courses,
        records,
        recentRecords,
        departmentStats,
        categoryStats
    ] = await Promise.all([
        prisma.employee.count(),
        prisma.course.count(),
        prisma.trainingRecord.count(),
        prisma.trainingRecord.findMany({
            take: 5,
            orderBy: { created_at: 'desc' },
            include: {
                employee: { select: { employee_name_th: true, employee_code: true } },
                course: {
                    include: {
                        descriptions: true
                    }
                }
            }
        }),
        prisma.employee.groupBy({
            by: ['department'],
            _count: { _all: true },
        }),
        prisma.course.groupBy({
            by: ['course_category'],
            _count: { _all: true },
        })
    ]);

    return {
        count: {
            employees,
            courses,
            records
        },
        recentRecords,
        departments: departmentStats.map(d => ({
            name: d.department || 'Unknown',
            count: d._count._all
        })),
        categories: categoryStats.map(c => ({
            name: c.course_category || 'General',
            count: c._count._all
        }))
    };
}
