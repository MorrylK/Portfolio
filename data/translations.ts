
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
            subtitle: 'Creative Developer & Artist',
            description: 'Crafting immersive solutions across AI, web development, gaming, and 3D visualization',
            cta: 'Explore'
        },
        categories: {
            'ai-data': 'AI & Data',
            'web-mobile': 'Web & Mobile',
            'video-games': 'Video Games',
            '3d-art': '3D Art'
        },
        contact: {
            label: 'Get in Touch',
            title: "Let's Collaborate",
            description: "Have a project in mind or just want to chat? I'm always open to discussing new opportunities and creative ideas.",
            footer: '© 2026 All rights reserved. Built with passion.'
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
            subtitle: 'Développeur Créatif & Artiste',
            description: 'Création de solutions immersives en IA, développement web, jeux vidéo et visualisation 3D',
            cta: 'Explorer'
        },
        categories: {
            'ai-data': 'IA & Données',
            'web-mobile': 'Web & Mobile',
            'video-games': 'Jeux Vidéo',
            '3d-art': 'Art 3D'
        },
        contact: {
            label: 'Prenez Contact',
            title: 'Collaborons Ensemble',
            description: "Vous avez un projet en tête ou vous voulez simplement discuter ? Je suis toujours ouvert aux nouvelles opportunités et aux idées créatives.",
            footer: '© 2026 Tous droits réservés. Fait avec passion.'
        }
    }
} as const;
