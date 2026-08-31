"use client";
import { useEffect, useState } from "react";

export default function SystemConsole() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://portfoliobackend-production-0d7c.up.railway.app";

        fetch(`${apiBaseUrl}/api/system-status`)
            .then(res => res.json())
            .then(setData)
            .catch(() => setData({ status: "Offline", current_task: "Idle" }));
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-[100] hidden md:block">
            <div className="bg-[#1A1A1A] text-[#DEDBD2] p-4 rounded-xl shadow-2xl border border-white/10 w-64 font-mono text-[10px]">
                <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
                    <div className={`w-2 h-2 rounded-full ${data?.status === 'Online' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                    <span className="uppercase tracking-tighter">System Intelligence: {data?.status}</span>
                </div>
                <p className="text-gray-500 uppercase">Current_Task:</p>
                <p className="mb-2 text-emerald-400">"{data?.current_task}"</p>
                <div className="flex justify-between opacity-40 uppercase">
                    <span>ZUNAIR_v1.0.4</span>
                    <span>LAT: 33.6° N</span>
                </div>
            </div>
        </div>
    );
}