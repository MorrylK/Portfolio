import { Brain, Globe, Gamepad2, Box, LucideIcon } from 'lucide-react';
import { translations } from './translations';

export interface Project {
    title: string;
    titleFr?: string;
    description: string;
    descriptionFr?: string;
    image: string;
    type: string;
    tags: string[];
    link?: string;
    github?: string;
}

export interface CategoryData {
    title: string;
    icon: LucideIcon;
    color: string;
    projects: Project[];
}

export const categoryData: Record<keyof typeof translations.en.categories, CategoryData> = {
    'ai-data': {
        title: 'AI & Data',
        icon: Brain,
        color: 'text-blue-400',
        projects: [
            {
                title: 'Survival Analysis Predictive Model',
                titleFr: 'Modèle prédictif d\'analyse de survie',
                description: 'Prediction model for the median survival time of patients with colorectal cancer.',
                descriptionFr: 'Réalisation d\'un modèle de prédiction de la durée de survie médiane de patients atteints de cancer colorectal.',
                image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
                type: 'Data Science',
                tags: ['Python', 'Lifelines', 'Streamlit', 'Medical AI'],
                link: 'https://survivalanalysisdemo.streamlit.app'
            }
        ]
    },
    'web-mobile': {
        title: 'Web & Mobile',
        icon: Globe,
        color: 'text-emerald-400',
        projects: [
            {
                title: 'Wanoke Travel Platform',
                titleFr: 'Plateforme Wanoke Travel',
                description: 'Web and mobile infrastructure for tracking university applications in China.',
                descriptionFr: 'Supervision du projet de création de l\'infrastructure web et mobile de l\'entreprise Wanoke Travel, pour le suivi des candidatures dans des universités en Chine.',
                image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
                type: 'Full Stack',
                tags: ['React', 'Next.js', 'Infrastructure', 'Mobile'],
                link: 'https://www.wanoketravel.com'
            },
            {
                title: 'Stock Management Web App',
                titleFr: 'Application web de gestion de stocks',
                description: 'Complete stock management application with real-time inventory and shared calendar.',
                descriptionFr: 'Conception d\'une application web complète de gestion de stocks, facilitant le suivi en temps réel des inventaires, du personnel et d\'un calendrier partagé.',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
                type: 'Web App',
                tags: ['Python', 'Django', 'PostgreSQL', 'Inventory'],
                link: 'https://www.morrylk.pythonanywhere.com'
            }
        ]
    },
    'video-games': {
        title: 'Video Games',
        icon: Gamepad2,
        color: 'text-purple-400',
        projects: [
            {
                title: 'Stellar Odyssey',
                titleFr: 'Odyssée Stellaire',
                description: 'Open-world space exploration RPG with procedurally generated planets and alien civilizations.',
                descriptionFr: 'RPG d\'exploration spatiale avec planètes et civilisations procédurales.',
                image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&q=80',
                type: 'RPG',
                tags: ['Unreal Engine', 'C++', 'Procedural'],
                link: '#'
            },
            {
                title: 'Puzzle Dimensions',
                titleFr: 'Dimensions Puzzle',
                description: 'Mind-bending puzzle platformer featuring gravity manipulation and time loops.',
                descriptionFr: 'Plateformer de puzzle avec manipulation de gravité et boucles temporelles.',
                image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
                type: 'Puzzle',
                tags: ['Unity', 'C#', 'Level Design'],
                link: '#'
            },
            {
                title: 'Neon Racer',
                titleFr: 'Pilote Néon',
                description: 'Fast-paced racing game set in a cyberpunk city with online multiplayer and custom vehicles.',
                descriptionFr: 'Jeu de course cyberpunk avec multijoueur en ligne.',
                image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
                type: 'Racing',
                tags: ['Unity', 'Photon', 'Mobile'],
                link: '#'
            },
            {
                title: 'Realm of Shadows',
                titleFr: 'Royaume des Ombres',
                description: 'Atmospheric horror adventure with dynamic lighting and AI-driven narrative.',
                descriptionFr: 'Aventure d\'horreur atmosphérique avec narration guidée par IA.',
                image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
                type: 'Horror',
                tags: ['Unreal Engine', 'Blueprints', 'AI'],
                github: '#'
            }
        ]
    },
    '3d-art': {
        title: '3D Art',
        icon: Box,
        color: 'text-amber-400',
        projects: [
            {
                title: 'Blue Text Yellow Light',
                titleFr: 'Texte Bleu Lumière Jaune',
                description: 'Dynamic 3D text animation with vibrant lighting effects and smooth motion.',
                descriptionFr: 'Animation de texte 3D dynamique avec effets lumineux vibrants.',
                image: '/assets/3d-art/0001-0210-Blue Text Yellow Light.mp4',
                type: 'Motion Graphics',
                tags: ['Blender', 'Animation', 'Lighting'],
            },
            {
                title: 'Simple Dark Blue',
                titleFr: 'Bleu Sombre Simple',
                description: 'Minimalist 3D composition exploring depth and atmospheric lighting.',
                descriptionFr: 'Composition 3D minimaliste explorant profondeur et éclairage.',
                image: '/assets/3d-art/0001-0210-Simple dark blue.mp4',
                type: 'Abstract',
                tags: ['Blender', 'Composition', 'Atmosphere'],
            },
            {
                title: 'Motion Study',
                titleFr: 'Étude de Mouvement',
                description: 'Experimental animation exploring form and movement in 3D space.',
                descriptionFr: 'Animation expérimentale explorant forme et mouvement 3D.',
                image: '/assets/3d-art/0001-0200.mp4',
                type: 'Animation',
                tags: ['Blender', 'Motion', 'Experimental'],
            },
            {
                title: 'Geometry Nodes',
                titleFr: 'Nœuds Géométriques',
                description: 'Procedural animation created with Blender geometry nodes system.',
                descriptionFr: 'Animation procédurale créée avec le système de nœuds géométriques.',
                image: '/assets/3d-art/TestGeoNodes_2.mp4',
                type: 'Procedural',
                tags: ['Blender', 'Geometry Nodes', 'Animation'],
            },
            {
                title: 'Fluid Simulation',
                titleFr: 'Simulation Fluide',
                description: 'Realistic milk fluid simulation with dynamic lighting and materials.',
                descriptionFr: 'Simulation fluide réaliste de lait avec éclairage dynamique.',
                image: '/assets/3d-art/Fluid_Milk.png',
                type: 'Simulation',
                tags: ['Blender', 'Fluid', 'Rendering'],
            },
            {
                title: 'Architectural Building',
                titleFr: 'Bâtiment Architectural',
                description: 'Modern architectural visualization with detailed materials and lighting.',
                descriptionFr: 'Visualisation architecturale moderne avec matériaux détaillés.',
                image: '/assets/3d-art/Batiment.png',
                type: 'ArchViz',
                tags: ['Blender', 'Architecture', 'Rendering'],
            },
            {
                title: 'Staircase Design',
                titleFr: 'Design d\'Escaliers',
                description: 'Elegant staircase design showcasing lighting and material work.',
                descriptionFr: 'Design élégant d\'escaliers montrant le travail d\'éclairage.',
                image: '/assets/3d-art/Escaliers.png',
                type: 'Interior',
                tags: ['Blender', 'Interior', 'Lighting'],
            },
            {
                title: 'Glasses Still Life',
                titleFr: 'Nature Morte Verres',
                description: 'Photorealistic glass rendering with caustics and reflections.',
                descriptionFr: 'Rendu photoréaliste de verres avec caustiques et réflexions.',
                image: '/assets/3d-art/Glasses.png',
                type: 'Product',
                tags: ['Blender', 'Product', 'Cycles'],
            },
            {
                title: 'Dandelion',
                titleFr: 'Pissenlit',
                description: 'Organic modeling and rendering of a dandelion with fine details.',
                descriptionFr: 'Modélisation organique d\'un pissenlit avec détails fins.',
                image: '/assets/3d-art/Pissenlit.png',
                type: 'Organic',
                tags: ['Blender', 'Nature', 'Modeling'],
            },
            {
                title: '3D Render',
                titleFr: 'Rendu 3D',
                description: 'High-quality 3D render showcasing modeling and lighting techniques.',
                descriptionFr: 'Rendu 3D de haute qualité montrant techniques de modélisation.',
                image: '/assets/3d-art/img-4.png',
                type: 'Render',
                tags: ['Blender', 'Modeling', 'Rendering'],
            }
        ]
    }
};
