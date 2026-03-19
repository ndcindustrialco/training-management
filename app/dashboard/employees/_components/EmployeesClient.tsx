"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Card } from "@/components/ui/Card";
import { EmployeeTrainingRecordsModal } from "../../_components/EmployeeTrainingRecordsModal";
import { ExportEmployeesModal } from "./ExportEmployeesModal";
import { exportEmployeesToExcel } from "@/lib/exportUtils";
import { useRouter, useSearchParams } from "next/navigation";

interface EmployeesClientProps {
    initialEmployees: any[];
    total: number;
    page: number;
    limit: number;
    departments: string[];
    currentSearch: string;
    currentDept: string;
    currentStatus: string;
    currentStartDate: string;
    currentEndDate: string;
    currentSort: { key: string; direction: 'asc' | 'desc' };
}

export default function EmployeesClient({
    initialEmployees,
    total,
    page,
    limit,
    departments,
    currentSearch,
    currentDept,
    currentStatus,
    currentStartDate,
    currentEndDate,
    currentSort
}: EmployeesClientProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isExportModalOpen, setIsExportModalOpen] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState<any>(null);
    const [viewingEmployee, setViewingEmployee] = useState<any>(null);
    const [formData, setFormData] = useState({
        employee_code: "",
        employee_name_th: "",
        employee_name_en: "",
        gender: "Male",
        position: "",
        department: "",
        work_location: "",
        supervisor_name: "",
        start_date: "",
        end_date: "",
        status: "Active",
    });

    const [searchTerm, setSearchTerm] = useState(currentSearch);

    // Update URL when filters change
    const updateFilters = (updates: Record<string, string>) => {
        const params = new URLSearchParams(searchParams.toString());

        // Reset page if filtering changes
        if (!updates.page && (
            updates.search !== undefined ||
            updates.dept !== undefined ||
            updates.status !== undefined ||
            updates.startDate !== undefined ||
            updates.endDate !== undefined
        )) {
            params.set('page', '1');
        }

        Object.entries(updates).forEach(([key, value]) => {
            if (value && value !== 'All') {
                params.set(key, value);
            } else {
                params.delete(key);
            }
        });

        router.push(`/dashboard/employees?${params.toString()}`);
    };

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm !== currentSearch) {
                updateFilters({ search: searchTerm });
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const handleSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (currentSort.key === key && currentSort.direction === 'asc') {
            direction = 'desc';
        }
        updateFilters({ sort: key, dir: direction });
    };

    const handlePageChange = (newPage: number) => {
        updateFilters({ page: newPage.toString() });
    };

    const totalPages = Math.ceil(total / limit);

    const handleExport = () => {
        setIsExportModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const url = editingEmployee ? `/api/employees/${editingEmployee.id}` : "/api/employees";
        const method = editingEmployee ? "PUT" : "POST";

        try {
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setIsFormModalOpen(false);
                router.refresh();
            } else {
                const err = await res.json();
                alert(err.error || "ไม่สามารถจัดเก็บข้อมูลพนักงานได้");
            }
        } catch (error) {
            console.error("Error saving employee", error);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("ลบข้อมูลพนักงานคนนี้?")) return;
        try {
            const res = await fetch(`/api/employees/${id}`, { method: "DELETE" });
            if (res.ok) router.refresh();
            else alert("ไม่สามารถลบข้อมูลพนักงานได้");
        } catch (error) {
            console.error("Error deleting employee", error);
        }
    };

    const handleOpenFormModal = (emp?: any) => {
        if (emp) {
            setEditingEmployee(emp);
            setFormData({
                employee_code: emp.employee_code || "",
                employee_name_th: emp.employee_name_th || "",
                employee_name_en: emp.employee_name_en || "",
                gender: emp.gender || "Male",
                position: emp.position || "",
                department: emp.department || "",
                work_location: emp.work_location || "",
                supervisor_name: emp.supervisor_name || "",
                start_date: emp.start_date ? new Date(emp.start_date).toISOString().split('T')[0] : "",
                end_date: emp.end_date ? new Date(emp.end_date).toISOString().split('T')[0] : "",
                status: emp.status || "Active",
            });
        } else {
            setEditingEmployee(null);
            setFormData({
                employee_code: "",
                employee_name_th: "",
                employee_name_en: "",
                gender: "Male",
                position: "",
                department: "",
                work_location: "",
                supervisor_name: "",
                start_date: "",
                end_date: "",
                status: "Active",
            });
        }
        setIsFormModalOpen(true);
    };

    return (
        <div className="space-y-2 animate-in fade-in duration-500 sm:p-0 p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-primary">จัดการรายชื่อพนักงาน</h1>
                    <p className="text-accent text-sm">ทั้งหมด {total} รายการ (หน้า {page}/{totalPages})</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={handleExport} className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                        Export Excel
                    </Button>
                    <Button onClick={() => handleOpenFormModal()}>เพิ่มพนักงานใหม่</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 bg-white p-4 rounded-xl shadow-sm border border-secondary text-slate-800">
                <div className="md:col-span-1">
                    <Input placeholder="ค้นหา..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="h-10" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-accent whitespace-nowrap">เริ่ม:</span>
                    <Input type="date" value={currentStartDate} onChange={(e) => updateFilters({ startDate: e.target.value })} className="h-9 py-1 text-sm" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-accent whitespace-nowrap">ถึง:</span>
                    <Input type="date" value={currentEndDate} onChange={(e) => updateFilters({ endDate: e.target.value })} className="h-9 py-1 text-sm" />
                </div>
                <Select
                    value={currentDept}
                    onChange={(e) => updateFilters({ dept: e.target.value })}
                    options={[
                        { label: "ทุกแผนก", value: "All" },
                        ...departments.map(d => ({ label: d, value: d }))
                    ]}
                />
                <Select
                    value={currentStatus}
                    onChange={(e) => updateFilters({ status: e.target.value })}
                    options={[
                        { label: "ทุกสถานะ", value: "All" },
                        { label: "ปกติ", value: "Active" },
                        { label: "พักงาน", value: "Inactive" },
                        { label: "พ้นสภาพ", value: "Resigned" }
                    ]}
                />
            </div>

            <Card className="p-0 overflow-hidden text-slate-800">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-100">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-accent uppercase cursor-pointer hover:text-primary" onClick={() => handleSort('employee_code')}>
                                    รหัส {currentSort.key === 'employee_code' && (currentSort.direction === 'asc' ? '↑' : '↓')}
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-accent uppercase cursor-pointer hover:text-primary" onClick={() => handleSort('employee_name_th')}>
                                    ชื่อ-นามสกุล {currentSort.key === 'employee_name_th' && (currentSort.direction === 'asc' ? '↑' : '↓')}
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-accent uppercase cursor-pointer hover:text-primary" onClick={() => handleSort('department')}>
                                    แผนก {currentSort.key === 'department' && (currentSort.direction === 'asc' ? '↑' : '↓')}
                                </th>
                                <th className="px-6 py-4 text-center text-xs font-semibold text-accent uppercase">สถานะ</th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-accent uppercase">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-50 text-slate-800">
                            {initialEmployees.map((emp) => (
                                <tr key={emp.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-6 py-4 text-sm font-bold text-primary">{emp.employee_code}</td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium">{emp.employee_name_th}</div>
                                        <div className="text-xs text-accent">{emp.employee_name_en}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm">{emp.department}</div>
                                        <div className="text-xs text-accent">{emp.position}</div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <Badge variant={emp.status === 'Active' ? 'success' : emp.status === 'Inactive' ? 'warning' : 'danger'}>
                                            {emp.status === 'Active' ? 'ปกติ' : emp.status === 'Inactive' ? 'พักงาน' : 'พ้นสภาพ'}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-1">
                                            <Button size="sm" variant="ghost" onClick={() => { setViewingEmployee(emp); setIsViewModalOpen(true); }}>ประวัติ</Button>
                                            <Button size="sm" variant="ghost" onClick={() => handleOpenFormModal(emp)}>แก้ไข</Button>
                                            <Button size="sm" variant="ghost" className="text-red-500" onClick={() => handleDelete(emp.id)}>ลบ</Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="px-6 py-4 bg-gray-50 flex items-center justify-between border-t border-gray-100">
                    <p className="text-sm text-accent">แสดง {initialEmployees.length}/{total} รายการ</p>
                    <div className="flex gap-2">
                        <Button variant="secondary" size="sm" disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>ก่อนหน้า</Button>
                        <div className="flex items-center px-4 text-sm font-medium">{page} / {totalPages}</div>
                        <Button variant="secondary" size="sm" disabled={page >= totalPages} onClick={() => handlePageChange(page + 1)}>ถัดไป</Button>
                    </div>
                </div>
            </Card>

            <Modal isOpen={isFormModalOpen} onClose={() => setIsFormModalOpen(false)} title={editingEmployee ? "แก้ไข" : "เพิ่ม"} maxWidth="2xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="รหัสพนักงาน" name="employee_code" required value={formData.employee_code} onChange={(e) => setFormData({ ...formData, employee_code: e.target.value })} />

                        <Input label="ชื่อ-นามสกุล (ไทย)" name="employee_name_th" required value={formData.employee_name_th} onChange={(e) => setFormData({ ...formData, employee_name_th: e.target.value })} />
                        <Input label="ชื่อ-นามสกุล (English)" name="employee_name_en" value={formData.employee_name_en} onChange={(e) => setFormData({ ...formData, employee_name_en: e.target.value })} />


                        <Select
                            label="เพศ"
                            name="gender"
                            value={formData.gender}
                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            options={[{ label: "ชาย", value: "male" }, { label: "หญิง", value: "female" }, { label: "ไม่ระบุ", value: "other" }]}
                        />
                        <Input label="ตำแหน่ง" name="position" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} />
                        <Input label="แผนก/ฝ่าย" name="department" value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })} />
                        <Input label="สถานที่ทำงาน" name="work_location" value={formData.work_location} onChange={(e) => setFormData({ ...formData, work_location: e.target.value })} />
                        <Input label="ชื่อหัวหน้างาน" name="supervisor_name" value={formData.supervisor_name} onChange={(e) => setFormData({ ...formData, supervisor_name: e.target.value })} />

                        <div className="grid grid-cols-2 gap-2">
                            <Input label="วันที่เริ่มงาน" name="start_date" type="date" value={formData.start_date} onChange={(e) => setFormData({ ...formData, start_date: e.target.value })} />
                            <Input label="วันที่ลาออก (ถ้ามี)" name="end_date" type="date" value={formData.end_date} onChange={(e) => setFormData({ ...formData, end_date: e.target.value })} />
                        </div>

                        <Select
                            label="สถานะพนักงาน"
                            name="status"
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            options={[
                                { label: "ปกติ (Active)", value: "Active" },
                                { label: "พักงาน (Inactive)", value: "Inactive" },
                                { label: "พ้นสภาพ (Resigned)", value: "Resigned" }
                            ]}
                        />
                    </div>
                    <div className="flex justify-end gap-2 pt-6 border-t mt-4">
                        <Button variant="secondary" onClick={() => setIsFormModalOpen(false)}>ยกเลิก</Button>
                        <Button type="submit">บันทึกข้อมูล</Button>
                    </div>
                </form>
            </Modal>

            <EmployeeTrainingRecordsModal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} employee={viewingEmployee} />
            <ExportEmployeesModal isOpen={isExportModalOpen} onClose={() => setIsExportModalOpen(false)} departments={departments} />
        </div>
    );
}
