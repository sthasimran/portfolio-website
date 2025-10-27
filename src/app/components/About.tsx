'use client';

import { motion } from 'framer-motion';
import { Download, Phone, Mail, MapPin, Calendar } from 'lucide-react';

const education = [
  {
    institution: 'The British College',
    degree: 'BSc (Hons) in Computing',
    period: 'Sep 2021 - Present',
  },
  {
    institution: 'Little Angels College',
    degree: '+2 Management (Computer Science)',
    period: 'April 2019 - April 2021',
  },
  {
    institution: 'Kathmandu University High School',
    degree: 'Grade 6 - 10',
    period: '2014-2019',
  },
  {
    institution: "St. Xavier's School Godavari",
    degree: 'Grade 1 - 5',
    period: '2005-2014',
  },
];

const experience = [
  {
    role: 'Marketing/E-commerce Manager',
    company: 'Ashley Furniture Homestore Nepal',
    period: 'Aug 2021 - Mar 2025',
    location: 'Teku, Kathmandu',
  },
  {
    role: 'Data Operation Assistant',
    company: 'Ashley Furniture Homestore Nepal',
    period: 'May 2018 - May 2025',
    location: 'Teku, Kathmandu',
  },
  {
    role: 'Graphics Designer',
    company: 'Ashley Furniture Homestore Nepal',
    period: 'Jan 2018 - May 2025',
    location: 'Teku, Kathmandu',
  },
  {
    role: 'Graphics Designer/E-Commerce Intern',
    company: 'SB Furniture Nepal',
    period: 'Jan 2018 - May 2020',
    location: 'Santinagar, Lalitpur',
  },
  {
    role: 'Data & Operations Intern',
    company: 'SB Furniture Nepal',
    period: 'Jan 2018 - Mar 2019',
    location: 'Santinagar, Lalitpur',
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white py-20">
      <div className="section-container max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-500 mb-2 italic">Nice to meet you!</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">WELCOME TO...</h2>
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0">
              {/* Decorative Dots */}
              <div className="absolute -top-4 -left-4 grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gray-900 rounded-full" />
                ))}
              </div>

              {/* Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-200">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-400">Profile Image</span>
                </div>
              </div>
            </div>

            {/* Name & Title */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">
                BATSAL SHRESTHA
              </h3>
              <p className="text-lg text-gray-700 italic mb-2">
                Graphics Designer, UI/UX developer &
              </p>
              <p className="text-lg text-gray-700">
                <span className="italic">Marketing Strategist</span> based in{' '}
                <span className="font-semibold">Nepal</span>
              </p>
            </div>

            {/* Download CV Button */}
            <button className="flex items-center gap-2 mx-auto lg:mx-0 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              <Download size={20} />
              Download CV
            </button>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Phone size={20} className="text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm font-medium">+977 9840255823</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Calendar size={20} className="text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Age</p>
                  <p className="text-sm font-medium">20 yrs</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Mail size={20} className="text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium">batsalr0@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <MapPin size={20} className="text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm font-medium">Lalitpur, Nepal</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Education Section */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
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
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Experience
              </h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="pl-6 border-l-2 border-gray-200 hover:border-green-500 transition-colors"
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
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          className="mt-16 bg-gray-900 text-white p-8 md:p-12 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-6xl text-gray-600 leading-none">"</span>
            <p className="text-lg md:text-xl italic my-4">
              Great marketing tells a story. Great design brings that story to life — creating
              connections that inspire action.
            </p>
            <span className="text-6xl text-gray-600 leading-none">"</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
