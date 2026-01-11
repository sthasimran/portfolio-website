'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { skillsData } from '../constant/SkillData';
import Image from 'next/image';

export default function SkillsSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('programming');

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section id="skills" className="min-h-screen bg-white py-16 md:py-24">
      <div className="section-container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-semibold text-[#141313] mb-2 italic">Skills</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">MY SKILLS</h2>
        </motion.div>

        {/* Skills Accordion */}
        <div className="space-y-4">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.id}
              className="bg-white border px-4 rounded-lg border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between py-6 px-2 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#141313] text-2xl font-light">•</span>
                  <h3
                    className={`text-lg md:text-2xl font-bold text-left transition-colors ${
                      expandedCategory === category.id
                        ? 'bg-linear-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent'
                        : 'text-[#141313] group-hover:bg-linear-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text group-hover:text-transparent'
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>

                <motion.div
                  animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={` ${
                    expandedCategory === category.id ? 'text-indigo-600' : 'text-gray-400'
                  }`}
                >
                  {expandedCategory === category.id ? (
                    <Minus size={24} color="#141313" />
                  ) : (
                    <Plus size={24} color="#141313" />
                  )}
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 border-t pb-8 pt-4 ">
                      <div className="space-y-8">
                        {category.sections.map((section, sectionIndex) => (
                          <motion.div
                            key={sectionIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: sectionIndex * 0.1 }}
                            className={sectionIndex > 0 ? 'pt-6' : ''}
                          >
                            {section.title && (
                              <h4 className="text-lg font-bold text-gray-700 mb-4">
                                {section.title}
                              </h4>
                            )}

                            {/* Skills with Icons Grid */}
                            {section.columns && section.columns > 2 ? (
                              <div
                                className="grid gap-6"
                                style={{
                                  gridTemplateColumns: `repeat(auto-fit, minmax(100px, 1fr))`,
                                }}
                              >
                                {section.skills.map((skill, skillIndex) => (
                                  <motion.div
                                    key={skillIndex}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: 0.2 + skillIndex * 0.05,
                                    }}
                                    className="flex flex-col items-center gap-3"
                                  >
                                    {skill.icon ? (
                                      <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                      />
                                    ) : (
                                      <span className="text-2xl font-bold text-indigo-600">
                                        {skill.name.charAt(0)}
                                      </span>
                                    )}

                                    <span className="text-sm text-center text-[#141313] font-medium">
                                      {skill.name}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            ) : (
                              /* Skills as List */
                              <div className="grid md:grid-cols-2 gap-4">
                                {section.skills.map((skill, skillIndex) => (
                                  <motion.div
                                    key={skillIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: 0.2 + skillIndex * 0.05,
                                    }}
                                    className="flex items-center gap-3 group"
                                  >
                                    {skill.icon && (
                                      <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={30}
                                        height={30}
                                        className="object-contain"
                                      />
                                    )}
                                    <span className="text-[#141313] text-base flex items-center gap-2">
                                      {!skill.icon && <span className="text-[#141313]">•</span>}
                                      {skill.name}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
