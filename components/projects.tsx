'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'AI Powered Novel Summarizer || Textbook-Like Dictionary',
      description: 'A full-stack AI powered webapp which helps student summarize novels just by inputing the novel name and author to the AI and it does the rest',
      image: '/screenshot.png',
      technologies: ['Next.js', 'Node.js', 'Supabase', 'Firebase', 'HuggingFace API'],
      liveUrl: 'https://bhs24hub.vercel.app',
      githubUrl: 'https://github.com/krisdikachi/bhs24hub'
    },
    {
      title: 'Event Management | Digital Ticket WebApp',
      description: 'An Event management site used t create, manage and even share digital tickets used for checking in ',
      image: '/planceer2.png',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Shadcnui', 'API', 'Node.js'],
      liveUrl: 'https://plancer.site',
      githubUrl: 'https://github.com/krisdikachi/plancer'
    },
    {
      title: 'Electric Vehicle Station Locator',
      description: 'A webapp used to locate a nearby ev station chrager basd on user location ',
      image: '/avt logo.PNG',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Shadcnui', 'API', 'Node.js'],
      liveUrl: 'https://avt-nine.vercel.app',
      githubUrl: 'https://github.com/krisdikachi/avt'
    },
    {
      title: 'OJP Technologies website',
      description: 'A Website for the company I am working at currently',
      image: '/darkLogo.jpg',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Shadcnui', 'API', 'Node.js'],
      liveUrl: 'https://ojptechnologiesltd.com',
      githubUrl: 'https://github.com/krisdikachi/OJP-TECHNOLOGIES'
    },
    {
      title: 'A web based image editor',
      description: 'A Website for editing simple basic designs',
      image: '/editor.png',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Shadcnui', 'API', 'Node.js'],
      liveUrl: '@https://kachis-editor.netlify.app/ ',
      githubUrl: 'https://github.com/krisdikachi/image-editor'
    },
    
    {
      title: 'A Sexual Purity Landing Page',
      description: 'A Non-governmental Landing page',
      image: '/logo.jpg',
      technologies: ['Django', 'Python', 'Dashboard'],
      liveUrl: 'https://purity-chi.vercel.app',
      githubUrl: 'https://github.com/krisdikachi/purity'
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Neon Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/6 w-64 h-64 bg-primary/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/6 right-1/6 w-64 h-64 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}