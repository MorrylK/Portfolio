'use client';

import React from 'react';
import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import CategorySection from '@/components/portfolio/CategorySection';
import ContactSection from '@/components/portfolio/ContactSection';
import AboutSection from '@/components/portfolio/AboutSection';

export default function Home() {
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
        <CategorySection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
