export interface TimelineItem {
    id: string;
    year: string;
    yearEn?: string;
    title: string;
    titleFr: string;
    organization: string;
    organizationFr?: string;
    description: string;
    descriptionFr: string;
    tags?: string[];
}

export const educationData: TimelineItem[] = [
    {
        id: 'edu-1',
        year: 'Depuis sept. 2025',
        yearEn: 'Since Sept. 2025',
        title: 'Master Expert in Artificial Intelligence',
        titleFr: 'Master Expert en Intelligence Artificielle',
        organization: 'Toulouse Ynov Campus',
        description: 'Advanced study of AI systems, deep learning, and expert systems.',
        descriptionFr: 'Études avancées des systèmes d\'IA, du deep learning et des systèmes experts.',
        tags: ['AI', 'Deep Learning', 'Expert Systems']
    },
    {
        id: 'edu-2',
        year: '2022 - 2025',
        title: 'Bachelor in AI and Big Data',
        titleFr: 'Bachelor en IA et Big Data',
        organization: 'Keyce Informatique et IA',
        description: 'Foundations of artificial intelligence, data processing, and computer science.',
        descriptionFr: 'Fondamentaux de l\'intelligence artificielle, du traitement de données et de l\'informatique.',
        tags: ['Big Data', 'IA', 'Computer Science']
    }
];

export const experienceData: TimelineItem[] = [
    {
        id: 'exp-1',
        year: 'Mai 2025 - Juillet 2025',
        yearEn: 'May 2025 - July 2025',
        title: 'Data Scientist Intern',
        titleFr: 'Stagiaire data scientist',
        organization: 'Epsilon IA',
        description: 'Analysis and preparation of clinical data (cleaning, structuring), predictive survival modeling (survival models adapted to censored data), reporting and deployment of a Streamlit application.',
        descriptionFr: 'Analyse et préparation des données cliniques (nettoyage, structuration), modélisation prédictive de survie (modèles de survie adaptés aux données censurées), reporting et déploiement d\'une application Streamlit.',
        tags: ['Python', 'Pandas', 'Sklearn', 'Lifelines', 'Streamlit']
    },
    {
        id: 'exp-2',
        year: 'Déc. 2024 - Janv. 2025',
        yearEn: 'Dec. 2024 - Jan. 2025',
        title: 'Fullstack Developer',
        titleFr: 'Développeur Fullstack',
        organization: 'Easys Contact',
        description: 'Development of internal tools, service management, continuous deployment and workflow optimization.',
        descriptionFr: 'Développement d\'outils internes, conception de fonctionnalités pour la gestion de services, déploiement continu et optimisation des workflows internes.',
        tags: ['Python', 'Django', 'React', 'Next.js', 'Git']
    },
    {
        id: 'exp-3',
        year: 'Juillet 2024 - Août 2024',
        yearEn: 'July 2024 - Aug. 2024',
        title: 'Fullstack Developer Intern',
        titleFr: 'Stagiaire développeur Fullstack',
        organization: 'Building Cluster Company',
        description: 'Development of web solutions front-end and back-end, maintenance and software support, interface optimization.',
        descriptionFr: 'Développement de solutions web front-end et back-end, maintenance et support logiciel, optimisation des interfaces.',
        tags: ['React', 'Next.js', 'TailwindCSS', 'PostgreSQL']
    }
];
