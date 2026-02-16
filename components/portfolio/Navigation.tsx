
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.work, href: '#categories' },
    { label: t.nav.about, href: '#home' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/50' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium text-white cursor-pointer">
          Portfolio<span className="text-blue-400">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{language === 'en' ? 'fr' : 'en'}</span>
          </button>
          <a
            href="mailto:hello@example.com"
            className="px-5 py-2 text-sm bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-colors"
          >
            {t.nav.letsTalk}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-slate-800"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-3 text-lg text-slate-300 hover:text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="uppercase">{language === 'en' ? 'Français' : 'English'}</span>
            </button>
            <a
              href="mailto:hello@example.com"
              className="mt-4 px-5 py-3 text-center bg-white text-slate-900 rounded-full font-medium"
            >
              {t.nav.letsTalk}
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}