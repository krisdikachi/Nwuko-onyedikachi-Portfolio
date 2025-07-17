
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { FaWhatsapp } from 'react-icons/fa';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';

export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Example FAQ data
  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'I offer web development, UI/UX design, and technical consulting for startups and businesses.'
    },
    {
      question: 'Can I see your previous work?',
      answer: 'Yes! Please check the Projects and GitHub sections above for a showcase of my work.'
    },
    {
      question: 'How can I collaborate with you?',
      answer: 'You can book a meeting using the button below or reach out via WhatsApp.'
    },
    {
      question: 'Do you work remotely?',
      answer: 'Yes, I am available for remote work and collaborations worldwide.'
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Let us Work Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Check the FAQ below or book a meeting to discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          {/* FAQ Section */}
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, idx) => (
                <AccordionItem value={`faq-${idx}`} key={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Booking Button and WhatsApp */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <a
              href="https://wa.me/2348101451936"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-4 rounded-xl font-medium hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ textDecoration: 'none' }}
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Contact Me on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}