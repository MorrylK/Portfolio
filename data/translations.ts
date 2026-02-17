
export type Language = 'en' | 'fr';

export const translations = {
    en: {
        nav: {
            work: 'Work',
            about: 'About',
            contact: 'Contact',
            letsTalk: "Let's Talk",
            portfolio: 'Portfolio'
        },
        hero: {
            subtitle: 'Data Scientist & 3D Artist',
            description: 'Crafting immersive solutions across AI, web development, gaming, and 3D visualization',
            cta: 'Explore'
        },
        categories: {
            'ai-data': 'AI & Data',
            'web-mobile': 'Web & Mobile Dev',
            'video-games': 'Video Games',
            '3d-art': '3D Art'
        },
        projectsSection: {
            title: 'My Projects',
            subtitle: 'Portfolio'
        },
        contact: {
            label: 'Get in Touch',
            title: "Let's Collaborate",
            description: "Have a project in mind or just want to chat? I'm always open to discussing new opportunities and creative ideas.",
            footer: '© 2026 All rights reserved. Built with passion.'
        },
        skills: {
            title: 'Technical Skills',
            subtitle: 'My Stack',
            categories: {
                ai: 'Data Science & AI',
                analysis: 'Analysis & Processing',
                dev: 'Web Technologies',
                tools: 'Tools & Software'
            }
        },
        education: {
            title: 'Academic Background',
            subtitle: 'Education'
        },
        experience: {
            title: 'Professional Experience',
            subtitle: 'Experience'
        }
    },
    fr: {
        nav: {
            work: 'Travaux',
            about: 'À propos',
            contact: 'Contact',
            letsTalk: 'Discutons',
            portfolio: 'Portfolio'
        },
        hero: {
            subtitle: 'Data Scientist & Artiste 3D',
            description: 'Création de solutions immersives en IA, développement web, jeux vidéo et visualisation 3D',
            cta: 'Explorer'
        },
        categories: {
            'ai-data': 'IA & Données',
            'web-mobile': 'Web & Mobile Dev',
            'video-games': 'Jeux Vidéo',
            '3d-art': 'Art 3D'
        },
        projectsSection: {
            title: 'Mes Projets',
            subtitle: 'Portfolio'
        },
        contact: {
            label: 'Prenez Contact',
            title: 'Collaborons Ensemble',
            description: "Vous avez un projet en tête ou vous voulez simplement discuter ? Je suis toujours ouvert aux nouvelles opportunités et aux idées créatives.",
            footer: '© 2026 Tous droits réservés. Fait avec passion.'
        },
        skills: {
            title: 'Compétences Techniques',
            subtitle: 'Ma Stack',
            categories: {
                ai: 'Data Science & IA',
                analysis: 'Analyse et traitement',
                dev: 'Technologies Web',
                tools: 'Outils & Logiciels'
            }
        },
        education: {
            title: 'Parcours Académique',
            subtitle: 'Formation'
        },
        experience: {
            title: 'Expériences Professionnelles',
            subtitle: 'Expérience'
        }
    }
} as const;
