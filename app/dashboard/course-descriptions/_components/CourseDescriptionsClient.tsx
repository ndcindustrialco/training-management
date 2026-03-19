"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Modal } from "@/components/ui/Modal";
import { Card } from "@/components/ui/Card";
import { useRouter, useSearchParams } from "next/navigation";

interface CourseDescriptionsClientProps {
    initialDescriptions: any[];
    courses: any[];
    total: number;
    page: number;
    limit: number;
    currentSearch: string;
    currentSort: { key: string; direction: 'asc' | 'desc' };
}

export default function CourseDescriptionsClient({
    initialDescriptions,
    courses,
    total,
    page,
    limit,
    currentSearch,
    currentSort
}: CourseDescriptionsClientProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingDesc, setEditingDesc] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState(currentSearch);
    const [formData, setFormData] = useState({
        course_id: "",
        description: "",
    });

    const updateFilters = (updates: Record<string, string>) => {
        const params = new URLSearchParams(searchParams.toString());
        if (!updates.page && updates.search !== undefined) params.set('page', '1');
        Object.entries(updates).forEach(([key, value]) => {
            if (value && value !== 'All') params.set(key, value);
            else params.delete(key);
        });
        router.push(`/dashboard/course-descriptions?${params.toString()}`);
    };

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
        const url = editingDesc ? `/api/course-descriptions/${editingDesc.id}` : "/api/course-descriptions";
        const method = editingDesc ? "PUT" : "POST";
        try {
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    course_id: parseInt(formData.course_id),
                    description: formData.description
                }),
            });
            if (res.ok) {
                setIsModalOpen(false);
                router.refresh();
            } else {
                alert("ไม่สามารถบันทึกข้อมูลได้");
            }
        } catch (error) {
            console.error("Error saving description", error);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("ลบรายละเอียดนี้?")) return;
        try {
            const res = await fetch(`/api/course-descriptions/${id}`, { method: "DELETE" });
            if (res.ok) router.refresh();
            else alert("ไม่สามารถลบรายละเอียดได้");
        } catch (error) {
            console.error("Error deleting description", error);
        }
    };

    const handleOpenModal = (desc?: any) => {
        if (desc) {
            setEditingDesc(desc);
            setFormData({ course_id: desc.course_id.toString(), description: desc.description || "" });
        } else {
            setEditingDesc(null);
            setFormData({ course_id: "", description: "" });
        }
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-2 animate-in fade-in duration-500 sm:p-0 p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-primary">รายละเอียดหลักสูตร</h1>
                    <p className="text-accent text-sm">ทั้งหมด {total} รายการ (หน้า {page}/{totalPages})</p>
                </div>
                <div className="flex gap-2">
                    <Button onClick={() => handleOpenModal()}>เพิ่มรายละเอียดใหม่</Button>
                </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-secondary text-slate-800">
                <Input placeholder="ค้นหาเนื้อหา หรือหลักสูตร..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>

            <Card className="p-0 overflow-hidden text-slate-800">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-100 table-fixed">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase cursor-pointer w-64" onClick={() => handleSort('course_name')}>หลักสูตร {currentSort.key === 'course_name' && (currentSort.direction === 'asc' ? '↑' : '↓')}</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase cursor-pointer" onClick={() => handleSort('description')}>รายละเอียด</th>
                                <th className="px-6 py-4 text-right">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-50">
                            {initialDescriptions.map((desc) => (
                                <tr key={desc.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-bold text-primary">{desc.course?.course_name}</div>
                                        <div className="text-xs text-accent">{desc.course?.course_code}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-pre-wrap break-word" title={desc.description}>{desc.description}</td>
                                    <td className="px-6 py-4 text-right flex justify-end gap-1">
                                        <Button size="sm" variant="ghost" onClick={() => handleOpenModal(desc)}>แก้ไข</Button>
                                        <Button size="sm" variant="ghost" className="text-red-500" onClick={() => handleDelete(desc.id)}>ลบ</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 bg-gray-50 flex items-center justify-between border-t border-gray-100">
                    <p className="text-sm text-accent">แสดง {initialDescriptions.length}/{total} รายการ</p>
                    <div className="flex gap-2">
                        <Button variant="secondary" size="sm" disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>ก่อนหน้า</Button>
                        <div className="flex items-center px-4 text-sm font-medium">{page} / {totalPages}</div>
                        <Button variant="secondary" size="sm" disabled={page >= totalPages} onClick={() => handlePageChange(page + 1)}>ถัดไป</Button>
                    </div>
                </div>
            </Card>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingDesc ? "แก้ไข" : "เพิ่ม"}>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Select label="หลักสูตร" value={formData.course_id} onChange={e => setFormData({ ...formData, course_id: e.target.value })} options={[{ label: "เลือกหลักสูตร", value: "" }, ...courses.map(c => ({ label: c.course_name, value: c.id.toString() }))]} />
                    <div>
                        <label className="text-sm">รายละเอียด</label>
                        <textarea value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} rows={5} className="block w-full border rounded mt-1 p-2" />
                    </div>
                    <div className="flex justify-end gap-2 pt-4 border-t">
                        <Button variant="secondary" onClick={() => setIsModalOpen(false)}>ยกเลิก</Button>
                        <Button type="submit">บันทึก</Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
