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
              I'm a passionate software developer with a love for creating digital experiences 
              that make a difference. With several years of experience in full-stack development, 
              I specialize in modern web technologies and always strive to write clean, 
              efficient code.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying up-to-date with the latest industry trends.
            </p>

            <p>
              My goal is to build software that not only solves problems but also provides 
              exceptional user experiences. I enjoy collaborating with teams and turning 
              complex ideas into simple, elegant solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}