'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Paperclip, Send } from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
  file: File | null;
}

const socialLinks = [
  { name: 'FACEBOOK', url: 'https://facebook.com' },
  { name: 'TWITTER', url: 'https://twitter.com' },
  { name: 'INSTAGRAM', url: 'https://instagram.com' },
  { name: 'LINKEDIN', url: 'https://linkedin.com' },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="min-h-screen bg-white py-20">
      <div className="section-container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-sm text-gray-500 mb-2 italic">Contact</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">REACH OUT TO ME</h2>
              <p className="text-gray-600">Lalitpur, Kathmandu</p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 pt-8">
              <div>
                <a
                  href="tel:+9779840255823"
                  className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-indigo-600 transition-colors"
                >
                  +977 9840255823
                </a>
              </div>

              <div>
                <a
                  href="mailto:batsalr0@gmail.com"
                  className="text-xl md:text-2xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
                >
                  batsalr0@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 gradient-bg rounded-3xl -z-10 blur-sm" />

            <div className="relative bg-linear-to-br from-purple-500 via-purple-400 to-blue-500 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">ANY PROJECT?</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="NAME"
                      required
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-white/50 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="EMAIL"
                      required
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-white/50 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="MESSAGE"
                    required
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-white/50 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                {/* File Attachment */}
                <div>
                  <label className="flex items-center gap-2 text-white cursor-pointer hover:text-white/80 transition-colors">
                    <Paperclip size={20} />
                    <span className="text-sm font-medium">ATTACH FILE</span>
                    <input type="file" onChange={handleFileChange} className="hidden" />
                  </label>
                  {formData.file && (
                    <p className="text-sm text-white/70 mt-2">{formData.file.name}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <Send size={20} />
                      Sent Successfully!
                    </>
                  ) : submitStatus === 'error' ? (
                    'Failed to Send'
                  ) : (
                    <>
                      Submit now
                      <ArrowRight
                        className="group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.p
                    className="text-sm text-white"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p
                    className="text-sm text-red-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Oops! Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
