"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {useRouter} from 'next/navigation';

export default function AdminPage() {

    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    }
    
    return (
        <div className="grid place-items-center align-middle">
        <div className="flex flex-col place-content-center items-center justify-center min-h-screen">
            <div className="flex flex-col justify-center items-center h-full">
            <img loading="lazy" src="/logo2.png" alt="ChatCBC" className="h-40 w-40" />
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-700 sm:text-3xl">
                    ChatCBC
                </h1>
            </div>

            <Label className="mt-10 mb-8">Admin page under construction ...</Label>

            <div className="flex">
                <Button onClick={handleGoBack} variant="outline">Go Back</Button>
            </div>
        </div>
        </div>
    );
}