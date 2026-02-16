'use client';

import ProjectGrid from '@/components/portfolio/ProjectGrid';
import { categoryData } from '@/data/projects';

export default function VideoGamesPage() {
    const data = categoryData['video-games'];

    return (
        <ProjectGrid
            category="video-games"
            projects={data.projects}
            icon={data.icon}
            color={data.color}
        />
    );
}
