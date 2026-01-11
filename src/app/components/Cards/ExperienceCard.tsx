'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { WorkExperience } from '@/app/types/WorkExperience.types';
import Image from 'next/image';

export function ExperienceCard({
  experience,
  index,
}: {
  experience: WorkExperience;
  index: number;
}) {
  const [, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="bg-white  py-6 px-4   transition-all duration-300">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Logo (Left) */}
          <div className="shrink-0">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Content (Right) */}
          <div className="flex-1">
            {/* Company Name */}
            <h4 className="text-xl md:text-2xl font-bold text-[#141313] mb-3 italic group-hover:bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text group-hover:text-transparent transition-colors">
              {experience.company}
            </h4>

            {/* Description */}
            <ul className="space-y-2">
              {experience.description.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="text-[##000000] text-sm leading-relaxed flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.08 }}
                >
                  <span className="text-[#141313] ">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Hover CTA
            <motion.div
              className="mt-4 flex items-center gap-2 text-indigo-600 opacity-0 group-hover:opacity-100"
              animate={{ x: isHovered ? 6 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight size={18} />
              <span className="text-sm font-medium">Learn more</span>
            </motion.div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
