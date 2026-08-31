"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Cpu, Bot, Zap, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkGrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://portfoliobackend-production-0d7c.up.railway.app";

    fetch(`${apiBaseUrl}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("FastAPI Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="py-20 text-center font-mono opacity-40">SYNCING_LAB_DATA...</div>;

  return (
    <section className="py-24 bg-[#DEDBD2] text-[#1A1A1A] px-6 lg:px-20 border-t border-black/5">
      <div className="max-w-7xl mx-auto">

        {/* Responsive Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-black pb-6 gap-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Projects<span className="text-[#2D4F3E]">.</span></h2>
          <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.3em]">AI Agents & Systems Engineering</p>
        </div>

        {/* The Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((project: any, i: number) => (
            <motion.a
              key={i}
              href={project.image_url || "#"}
              target="_blank"
              layout
              className="relative group bg-white/30 border border-black/5 p-8 flex flex-col justify-start min-h-[350px] md:min-h-[300px] lg:hover:min-h-[550px] transition-all duration-700 ease-in-out hover:bg-[#2D4F3E] active:bg-[#2D4F3E] cursor-pointer overflow-hidden"
            >
              {/* Number and Icon */}
              <div className="flex justify-between items-center mb-10">
                <span className="text-[10px] font-mono font-bold opacity-30 group-hover:text-white/50 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="text-[#2D4F3E] group-hover:text-white transition-colors">
                  {project.tech?.toLowerCase().includes('python') ? <Bot size={18} /> : <Cpu size={18} />}
                </div>
              </div>

              {/* Title - Clean on Mobile, Italics on Desktop Hover */}
              <div className="relative z-10">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-2 opacity-40 group-hover:text-white/60">
                  {Array.isArray(project.tags) ? project.tags[0] : project.type}
                </p>
                <h3 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] tracking-tighter group-hover:text-white transition-all group-hover:italic">
                  {project.title}
                </h3>
              </div>

              {/* Content Reveal: On mobile, we keep it visible or subtly hidden */}
              <div className="mt-auto opacity-0 lg:group-hover:opacity-100 lg:translate-y-10 lg:group-hover:translate-y-0 transition-all duration-700 pt-8">
                <p className="text-sm font-medium text-black lg:group-hover:text-white/80 leading-relaxed mb-6 block lg:hidden group-hover:block">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags?.slice(0, 3).map((tag: string) => (
                    <span key={tag} className="text-[8px] font-black uppercase border border-black/20 group-hover:border-white/20 text-black/50 group-hover:text-white/50 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center border-t border-black/10 group-hover:border-white/10 pt-4">
                  <span className="text-[9px] font-black uppercase tracking-widest opacity-40 group-hover:text-white/40 group-hover:opacity-100">
                    Source Code
                  </span>
                  <ArrowUpRight className="w-5 h-5 group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

              {/* Texture Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-5 group-hover:opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile Only Hint */}
      <div className="mt-10 lg:hidden text-center">
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-30 italic">Tap cards to expand details</p>
      </div>
    </section>
  );
}