import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Brain, Globe, Gamepad2, Box } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ProjectCard from './ProjectCard';
import { translations } from '@/data/translations';

interface Project {
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
const categoryData: Record<keyof typeof translations.en.categories, { title: string; icon: any; color: string; projects: Project[] }> = {
  'ai-data': {
    title: 'AI & Data',
    icon: Brain,
    color: 'text-blue-400',
    projects: [
      {
        title: 'Neural Style Transfer Engine',
        titleFr: 'Moteur de Transfert de Style',
        description: 'Real-time artistic style transfer using deep convolutional neural networks with custom loss functions.',
        descriptionFr: 'Transfert de style artistique en temps réel utilisant des réseaux de neurones.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
        type: 'Machine Learning',
        tags: ['PyTorch', 'CNN', 'Computer Vision'],
        link: '#',
        github: '#'
      },
      {
        title: 'Predictive Analytics Dashboard',
        titleFr: 'Hub Analytique Prédictif',
        description: 'End-to-end ML pipeline for sales forecasting with interactive visualizations and automated reporting.',
        descriptionFr: 'Pipeline ML complet pour la prévision des ventes avec rapports automatisés.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        type: 'Data Science',
        tags: ['Python', 'TensorFlow', 'Tableau'],
        link: '#'
      },
      {
        title: 'NLP Sentiment Analyzer',
        titleFr: 'Analyseur de Sentiments NLP',
        description: 'Multi-language sentiment analysis API processing millions of social media posts daily.',
        descriptionFr: 'API d\'analyse de sentiments traitant des millions de posts quotidiens.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
        type: 'NLP',
        tags: ['Transformers', 'FastAPI', 'AWS'],
        github: '#'
      },
      {
        title: 'Autonomous Trading Bot',
        titleFr: 'Bot de Trading Autonome',
        description: 'Reinforcement learning agent for cryptocurrency trading with risk management protocols.',
        descriptionFr: 'Agent de trading crypto basé sur l\'apprentissage par renforcement.',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
        type: 'Reinforcement Learning',
        tags: ['Python', 'RL', 'Crypto'],
        link: '#'
      }
    ]
  },
  'web-mobile': {
    title: 'Web & Mobile',
    icon: Globe,
    color: 'text-emerald-400',
    projects: [
      {
        title: 'E-Commerce Platform',
        titleFr: 'Plateforme E-Commerce',
        description: 'Full-featured marketplace with real-time inventory, payment processing, and admin dashboard.',
        descriptionFr: 'Marketplace complet avec gestion des stocks en temps réel et paiement.',
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
        type: 'Full Stack',
        tags: ['React', 'Node.js', 'Stripe'],
        link: '#',
        github: '#'
      },
      {
        title: 'Social Fitness App',
        titleFr: 'App Fitness Sociale',
        description: 'Cross-platform mobile app connecting fitness enthusiasts with challenges and leaderboards.',
        descriptionFr: 'App mobile connectant les passionnés de fitness avec défis.',
        image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
        type: 'Mobile',
        tags: ['React Native', 'Firebase', 'HealthKit'],
        link: '#'
      },
      {
        title: 'Real-time Collaboration Tool',
        titleFr: 'Outil Collaboratif Live',
        description: 'Whiteboard application with live cursors, drawing tools, and video conferencing integration.',
        descriptionFr: 'Tableau blanc interactif avec curseurs en direct et visioconférence.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        type: 'Web App',
        tags: ['WebSocket', 'Canvas', 'WebRTC'],
        github: '#'
      },
      {
        title: 'Portfolio CMS',
        titleFr: 'CMS pour Portfolio',
        description: 'Headless content management system with visual editor and automatic deployment.',
        descriptionFr: 'CMS headless avec éditeur visuel et déploiement automatique.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
        type: 'Full Stack',
        tags: ['Next.js', 'GraphQL', 'Vercel'],
        link: '#',
        github: '#'
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
        title: 'Cyberpunk Cityscape',
        titleFr: 'Cité Cyberpunk',
        description: 'Detailed urban environment with neon-lit streets, flying vehicles, and atmospheric effects.',
        descriptionFr: 'Environnement urbain détaillé avec néons et véhicules volants.',
        image: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&q=80',
        type: 'Environment',
        tags: ['Blender', 'Substance', 'Octane'],
        link: '#'
      },
      {
        title: 'Character Collection',
        titleFr: 'Collection Personnages',
        description: 'Series of stylized game-ready characters with full rigging and animation sets.',
        descriptionFr: 'Série de personnages stylisés prêts pour le jeu avec rigging.',
        image: 'https://images.unsplash.com/photo-1633957897986-70e83293f3ff?w=800&q=80',
        type: 'Character',
        tags: ['ZBrush', 'Maya', 'Marvelous'],
        link: '#'
      },
      {
        title: 'Abstract Motion Studies',
        titleFr: 'Études de Mouvement',
        description: 'Experimental animations exploring form, color, and movement in 3D space.',
        descriptionFr: 'Animations expérimentales explorant forme et mouvement 3D.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
        type: 'Motion',
        tags: ['Cinema 4D', 'Redshift', 'After Effects'],
        link: '#'
      },
      {
        title: 'Architectural Visualization',
        titleFr: 'Visualisation Archi',
        description: 'Photorealistic renders of modern architecture with accurate lighting and materials.',
        descriptionFr: 'Rendus photoréalistes d\'architecture moderne.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        type: 'ArchViz',
        tags: ['3ds Max', 'V-Ray', 'Photoshop'],
        link: '#'
      }
    ]
  }
};

interface ProjectsModalProps {
  category: keyof typeof categoryData;
  onClose: () => void;
}

export default function ProjectsModal({ category, onClose }: ProjectsModalProps) {
  const { language, t } = useLanguage();
  const data = categoryData[category];
  const Icon = data.icon;

  const projects = data.projects.map(p => ({
    ...p,
    title: language === 'fr' ? (p.titleFr || p.title) : p.title,
    description: language === 'fr' ? (p.descriptionFr || p.description) : p.description
  }));

  const categoryTitle = t.categories[category];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 mb-safe" style={{ perspective: '1200px' }}>

        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* 3D Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 45, z: -500 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, z: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateX: -20, z: -200 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            mass: 0.8
          }}
          className="relative w-full max-w-7xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          style={{ transformStyle: 'preserve-3d' }}
        >

          {/* Header */}
          <div className="flex-none p-8 border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-sm z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center ${data.color} shadow-lg shadow-black/20`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">{categoryTitle}</h2>
                  <p className="text-slate-400 font-medium">{projects.length} projects</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all transform hover:rotate-90 duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}