"use client";

import { useState, useMemo } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

interface BulkTrainingRecordModalProps {
    isOpen: boolean;
    onClose: () => void;
    employees: any[];
    courses: any[];
    onSuccess: () => void;
}

export const BulkTrainingRecordModal: React.FC<BulkTrainingRecordModalProps> = ({
    isOpen,
    onClose,
    employees,
    courses,
    onSuccess
}) => {
    const [formData, setFormData] = useState({
        course_id: "",
        training_date: new Date().toISOString().split('T')[0],
        training_hour: "",
        training_result: "Passed",
        trainer_name: "",
        location: "",
        expire_date: "",
        note: "",
    });
    const [file, setFile] = useState<File | null>(null);
    const [selectedEmployeeIds, setSelectedEmployeeIds] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const resultOptions = [
        { label: "ผ่าน (Passed)", value: "Passed" },
        { label: "ไม่ผ่าน (Failed)", value: "Failed" },
        { label: "เข้าร่วม (Attended)", value: "Attended" },
    ];

    const filteredEmployees = useMemo(() => {
        return employees.filter(emp =>
            emp.employee_name_th?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            emp.employee_code?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [employees, searchTerm]);

    const handleToggleEmployee = (id: number) => {
        setSelectedEmployeeIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedEmployeeIds(filteredEmployees.map(emp => emp.id));
        } else {
            setSelectedEmployeeIds([]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (selectedEmployeeIds.length === 0) {
            alert("กรุณาเลือกพนักงานอย่างน้อย 1 คน");
            return;
        }
        if (!formData.course_id) {
            alert("กรุณาเลือกหลักสูตร");
            return;
        }

        const data = new FormData();

        selectedEmployeeIds.forEach(id => {
            data.append("employee_id", id.toString());
        });

        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        if (file) {
            data.append("attachment", file);
        }

        try {
            const res = await fetch("/api/training-records", {
                method: "POST",
                body: data,
            });

            if (res.ok) {
                const result = await res.json();
                alert(result.message || "บันทึกเรียบร้อย");
                setSelectedEmployeeIds([]);
                setFormData({
                    course_id: "",
                    training_date: new Date().toISOString().split('T')[0],
                    training_hour: "",
                    training_result: "Passed",
                    trainer_name: "",
                    location: "",
                    expire_date: "",
                    note: "",
                });
                setFile(null);
                onSuccess();
                onClose();
            } else {
                const err = await res.json();
                alert(err.error || "ไม่สามารถบันทึกข้อมูลได้");
            }
        } catch (error) {
            console.error("Bulk save error:", error);
            alert("เกิดข้อผิดพลาดในการเชื่อมต่อ");
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="บันทึกการอบรม (แบบกลุ่ม)"
            maxWidth="4xl"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Training Details */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg text-primary border-b pb-2">1. ข้อมูลหลักสูตรและการอบรม</h3>
                        <Select
                            label="หลักสูตร"
                            required
                            value={formData.course_id}
                            onChange={(e) => setFormData({ ...formData, course_id: e.target.value })}
                            options={[
                                { label: "--- โปรดเลือกหลักสูตร ---", value: "" },
                                ...courses.map(c => ({
                                    label: `${c.course_code} - ${c.course_name}`,
                                    value: c.id.toString()
                                }))
                            ]}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                label="วันที่อบรม"
                                type="date"
                                required
                                value={formData.training_date}
                                onChange={(e) => setFormData({ ...formData, training_date: e.target.value })}
                            />
                            <Input
                                label="จำนวนชั่วโมง"
                                type="number"
                                step="0.1"
                                value={formData.training_hour}
                                onChange={(e) => setFormData({ ...formData, training_hour: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Select
                                label="ผลการอบรม"
                                value={formData.training_result}
                                onChange={(e) => setFormData({ ...formData, training_result: e.target.value })}
                                options={resultOptions}
                            />
                            <Input
                                label="วันที่หมดอายุ (ถ้ามี)"
                                type="date"
                                value={formData.expire_date}
                                onChange={(e) => setFormData({ ...formData, expire_date: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                label="ชื่อผู้ฝึกสอน"
                                value={formData.trainer_name}
                                onChange={(e) => setFormData({ ...formData, trainer_name: e.target.value })}
                            />
                            <Input
                                label="สถานที่"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">เอกสารแนบ (เช่น ใบเช็คชื่อ)</label>
                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files?.[0] || null)}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-primary hover:file:bg-indigo-100"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">หมายเหตุ</label>
                            <textarea
                                value={formData.note}
                                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                                rows={2}
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                                placeholder="รายละเอียดเพิ่มเติม..."
                            />
                        </div>
                    </div>

                    {/* Right: Employee Selection */}
                    <div className="space-y-4 flex flex-col h-[500px]">
                        <h3 className="font-bold text-lg text-primary border-b pb-2">2. เลือกพนักงาน ({selectedEmployeeIds.length} คน)</h3>
                        <div className="flex gap-2">
                            <Input
                                placeholder="ค้นหาชื่อหรือรหัสพนักงาน..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="flex-1"
                            />
                        </div>

                        <div className="flex items-center gap-2 px-2 py-1 bg-gray-50 rounded">
                            <input
                                type="checkbox"
                                id="select_all"
                                checked={filteredEmployees.length > 0 && filteredEmployees.every(emp => selectedEmployeeIds.includes(emp.id))}
                                onChange={(e) => handleSelectAll(e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor="select_all" className="text-sm font-bold text-accent cursor-pointer">เลือกทั้งหมดที่พบ</label>
                        </div>

                        <div className="flex-1 overflow-y-auto border rounded-xl divide-y">
                            {filteredEmployees.length === 0 ? (
                                <div className="py-10 text-center text-accent italic">ไม่พบข้อมูลพนักงาน</div>
                            ) : (
                                filteredEmployees.map(emp => (
                                    <div
                                        key={emp.id}
                                        className={`flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors cursor-pointer ${selectedEmployeeIds.includes(emp.id) ? 'bg-indigo-50/50' : ''}`}
                                        onClick={() => handleToggleEmployee(emp.id)}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedEmployeeIds.includes(emp.id)}
                                            onChange={() => { }} // Handle by div click
                                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                        />
                                        <div className="flex-1">
                                            <div className="text-sm font-bold text-primary">{emp.employee_name_th}</div>
                                            <div className="text-xs text-accent">{emp.employee_code} - {emp.department}</div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                    <Button variant="secondary" type="button" onClick={onClose}>
                        ยกเลิก
                    </Button>
                    <Button type="submit" className="px-10" disabled={selectedEmployeeIds.length === 0}>
                        บันทึกการอบรม {selectedEmployeeIds.length > 0 ? `(${selectedEmployeeIds.length} คน)` : ""}
                    </Button>
                </div>
            </form>
        </Modal>
    );
};
