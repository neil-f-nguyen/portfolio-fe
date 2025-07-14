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
                {/* Email Icon + Link */}
                <span className="text-xl md:text-2xl text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 6l-10 7L2 6" />
                  </svg>
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-blue-600 hover:underline font-medium text-sm md:text-base transition-colors duration-200"
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                {/* Phone Icon + Link */}
                <span className="text-xl md:text-2xl text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.586 6.586l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />
                  </svg>
                </span>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-green-600 hover:underline font-medium text-sm md:text-base transition-colors duration-200"
                >
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                {/* Location Icon */}
                <span className="text-xl md:text-2xl text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4.5 8-10A8 8 0 004 12c0 5.5 8 10 8 10z" />
                  </svg>
                </span>
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  {profile.location}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {/* LinkedIn Icon + Link */}
                <span className="text-xl md:text-2xl text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/>
                  </svg>
                </span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium text-sm md:text-base transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-3">
                {/* GitHub Icon + Link */}
                <span className="text-xl md:text-2xl text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black hover:underline font-medium text-sm md:text-base transition-colors duration-200"
                >
                  GitHub
                </a>
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
