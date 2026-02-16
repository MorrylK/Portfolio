'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Brain, Code, Cpu, Globe } from 'lucide-react';

const skillCategories = [
    {
        id: 'ai',
        icon: Brain,
        skills: [
            { fr: 'Modélisation statistique', en: 'Statistical Modeling' },
            { fr: 'Tests statistiques', en: 'Statistical Testing' },
            { fr: 'Machine Learning (classification, régression, clustering)', en: 'Machine Learning (classification, regression, clustering)' },
            { fr: 'Réseaux de neurones', en: 'Neural Networks' },
            { fr: 'Validation de modèles', en: 'Model Validation' }
        ]
    },
    {
        id: 'dev',
        icon: Code,
        skills: [
            { fr: 'React', en: 'React' },
            { fr: 'React Native', en: 'React Native' },
            { fr: 'NextJS', en: 'NextJS' },
            { fr: 'Expo', en: 'Expo' },
            { fr: 'Django', en: 'Django' },
            { fr: 'MySQL', en: 'MySQL' },
            { fr: 'PostgreSQL', en: 'PostgreSQL' }
        ]
    },
    {
        id: 'tools',
        icon: Cpu,
        skills: [
            { fr: 'Git', en: 'Git' },
            { fr: 'Jupyter', en: 'Jupyter' },
            { fr: 'Anaconda', en: 'Anaconda' },
            { fr: 'Docker', en: 'Docker' },
            { fr: 'RStudio', en: 'RStudio' },
            { fr: 'Unity', en: 'Unity' },
            { fr: 'Blender', en: 'Blender' },
            { fr: 'Suite Office', en: 'Office Suite' }
        ]
    }
];


const languages = [
    {
        name: { fr: 'Français', en: 'French' },
        level: { fr: 'Natif', en: 'Native' }
    },
    {
        name: { fr: 'Anglais', en: 'English' },
        level: { fr: 'B2', en: 'B2' }
    }
];


export default function SkillsSection() {
    const { t, language } = useLanguage();

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-400 font-medium tracking-wider uppercase text-sm"
                    >
                        {t.skills.subtitle}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mt-4"
                    >
                        {t.skills.title}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <category.icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6">
                                {t.skills.categories[category.id as keyof typeof t.skills.categories]}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skillObj) => (
                                    <span
                                        key={language === 'fr' ? skillObj.fr : skillObj.en}
                                        className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:bg-slate-700 transition-colors"
                                    >
                                        {language === 'fr' ? skillObj.fr : skillObj.en}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Languages Section */}
                <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 md:max-w-md mx-auto">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <Globe className="w-6 h-6 text-blue-400" />
                        {language === 'fr' ? 'Langues' : 'Languages'}
                    </h3>
                    <div className="space-y-4">
                        {languages.map((lang) => (
                            <div key={language === 'fr' ? lang.name.fr : lang.name.en} className="flex justify-between items-center">
                                <span className="text-white font-medium">
                                    {language === 'fr' ? lang.name.fr : lang.name.en}
                                </span>
                                <span className="text-slate-400">
                                    {language === 'fr' ? lang.level.fr : lang.level.en}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
