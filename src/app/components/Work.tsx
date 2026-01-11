'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { experiences } from '../constant/WorkExperienceData';
import { ExperienceCard } from './Cards/ExperienceCard';

export default function WorkSection() {
  const [showAllAgency, setShowAllAgency] = useState(false);
  const [showAllInHouse, setShowAllInHouse] = useState(false);

  const agencyExperiences = experiences.filter(exp => exp.category === 'agency');
  const inHouseExperiences = experiences.filter(exp => exp.category === 'in-house');

  const displayedAgency = showAllAgency ? agencyExperiences : agencyExperiences.slice(0, 4);
  const displayedInHouse = showAllInHouse ? inHouseExperiences : inHouseExperiences.slice(0, 4);

  return (
    <section id="works" className="min-h-screen bg-white py-16 md:py-24">
      <div className=" section-container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-semibold text-[#141313] mb-2 italic">Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">MARKETING & BRANDING</h2>

          <p className="ext-[#141313] font-semibold  leading-relaxed italic">
            I have worked with multiple brands through agency and in-house roles, contributing to
            paid advertising, digital strategy, SEO, and marketing analysis. My responsibilities
            ranged from campaign execution to performance optimization, always aligned with brand
            goals and measurable outcomes.
          </p>
        </motion.div>

        {/* Agency-Based Experience */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <motion.h3
              className="text-2xl md:text-[35px] font-semibold text-[#141313] italic"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              AGENCY-BASED BRAND EXPERIENCE
            </motion.h3>

            {agencyExperiences.length > 4 && (
              <motion.button
                onClick={() => setShowAllAgency(!showAllAgency)}
                className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {showAllAgency ? 'Show less' : 'Load more'}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            )}
          </div>

          <p className="text-[#141313] italic mb-8 text-[18px]">
            (Delivered as part of a digital marketing agency team)
          </p>

          {/* Agency Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {displayedAgency.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>

          {/* Mobile Load More Button */}
          {agencyExperiences.length > 4 && (
            <motion.div
              className="flex justify-center mt-8 md:hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={() => setShowAllAgency(!showAllAgency)}
                className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors group"
              >
                {showAllAgency ? 'Show less' : 'Load more'}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </motion.div>
          )}
        </div>

        {/* In-House Experience */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <motion.h3
              className="text-2xl md:text-[35px] font-semibold text-[#141313] italic"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              IN-HOUSE BRAND EXPERIENCE
            </motion.h3>

            {inHouseExperiences.length > 4 && (
              <motion.button
                onClick={() => setShowAllInHouse(!showAllInHouse)}
                className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {showAllInHouse ? 'Show less' : 'Load more'}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            )}
          </div>

          {/* In-House Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {displayedInHouse.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>

          {/* Mobile Load More Button */}
          {inHouseExperiences.length > 4 && (
            <motion.div
              className="flex justify-center mt-8 md:hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={() => setShowAllInHouse(!showAllInHouse)}
                className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors group"
              >
                {showAllInHouse ? 'Show less' : 'Load more'}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
