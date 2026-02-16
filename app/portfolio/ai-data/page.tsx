'use client';

import ProjectGrid from '@/components/portfolio/ProjectGrid';
import { categoryData } from '@/data/projects';

export default function AIDataPage() {
    const data = categoryData['ai-data'];

    return (
        <ProjectGrid
            category="ai-data"
            projects={data.projects}
            icon={data.icon}
            color={data.color}
        />
    );
}
