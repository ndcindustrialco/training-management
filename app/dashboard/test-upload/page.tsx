"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function UploadTestPage() {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            setResult(data);
        } catch (error) {
            setResult({ error: 'Failed to upload' });
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="p-8 max-w-xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold">Supabase Upload Test</h1>
            <div className="space-y-4 border p-6 rounded-xl shadow-sm">
                <Input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files?.[0] || null)} 
                />
                <Button 
                    onClick={handleUpload} 
                    disabled={uploading || !file}
                    className="w-full"
                >
                    {uploading ? 'Uploading...' : 'Upload to Supabase'}
                </Button>
            </div>

            {result && (
                <div className={`p-4 rounded-lg ${result.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    <h2 className="font-bold">{result.success ? 'Success!' : 'Error'}</h2>
                    <pre className="text-xs overflow-auto mt-2">
                        {JSON.stringify(result, null, 2)}
                    </pre>
                    {result.url && (
                        <a 
                            href={result.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 underline text-sm mt-2 block"
                        >
                            Open Uploaded File
                        </a>
                    )}
                </div>
            )}
            
            <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <p><strong>Configured Bucket:</strong> {process.env.NEXT_PUBLIC_BUCKET || 'Traninig'}</p>
                <p><strong>Configured Folder:</strong> {process.env.NEXT_PUBLIC_FOLDER || 'Uploads'}</p>
            </div>
        </div>
    );
}
