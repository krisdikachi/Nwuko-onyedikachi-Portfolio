
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { FaWhatsapp } from 'react-icons/fa';

export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [inlineMessage, setInlineMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'andrewnwuko@gmail.com',
      href: 'mailto:andrenwuko@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 (816) 6382563',
      href: 'tel:+2348166382563'
    },
    {
      icon: MapPin,
      label: 'Worldwide',
      value: 'Worldwide',
      href: 'https://maps.app.goo.gl/DfogZEknUBohi2617'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setInlineMessage(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast({ title: 'Message sent!', description: 'Your message has been received.' });
        setInlineMessage({ type: 'success', text: 'Your message has been sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({ title: 'Error', description: data.error || 'Failed to send message.', variant: 'destructive' });
        setInlineMessage({ type: 'error', text: data.error || 'Failed to send message.' });
      }
    } catch (err) {
      toast({ title: 'Error', description: 'Failed to send message.', variant: 'destructive' });
      setInlineMessage({ type: 'error', text: 'Failed to send message.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Have a project in mind? I would love to hear about it. Send me a message 
              and let us discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.label === 'Location' ? '_blank' : undefined}
                    rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-card rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-200">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                      placeholder="andrewnwuko@gmail.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                {inlineMessage && (
                  <div className={`text-center text-sm font-medium rounded-lg py-2 px-4 mb-2 ${inlineMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {inlineMessage.text}
                  </div>
                )}
                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60"
                  disabled={submitting}
                >
                  <Send className="w-5 h-5" />
                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
                <a
                  href="https://wa.me/2348101451936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-4 rounded-xl font-medium hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ textDecoration: 'none' }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Contact Me on WhatsApp</span>
                </a>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}