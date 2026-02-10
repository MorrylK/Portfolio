import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const colorSchemes = {
  'ai-data': {
    bg: 'bg-yellow-500',
    text: 'text-yellow-900',
    accent: 'bg-yellow-600',
    border: 'border-yellow-600'
  },
  'web-mobile': {
    bg: 'bg-blue-500',
    text: 'text-blue-900',
    accent: 'bg-blue-600',
    border: 'border-blue-600'
  },
  'video-games': {
    bg: 'bg-red-500',
    text: 'text-red-900',
    accent: 'bg-red-600',
    border: 'border-red-600'
  },
  '3d-art': {
    bg: 'bg-green-500',
    text: 'text-green-900',
    accent: 'bg-green-600',
    border: 'border-green-600'
  }
};

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projectData: Record<string, Project[]> = {
  'ai-data': [
    {
      title: 'Neural Style Transfer',
      description: 'Real-time artistic style transfer using deep neural networks',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      tags: ['PyTorch', 'CNN', 'Computer Vision'],
      link: '#',
      github: '#'
    },
    {
      title: 'Predictive Analytics',
      description: 'ML pipeline for sales forecasting with interactive visualizations',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['Python', 'TensorFlow', 'Tableau'],
      link: '#'
    },
    {
      title: 'NLP Sentiment Analyzer',
      description: 'Multi-language sentiment analysis processing millions of posts',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
      tags: ['Transformers', 'FastAPI', 'AWS'],
      github: '#'
    }
  ],
  'web-mobile': [
    {
      title: 'E-Commerce Platform',
      description: 'Full marketplace with real-time inventory and payment processing',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      tags: ['React', 'Node.js', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      title: 'Social Fitness App',
      description: 'Cross-platform app connecting fitness enthusiasts',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
      tags: ['React Native', 'Firebase'],
      link: '#'
    },
    {
      title: 'Real-time Collaboration',
      description: 'Whiteboard with live cursors and video conferencing',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      tags: ['WebSocket', 'Canvas', 'WebRTC'],
      github: '#'
    }
  ],
  'video-games': [
    {
      title: 'Stellar Odyssey',
      description: 'Open-world space exploration with procedural planets',
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&q=80',
      tags: ['Unreal Engine', 'C++', 'Procedural'],
      link: '#'
    },
    {
      title: 'Puzzle Dimensions',
      description: 'Mind-bending puzzle platformer with gravity manipulation',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
      tags: ['Unity', 'C#', 'Level Design'],
      link: '#',
      github: '#'
    },
    {
      title: 'Neon Racer',
      description: 'Fast-paced cyberpunk racing with online multiplayer',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
      tags: ['Unity', 'Photon', 'Mobile'],
      link: '#'
    }
  ],
  '3d-art': [
    {
      title: 'Cyberpunk Cityscape',
      description: 'Detailed urban environment with neon-lit streets',
      image: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&q=80',
      tags: ['Blender', 'Substance', 'Octane'],
      link: '#'
    },
    {
      title: 'Character Collection',
      description: 'Stylized game-ready characters with full rigging',
      image: 'https://images.unsplash.com/photo-1633957897986-70e83293f3ff?w=800&q=80',
      tags: ['ZBrush', 'Maya', 'Marvelous'],
      link: '#'
    },
    {
      title: 'Abstract Motion Studies',
      description: 'Experimental animations exploring form and movement',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      tags: ['Cinema 4D', 'Redshift'],
      link: '#'
    }
  ]
};

interface DetailViewProps {
  category: keyof typeof colorSchemes;
  title: string;
  onClose: () => void;
}

export default function DetailView({ category, title, onClose }: DetailViewProps) {
  const colors = colorSchemes[category];
  const projects = projectData[category] || [];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className={`fixed inset-0 z-50 ${colors.bg} overflow-y-auto`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="min-h-screen py-8 px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between mb-12"
          >
            <h1 className={`text-4xl md:text-6xl font-bold ${colors.text}`}>{title}</h1>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${colors.accent} flex items-center justify-center text-white`}
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </motion.button>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
                whileHover={{ y: -10, rotateX: 5, scale: 1.02 }}
                className={`bg-white/90 rounded-2xl overflow-hidden shadow-xl ${colors.border} border-2`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Links */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full ${colors.accent} flex items-center justify-center text-white hover:scale-110 transition-transform`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full ${colors.accent} flex items-center justify-center text-white hover:scale-110 transition-transform`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${colors.accent} text-white`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}