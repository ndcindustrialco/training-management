import * as XLSX from 'xlsx';

/**
 * Utility to export data to Excel
 * @param data Array of objects to export
 * @param fileName Name of the file (without extension)
 * @param sheetName Name of the sheet
 */
export const exportToExcel = (data: any[], fileName: string, sheetName: string = 'Sheet1') => {
    // Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    // Generate buffer
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
};

/**
 * Specifically format employee data for Excel
 */
export const exportEmployeesToExcel = (employees: any[]) => {
    const formattedData = employees.map(emp => ({
        'รหัสพนักงาน': emp.employee_code,
        'ชื่อ-นามสกุล (TH)': emp.employee_name_th,
        'ชื่อ-นามสกุล (EN)': emp.employee_name_en || '-',
        'เพศ': emp.gender === 'male' ? 'ชาย' : emp.gender === 'female' ? 'หญิง' : 'ไม่ระบุ',
        'ตำแหน่ง': emp.position || '-',
        'แผนก': emp.department || '-',
        'สถานที่ทำงาน': emp.work_location || '-',
        'ชื่อหัวหน้างาน': emp.supervisor_name || '-',
        'วันที่เริ่มงาน': emp.start_date ? new Date(emp.start_date).toLocaleDateString('th-TH') : '-',
        'วันที่ลาออก': emp.end_date ? new Date(emp.end_date).toLocaleDateString('th-TH') : '-',
        'สถานะ': emp.status === 'Active' ? 'ปกติ' : emp.status === 'Inactive' ? 'พักงาน' : 'พ้นสภาพ',
    }));

    exportToExcel(formattedData, `รายชื่อพนักงาน_${new Date().getTime()}`, 'พนักงาน');
};

/**
 * Specifically format course data with descriptions for Excel
 */
export const exportCoursesToExcel = (courses: any[]) => {
    const formattedData = courses.map(course => ({
        'รหัสหลักสูตร': course.course_code,
        'ชื่อหลักสูตร': course.course_name,
        'หมวดหมู่': course.course_category || '-',
        'ประเภทการอบรม': course.training_type || '-',
        'หน่วยงานที่จัด': course.organizing_agency || '-',
        'ต้องมีวุฒิบัตร': course.certificate_required ? 'ใช่' : 'ไม่ใช่',
        'รายละเอียดเนื้อหา': course.descriptions?.map((d: any) => d.description).join('\n') || '-',
    }));

    exportToExcel(formattedData, `ข้อมูลหลักสูตร_${new Date().getTime()}`, 'หลักสูตร');
};

/**
 * Specifically format training records for Excel
 */
export const exportTrainingRecordsToExcel = (records: any[]) => {
    const formattedData = records.map(rec => ({
        'ชื่อพนักงาน': rec.employee?.employee_name_th || rec.employee_id,
        'รหัสพนักงาน': rec.employee?.employee_code || '-',
        'ชื่อหลักสูตร': rec.course?.course_name || rec.course_id,
        'รหัสหลักสูตร': rec.course?.course_code || '-',
        'วันที่อบรม': rec.training_date ? new Date(rec.training_date).toLocaleDateString('th-TH') : '-',
        'จำนวนชั่วโมง': rec.training_hour || 0,
        'ผลการอบรม': rec.training_result === 'Passed' ? 'ผ่าน' : rec.training_result === 'Failed' ? 'ไม่ผ่าน' : 'เข้าร่วม',
        'วิทยากร': rec.trainer_name || '-',
        'สถานที่': rec.location || '-',
        'วันหมดอายุ': rec.expire_date ? new Date(rec.expire_date).toLocaleDateString('th-TH') : '-',
        'หมายเหตุ': rec.note || '-',
    }));

    exportToExcel(formattedData, `ประวัติการอบรม_${new Date().getTime()}`, 'รายการอบรม');
};
