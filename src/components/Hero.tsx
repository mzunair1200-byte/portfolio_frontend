import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#0a0a0a] text-[#ededed] px-6 lg:px-20 overflow-hidden">
      {/* Small Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 mb-6"
      >
        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400">
          Available for New Projects
        </span>
      </motion.div>

      {/* Massive Editorial Typography */}
      <div className="relative">
        <motion.h1 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-7xl md:text-[10rem] font-bold leading-[0.85] tracking-tighter uppercase italic"
        >
          Architecting <br />
          <span className="text-transparent border-t-2 border-b-2 border-white/20 hover:text-white transition-all duration-500">
            Systems
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-xl md:text-2xl max-w-xl text-gray-400 font-light"
        >
          Full-Stack Developer focusing on **high-performance backends** 
          and **immersive frontend experiences**. 
        </motion.p>
      </div>

      {/* Dynamic Counter - The Backend Hint */}
      <div className="mt-20 border-t border-white/10 pt-8 flex gap-20">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Projects Shipped</p>
          <p className="text-4xl font-mono">12+</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Years of Code</p>
          <p className="text-4xl font-mono">05</p>
        </div>
      </div>
    </section>
  );
}