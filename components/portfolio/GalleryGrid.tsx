'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Project } from '@/data/projects';

interface GalleryGridProps {
    category: '3d-art';
    projects: Project[];
    icon: React.ComponentType<{ className?: string }>;
    color: string;
}

export default function GalleryGrid({ category, projects, icon: Icon, color }: GalleryGridProps) {
    const { language, t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
                            <p className="text-slate-400 font-medium mt-1">{translatedProjects.length} {language === 'fr' ? 'créations' : 'creations'}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Gallery Grid - Standard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {translatedProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div
                                onClick={() => setSelectedProject(project)}
                                className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-black/50"
                            >
                                {/* Media (Image or Video) */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    {project.image.endsWith('.mp4') || project.image.endsWith('.webm') ? (
                                        <video
                                            src={project.image}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        /* eslint-disable-next-line @next/next/no-img-element */
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">{language === 'fr' ? 'Voir détails' : 'View details'}</span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className={`w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_currentColor]`} />
                                        <span className="text-xs font-medium uppercase tracking-wider text-amber-400">{project.type}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Media (Image or Video) */}
                            <div className="relative aspect-video">
                                {selectedProject.image.endsWith('.mp4') || selectedProject.image.endsWith('.webm') ? (
                                    <video
                                        src={selectedProject.image}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        controls
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    /* eslint-disable-next-line @next/next/no-img-element */
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_currentColor]`} />
                                    <span className="text-sm font-medium uppercase tracking-wider text-amber-400">{selectedProject.type}</span>
                                </div>

                                <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                                <p className="text-slate-400 text-lg mb-6 leading-relaxed">{selectedProject.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-sm font-medium text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                {(selectedProject.link || selectedProject.github) && (
                                    <div className="flex gap-4">
                                        {selectedProject.link && (
                                            <a
                                                href={selectedProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>{language === 'fr' ? 'Voir le projet' : 'View Project'}</span>
                                            </a>
                                        )}
                                        {selectedProject.github && (
                                            <a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>GitHub</span>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
