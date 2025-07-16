'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Hi, I am Nwuko Onyedikachi, a senior software developer with a passion for bringing visions to life through technology. With years of experience in building robust and scalable solutions, I thrive on transforming ideas into impactful digital products.
            </p>
            <p>
              As the co founder of Plancer—an innovative online event management web app—I have honed my skills in leading projects from concept to launch. I am deeply committed to helping both small and large scale businesses establish a strong and befitting online presence.
            </p>
            <p>
              I look forward to collaborating with forward thinking organizations and individuals who are ready to elevate their digital footprint. Let us work together to turn your ideas into reality!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}