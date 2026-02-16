'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import SkillsSection from './SkillsSection';
import TimelineSection from './TimelineSection';
import { educationData, experienceData } from '@/data/about';

export default function AboutSection() {
    const { t } = useLanguage();

    return (
        <div id="about-content" className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950 pointer-events-none" />

            <div className="relative z-10">
                <SkillsSection />

                <div className="border-t border-slate-900" />

                <TimelineSection
                    title={t.experience.title}
                    subtitle={t.experience.subtitle}
                    items={experienceData}
                />

                <div className="border-t border-slate-900" />

                <TimelineSection
                    title={t.education.title}
                    subtitle={t.education.subtitle}
                    items={educationData}
                />
            </div>
        </div>
    );
}
