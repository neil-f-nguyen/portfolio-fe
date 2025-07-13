'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { TechStackDisplay } from '@/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ImageGallery from './ImageGallery';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (project: Project, imageIndex: number) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
    setGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setGalleryOpen(false);
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

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
            <div 
              className="relative h-40 md:h-48 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden project-carousel cursor-pointer group"
              onClick={() => handleImageClick(project, 0)}
            >
              {/* Click to view gallery indicator */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </div>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={project.image && project.image.length > 1 ? {
                  nextEl: `.swiper-button-next-${project.id}`,
                  prevEl: `.swiper-button-prev-${project.id}`,
                } : false}
                pagination={project.image && project.image.length > 1 ? {
                  el: `.swiper-pagination-${project.id}`,
                  clickable: true,
                } : false}
                loop={project.image && project.image.length > 1}
                autoplay={project.image && project.image.length > 1 ? {
                  delay: 3000,
                  disableOnInteraction: false,
                } : false}
                className="h-full"
              >
                {/* Sử dụng array images từ project */}
                {project.image && project.image.length > 0 ? (
                  project.image.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <div className="w-full h-full relative group flex items-center justify-center">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          className="max-w-full max-h-full object-contain bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg group-hover:scale-105 transition-transform duration-500 shadow-sm"
                          onLoad={(e) => {
                            const img = e.currentTarget;
                            const aspectRatio = img.naturalWidth / img.naturalHeight;
                            
                            // Phát hiện ảnh mobile (tỷ lệ < 1.2) hoặc desktop
                            if (aspectRatio < 1.2) {
                              // Ảnh mobile - thêm class đặc biệt và điều chỉnh kích thước
                              img.classList.add('mobile-image');
                              img.style.maxHeight = '85%';
                              img.style.maxWidth = '60%';
                              img.style.objectFit = 'contain';
                            } else if (aspectRatio > 2.5) {
                              // Ảnh rất rộng (có thể là panorama) - điều chỉnh đặc biệt
                              img.classList.add('desktop-image');
                              img.style.objectFit = 'cover';
                              img.style.width = '100%';
                              img.style.height = '100%';
                            } else {
                              // Ảnh desktop thông thường
                              img.classList.add('desktop-image');
                              img.style.objectFit = 'cover';
                              img.style.width = '100%';
                              img.style.height = '100%';
                            }
                          }}
                          onError={e => {
                            const target = e.currentTarget as HTMLElement;
                            target.style.display = 'none';
                            const fallback =
                              target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  // Fallback khi không có ảnh
                  <SwiperSlide>
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span className="text-sm font-medium">
                        No Image Available
                      </span>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>

              {/* Custom Navigation Buttons - chỉ hiển thị khi có nhiều ảnh */}
              {project.image && project.image.length > 1 && (
                <>
                  <div
                    className={`swiper-button-prev-${project.id} swiper-nav-btn swiper-nav-prev`}
                    onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => e.stopPropagation()}
                  ></div>
                </>
              )}
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

      {/* Image Gallery Modal */}
      {selectedProject && (
        <ImageGallery
          images={selectedProject.image}
          isOpen={galleryOpen}
          onClose={handleCloseGallery}
          initialIndex={selectedImageIndex}
          projectTitle={selectedProject.title}
        />
      )}
    </section>
  );
} 