"use client";

import { FileText, ArrowRight } from "lucide-react";

export default function Footer() {
    // CONFIGURATION: Replace these with your real links
    const MY_EMAIL = "[mx1200@gmail.com]";
    const GITHUB_URL = "https://github.com/mzunair1200-byte";
    const LINKEDIN_URL = "https://linkedin.com/in/muhammad-zunair-622349246?utm_source=share_via&utm_content=profile&utm_medium=member_android";
    const RESUME_URL = "/resume.pdf"; // Put your resume PDF in the 'public' folder and name it resume.pdf

    return (
        <footer className="bg-[#1A1A1A] text-[#DEDBD2] py-20 px-6 lg:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
                    <div className="max-w-3xl">
                        <span className="text-[#2D4F3E] font-black uppercase tracking-[0.5em] text-[10px]">
                            Ready for the next step?
                        </span>
                        <h2 className="text-6xl lg:text-[10vw] font-black uppercase tracking-tighter leading-[0.85] mt-8 italic">
                            Let&apos;s Build <br />
                            <span className="text-white">Something</span> <br />
                            Smart.
                        </h2>
                    </div>

                    {/* DYNAMIC EMAIL CIRCLE */}
                    <a
                        href={`mailto:${MY_EMAIL}`}
                        className="group relative"
                    >
                        <div className="w-40 h-40 lg:w-56 lg:h-56 bg-[#DEDBD2] rounded-full flex flex-col items-center justify-center text-[#1A1A1A] font-black uppercase text-[10px] lg:text-xs tracking-tighter hover:bg-[#2D4F3E] hover:text-white transition-all duration-700 transform hover:rotate-12 cursor-pointer text-center leading-tight px-6 shadow-2xl">
                            <span className="mb-2 italic">Connect via</span>
                            <span className="text-xl lg:text-2xl">Email</span>
                            <ArrowRight className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </a>
                </div>

                {/* SOCIAL & RESUME LINKS */}
                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                        © 2026 ZUNAIR.SYSTEMS — ALL RIGHTS RESERVED
                    </div>

                    <div className="flex gap-10 items-center">
                        <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:text-[#2D4F3E] transition-colors group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 group-hover:opacity-100"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            Github
                        </a>
                        <a
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:text-[#2D4F3E] transition-colors group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 group-hover:opacity-100"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            LinkedIn
                        </a>
                        <a
                            href={RESUME_URL}
                            target="_blank"
                            className="text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full hover:bg-[#2D4F3E] hover:text-white transition-all group"
                        >
                            <FileText size={14} className="opacity-40 group-hover:opacity-100" />
                            Resume / CV
                        </a>
                    </div>

                    <div className="text-[10px] font-mono text-gray-600 uppercase">

                    </div>
                </div>
            </div>
        </footer>
    );
}