'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { education, experience } from '../constant/AboutData';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white py-20">
      <div className="section-container max-w-7xl mx-auto ">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-semibold text-[#141313] mb-2 italic">Nice to meet you!</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">WELCOME TO...</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Profile & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Profile Image */}

            <Image src={'/About.png'} alt="Batsal Nath Shrestha" width={500} height={100} />

            {/* Name & Title */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                BATSAL NATH SHRESTHA
              </h3>

              <p className="text-2xl text-gray-700 italic mb-1 font-bold">
                Ads Manager, Digital Strategist &
              </p>
              <p className="text-2xl text-gray-700">
                <span className="italic font-bold">Graphics Designer</span> based in{' '}
                <span className="font-bold italic">Nepal</span>
              </p>
            </div>

            {/* Download CV Button */}
            <button className="flex items-center gap-2 mx-auto lg:mx-0 px-6 py-3 bg-gray-900 text-white cursor-pointer hover:bg-gray-800 transition-colors">
              <Download size={20} />
              Download CV
            </button>
          </motion.div>

          {/* Right Column - Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Education Section */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 italic">
                  <span className="w-2 h-2 bg-blue-500 rounded-full "></span>
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="pl-6 border-l-2 border-gray-200 hover:border-blue-500 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="font-semibold text-gray-900">{edu.institution}</h4>
                      <p className="text-sm text-gray-600">{edu.degree}</p>
                      <p className="text-xs text-gray-500 mt-1">{edu.period}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Experience Section */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 italic">
                  <span className="w-2 h-2 bg-blue-500 rounded-full "></span>
                  Experience
                </h3>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="pl-6 border-l-2 border-gray-200 hover:border-blue-500 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="font-semibold text-gray-900">{exp.role}</h4>
                      <p className="text-sm text-gray-600">{exp.company}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {exp.period} • {exp.location}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          className="mt-16 bg-gray-900 text-white p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl italic my-4">
              " Great marketing tells a story. Great design brings that story to life — creating
              connections that inspire action. "
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
