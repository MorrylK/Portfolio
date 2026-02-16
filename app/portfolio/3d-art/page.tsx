'use client';

import GalleryGrid from '@/components/portfolio/GalleryGrid';
import { categoryData } from '@/data/projects';

export default function ThreeDartPage() {
    const data = categoryData['3d-art'];

    return (
        <GalleryGrid
            category="3d-art"
            projects={data.projects}
            icon={data.icon}
            color={data.color}
        />
    );
}
