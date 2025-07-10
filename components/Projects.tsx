'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';
import { TechStackDisplay } from '@/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section
      className="container mx-auto px-4 py-12 md:py-16 lg:py-20 section-ai"
      id="projects"
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
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-blue-500 opacity-5 blur-sm select-none">
            PROJECTS
          </h2>
        </div>

        {/* Main Title with 3D Effect */}
        <div className="relative">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 relative"
            style={{
              background:
                'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 25%, #ec4899 50%, #f59e0b 75%, #10b981 100%)',
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
            My Projects
          </motion.h2>

          {/* 3D Shadow Effect */}
          <div className="absolute inset-0 text-4xl md:text-6xl lg:text-8xl font-black text-gray-800 opacity-10 transform translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2 -z-10">
            My Projects
          </div>
        </div>

        {/* Animated Underline */}
        <motion.div
          className="relative mx-auto"
          style={{ width: '200px', height: '4px' }}
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
          ⚡
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
          🚀
        </motion.div>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card-ai overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full flex flex-col h-full"
          >
            {/* Project Image Carousel - Swiper */}
            <div className="relative h-40 md:h-48 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden project-carousel">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                  nextEl: `.swiper-button-next-${project.id}`,
                  prevEl: `.swiper-button-prev-${project.id}`,
                }}
                pagination={{
                  el: `.swiper-pagination-${project.id}`,
                  clickable: true,
                }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="h-full"
              >
                {/* Giả sử project có nhiều ảnh - tạm thời dùng ảnh chính + duplicate */}
                {[project.image, project.image, project.image]
                  .filter(Boolean)
                  .map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <div className="w-full h-full relative group">
                        {image ? (
                          <img
                            src={image}
                            alt={`${project.title} - Image ${imgIndex + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={e => {
                              const target = e.currentTarget as HTMLElement;
                              target.style.display = 'none';
                              const fallback =
                                target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div
                          className={`w-full h-full flex items-center justify-center text-gray-400 ${image ? 'hidden' : 'flex'}`}
                        >
                          <span className="text-sm font-medium">
                            Image {imgIndex + 1}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div
                className={`swiper-button-prev-${project.id} swiper-nav-btn swiper-nav-prev`}
              >
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div
                className={`swiper-button-next-${project.id} swiper-nav-btn swiper-nav-next`}
              >
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              {/* Custom Pagination */}
              <div
                className={`swiper-pagination-${project.id} swiper-pagination-custom`}
              ></div>
            </div>

            {/* Project Info */}
            <div className="p-4 md:p-6 flex flex-col flex-1">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <TechStackDisplay technologies={project.technologies} />
              </div>

              {/* Action Buttons - Always at bottom */}
              <div className="flex gap-2 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.demo ? 'flex-1' : 'w-full'} bg-white/80 hover:bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 text-center`}
                  >
                    Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.github ? 'flex-1' : 'w-full'} bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 text-center`}
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 