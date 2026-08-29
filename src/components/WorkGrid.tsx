import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "EcoSphere AI",
    desc: "A Full-stack SaaS monitoring carbon footprints using Python & Next.js.",
    size: "col-span-12 md:col-span-8", // Large featured card
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
    color: "bg-emerald-500/10 border-emerald-500/20"
  },
  {
    title: "System Metrics",
    desc: "Real-time dashboard.",
    size: "col-span-12 md:col-span-4", // Small side card
    tags: ["Redis", "WebSockets"],
    color: "bg-blue-500/10 border-blue-500/20"
  },
  {
    title: "API Gateway",
    desc: "Custom auth microservice.",
    size: "col-span-12 md:col-span-4", // Small card
    tags: ["Go", "Docker"],
    color: "bg-orange-500/10 border-orange-500/20"
  },
  {
    title: "Vault Crypto",
    desc: "A secure wallet with AES-256 encryption & multi-sig support.",
    size: "col-span-12 md:col-span-8", // Large card
    tags: ["Node.js", "Solidity"],
    color: "bg-purple-500/10 border-purple-500/20"
  }
];

export default function WorkGrid() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-[#0a0a0a]">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 italic uppercase tracking-tighter">
        Selected <span className="text-gray-500">Work</span>
      </h2>

      <div className="grid grid-cols-12 gap-4">
        {projects.map((p, i) => (
          <div 
            key={i} 
            className={`${p.size} min-h-[300px] rounded-3xl p-8 border ${p.color} flex flex-col justify-between group hover:border-white/40 transition-all duration-500`}
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-white/5 rounded-2xl">
                <Layers className="text-white w-6 h-6" />
              </div>
              <div className="flex gap-2">
                <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                <ExternalLink className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <div className="flex gap-2 mb-3">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest text-gray-400 border border-white/10 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm max-w-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}