import React, { useEffect, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface TrainingRecord {
    id: number;
    training_date: string;
    training_hour: number;
    training_result: string;
    trainer_name: string;
    location: string;
    attachment: string;
    course: {
        course_name: string;
        course_code: string;
    };
}

interface EmployeeTrainingRecordsModalProps {
    employee: any;
    isOpen: boolean;
    onClose: () => void;
}

export const EmployeeTrainingRecordsModal: React.FC<EmployeeTrainingRecordsModalProps> = ({
    employee,
    isOpen,
    onClose,
}) => {
    const [records, setRecords] = useState<TrainingRecord[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen && employee) {
            const fetchRecords = async () => {
                setLoading(true);
                try {
                    const res = await fetch(`/api/training-records/employee/${employee.id}`);
                    const result = await res.json();
                    if (result.data) {
                        setRecords(result.data);
                    }
                } catch (error) {
                    console.error("Failed to fetch training records", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchRecords();
        }
    }, [isOpen, employee]);

    if (!employee) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={`ประวัติการอบรม: ${employee.employee_name_th}`}
            maxWidth="2xl"
        >
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl text-sm">
                    <div>
                        <p className="text-gray-500">รหัสพนักงาน</p>
                        <p className="font-bold">{employee.employee_code}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">แผนก/ตำแหน่ง</p>
                        <p className="font-bold">{employee.department} / {employee.position}</p>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
                    </div>
                ) : records.length === 0 ? (
                    <div className="text-center py-10 text-gray-500 italic bg-gray-25/50 border border-dashed border-gray-200 rounded-xl">
                        ไม่พบประวัติการอบรม
                    </div>
                ) : (
                    <div className="overflow-hidden border border-gray-100 rounded-xl">
                        <table className="min-w-full divide-y divide-gray-100 table-fixed">
                            <thead className="bg-gray-50/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-1/3">หลักสูตร</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">วันที่อบรม</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ชั่วโมง</th>
                                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">ผลงาน</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-50">
                                {records.map((record) => (
                                    <tr key={record.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-4 py-3">
                                            <p className="font-medium text-gray-900 truncate" title={record.course.course_name}>
                                                {record.course.course_name}
                                            </p>
                                            <p className="text-xs text-gray-500">{record.course.course_code}</p>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">
                                            {new Date(record.training_date).toLocaleDateString()}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-600">
                                            {record.training_hour} ชม.
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <Badge variant={record.training_result === 'Passed' ? 'success' : 'warning'}>
                                                {record.training_result === 'Passed' ? 'ผ่าน' : record.training_result === 'Failed' ? 'ไม่ผ่าน' : 'เข้าร่วม'}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <div className="flex justify-end">
                    <Button variant="secondary" onClick={onClose}>
                        ปิดหน้าต่าง
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
