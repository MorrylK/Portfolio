import React, { useRef } from 'react';
import { Brain, Globe, Gamepad2, Box } from 'lucide-react';
import CategoryCard from './CategoryCard';
import { useLanguage } from '@/context/LanguageContext';

const iconMap = {
  'ai-data': Brain,
  'web-mobile': Globe,
  'video-games': Gamepad2,
  '3d-art': Box,
};

interface CategorySectionProps {
  onCategoryClick: (category: 'ai-data' | 'web-mobile' | 'video-games' | '3d-art') => void;
}

export default function CategorySection({ onCategoryClick }: CategorySectionProps) {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  const categories = Object.keys(iconMap) as (keyof typeof iconMap)[];

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-0 bg-slate-950 flex items-center justify-center" id="categories">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {categories.map((id, index) => (
            <CategoryCard
              key={id}
              category={id}
              title={t.categories[id]}
              icon={iconMap[id]}
              index={index}
              onClick={() => onCategoryClick(id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}