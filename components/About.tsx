'use client';

import { motion } from 'framer-motion';
import { Profile, AboutCard, LearningItem, Goal, FunFact } from '@/types';
import { getColorClass } from '@/lib/utils';

interface AboutProps {
  profile: Profile;
  aboutCards: AboutCard[];
  learningItems: LearningItem[];
  goals: Goal[];
  funFacts: FunFact[];
}

export default function About({ profile, aboutCards, learningItems, goals, funFacts }: AboutProps) {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-20 section-ai" id="about">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-purple-500 opacity-5 blur-sm select-none">
              ABOUT
            </h2>
          </div>

          {/* Main Title with 3D Effect */}
          <div className="relative">
            <motion.h2
              className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 relative"
              style={{
                background:
                  'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
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
              About Me
            </motion.h2>

            {/* 3D Shadow Effect */}
            <div className="absolute inset-0 text-4xl md:text-6xl lg:text-8xl font-black text-gray-800 opacity-10 transform translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2 -z-10">
              About Me
            </div>
          </div>

          {/* Animated Underline */}
          <motion.div
            className="relative mx-auto"
            style={{ width: '150px', height: '4px' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full blur-sm"
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
        </motion.div>

        {/* Quick Facts List - Centered */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              {/* Avatar and Title */}
              <div className="flex flex-col items-center mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative mb-4"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-black shadow-xl">
                    {profile.name.charAt(0)}
                  </div>
                  {/* Floating Ring */}
                  <motion.div
                    className="absolute inset-0 border-4 border-purple-400 rounded-full opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                  Quick Facts
                </h3>
              </div>
              
              <div className="space-y-4 md:space-y-5">
                {/* Current Focus */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    className="text-2xl md:text-3xl flex-shrink-0 mt-1"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    🚀
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                      Current Focus
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      Building scalable web applications with modern tech stack
                    </div>
                  </div>
                </motion.div>

                {/* Philosophy */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    className="text-2xl md:text-3xl flex-shrink-0 mt-1"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    💡
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                      My Philosophy
                    </div>
                    <div className="text-gray-600 text-sm md:text-base italic">
                      "Code is poetry, design is art, and user experience is everything"
                    </div>
                  </div>
                </motion.div>

                {/* Coffee */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    className="text-2xl md:text-3xl flex-shrink-0 mt-1"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    ☕
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                      Fuel of Choice
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      Coffee enthusiast who codes better with a good cup
                    </div>
                  </div>
                </motion.div>

                {/* Preferred Work Style */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    className="text-2xl md:text-3xl flex-shrink-0 mt-1"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    🎯
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                      Work Style
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      Detail-oriented, collaborative, and always learning
                    </div>
                  </div>
                </motion.div>

                {/* Fun Fact */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    className="text-2xl md:text-3xl flex-shrink-0 mt-1"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    🎮
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                      When Not Coding
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      Gaming, exploring new tech, or binge-watching tech talks
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Passion Cards - 3D Morphing Layout */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <motion.h3
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16 md:mb-20 lg:mb-24 relative"
          >
            <motion.span
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              What Drives Me
            </motion.span>

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
              ✨
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
              💫
            </motion.div>
          </motion.h3>

          <div className="relative perspective-1000">
            {/* 3D Morphing Cards - Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {aboutCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 60, rotateX: 30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: card.display_order * 0.1,
                    type: 'spring',
                    bounce: 0.3,
                  }}
                  viewport={{ once: true }}
                  className="transform-gpu"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    className="card-ai p-6 relative overflow-hidden group cursor-pointer h-full"
                    whileHover={{
                      scale: 1.05,
                      rotateY: card.hover_rotate_y,
                      rotateX: 5,
                      z: 30,
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {/* Morphing Background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-2xl"
                      animate={{
                        background: [
                          `linear-gradient(45deg, ${card.gradient_colors[0]}, ${card.gradient_colors[1]})`,
                          `linear-gradient(135deg, ${card.gradient_colors[1]}, ${card.gradient_colors[2]})`,
                          `linear-gradient(225deg, ${card.gradient_colors[2]}, ${card.gradient_colors[0]})`,
                          `linear-gradient(315deg, ${card.gradient_colors[0]}, ${card.gradient_colors[1]})`,
                        ],
                      }}
                      transition={{
                        duration: 6 + index * 0.5,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />

                    {/* Floating Icon */}
                    <motion.div
                      className="text-4xl md:text-5xl mb-3 md:mb-4 relative z-10 text-center"
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 5 - index * 2, 0],
                      }}
                      transition={{
                        duration: 2.5 + index * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2,
                      }}
                    >
                      {card.icon}
                    </motion.div>

                    <div className="relative z-10 text-center">
                      <h4 className="font-black text-lg md:text-xl text-gray-800 mb-3">
                        {card.title}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Particle Effects */}
                    <div
                      className="absolute top-3 right-3 w-2 h-2 rounded-full animate-ping"
                      style={{
                        backgroundColor: card.gradient_colors[0] + '80',
                      }}
                    />
                    <div
                      className="absolute bottom-3 left-3 w-1 h-1 rounded-full animate-pulse"
                      style={{
                        backgroundColor: card.gradient_colors[1] + '80',
                        animationDelay: `${index * 200}ms`,
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Journey - Timeline Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Current Journey
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            {/* Learning Node */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-center mb-8 md:mb-12"
            >
              <div className="w-full md:w-1/2 md:pr-8 text-center md:text-right mb-4 md:mb-0">
                <div className="card-ai p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center md:justify-end mb-4">
                    <h4 className="font-bold text-lg md:text-xl text-gray-800 mr-3">
                      Currently Learning
                    </h4>
                    <div className="text-2xl md:text-3xl">📚</div>
                  </div>
                  <div className="space-y-2">
                    {learningItems.map(item => (
                      <div
                        key={item.id}
                        className="flex items-center justify-center md:justify-end"
                      >
                        <span className="text-gray-600 mr-2 text-sm md:text-base">
                          {item.title}
                        </span>
                        <span
                          className={`w-3 h-3 ${getColorClass(item.color)} rounded-full`}
                        ></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="hidden md:block w-1/2 pl-8"></div>
            </motion.div>

            {/* Goals Node */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="hidden md:block w-1/2 pr-8"></div>
              <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
                <div className="card-ai p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <div className="text-2xl md:text-3xl mr-3">🎯</div>
                    <h4 className="font-bold text-lg md:text-xl text-gray-800">
                      Goals Ahead
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {goals.map(goal => (
                      <div key={goal.id} className="flex items-center justify-center md:justify-start">
                        <span
                          className={`w-3 h-3 ${getColorClass(goal.color)} rounded-full mr-2`}
                        ></span>
                        <span className="text-gray-600 text-sm md:text-base">{goal.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Fun Facts - Masonry Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Fun Facts
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.id}
                initial={{ opacity: 0, y: 20, rotate: fact.rotate_angle * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.6,
                  delay: fact.display_order * 0.1,
                }}
                viewport={{ once: true }}
                className="card-ai p-3 md:p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ transform: `rotate(${fact.rotate_angle}deg)` }}
                whileHover={{ rotate: fact.rotate_angle * -1, scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">{fact.emoji}</div>
                {fact.text.split('\\n').map((text, index) => (
                  <p
                    key={`${text}-${index}`}
                    className="text-xs md:text-sm text-gray-600 font-medium whitespace-pre-line"
                  >
                    {text}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 