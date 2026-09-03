"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="py-32 bg-[#DEDBD2] text-[#1A1A1A] px-6 lg:px-20 border-t border-black/10 min-w-0 w-full">
            <div className="max-w-7xl mx-auto w-full">
                {/* Back to CSS Grid for this sidebar+content split (matches the original
                    design, and Grid's default stretch is what let the sticky label work
                    correctly before). Using an explicit 1fr/3fr split instead of a
                    12-equal-column definition avoids the earlier fr-resolution issue. */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 w-full min-w-0">

                    {/* Side Label */}
                    <div className="min-w-0">
                        <div className="lg:sticky lg:top-40">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#2D4F3E] mb-4">
                                The Backstory
                            </h2>
                            <div className="w-10 h-[2px] bg-[#2D4F3E]"></div>
                        </div>
                    </div>

                    <div className="min-w-0">
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

                        {/* The Meat of the text -- also flex instead of grid, same reasoning */}
                        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 w-full min-w-0">
                            <div className="w-full md:basis-1/2 space-y-6 text-xl font-medium leading-snug text-gray-800 min-w-0">
                                <p>
                                    As a Software Engineering student, I spend my time split between low-level fundamentals in <span className="underline decoration-[#2D4F3E] decoration-2">C++</span> and building modern <span className="text-[#2D4F3E] font-bold">AI applications</span> with Python.
                                </p>
                            </div>

                            <div className="w-full md:basis-1/2 space-y-6 text-xl font-medium leading-snug text-gray-800 min-w-0">
                                <p>
                                    Based in Rawalpindi, I build things that perform as well as they look.
                                </p>
                            </div>
                        </div>

                        {/* Technical DNA Table -- kept as CSS Grid since it's only 2/4 equal
                            columns of short label+value pairs, not the deep nested case that
                            was causing trouble, but switched to the explicit track syntax
                            defensively anyway. */}
                        <div className="mt-32 border-t border-black pt-12 grid grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))] gap-8 min-w-0 w-full">
                            <div className="min-w-0">
                                <p className="text-[10px] font-black uppercase opacity-40 mb-4">Core Engine</p>
                                <p className="font-bold break-words">C++ / Python / Go</p>
                            </div>
                            <div className="min-w-0">
                                <p className="text-[10px] font-black uppercase opacity-40 mb-4">Neural/AI</p>
                                <p className="font-bold break-words">FastAPI Agents / LangChain</p>
                            </div>
                            <div className="min-w-0">
                                <p className="text-[10px] font-black uppercase opacity-40 mb-4">Frontend</p>
                                <p className="font-bold break-words">Next.js / Framer / TS</p>
                            </div>
                            <div className="min-w-0">
                                <p className="text-[10px] font-black uppercase opacity-40 mb-4">Storage</p>
                                <p className="font-bold break-words">Supabase / Redis / Postgres</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}