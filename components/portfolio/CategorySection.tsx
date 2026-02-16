'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Globe, Gamepad2, Box } from 'lucide-react';
import CategoryCard from './CategoryCard';
import { useLanguage } from '@/context/LanguageContext';

const iconMap = {
  'ai-data': Brain,
  'web-mobile': Globe,
  'video-games': Gamepad2,
  '3d-art': Box,
};

export default function CategorySection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  const categories = Object.keys(iconMap) as (keyof typeof iconMap)[];

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-0 bg-slate-950 flex flex-col items-center justify-center" id="categories">
      <div className="w-full max-w-5xl">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-400 font-medium tracking-wider uppercase text-sm"
          >
            {t.projectsSection.subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-4"
          >
            {t.projectsSection.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {categories.map((id, index) => (
            <Link key={id} href={`/portfolio/${id}`}>
              <CategoryCard
                category={id}
                title={t.categories[id]}
                icon={iconMap[id]}
                index={index}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}