
import { uploadFile } from '../lib/storage';
import dotenv from 'dotenv';
import { Blob } from 'buffer';

console.log('Script started');
dotenv.config();
console.log('Dotenv configured');


async function testUpload() {
    console.log('Starting test upload...');
    console.log('Bucket:', process.env.BUCKET);
    console.log('Folder:', process.env.Folder);
    
    const content = 'Hello Supabase! This is a test file.';
    const blob = new Blob([content], { type: 'text/plain' });
    const fileName = `test-${Date.now()}.txt`;
    
    try {
        const url = await uploadFile(blob as any, fileName);
        console.log('Upload successful!');
        console.log('URL:', url);
    } catch (error) {
        console.error('Upload failed:', error);
    }
}

testUpload();
