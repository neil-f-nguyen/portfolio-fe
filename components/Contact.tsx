'use client';

import { motion } from 'framer-motion';
import type { Profile } from '@/types';

interface ContactProps {
  profile: Profile;
}

export default function Contact({ profile }: ContactProps) {
  return (
    <section className="section-ai" id="contact">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Ultra Fancy Title */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 lg:mb-32 relative"
        >
          {/* Glowing Background Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-emerald-500 opacity-5 blur-sm select-none">
              GET IN TOUCH
            </h2>
          </div>

          {/* Main Title with 3D Effect */}
          <div className="relative">
            <motion.h2
              className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 relative"
              style={{
                background:
                  'linear-gradient(135deg, #10b981 0%, #06b6d4 25%, #8b5cf6 50%, #ec4899 75%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '400% 400%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              Get In Touch
            </motion.h2>

            {/* 3D Shadow Effect */}
            <div className="absolute inset-0 text-4xl md:text-6xl lg:text-8xl font-black text-gray-800 opacity-10 transform translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2 -z-10">
              Get In Touch
            </div>
          </div>

          {/* Animated Underline */}
          <motion.div
            className="relative mx-auto"
            style={{ width: '220px', height: '4px' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 rounded-full blur-sm"
              animate={{
                scaleX: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Floating Sparkles */}
          <motion.div
            className="absolute -top-2 md:-top-4 -right-2 md:-right-4 text-xl md:text-2xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            📧
          </motion.div>
          <motion.div
            className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 text-lg md:text-xl"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            🤝
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-ai p-6 md:p-8"
          >
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">
              Contact Info
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl">📧</span>
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  {profile.email}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl">📱</span>
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  {profile.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl">📍</span>
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  {profile.location}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-ai p-6 md:p-8"
          >
            <form className="space-y-3 md:space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 md:p-4 bg-white/80 text-gray-800 rounded-lg border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm md:text-base"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 md:p-4 bg-white/80 text-gray-800 rounded-lg border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm md:text-base"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 md:p-4 bg-white/80 text-gray-800 rounded-lg border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm md:text-base"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 md:py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
