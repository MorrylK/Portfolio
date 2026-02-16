'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { TimelineItem } from '@/data/about';

interface TimelineSectionProps {
    title: string;
    subtitle: string;
    items: TimelineItem[];
}

export default function TimelineSection({ title, subtitle, items }: TimelineSectionProps) {
    const { language } = useLanguage();

    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-400 font-medium tracking-wider uppercase text-sm"
                    >
                        {subtitle}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mt-4"
                    >
                        {title}
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-slate-800" />

                    <div className="space-y-12">
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content */}
                                <div className="w-full md:w-1/2 pl-10 md:pl-0">
                                    <div className={`p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                                        }`}>
                                        <span className="text-blue-400 font-medium mb-2 block">
                                            {language === 'en' ? (item.yearEn || item.year) : item.year}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {language === 'fr' ? item.titleFr : item.title}
                                        </h3>
                                        <h4 className="text-slate-300 font-medium mb-4">
                                            {language === 'fr' ? (item.organizationFr || item.organization) : item.organization}
                                        </h4>
                                        <p className="text-slate-400 leading-relaxed mb-6">
                                            {language === 'fr' ? item.descriptionFr : item.description}
                                        </p>
                                        {item.tags && (
                                            <div className="flex flex-wrap gap-2">
                                                {item.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 text-xs bg-slate-800/50 text-slate-400 rounded-full border border-slate-700/50">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Dot on line */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 z-10" />

                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
