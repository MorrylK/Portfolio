'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import CategorySection from '@/components/portfolio/CategorySection';
import ContactSection from '@/components/portfolio/ContactSection';
import ProjectModal from '@/components/portfolio/ProjectModal';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<'ai-data' | 'web-mobile' | 'video-games' | '3d-art' | null>(null);

  const handleExplore = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30">
      <Navigation />

      <div id="home">
        <HeroSection onExplore={handleExplore} />
      </div>
      <div id="categories">
        <CategorySection onCategoryClick={setSelectedCategory} />
      </div>
      <div id="about" className="hidden">
        {/* Hidden about section for now to satisfy link, or alias to home */}
      </div>
      <div id="contact">
        <ContactSection />
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <ProjectModal
            category={selectedCategory}
            onClose={() => setSelectedCategory(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
