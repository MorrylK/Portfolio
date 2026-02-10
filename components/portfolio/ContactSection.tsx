import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/MorrylK' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/morryl-kouemo-1b408325b/' },
    //{ icon: Twitter, label: 'Twitter', href: '#' },
  ];

  return (
    <section className="py-32 px-6 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-sm tracking-[0.2em] uppercase mb-4">{t.contact.label}</p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            {t.contact.title.split(' ')[0]} <span className="font-medium">{t.contact.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            {t.contact.description}
          </p>

          <motion.a
            href="mailto:morryl.kotym@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-colors group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            morryl.kotym@gmail.com
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>

          <div className="flex items-center justify-center gap-4 mt-12">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-slate-800/50"
        >
          <p className="text-slate-600 text-sm">
            {t.contact.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}