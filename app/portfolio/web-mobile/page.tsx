'use client';

import ProjectGrid from '@/components/portfolio/ProjectGrid';
import { categoryData } from '@/data/projects';

export default function WebMobilePage() {
    const data = categoryData['web-mobile'];

    return (
        <ProjectGrid
            category="web-mobile"
            projects={data.projects}
            icon={data.icon}
            color={data.color}
        />
    );
}
