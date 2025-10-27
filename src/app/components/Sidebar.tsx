'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram, Linkedin, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'HOME', href: '#home' },
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'works', label: 'WORKS', href: '#works' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
];

const socialLinks = [
  { name: 'Email', icon: Mail, url: 'mailto:batsalr0@gmail.com' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 md:hidden bg-gray-900 text-white p-3 rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {(isOpen || (typeof window !== 'undefined' && window.innerWidth >= 768)) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white z-40 flex flex-col"
          >
            {/* Logo */}
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-xl font-bold tracking-wider">BNS</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-6 md:px-5 py-8">
              <ul className="space-y-6">
                {navItems.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.href, item.id)}
                      className={`text-left text-base md:text-sm font-medium transition-colors relative group w-full ${
                        activeSection === item.id ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {activeSection === item.id && (
                        <motion.span
                          layoutId="activeSection"
                          className="absolute -left-6 md:-left-5 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-500 rounded-r"
                        />
                      )}
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Links */}
            <div className="p-6 md:p-5 space-y-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="p-6 md:p-5 text-xs text-gray-500 border-t border-gray-800">
              <p>Copyright ©2024 Batsal Nath Shrestha. All right reserved.</p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </>
  );
}
