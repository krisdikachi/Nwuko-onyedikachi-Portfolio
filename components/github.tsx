'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Star, GitFork, Eye } from 'lucide-react';

export default function GitHub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const githubStats = [
    { label: 'Public Repos', value: '34', icon: Github },
    { label: 'Total Stars', value: '70', icon: Star },
    { label: 'Total Forks', value: '324', icon: GitFork },
    { label: 'Followers', value: '16', icon: Eye },
  ];

  const featuredRepos = [
    {
      name: 'OJP Technologies',
      description: 'A Website developed for a tech company',
      stars: 2,
      forks: 5,
      language: 'TypeScript'
    },
    {
      name: 'AVT',
      description: 'An Ev station finder',
      stars: 2,
      forks: 3,
      language: 'JavaScript'
    },
    {
      name: 'Best Ent Furniture',
      description: 'A dummt website for a furniture workshop',
      stars: 89,
      forks: 12,
      language: 'Python'
    }
  ];

  return (
    <section id="github" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">GitHub Showcase</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my open-source contributions and personal projects on GitHub. 
              I believe in sharing knowledge and contributing to the developer community.
            </p>
          </motion.div>

          {/* GitHub Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {githubStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-2xl p-6 text-center border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Featured Repositories */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl font-semibold text-center"
            >
              Featured Repositories
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRepos.map((repo, index) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-primary group-hover:text-accent transition-colors duration-200">
                      {repo.name}
                    </h4>
                    <Github className="w-5 h-5 text-muted-foreground" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {repo.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="w-4 h-4 text-muted-foreground" />
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                    <span className="text-primary font-medium">{repo.language}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center"
          >
            <motion.a
              href="https://github.com/krisdikachi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
              <span>View All Repositories</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}