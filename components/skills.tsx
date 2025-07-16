'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiVuedotjs, 
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiVercel,
  SiFigma
} from 'react-icons/si';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'Angular', icon: SiAngular, color: '#DD0031' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20 relative overflow-hidden">
      {/* Background Neon Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            Skills & Technologies
          </motion.h2>

          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-background/50 backdrop-blur-sm border border-border/30 rounded-full text-sm font-medium hover:shadow-md transition-all duration-200 cursor-default group"
                    >
                      <skill.icon 
                        className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-foreground">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}