"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Modal } from "@/components/ui/Modal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useRouter, useSearchParams } from "next/navigation";
import { exportCoursesToExcel } from "@/lib/exportUtils";

interface CoursesClientProps {
    initialCourses: any[];
    total: number;
    page: number;
    limit: number;
    categories: string[];
    currentSearch: string;
    currentCat: string;
    currentSort: { key: string; direction: 'asc' | 'desc' };
}

export default function CoursesClient({
    initialCourses,
    total,
    page,
    limit,
    categories,
    currentSearch,
    currentCat,
    currentSort
}: CoursesClientProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCourse, setEditingCourse] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState(currentSearch);

    const [formData, setFormData] = useState({
        course_code: "",
        course_name: "",
        course_category: "",
        training_type: "Internal",
        organizing_agency: "",
        certificate_required: false,
    });

    // Update URL when filters change
    const updateFilters = (updates: Record<string, string>) => {
        const params = new URLSearchParams(searchParams.toString());
        if (!updates.page && (updates.search !== undefined || updates.cat !== undefined)) {
            params.set('page', '1');
        }
        Object.entries(updates).forEach(([key, value]) => {
            if (value && value !== 'All') params.set(key, value);
            else params.delete(key);
        });
        router.push(`/dashboard/courses?${params.toString()}`);
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
        const url = editingCourse ? `/api/courses/${editingCourse.id}` : "/api/courses";
        const method = editingCourse ? "PUT" : "POST";
        try {
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setIsModalOpen(false);
                router.refresh();
            } else {
                alert("ไม่สามารถบันทึกข้อมูลได้");
            }
        } catch (error) {
            console.error("Error saving course", error);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("ลบหลักสูตรนี้?")) return;
        try {
            const res = await fetch(`/api/courses/${id}`, { method: "DELETE" });
            if (res.ok) router.refresh();
            else alert("ไม่สามารถลบหลักสูตรได้");
        } catch (error) {
            console.error("Error deleting course", error);
        }
    };

    const handleExport = async () => {
        try {
            const params = new URLSearchParams({
                limit: 'all',
                search: currentSearch,
                cat: currentCat
            });
            const res = await fetch(`/api/courses?${params.toString()}`);
            if (res.ok) {
                const { data } = await res.json();
                exportCoursesToExcel(data);
            } else {
                alert("ไม่สามารถดึงข้อมูลสำหรับ Export ได้");
            }
        } catch (error) {
            console.error("Export error", error);
        }
    };

    const handleOpenModal = (course?: any) => {
        if (course) {
            setEditingCourse(course);
            setFormData({
                course_code: course.course_code || "",
                course_name: course.course_name || "",
                course_category: course.course_category || "",
                training_type: course.training_type || "Internal",
                organizing_agency: course.organizing_agency || "",
                certificate_required: course.certificate_required || false,
            });
        } else {
            setEditingCourse(null);
            setFormData({
                course_code: "",
                course_name: "",
                course_category: "",
                training_type: "Internal",
                organizing_agency: "",
                certificate_required: false,
            });
        }
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-primary">จัดการหลักสูตร</h1>
                    <p className="text-accent text-sm">ทั้งหมด {total} รายการ (หน้า {page}/{totalPages})</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={handleExport} className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                        Export Excel
                    </Button>
                    <Button onClick={() => handleOpenModal()}>เพิ่มหลักสูตรใหม่</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded-xl shadow-sm border border-secondary text-slate-800">
                <div className="md:col-span-2">
                    <Input placeholder="ค้นหาชื่อหรือรหัสหลักสูตร..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <Select
                    value={currentCat}
                    onChange={(e) => updateFilters({ cat: e.target.value })}
                    options={[{ label: "ทุกหมวดหมู่", value: "All" }, ...categories.map(c => ({ label: c, value: c }))]}
                />
            </div>

            <Card className="p-0 overflow-hidden text-slate-800">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-100">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase cursor-pointer" onClick={() => handleSort('course_code')}>รหัส {currentSort.key === 'course_code' && (currentSort.direction === 'asc' ? '↑' : '↓')}</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase cursor-pointer" onClick={() => handleSort('course_name')}>ชื่อหลักสูตร {currentSort.key === 'course_name' && (currentSort.direction === 'asc' ? '↑' : '↓')}</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase">หมวดหมู่</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase">ประเภทการฝึกอบรม</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase">หน่วยงานที่จัด</th>
                                <th className="px-6 py-4 text-right">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-50">
                            {initialCourses.map((course) => (
                                <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-bold">{course.course_code}</td>
                                    <td className="px-6 py-4 text-sm font-medium">{course.course_name}</td>
                                    <td className="px-6 py-4 text-sm">{course.course_category || "-"}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <Badge variant={course.training_type === 'OJT' ? 'info' : course.training_type === 'IN HOUSE' ? 'success' : 'warning'}>
                                            {course.training_type || "-"}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 text-sm">{course.organizing_agency || "-"}</td>
                                    <td className="px-6 py-4 text-right flex justify-end gap-1">
                                        <Button size="sm" variant="ghost" onClick={() => handleOpenModal(course)}>แก้ไข</Button>
                                        <Button size="sm" variant="ghost" className="text-red-500" onClick={() => handleDelete(course.id)}>ลบ</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 bg-gray-50 flex items-center justify-between border-t border-gray-100">
                    <p className="text-sm text-accent">แสดง {initialCourses.length}/{total}</p>
                    <div className="flex gap-2">
                        <Button variant="secondary" size="sm" disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>ก่อนหน้า</Button>
                        <div className="flex items-center px-4 text-sm font-medium">{page} / {totalPages}</div>
                        <Button variant="secondary" size="sm" disabled={page >= totalPages} onClick={() => handlePageChange(page + 1)}>ถัดไป</Button>
                    </div>
                </div>
            </Card>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingCourse ? "แก้ไข" : "เพิ่ม"}>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input label="รหัสหลักสูตร" value={formData.course_code} onChange={e => setFormData({ ...formData, course_code: e.target.value })} />
                    <Input label="ชื่อหลักสูตร" value={formData.course_name} onChange={e => setFormData({ ...formData, course_name: e.target.value })} />
                    <Input label="หมวดหมู่" value={formData.course_category} onChange={e => setFormData({ ...formData, course_category: e.target.value })} />
                    <Select
                        label="ประเภทการฝึกอบรม"
                        value={formData.training_type}
                        onChange={e => setFormData({ ...formData, training_type: e.target.value })}
                        options={[
                            { label: "OJT", value: "OJT" },
                            { label: "IN HOUSE", value: "IN HOUSE" },
                            { label: "OUT SITE", value: "OUT SITE" }
                        ]}
                    />
                    <Input label="หน่วยงานที่จัด" value={formData.organizing_agency} onChange={e => setFormData({ ...formData, organizing_agency: e.target.value })} />
                    <div className="flex justify-end gap-2 pt-4 border-t">
                        <Button variant="secondary" onClick={() => setIsModalOpen(false)}>ยกเลิก</Button>
                        <Button type="submit">บันทึก</Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
