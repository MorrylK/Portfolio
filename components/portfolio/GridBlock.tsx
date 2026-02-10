import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface GridBlockProps {
  category: string;
  title: string;
  icon: LucideIcon;
  onClick: () => void;
  index: number;
}

const categoryColors: Record<string, string> = {
  'ai-data': 'bg-blue-600 hover:bg-blue-500',
  'web-mobile': 'bg-emerald-600 hover:bg-emerald-500',
  'video-games': 'bg-purple-600 hover:bg-purple-500',
  '3d-art': 'bg-amber-600 hover:bg-amber-500',
};

export default function GridBlock({ category, title, icon: Icon, onClick, index }: GridBlockProps) {
  const colorClass = categoryColors[category] || 'bg-slate-800 hover:bg-slate-700';

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className={`relative w-full h-full flex flex-col items-center justify-center gap-4 group overflow-hidden transition-colors duration-300 ${colorClass}`}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
      
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="relative z-10 p-4 rounded-full bg-white/10 backdrop-blur-sm"
      >
        <Icon className="w-12 h-12 text-white" />
      </motion.div>
      
      <span className="relative z-10 text-xl font-bold text-white tracking-wide">
        {title}
      </span>
    </motion.button>
  );
}
