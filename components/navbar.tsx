'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Palette, Menu, X } from 'lucide-react';
import { useTheme } from './theme-provider';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'github', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const navItems = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'experience', label: 'Experience' },
    { href: 'skills', label: 'Skills' },
    { href: 'projects', label: 'Projects' },
    { href: 'github', label: 'GitHub' },
    { href: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const cycleTheme = () => {
    const themes: Array<'dark' | 'navy' | 'light'> = ['dark', 'navy', 'light'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-2 sm:top-4  transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md border border-border/50 shadow-lg' 
            : 'bg-transparent'
        } rounded-full px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] max-w-4xl mx-auto`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo - Always visible */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent flex-shrink-0"
          >
            ATL
          </motion.div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4 lg:px-8">
            <div className="flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    activeSection === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}



            </div>
          </div>

          {/* Tablet Navigation - Hidden on mobile and desktop */}
          <div className="hidden md:flex lg:hidden items-center justify-center flex-1 px-2">
            <div className="flex items-center space-x-2 md:space-x-3">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-xs font-medium transition-colors duration-200 whitespace-nowrap ${
                    activeSection === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            {/* Theme Toggle */}
            <motion.button
              onClick={cycleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors duration-200"
              title={`Current theme: ${theme}`}
            >
              {theme === 'light' ? (
                <Sun className="w-4 h-4" />
              ) : theme === 'navy' ? (
                <Palette className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-full bg-secondary hover:bg-accent transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-[85%] sm:w-[80%] max-w-sm bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl md:hidden"
        >
          <div className="p-4 space-y-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeSection === item.href
                    ? 'bg-primary/10 text-primary border border-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}