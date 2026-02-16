'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import ProjectCard from './ProjectCard';
import { Project } from '@/data/projects';

interface ProjectGridProps {
    category: 'ai-data' | 'web-mobile' | 'video-games' | '3d-art';
    projects: Project[];
    icon: React.ComponentType<{ className?: string }>;
    color: string;
}

export default function ProjectGrid({ category, projects, icon: Icon, color }: ProjectGridProps) {
    const { language, t } = useLanguage();

    const translatedProjects = projects.map(p => ({
        ...p,
        title: language === 'fr' ? (p.titleFr || p.title) : p.title,
        description: language === 'fr' ? (p.descriptionFr || p.description) : p.description
    }));

    const categoryTitle = t.categories[category];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Back Button */}
                <Link href="/" scroll={false}>
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/#categories';
                        }}
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>{language === 'fr' ? 'Retour' : 'Back'}</span>
                    </motion.button>
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-5 mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center ${color} shadow-lg`}>
                            <Icon className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{categoryTitle}</h1>
                            <p className="text-slate-400 font-medium mt-1">{translatedProjects.length} {language === 'fr' ? 'projets' : 'projects'}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {translatedProjects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
