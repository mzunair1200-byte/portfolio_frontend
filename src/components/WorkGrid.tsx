"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Cpu, Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function WorkGrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Tracks which single card is "opened" on tap (mobile). null = none opened.
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
          {projects.map((project: any, i: number) => {
            const isOpen = expandedIndex === i;
            const hasLink = Boolean(project.image_url);

            return (
              <motion.div
                key={i}
                layout
                onClick={() => setExpandedIndex(isOpen ? null : i)}
                // Card itself is no longer a link — it only toggles the reveal.
                // This is what makes tap-to-reveal possible instead of instantly navigating.
                className={`relative group cursor-pointer border border-black/5 p-8 flex flex-col justify-start
                  min-h-[350px] md:min-h-[300px]
                  transition-all duration-700 ease-in-out overflow-hidden
                  ${isOpen ? "bg-[#2D4F3E] min-h-[480px]" : "bg-white/30"}
                  lg:hover:bg-[#2D4F3E] lg:hover:min-h-[550px]
                `}
              >
                {/* Number and Icon — color now driven by isOpen OR desktop hover, together */}
                <div className="flex justify-between items-center mb-10">
                  <span className={`text-[10px] font-mono font-bold transition-colors ${isOpen ? "text-white/50" : "opacity-30"} lg:group-hover:text-white/50`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={`transition-colors ${isOpen ? "text-white" : "text-[#2D4F3E]"} lg:group-hover:text-white`}>
                    {project.tech?.toLowerCase().includes('python') ? <Bot size={18} /> : <Cpu size={18} />}
                  </div>
                </div>

                {/* Title */}
                <div className="relative z-10">
                  <p className={`text-[9px] font-black uppercase tracking-[0.2em] mb-2 transition-colors ${isOpen ? "text-white/60" : "opacity-40"} lg:group-hover:text-white/60`}>
                    {Array.isArray(project.tags) ? project.tags[0] : project.type}
                  </p>
                  <h3 className={`text-3xl md:text-4xl font-black uppercase leading-[0.9] tracking-tighter transition-all ${isOpen ? "text-white italic" : ""} lg:group-hover:text-white lg:group-hover:italic`}>
                    {project.title}
                  </h3>
                </div>

                {/* Content Reveal — shows when isOpen (tap, any screen size) OR on real desktop hover */}
                <div
                  className={`mt-auto pt-8 transition-all duration-700
                    ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                    lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                  `}
                >
                  <p className={`text-sm font-medium leading-relaxed mb-6 ${isOpen ? "text-white/80" : "text-black"} lg:group-hover:text-white/80`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags?.slice(0, 3).map((tag: string) => (
                      <span
                        key={tag}
                        className={`text-[8px] font-black uppercase border px-2 py-1 transition-colors ${
                          isOpen ? "border-white/20 text-white/50" : "border-black/20 text-black/50"
                        } lg:group-hover:border-white/20 lg:group-hover:text-white/50`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Explicit CTA — this is the ONLY thing that navigates to GitHub now.
                      stopPropagation is critical: without it, clicking the arrow would
                      also bubble up to the card's onClick and just re-toggle the reveal. */}
                  <a
                    href={hasLink ? project.image_url : undefined}
                    target={hasLink ? "_blank" : undefined}
                    rel={hasLink ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!hasLink) e.preventDefault();
                    }}
                    className={`flex justify-between items-center border-t pt-4 transition-colors ${
                      isOpen ? "border-white/10" : "border-black/10"
                    } lg:group-hover:border-white/10 ${hasLink ? "" : "pointer-events-none opacity-50"}`}
                  >
                    <span className={`text-[9px] font-black uppercase tracking-widest transition-colors ${
                      isOpen ? "text-white/70" : "opacity-40"
                    } lg:group-hover:text-white/40`}>
                      {hasLink ? "Press to open GitHub repo" : "Repo link coming soon"}
                    </span>
                    <ArrowUpRight className={`w-5 h-5 transition-transform ${isOpen ? "text-white" : ""} lg:group-hover:text-white lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1`} />
                  </a>
                </div>

                {/* Texture Overlay */}
                <div className={`absolute inset-0 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity ${isOpen ? "opacity-10" : "opacity-5"} lg:group-hover:opacity-10`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Only Hint */}
      <div className="mt-10 lg:hidden text-center">
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-30 italic">Tap a card to see details, tap the arrow to open its repo</p>
      </div>
    </section>
  );
}
