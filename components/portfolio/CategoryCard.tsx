import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const categoryStyles = {
  'ai-data': {
    // Yellow
    gradient: 'from-yellow-500/20 to-orange-500/20',
    border: 'group-hover:border-yellow-500/50',
    text: 'text-yellow-400',
    icon: 'text-yellow-400',
    glow: 'shadow-yellow-500/20',
    spotlight: 'rgba(250, 204, 21, 0.15)'
  },
  'web-mobile': {
    // Blue
    gradient: 'from-blue-500/20 to-cyan-500/20',
    border: 'group-hover:border-blue-500/50',
    text: 'text-blue-400',
    icon: 'text-blue-400',
    glow: 'shadow-blue-500/20',
    spotlight: 'rgba(59, 130, 246, 0.15)'
  },
  'video-games': {
    // Red / Salmon
    gradient: 'from-red-500/20 to-rose-500/20',
    border: 'group-hover:border-red-500/50',
    text: 'text-red-400',
    icon: 'text-red-400',
    glow: 'shadow-red-500/20',
    spotlight: 'rgba(248, 113, 113, 0.15)'
  },
  '3d-art': {
    // Green
    gradient: 'from-emerald-500/20 to-green-500/20',
    border: 'group-hover:border-emerald-500/50',
    text: 'text-emerald-400',
    icon: 'text-emerald-400',
    glow: 'shadow-emerald-500/20',
    spotlight: 'rgba(52, 211, 153, 0.15)'
  }
};

interface CategoryCardProps {
  category: keyof typeof categoryStyles;
  title: string;
  icon: React.ElementType;
  onClick: () => void;
  index: number;
}

export default function CategoryCard({ category, title, icon: Icon, onClick, index }: CategoryCardProps) {
  const style = categoryStyles[category];

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const styleImage = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, ${style.spotlight}, transparent)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      onMouseMove={onMouseMove}
      className={`group relative h-64 cursor-pointer rounded-3xl border border-slate-800 bg-slate-950/50 overflow-hidden transition-all duration-500 ${style.border} hover:shadow-2xl hover:scale-[1.02]`}
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{ background: styleImage, opacity: 0.6 }}
      />

      {/* Border Reveal Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 border-2 border-transparent bg-transparent"
        style={{
          maskImage: maskImage,
          WebkitMaskImage: maskImage,
        }}
      >
        <div className={`absolute inset-0 border-2 ${style.text.replace('text-', 'border-').replace('400', '500')} opacity-50`} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          className="mb-6 transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110"
        >
          <Icon className={`w-20 h-20 ${style.icon} opacity-90 group-hover:opacity-100 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]`} strokeWidth={1.5} />
        </motion.div>

        <h3 className="text-3xl font-bold text-white tracking-wide group-hover:text-white transition-colors">
          {title}
        </h3>

        {/* Small decorative dot in corner */}
        <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full ${style.text.replace('text-', 'bg-')} opacity-50 group-hover:opacity-100 transition-opacity`} />
      </div>
    </motion.div>
  );
}