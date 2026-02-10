import React, { useRef } from 'react';
import { Brain, Globe, Gamepad2, Box } from 'lucide-react';
import CategoryCard from './CategoryCard';

const categories: {
  id: 'ai-data' | 'web-mobile' | 'video-games' | '3d-art';
  title: string;
  icon: React.ElementType;
}[] = [
    {
      id: 'ai-data',
      title: 'AI & Data',
      icon: Brain,
    },
    {
      id: 'web-mobile',
      title: 'Web & Mobile',
      icon: Globe,
    },
    {
      id: 'video-games',
      title: 'Video Games',
      icon: Gamepad2,
    },
    {
      id: '3d-art',
      title: '3D Art',
      icon: Box,
    }
  ];

interface CategorySectionProps {
  onCategoryClick: (category: 'ai-data' | 'web-mobile' | 'video-games' | '3d-art') => void;
}

export default function CategorySection({ onCategoryClick }: CategorySectionProps) {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-0 bg-slate-950 flex items-center justify-center" id="categories">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category.id}
              title={category.title}
              icon={category.icon}
              index={index}
              onClick={() => onCategoryClick(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}