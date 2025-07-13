'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, Award, Briefcase } from 'lucide-react';

export default function CVDownload() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const highlights = [
    {
      icon: Briefcase,
      title: '5+ Years Experience',
      description: 'Full-stack development'
    },
    {
      icon: Award,
      title: '20+ Projects',
      description: 'Successfully delivered'
    },
    {
      icon: FileText,
      title: 'Certified',
      description: 'AWS & React expertise'
    }
  ];

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // You would place your actual CV file in the public folder
    link.download = 'Your_Name_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 lg:p-12 border border-border/50"
        >
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-3xl lg:text-4xl font-bold">Get My Resume</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Download my complete CV to learn more about my experience, education, 
                and professional achievements. Perfect for HR teams and potential collaborators.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/30"
                >
                  <highlight.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="w-6 h-6" />
                <span>Download CV</span>
              </motion.button>
              
              <p className="text-sm text-muted-foreground">
                PDF format • Updated December 2024 • 2 pages
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}