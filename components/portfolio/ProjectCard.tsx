import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const categoryAccents = {
  'ai-data': { bg: 'bg-blue-500', text: 'text-blue-400', border: 'hover:border-blue-500/50', glow: 'rgba(59, 130, 246, 0.15)' },
  'web-mobile': { bg: 'bg-emerald-500', text: 'text-emerald-400', border: 'hover:border-emerald-500/50', glow: 'rgba(16, 185, 129, 0.15)' },
  'video-games': { bg: 'bg-purple-500', text: 'text-purple-400', border: 'hover:border-purple-500/50', glow: 'rgba(168, 85, 247, 0.15)' },
  '3d-art': { bg: 'bg-amber-500', text: 'text-amber-400', border: 'hover:border-amber-500/50', glow: 'rgba(245, 158, 11, 0.15)' }
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    type?: string;
    tags: string[];
    link?: string;
    github?: string;
  };
  category: keyof typeof categoryAccents;
  index: number;
}

export default function ProjectCard({ project, category, index }: ProjectCardProps) {
  const accent = categoryAccents[category];

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlight = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, ${accent.glow}, transparent)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      className={`group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 ${accent.border}`}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: spotlight }}
      />

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 z-20 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-2 h-2 rounded-full ${accent.bg} shadow-[0_0_10px_currentColor]`} />
          <span className={`text-xs font-medium uppercase tracking-wider ${accent.text}`}>{project.type}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}