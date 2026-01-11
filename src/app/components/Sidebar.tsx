'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems, socialLinks } from '../constant/SidebarContent';
import Image from 'next/image';

type NavListProps = {
  variant: 'mobile' | 'desktop';
  activeSection: string;
  onNavClick: (href: string, id: string) => void;
};

type SocialIconsProps = {
  className?: string;
};

const NavList = ({ variant, activeSection, onNavClick }: NavListProps) => (
  <nav className={variant === 'desktop' ? 'flex-1 px-6 py-8' : 'flex-1 px-6 py-6'}>
    <ul className="space-y-6">
      {navItems.map(item => {
        const isActive = activeSection === item.id;

        return (
          <li key={item.id}>
            <button
              onClick={() => onNavClick(item.href, item.id)}
              className={`relative text-left w-full origin-left will-change-transform
                   transition-all duration-300 ease-out
                  ${isActive ? 'text-white scale-160 font-semibold tracking-wide' : 'text-gray-400 scale-100'}
                `}
            >
              {item.label}
            </button>
          </li>
        );
      })}
    </ul>
  </nav>
);

const SocialIcons = ({ className = '' }: SocialIconsProps) => (
  <div className={`p-6 flex flex-wrap gap-4 ${className}`}>
    {socialLinks.map(s => (
      <a
        key={s.name}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
        aria-label={s.name}
      >
        <s.icon size={20} />
      </a>
    ))}
  </div>
);

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY + (isDesktop ? 120 : 80);

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        if (y >= section.offsetTop && y < section.offsetTop + section.offsetHeight) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setIsOpen(false);

    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;

    const offset = isDesktop ? 0 : 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const showMobileShell = !isDesktop;

  return (
    <>
      {/* Mobile Top Bar */}
      {showMobileShell && (
        <div className="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md z-50 flex items-center px-6">
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="bg-gray-900 text-white p-3 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      )}

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {showMobileShell && isOpen && (
          <>
            <motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white z-70 flex flex-col"
            >
              <div className="p-6 flex justify-between items-center">
                {/* <h1 className="text-xl font-bold">BNSsss</h1> */}
                <Image src="/bns.png" alt="BNS logo" width={120} height={120} />
                <button onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <NavList variant="mobile" activeSection={activeSection} onNavClick={handleNavClick} />

              <SocialIcons className="pt-2" />
            </motion.aside>

            <motion.div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-60"
            />
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white flex-col">
        <div className="p-8">
          <Image src="/bns.png" alt="BNS logo" width={120} height={120} />
        </div>

        <NavList variant="desktop" activeSection={activeSection} onNavClick={handleNavClick} />

        <SocialIcons />

        <div className="p-6 text-xs text-gray-500 border-t border-gray-800">
          ©2024 Batsal Nath Shrestha
        </div>
      </aside>
    </>
  );
}
