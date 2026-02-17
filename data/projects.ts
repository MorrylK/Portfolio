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
                image: '/assets/ai-data/survivalanalysisdemo.png',
                type: 'Data Science',
                tags: ['Python', 'Lifelines', 'Streamlit', 'Medical AI'],
                link: 'https://survivalanalysisdemo.streamlit.app',
                github: 'https://github.com/MorrylK/SurvivalAnalysisDemo'
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
                image: '/assets/web-mobile-dev/wanoke-travel.png',
                type: 'Full Stack',
                tags: ['React', 'Next.js', 'Expo', 'React-native', 'Infrastructure', 'Mobile', 'Django', 'Postgresql'],
                link: 'https://www.wanoketravel.com'
            },
            {
                title: 'KyCine Platform',
                titleFr: 'Plateforme KyCiné',
                description: 'Professional filming equipment rental platform for high-quality audiovisual projects.',
                descriptionFr: 'Plateforme de location de matériel de tournage professionnel pour des projets audiovisuels de haute qualité.',
                image: '/assets/web-mobile-dev/kycine.png',
                type: 'Full Stack',
                tags: ['React', 'Next.js', 'E-commerce', 'Django', 'PostgreSQL'],
                link: 'https://www.kycine.com/'
            },
            {
                title: 'Mboa Express',
                titleFr: 'Mboa Express',
                description: 'E-commerce platform for trendy accessories shipped from China to Cameroon.',
                descriptionFr: 'Plateforme d\'e-commerce d\'accessoires de mode expédiés de la Chine vers le Cameroun.',
                image: '/assets/web-mobile-dev/mboa-express.png',
                type: 'Full Stack',
                tags: ['React', 'Next.js', 'E-commerce', 'Django', 'PostgreSQL'],
                link: 'https://mboa-express.vercel.app/'
            },
            {
                title: 'Stock Management Web App',
                titleFr: 'Application web de gestion de stocks',
                description: 'Complete stock management application with real-time inventory and shared calendar.',
                descriptionFr: 'Conception d\'une application web complète de gestion de stocks, facilitant le suivi en temps réel des inventaires, du personnel et d\'un calendrier partagé.',
                image: '/assets/web-mobile-dev/gg.png',
                type: 'Web App',
                tags: ['Python', 'Django', 'PostgreSQL', 'Inventory'],
                link: 'https://morrylk.pythonanywhere.com'
            }
        ]
    },
    'video-games': {
        title: 'Video Games',
        icon: Gamepad2,
        color: 'text-purple-400',
        projects: [
            {
                title: 'Virtual Keyce',
                titleFr: 'Virtual Keyce',
                description: '3D virtual tour of the Keyce Academy campus, allowing students to explore the environment.',
                descriptionFr: 'Visite virtuelle 3D du campus de Keyce Academy, permettant aux étudiants de découvrir l\'environnement.',
                image: '/assets/video-games/keyce-3d.png',
                type: 'Simulation',
                tags: ['Unity', 'C#', 'Level Design', 'Simulation'],
                link: 'https://morryl.itch.io/virtual-keyce'
            },
            {
                title: 'Balls Competition',
                titleFr: 'Balls Competition',
                description: 'Physics-based arcade game where player collect tokens while avoiding balls.',
                descriptionFr: 'Jeu d\'arcade basé sur la physique où le joueur doit collecter des tokens tout en affrontant des balles adverses.',
                image: '/assets/video-games/balls-competition.png',
                type: 'Arcade',
                tags: ['Unity', 'C#', 'Level Design', 'Prototype'],
                link: 'https://morryl.itch.io/balls-competition'
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
