"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="py-32 bg-[#DEDBD2] text-[#1A1A1A] px-6 lg:px-20 border-t border-black/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-12 gap-10 min-w-0">

                    {/* Side Label */}
                    <div className="col-span-12 lg:col-span-3 min-w-0">
                        <div className="sticky top-40">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#2D4F3E] mb-4">
                                The Backstory
                            </h2>
                            <div className="w-10 h-[2px] bg-[#2D4F3E]"></div>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="col-span-12 lg:col-span-9 min-w-0">
                        {/* The Hook - Huge and Bold */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-6xl font-black leading-[0.9] tracking-tighter uppercase mb-16 italic break-words"
                        >
                            Building software is easy. <br />
                            <span className="text-[#2D4F3E]">Building software that is resilient, and actually smart?</span> <br />
                            That takes work.
                        </motion.p>

                        {/* The Meat of the text */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 min-w-0">
                            <div className="space-y-6 text-xl font-medium leading-snug text-gray-800 min-w-0">
                                <p>
                                    As a Software Engineering student, I spend my time split between low-level fundamentals in <span className="underline decoration-[#2D4F3E] decoration-2">C++</span> and building modern <span className="text-[#2D4F3E] font-bold">AI applications</span> with Python.
                                </p>
                                <p className="text-sm uppercase tracking-widest font-black opacity-40">

                                </p>
                            </div>

                            <div className="space-y-6 text-xl font-medium leading-snug text-gray-800 min-w-0">
                                <p>
                                    Based in Rawalpindi, I build things that perform as well as they look.
                                </p>
                            </div>
                        </div>

                        {/* Technical DNA Table */}
                        <div className="mt-32 border-t border-black pt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 min-w-0">
                            <div>
                                <p className="text-[10px] font-black uppercase opacity-40 mb-4">Core Engine</p>
                                <p className="font-bold">C++ / Python / Go</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase opacity-40 mb-4">Neural/AI</p>
                                <p className="font-bold">FastAPI Agents / LangChain</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase opacity-40 mb-4">Frontend</p>
                                <p className="font-bold">Next.js / Framer / TS</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase opacity-40 mb-4">Storage</p>
                                <p className="font-bold">Supabase / Redis / Postgres</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}