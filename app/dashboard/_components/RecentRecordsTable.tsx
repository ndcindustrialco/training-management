import React from "react";
import { Badge } from "@/components/ui/Badge";

interface RecentRecordsTableProps {
    records: any[];
    onRecordClick?: (record: any) => void;
}

export const RecentRecordsTable: React.FC<RecentRecordsTableProps> = ({ records, onRecordClick }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-gray-50/50">
                    <tr>
                        <th className="px-6 py-4 text-xs font-semibold text-accent uppercase tracking-wider">ชื่อพนักงาน</th>
                        <th className="px-6 py-4 text-xs font-semibold text-accent uppercase tracking-wider">หลักสูตร</th>
                        <th className="px-6 py-4 text-xs font-semibold text-accent uppercase tracking-wider text-center">ผลการอบรม</th>
                        <th className="px-6 py-4 text-xs font-semibold text-accent uppercase tracking-wider text-right"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {records.map((record: any) => (
                        <tr key={record.id} className="hover:bg-gray-50/50 transition-colors group">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-semibold text-primary">{record.employee?.employee_name_th}</div>
                                <div className="text-[10px] text-accent font-medium uppercase">{record.employee?.employee_code}</div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-700 font-medium line-clamp-1">{record.course?.course_name}</div>
                                <div className="text-[10px] text-accent font-medium">{new Date(record.training_date).toLocaleDateString()}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                <Badge variant={record.training_result === 'Passed' ? 'success' : 'warning'}>
                                    {record.training_result === 'Passed' ? 'ผ่าน' : record.training_result === 'Failed' ? 'ไม่ผ่าน' : 'เข้าร่วม'}
                                </Badge>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <button
                                    onClick={() => onRecordClick?.(record)}
                                    className="text-primary hover:text-primary/80 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-end ml-auto"
                                >
                                    รายละเอียด
                                    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                    {records.length === 0 && (
                        <tr>
                            <td colSpan={4} className="px-6 py-10 text-center text-accent italic font-medium">ไม่มีกิจกรรมล่าสุด</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
