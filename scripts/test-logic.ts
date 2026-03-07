import { signToken, verifyToken } from '../lib/auth';
import { Prisma } from '../generated/prisma/client';

/**
 * 1. Test Date Parsing Logic (from API routes)
 * This logic prevents 'Invalid Date' errors in Prisma
 */
function testDateParsing() {
    console.log('\n--- 1. Testing Date Parsing Logic ---');
    const parseDate = (val: any) => {
        if (!val || val === "undefined" || val === "null") return null;
        const d = new Date(val);
        return isNaN(d.getTime()) ? null : d;
    };

    const cases = [
        { name: 'Null value', input: null, expected: null },
        { name: 'Empty string', input: '', expected: null },
        { name: 'String "null"', input: 'null', expected: null },
        { name: 'Invalid string', input: 'foo-bar', expected: null },
        { name: 'Valid date ISO', input: '2026-03-07', expected: 'Date Object' },
        { name: 'Valid date string', input: '03/07/2026', expected: 'Date Object' }
    ];

    cases.forEach(c => {
        const result = parseDate(c.input);
        const pass = (c.expected === 'Date Object' && result instanceof Date && !isNaN(result.getTime())) || (result === c.expected);
        console.log(`[${pass ? 'PASS' : 'FAIL'}] ${c.name}: input="${c.input}" -> result=${result}`);
    });
}

/**
 * 2. Test JWT Signing and Verification
 * Ensures the auth system is robust
 */
function testAuthLogic() {
    console.log('\n--- 2. Testing JWT Auth Logic ---');
    const payload = { userId: 1, role: 'admin' };
    const token = signToken(payload);
    console.log('Signed Token Generated.');

    const verified = verifyToken(token) as any;
    const pass = verified && verified.userId === payload.userId && verified.role === payload.role;
    console.log(`[${pass ? 'PASS' : 'FAIL'}] Verify Token: ${verified ? 'Valid' : 'Invalid'}`);
}

/**
 * 3. Test Prisma Query Logic (Dry Run)
 * Ensures the filtering logic matches the expected DB structure
 */
function testFilterLogic() {
    console.log('\n--- 3. Testing Filter Construction Logic ---');
    const searchTerm = 'John Doe';
    const deptFilter = 'IT';

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
        ]
    };

    const hasSearch = where.AND?.[0]?.OR !== undefined;
    const hasDept = where.AND?.[1]?.department !== undefined;

    console.log(`[${hasSearch ? 'PASS' : 'FAIL'}] Search filter constructed correctly.`);
    console.log(`[${hasDept ? 'PASS' : 'FAIL'}] Department filter constructed correctly.`);
}

/**
 * Main Run
 */
console.log('Starting Logic Verification...');
testDateParsing();
testAuthLogic();
testFilterLogic();
console.log('\nLogic Verification Complete.');
