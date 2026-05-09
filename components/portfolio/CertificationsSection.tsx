'use client';

import React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { certificationData } from '@/data/about';

function CertificationCard({ cert, index }: { cert: any, index: number }) {
    const { language, t } = useLanguage();
    const mouseX = useSpring(useMotionValue(0), { stiffness: 500, damping: 100 });
    const mouseY = useSpring(useMotionValue(0), { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const spotlight = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.1), transparent)`;

    const Icon = Award;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseMove={onMouseMove}
            className="group relative bg-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
        >
            <motion.div
                className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: spotlight }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <Icon className="w-8 h-8" />
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {language === 'fr' ? cert.titleFr : cert.title}
                    </h3>
                    <p className="text-blue-400 font-medium text-sm">
                        {cert.organization}
                    </p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {language === 'fr' ? cert.descriptionFr : cert.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800/50">
                    <div className="flex flex-wrap gap-2">
                        {cert.tags?.slice(0, 2).map((tag: string) => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors group/link"
                    >
                        <span>{t.certifications.viewCertificate}</span>
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function CertificationsSection({ id }: { id?: string }) {
    const { t } = useLanguage();

    return (
        <section id={id} className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-400 font-medium tracking-wider uppercase text-sm"
                    >
                        {t.certifications.subtitle}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mt-4"
                    >
                        {t.certifications.title}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {certificationData.map((cert, idx) => (
                        <CertificationCard key={cert.id} cert={cert} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
