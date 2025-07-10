'use client';

import { Skill } from '@/types';
import Marquee from 'react-marquee-slider';
import { motion } from 'framer-motion';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  // Logic để group skills theo category
  const allCategories = Array.from(new Set(skills.map(s => s.category)));
  const mainCats = allCategories.filter(
    cat => skills.filter(s => s.category === cat).length >= 2
  );
  const grouped = mainCats.map(name => ({
    name,
    skills: skills.filter(s => s.category === name),
  }));
  const others = allCategories.filter(cat => !mainCats.includes(cat));
  const otherSkills = skills.filter(s => others.includes(s.category));
  if (otherSkills.length > 1) {
    grouped.push({ name: 'Others', skills: otherSkills });
  }

  return (
    <section
      className="bg-gradient-to-br from-white to-blue-50 py-12 md:py-16"
      id="skills"
    >
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
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-cyan-500 opacity-5 blur-sm select-none">
            SKILLS
          </h2>
        </div>

        {/* Main Title with 3D Effect */}
        <div className="relative">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 relative"
            style={{
              background:
                'linear-gradient(135deg, #06b6d4 0%, #3b82f6 25%, #8b5cf6 50%, #ec4899 75%, #f59e0b 100%)',
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
            My Tech Stack
          </motion.h2>

          {/* 3D Shadow Effect */}
          <div className="absolute inset-0 text-4xl md:text-6xl lg:text-8xl font-black text-gray-800 opacity-10 transform translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2 -z-10">
            My Tech Stack
          </div>
        </div>

        {/* Animated Underline */}
        <motion.div
          className="relative mx-auto"
          style={{ width: '240px', height: '4px' }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
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
          ⚙️
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
          💻
        </motion.div>
      </motion.div>
      
      {grouped.map((cat, idx) => {
        if (cat.skills.length < 2) return null;
        
        // Tạo array skills đủ dài để marquee mượt
        let displaySkills: typeof skills = [];
        while (displaySkills.length < 16) {
          displaySkills = displaySkills.concat(cat.skills);
        }
        
        // direction: even = ltr, odd = rtl
        const direction = idx % 2 === 0 ? 'ltr' : 'rtl';
        
        return (
          <div key={cat.name} className="overflow-hidden py-3 md:py-4">
            <div className="text-left text-xs md:text-sm text-gray-600 mb-2 md:mb-3 pl-2 font-medium">
              {cat.name}
            </div>
            <Marquee
              velocity={8}
              direction={direction}
              scatterRandomly={false}
              resetAfterTries={200}
              onInit={() => {}}
              onFinish={() => {}}
            >
              {displaySkills.map((skill, i) => (
                <div
                  key={skill.id + '-' + i}
                  className="flex flex-col items-center group min-w-[80px] md:min-w-[120px] mx-3 md:mx-6"
                >
                  <div className="rounded-full p-2 md:p-3 bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                    <img
                      src={skill.icon_url}
                      alt={skill.name}
                      title={skill.name}
                      className="h-8 w-8 md:h-12 md:w-12 object-contain transition-all duration-300 group-hover:brightness-110"
                    />
                  </div>
                  <span className="mt-2 md:mt-3 text-xs text-gray-700 whitespace-nowrap font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        );
      })}
    </section>
  );
} 