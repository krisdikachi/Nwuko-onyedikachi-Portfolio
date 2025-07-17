'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Image from 'next/image';
import { Particles } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/krisdikachi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nwuko-onyedikachi', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/NwukoATL', label: 'Twitter' },
    { icon: Mail, href: 'mailto:andrewnwuko@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      {/* Floating Particles Background */}
      {/* Floating Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          id="tsparticles-hero"
          init={async (engine: any) => { await loadFull(engine); }}
          options={{
            fullScreen: false,
            background: { color: 'transparent' },
            particles: {
              number: { value: 40, density: { enable: true, area: 800 } },
              color: { value: '#a3a3a3' },
              opacity: { value: 0.2 },
              size: { value: { min: 1, max: 3 } },
              move: { enable: true, speed: 0.5, direction: 'none', outModes: 'out' },
              links: { enable: false },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-lg"
            >
              I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Nwuko Onyedikachi
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium"
            >
              Senior Software Developer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4 text-muted-foreground max-w-lg"
            >
              <p>
              Hi, I am Nwuko Onyedikachi, a senior software developer with a passion for bringing visions to life through technology. With years of experience in building robust and scalable solutions, I thrive on transforming ideas into impactful digital products.
As the co founder of Plancer—an innovative online event management web app—I have honed my skills in leading projects from concept to launch.
              </p>
              <p>
              I am deeply committed to helping both small and large scale businesses establish a strong and befitting online presence.
              I look forward to collaborating with forward thinking organizations and individuals who are ready to elevate their digital footprint. Let us work together to turn your ideas into reality!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

                      <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                whileHover={{ rotate: [0, -15, 15, -10, 10, 0], transition: { duration: 0.8 } }}
                className="relative"
              >
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-border/50">
                  <Image
                    src="/me2.png"
                    alt="Nwuko Onyedikachi - Senior Software Developer"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5] 
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-lg -z-10"
                />
              </motion.div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}