'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Netflix Clone Website',
    category: 'Project 1',
    image: '/projects/netflix.jpg',
    link: '#',
    color: 'from-purple-400 to-blue-500',
  },
  {
    id: 2,
    title: 'Weather Reporting Website',
    category: 'Project 2',
    image: '/projects/weather.jpg',
    link: '#',
    color: 'from-pink-300 to-rose-400',
  },
  {
    id: 3,
    title: 'Aeskey Website',
    category: 'Project 3',
    image: '/projects/aeskey.jpg',
    link: '#',
    color: 'from-orange-300 to-amber-400',
  },
  {
    id: 4,
    title: 'Formula 1 Race Stats',
    category: 'Project 4',
    image: '/projects/formula1.jpg',
    link: '#',
    color: 'from-teal-300 to-cyan-400',
  },
];

export default function Works() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="works" className="min-h-screen bg-gray-50 py-20">
      <div className="section-container max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-500 mb-2 italic">Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">RECENT PROJECT</h2>
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
              <p className="text-sm text-gray-500 mb-3 italic">{project.category}</p>

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
