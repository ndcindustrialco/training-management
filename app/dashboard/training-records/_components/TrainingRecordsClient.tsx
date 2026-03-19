"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Card } from "@/components/ui/Card";
import { TrainingRecordDetailsModal } from "./TrainingRecordDetailsModal";
import { BulkTrainingRecordModal } from "./BulkTrainingRecordModal";
import { ExportTrainingRecordsModal } from "./ExportTrainingRecordsModal";
import { EmployeeTrainingRecordsModal } from "../../_components/EmployeeTrainingRecordsModal";
import { exportTrainingRecordsToExcel } from "@/lib/exportUtils";
import { useRouter, useSearchParams } from "next/navigation";

interface TrainingRecordsClientProps {
    initialRecords: any[];
    employees: any[];
    courses: any[];
    total: number;
    page: number;
    limit: number;
    currentSearch: string;
    currentResult: string;
    currentStartDate: string;
    currentEndDate: string;
    currentSort: { key: string; direction: 'asc' | 'desc' };
}

export default function TrainingRecordsClient({
    initialRecords,
    employees,
    courses,
    total,
    page,
    limit,
    currentSearch,
    currentResult,
    currentStartDate,
    currentEndDate,
    currentSort
}: TrainingRecordsClientProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
    const [isExportModalOpen, setIsExportModalOpen] = useState(false);
    const [editingRecord, setEditingRecord] = useState<any>(null);
    const [selectedRecord, setSelectedRecord] = useState<any>(null);
    const [viewingEmployee, setViewingEmployee] = useState<any>(null);
    const [empSearchInModal, setEmpSearchInModal] = useState("");
    const [searchTerm, setSearchTerm] = useState(currentSearch);

    const [formData, setFormData] = useState({
        employee_id: "",
        course_id: "",
        training_date: "",
        training_hour: "",
        training_result: "",
        trainer_name: "",
        location: "",
        expire_date: "",
        note: "",
    });
    const [file, setFile] = useState<File | null>(null);

    // Update URL when filters change
    const updateFilters = (updates: Record<string, string>) => {
        const params = new URLSearchParams(searchParams.toString());
        if (!updates.page && (
            updates.search !== undefined ||
            updates.result !== undefined ||
            updates.startDate !== undefined ||
            updates.endDate !== undefined
        )) {
            params.set('page', '1');
        }
        Object.entries(updates).forEach(([key, value]) => {
            if (value && value !== 'All') params.set(key, value);
            else params.delete(key);
        });
        router.push(`/dashboard/training-records?${params.toString()}`);
    };

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm !== currentSearch) updateFilters({ search: searchTerm });
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const handleSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (currentSort.key === key && currentSort.direction === 'asc') direction = 'desc';
        updateFilters({ sort: key, dir: direction });
    };

    const handlePageChange = (newPage: number) => {
        updateFilters({ page: newPage.toString() });
    };

    const totalPages = Math.ceil(total / limit);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const url = editingRecord ? `/api/training-records/${editingRecord.id}` : "/api/training-records";
        const method = editingRecord ? "PUT" : "POST";
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => data.append(key, value));
        if (file) data.append("attachment", file);

        try {
            const res = await fetch(url, { method, body: data });
            if (res.ok) {
                setIsModalOpen(false);
                router.refresh();
            } else {
                const err = await res.json();
                alert(err.error || "ไม่สามารถบันทึกข้อมูลได้");
            }
        } catch (error) {
            console.error("Error saving record", error);
        }
    };

    const handleExport = () => {
        setIsExportModalOpen(true);
    };

    const handleDelete = async (id: number) => {
        if (!confirm("ลบข้อมูลการอบรมนี้?")) return;
        try {
            const res = await fetch(`/api/training-records/${id}`, { method: "DELETE" });
            if (res.ok) router.refresh();
            else alert("ไม่สามารถลบข้อมูลได้");
        } catch (error) {
            console.error("Error deleting record", error);
        }
    };

    const handleOpenModal = (rec?: any) => {
        setFile(null);
        if (rec) {
            setEditingRecord(rec);
            setFormData({
                employee_id: rec.employee_id.toString(),
                course_id: rec.course_id.toString(),
                training_date: rec.training_date ? new Date(rec.training_date).toISOString().split('T')[0] : "",
                training_hour: rec.training_hour ? rec.training_hour.toString() : "",
                training_result: rec.training_result || "",
                trainer_name: rec.trainer_name || "",
                location: rec.location || "",
                expire_date: rec.expire_date ? new Date(rec.expire_date).toISOString().split('T')[0] : "",
                note: rec.note || "",
            });
        } else {
            setEditingRecord(null);
            setFormData({
                employee_id: "",
                course_id: "",
                training_date: new Date().toISOString().split('T')[0],
                training_hour: "",
                training_result: "Passed",
                trainer_name: "",
                location: "",
                expire_date: "",
                note: "",
            });
        }
        setEmpSearchInModal("");
        setIsModalOpen(true);
    };

    const translateResult = (result: string) => {
        switch (result) {
            case 'Passed': return { text: 'ผ่าน', variant: 'success' as const };
            case 'Failed': return { text: 'ไม่ผ่าน', variant: 'danger' as const };
            case 'Attended': return { text: 'เข้าร่วม', variant: 'info' as const };
            default: return { text: result || '-', variant: 'neutral' as const };
        }
    };

    return (
        <div className="space-y-2 animate-in fade-in duration-500 sm:p-0 p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-primary">บันทึกการอบรม</h1>
                    <p className="text-accent text-sm">ทั้งหมด {total} รายการ (หน้า {page}/{totalPages})</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => setIsBulkModalOpen(true)}>บันทึกกลุ่ม</Button>
                    <Button variant="secondary" onClick={handleExport} className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                        Export Excel
                    </Button>
                    <Button onClick={() => handleOpenModal()}>เพิ่มบันทึกใหม่</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-white p-4 rounded-xl shadow-sm border border-secondary text-slate-800">
                <div className="md:col-span-1">
                    <Input placeholder="ค้นหา..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-accent whitespace-nowrap">จาก:</span>
                    <Input type="date" value={currentStartDate} onChange={(e) => updateFilters({ startDate: e.target.value })} className="h-9 py-1 text-sm" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-accent whitespace-nowrap">ถึง:</span>
                    <Input type="date" value={currentEndDate} onChange={(e) => updateFilters({ endDate: e.target.value })} className="h-9 py-1 text-sm" />
                </div>
                <Select
                    value={currentResult}
                    onChange={(e) => updateFilters({ result: e.target.value })}
                    options={[
                        { label: "ทุกสถานะ", value: "All" },
                        { label: "ผ่าน", value: "Passed" },
                        { label: "ไม่ผ่าน", value: "Failed" },
                        { label: "เข้าร่วม", value: "Attended" }
                    ]}
                />
            </div>

            <Card className="p-0 overflow-hidden text-slate-800">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-100">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase cursor-pointer" onClick={() => handleSort('employee_name_th')}>พนักงาน {currentSort.key === 'employee_name_th' && (currentSort.direction === 'asc' ? '↑' : '↓')}</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase cursor-pointer" onClick={() => handleSort('course_name')}>หลักสูตร {currentSort.key === 'course_name' && (currentSort.direction === 'asc' ? '↑' : '↓')}</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase w-40 cursor-pointer" onClick={() => handleSort('training_date')}>วันที่ {currentSort.key === 'training_date' && (currentSort.direction === 'asc' ? '↑' : '↓')}</th>
                                <th className="px-6 py-4 text-center text-xs font-semibold uppercase">ผลลัพธ์</th>
                                <th className="px-6 py-4 text-right">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-50">
                            {initialRecords.map((rec) => {
                                const result = translateResult(rec.training_result);
                                return (
                                    <tr key={rec.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => { setViewingEmployee({ ...rec.employee, id: rec.employee_id }); setIsHistoryModalOpen(true); }}
                                                className="text-left hover:text-primary transition-colors group/emp"
                                            >
                                                <div className="text-sm font-semibold group-hover/emp:underline">{rec.employee?.employee_name_th}</div>
                                                <div className="text-xs text-accent">{rec.employee?.employee_code}</div>
                                            </button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium">{rec.course?.course_name}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm">{new Date(rec.training_date).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 text-center"><Badge variant={result.variant}>{result.text}</Badge></td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-1">
                                                <Button size="sm" variant="ghost" onClick={() => { setSelectedRecord(rec); setIsViewModalOpen(true); }}>ดู</Button>
                                                <Button size="sm" variant="ghost" onClick={() => handleOpenModal(rec)}>แก้</Button>
                                                <Button size="sm" variant="ghost" className="text-red-500" onClick={() => handleDelete(rec.id)}>ลบ</Button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 bg-gray-50 flex items-center justify-between border-t border-gray-100">
                    <p className="text-sm text-accent">แสดง {initialRecords.length}/{total} รายการ</p>
                    <div className="flex gap-2">
                        <Button variant="secondary" size="sm" disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>ก่อนหน้า</Button>
                        <div className="flex items-center px-4 text-sm font-medium">{page} / {totalPages}</div>
                        <Button variant="secondary" size="sm" disabled={page >= totalPages} onClick={() => handlePageChange(page + 1)}>ถัดไป</Button>
                    </div>
                </div>
            </Card>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingRecord ? "แก้ไข" : "เพิ่ม"} maxWidth="2xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Input placeholder="ค้นพนักงาน..." value={empSearchInModal} onChange={e => setEmpSearchInModal(e.target.value)} />
                            <Select label="พนักงาน" name="employee_id" value={formData.employee_id} onChange={e => setFormData({ ...formData, employee_id: e.target.value })} options={[{ label: "เลือก", value: "" }, ...employees
                                .filter(e => e.employee_name_th.includes(empSearchInModal) || e.employee_code.includes(empSearchInModal))
                                .map(e => ({ label: `${e.employee_code} - ${e.employee_name_th}`, value: e.id.toString() }))]} />
                        </div>
                        <Select label="หลักสูตร" name="course_id" value={formData.course_id} onChange={e => setFormData({ ...formData, course_id: e.target.value })} options={[{ label: "เลือก", value: "" }, ...courses.map(c => ({ label: c.course_name, value: c.id.toString() }))]} />
                        <Input label="วันที่" name="training_date" type="date" value={formData.training_date} onChange={e => setFormData({ ...formData, training_date: e.target.value })} />
                        <Input label="ชั่วโมง" name="training_hour" type="number" step="0.1" value={formData.training_hour} onChange={e => setFormData({ ...formData, training_hour: e.target.value })} />
                        <Select label="ผล" name="training_result" value={formData.training_result} onChange={e => setFormData({ ...formData, training_result: e.target.value })} options={[{ label: "ผ่าน", value: "Passed" }, { label: "ไม่ผ่าน", value: "Failed" }, { label: "เข้าร่วม", value: "Attended" }]} />
                        <Input label="ผู้สอน" name="trainer_name" value={formData.trainer_name} onChange={e => setFormData({ ...formData, trainer_name: e.target.value })} />
                        <Input label="สถานที่" name="location" value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} />
                        <Input label="หมดอายุ" name="expire_date" type="date" value={formData.expire_date} onChange={e => setFormData({ ...formData, expire_date: e.target.value })} />
                        <div className="col-span-2 space-y-1">
                            <label className="block text-sm font-medium text-gray-700">เอกสารแนบ</label>
                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files?.[0] || null)}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-primary hover:file:bg-indigo-100"
                            />
                            {editingRecord?.attachment && !file && (
                                <p className="text-xs text-accent mt-1 italic">มีไฟล์แนบเดิมอยู่แล้ว (เลือกใหม่เพื่อเปลี่ยน)</p>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-4 border-t">
                        <Button variant="secondary" onClick={() => setIsModalOpen(false)}>ยกเลิก</Button>
                        <Button type="submit">บันทึก</Button>
                    </div>
                </form>
            </Modal>

            <TrainingRecordDetailsModal
                isOpen={isViewModalOpen}
                onClose={() => setIsViewModalOpen(false)}
                record={selectedRecord}
                onViewHistory={(emp) => {
                    setViewingEmployee(emp);
                    setIsHistoryModalOpen(true);
                }}
            />
            <EmployeeTrainingRecordsModal
                isOpen={isHistoryModalOpen}
                onClose={() => setIsHistoryModalOpen(false)}
                employee={viewingEmployee}
            />
            <BulkTrainingRecordModal isOpen={isBulkModalOpen} onClose={() => setIsBulkModalOpen(false)} employees={employees} courses={courses} onSuccess={() => router.refresh()} />
            <ExportTrainingRecordsModal isOpen={isExportModalOpen} onClose={() => setIsExportModalOpen(false)} employees={employees} courses={courses} />
        </div>
    );
}
