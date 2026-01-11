'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { projects } from '../constant/ProjectsData';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen bg-white py-20">
      <div className="section-container max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-semibold text-[#141313] mb-2 italic">Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">RECENT PROJECTS</h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Category Label */}
              <p className="text-base font-medium text-[#141313] mb-3 italic">{project.category}</p>

              {/* Project Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${project.color} transition-transform duration-500 ${
                      hoveredProject === project.id ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    {/* Placeholder for project image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white/30 text-lg font-semibold">{project.title}</span>
                    </div>
                  </div>

                  {/* Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="text-white" size={32} />
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>

                  <motion.div
                    className="flex items-center gap-2 text-gray-600 group-hover:text-indigo-600 transition-colors"
                    animate={{
                      x: hoveredProject === project.id ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={20} />
                    <span className="text-sm font-medium">View Project</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors group">
            Load more
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
