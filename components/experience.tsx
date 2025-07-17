'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Heart } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      type: 'work',
      title: 'Founder',
      company: 'Plancer Event MGT',
      location: 'Remote',
      period: '2025 - Present',
      description: 'Led development of scalable web applications using React, Node.js, Marketting, and AWS. Mentored junior developers and implemented CI/CD pipelines.',
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'PostgreSQL']
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'OJP Technologies Ltd.',
      location: 'Remote',
      period: '2025 - Present',
      description: 'Developed and maintained multiple client projects, focusing on modern web technologies and responsive design.',
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Docker']
    },
    {
      type: 'volunteer',
      title: 'Technical Mentor',
      company: 'Technokraftz Academy',
      location: 'Remote',
      period: '2023 - 2023',
      description: 'Volunteer mentor helping underrepresented groups learn programming and break into tech careers.',
      technologies: ['JavaScript', 'React', 'Career Guidance']
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Verbum Network Limited',
      location: 'Ziks Avenue, Uwani, Enugu',
      period: '2022 - 2023',
      description: 'Built responsive web applications and collaborated with design teams to create exceptional user experiences.',
      technologies: ['React','Html','CSS', 'Sass', 'JavaScript', 'REST APIs']
    },
    {
      type: 'volunteer',
      title: 'Open Source Contributor',
      company: 'Various Projects',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Active contributor to open source projects, focusing on React components and developer tools.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Documentation']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
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
            Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline Dot */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-4 border-background ${
                    exp.type === 'work' ? 'bg-primary' : 'bg-accent'
                  }`}>
                    {exp.type === 'work' ? (
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    ) : (
                      <Heart className="w-6 h-6 text-accent-foreground" />
                    )}
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="flex-1 bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-3">
                      <span className="font-medium text-primary">{exp.company}</span>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}