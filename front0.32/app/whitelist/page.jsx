"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { signOut } from "next-auth/react";


export default function Whitelist() {

    const handleLogout = () => {
        signOut();
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

            <Label className="mt-10 mb-8">Oops, it's seem that you are not whitelisted for now.</Label>

            <Button onClick={handleLogout} variant="outline">Log Out</Button>
        </div>
        </div>
    )
}
