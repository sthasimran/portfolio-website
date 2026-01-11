import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'HOME', href: '#home' },
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'works', label: 'WORKS', href: '#works' },
  { id: 'projects', label: 'PROJECTS', href: '#projects' },
  { id: 'skills', label: 'SKILLS', href: '#skills' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
];

export const socialLinks = [
  { name: 'Email', icon: Mail, url: 'mailto:batsalr0@gmail.com' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/batsall_/' },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/batsal-nath-shrestha-243a56269',
  },
  { name: 'Github', icon: Github, url: 'https://github.com/batsalshr/batsalshr' },
];
