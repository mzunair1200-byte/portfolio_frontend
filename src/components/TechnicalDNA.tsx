"use client";
import { motion } from "framer-motion";

const pillars = [
    {
        title: "Intelligent Agents",
        desc: "Designing autonomous Python-based workflows and agents that handle logic, reasoning, and context to solve complex problems.",
        index: "01"
    },
    {
        title: "Core Fundamentals",
        desc: "Writing clean, memory-conscious code in C++ with a strong focus on data structures, efficiency, and algorithmic speed.",
        index: "02"
    },
    {
        title: "Interactive Web",
        desc: "Bridging complex backends with modern React and CSS interfaces to turn heavy logic into smooth, responsive user experiences.",
        index: "03"
    }
];

export default function TechnicalDNA() {
    return (
        <section className="py-32 bg-[#DEDBD2] text-[#1A1A1A] px-6 lg:px-20 border-t border-black/10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
                        Technical <br /> <span className="text-[#2D4F3E] italic font-medium">Philosophy.</span>
                    </h2>
                    <p className="max-w-xs text-sm font-medium text-gray-600 leading-relaxed uppercase italic">
                        I don&apos;t build for the sake of writing code. I build for impact, performance, and intelligent design.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y border-black/20">
                    {pillars.map((p, i) => (
                        <div key={i} className="p-12 border-b lg:border-b-0 lg:border-r border-black/10 last:border-r-0 hover:bg-[#1A1A1A] hover:text-[#DEDBD2] transition-all duration-700 group">
                            <span className="text-[10px] font-black text-[#2D4F3E] group-hover:text-white transition-colors">{p.index} //</span>
                            <h3 className="text-4xl font-black uppercase mt-6 mb-6 tracking-tight leading-none italic">{p.title}</h3>
                            <p className="text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity leading-relaxed">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}