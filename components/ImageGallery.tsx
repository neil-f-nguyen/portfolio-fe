'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Zoom } from 'swiper/modules';
import { Project } from '@/types';
import { TechStackDisplayFull } from '@/lib/utils';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

interface ImageGalleryProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  project?: Project;
}

export default function ImageGallery({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
  project,
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [showProjectInfo, setShowProjectInfo] = useState(false);

  // Close modal when pressing ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset index when opening new modal
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setShowProjectInfo(false);
    }
  }, [isOpen, initialIndex]);

  if (!isOpen || !images.length) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          className={`flex-1 h-full ${
            showProjectInfo ? 'opacity-0 sm:opacity-100' : 'opacity-100'
          }`}
          layout
          animate={{
            maxWidth: showProjectInfo ? 'calc(100% - 320px)' : '100%',
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 300,
            duration: 0.2,
          }}
        >
          <div className="w-full px-4 pt-4 flex justify-between items-center gap-4">
            {/* Project Title */}
            <div className="text-white font-semibold text-lg">
              {project?.title || 'Project Gallery'}
            </div>

            {/* Image Counter */}
            <div className="text-white font-medium flex-shrink-0">
              {currentIndex + 1} / {images.length}
            </div>

            <div className="flex gap-4">
              {/* Project Info Toggle Button */}
              {project && (
                <button
                  onClick={e => {
                    e.stopPropagation();
                    setShowProjectInfo(!showProjectInfo);
                  }}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
                  title={
                    showProjectInfo ? 'Hide project info' : 'View project info'
                  }
                >
                  <svg
                    className="w-6 h-6 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              )}
              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
              >
                <svg
                  className="w-6 h-6 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Gallery Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`relative w-full h-full max-w-7xl max-h-[90%] p-6 pt-0`}
            onClick={e => e.stopPropagation()}
          >
            <Swiper
              modules={[Navigation, Pagination, Keyboard, Zoom]}
              navigation={{
                nextEl: '.gallery-next',
                prevEl: '.gallery-prev',
              }}
              pagination={{
                el: '.gallery-pagination',
                clickable: true,
                dynamicBullets: true,
              }}
              keyboard={{
                enabled: true,
                onlyInViewport: false,
              }}
              zoom={{
                maxRatio: 3,
                minRatio: 0.5,
              }}
              loop={images.length > 1}
              initialSlide={initialIndex}
              onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
              className="h-full w-full"
            >
              {images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center w-full"
                >
                  <div className="swiper-zoom-container w-full h-full flex items-center justify-center">
                    <img
                      src={image}
                      alt={`${project?.title || 'Project'} - Image ${index + 1}`}
                      className="w-full max-h-full object-contain rounded-lg shadow-2xl"
                      onError={e => {
                        const target = e.currentTarget as HTMLElement;
                        target.style.display = 'none';
                        const fallback =
                          target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full flex items-center justify-center text-white text-lg">
                      <span>Image {index + 1} failed to load</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            {images.length > 1 && (
              <>
                <div className="gallery-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 cursor-pointer">
                  <svg
                    className="w-6 h-6"
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
                <div className="gallery-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 cursor-pointer">
                  <svg
                    className="w-6 h-6"
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
              </>
            )}

            {/* Custom Pagination */}
            <div className="gallery-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"></div>
          </motion.div>
        </motion.div>
        {project && showProjectInfo && (
          <motion.div
            layout
            initial={{ opacity: 0, x: 320 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              duration: 0.2,
            }}
            className="flex-shrink-0 w-[320px] h-full bg-white/95 backdrop-blur-md shadow-2xl z-20 overflow-hidden project-info-panel p-6"
            onClick={e => e.stopPropagation()}
          >
            {/* Project Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {project.title}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            {/* Full Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Project Description
              </h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Technologies Used
              </h3>
              <div className="space-y-2">
                <TechStackDisplayFull technologies={project.technologies} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Source Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Demo
                </a>
              )}
            </div>

            {/* Close Info Panel Button */}
            <button
              onClick={() => setShowProjectInfo(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
