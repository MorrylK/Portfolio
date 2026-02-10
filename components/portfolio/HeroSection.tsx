import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
}

export default function HeroSection({ onExplore }: HeroSectionProps) {
  // Generate random lines on client-side to avoid hydration mismatch
  const [lines, setLines] = useState<{ id: number; left: string; color: string; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Generate random lines on client-side
      const colors = [
        'from-transparent via-blue-500 to-transparent',
        'from-transparent via-red-500 to-transparent',
        'from-transparent via-yellow-500 to-transparent',
        'from-transparent via-emerald-500 to-transparent',
        'from-transparent via-purple-500 to-transparent'
      ];

      const newLines = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: 3 + Math.random() * 5, // Random duration between 3s and 8s
        delay: Math.random() * 5 // Random delay
      }));
      setLines(newLines);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950" id="home">
      {/* Animated Light Lines Background (Vertical Rain) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Use a simpler animation prop for continuous falling */}
        {lines.map((line) => (
          <motion.div
            key={`line-${line.id}`}
            className={`absolute -top-[30vh] w-[1px] h-[30vh] bg-gradient-to-b ${line.color} opacity-60`}
            style={{ left: line.left }}
            animate={{ y: '130vh' }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              ease: "linear",
              delay: line.delay,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-slate-400 text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Creative Developer & Artist
          </motion.p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight relative inline-block">
            <span
              className="relative z-10"
              style={{
                WebkitTextStroke: '2px #64748b',
                textShadow: '-2px 2px 0 #ffffffea, -4px 4px 0 #ffffffb0, -6px 6px 0 #ffffff90'
              }}
            >
              Morryl Kouemo
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            />
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Crafting immersive solutions across AI, web development,
            gaming, and 3D visualization
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {['AI & Data', 'Web & Mobile', 'Video Games', '3D Art'].map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-sm text-slate-300 border border-slate-700/50 rounded-full bg-slate-900/50 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          onClick={onExplore}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </div>
    </section>
  );
}