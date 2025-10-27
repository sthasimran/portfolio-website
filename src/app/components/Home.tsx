'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Sparkles } from 'lucide-react';

export default function Home() {
  const handleConnectClick = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden"
    >
      <div className="section-container w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 z-10"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              MY NAME
              <br />
              IS BATSAL
              <br />
              SHRESTHA...
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-700 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="italic">Graphics Designer, UI/UX developer &</span>
              <br />
              <span className="italic">Marketing Strategist</span>{' '}
              <span className="font-normal">based in Nepal</span>
            </motion.p>

            <motion.button
              onClick={handleConnectClick}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect with me
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={18} />
                <span className="text-sm md:text-base">+977 9840255823</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail size={18} />
                <span className="text-sm md:text-base">batsalr0@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Decorative Elements */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Decorative Shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-purple-400 rounded-full blur-2xl opacity-60" />
                <div className="absolute top-10 right-0 w-40 h-40 md:w-48 md:h-48 bg-blue-400 rounded-full blur-2xl opacity-60" />
                <div className="absolute bottom-0 left-10 w-36 h-36 md:w-44 md:h-44 bg-purple-300 rounded-full blur-2xl opacity-60" />
              </motion.div>
            </div>

            {/* Sparkle Icons */}
            <motion.div
              className="absolute top-10 right-10 md:top-16 md:right-16"
              animate={{ rotate: [0, 180, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="text-purple-500" size={24} />
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-10 md:bottom-32 md:left-16"
              animate={{ rotate: [0, -180, 0], scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Sparkles className="text-blue-500" size={20} />
            </motion.div>

            {/* Profile Image Container */}
            <motion.div
              className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-purple-400 via-blue-400 to-purple-300 rounded-full" />
              <div className="absolute inset-2 bg-gray-50 rounded-full overflow-hidden">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-linear-to-br from-purple-200 to-blue-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Profile Image</span>
                </div>
              </div>
            </motion.div>

            {/* Decorative Dots */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-gray-900 rounded-full" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Icons - Right Side */}
      <motion.div
        className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <span className="text-xs">IG</span>
        </a>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
          aria-label="Dribbble"
        >
          <span className="text-xs">DR</span>
        </a>
        <a
          href="https://behance.net"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
          aria-label="Behance"
        >
          <span className="text-xs">BE</span>
        </a>
      </motion.div>
    </section>
  );
}
