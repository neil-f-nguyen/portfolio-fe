'use client';

import { motion } from 'framer-motion';
import type { Experience } from '@/types';

interface ExperienceProps {
  experiences: Experience[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        {/* Modern Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey and the technologies I've mastered
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 md:transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                      <div className="flex items-center">
                        {/* Left Side */}
                        <div className="w-5/12 pr-8">
                          {isLeft && (
                            <div className="text-right">
                              {/* Date Badge */}
                              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-blue-100 mb-4">
                                <span className="text-blue-600 font-semibold text-sm">
                                  {new Date(exp.start_date).getFullYear()} -{' '}
                                  {exp.current
                                    ? 'Present'
                                    : new Date(exp.end_date!).getFullYear()}
                                </span>
                              </div>

                              {/* Experience Card */}
                              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group">
                                <div className="flex items-center gap-3 mb-3 flex-row-reverse">
                                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center overflow-hidden">
                                    <img
                                      src={exp.logo}
                                      alt={exp.company}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <div className="text-right">
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                      {exp.position}
                                    </h3>
                                    <p className="text-blue-600 font-semibold">
                                      {exp.company}
                                    </p>
                                  </div>
                                </div>

                                <p className="text-gray-500 text-sm mb-3 flex items-center gap-1 flex-row-reverse">
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
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                  </svg>
                                  {exp.location}
                                </p>

                                {exp.description
                                  .split('\\n')
                                  .map((des, idx) => (
                                    <p
                                      key={`${idx}-${des}`}
                                      className="text-gray-700 leading-relaxed text-right"
                                    >
                                      {des}
                                    </p>
                                  ))}

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 justify-end mt-4">
                                  {exp.technologies.map(tech => (
                                    <span
                                      key={tech}
                                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 hover:from-blue-100 hover:to-purple-100 transition-colors"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Center Space */}
                        <div className="w-2/12 flex justify-center">
                          <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                        </div>

                        {/* Right Side */}
                        <div className="w-5/12 pl-8">
                          {!isLeft && (
                            <div className="text-left">
                              {/* Date Badge */}
                              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-blue-100 mb-4">
                                <span className="text-blue-600 font-semibold text-sm">
                                  {new Date(exp.start_date).getFullYear()} -{' '}
                                  {exp.current
                                    ? 'Present'
                                    : new Date(exp.end_date!).getFullYear()}
                                </span>
                              </div>

                              {/* Experience Card */}
                              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center overflow-hidden">
                                    <img
                                      src={exp.logo}
                                      alt={exp.company}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <div>
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                      {exp.position}
                                    </h3>
                                    <p className="text-blue-600 font-semibold">
                                      {exp.company}
                                    </p>
                                  </div>
                                </div>

                                <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
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
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                  </svg>
                                  {exp.location}
                                </p>

                                {exp.description
                                  .split('\\n')
                                  .map((des, idx) => (
                                    <p
                                      key={`${idx}-${des}`}
                                      className="text-gray-700 leading-relaxed"
                                    >
                                      {des}
                                    </p>
                                  ))}

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 justify-start mt-4">
                                  {exp.technologies.map(tech => (
                                    <span
                                      key={tech}
                                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 hover:from-blue-100 hover:to-purple-100 transition-colors"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden pl-16">
                      {/* Date */}
                      <div className="inline-flex items-center px-3 py-1 bg-white rounded-full shadow-md border border-blue-100 mb-3">
                        <span className="text-blue-600 font-semibold text-sm">
                          {new Date(exp.start_date).getFullYear()} -{' '}
                          {exp.current
                            ? 'Present'
                            : new Date(exp.end_date!).getFullYear()}
                        </span>
                      </div>

                      {/* Experience Card */}
                      <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center overflow-hidden">
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="w-6 h-6 object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-800">
                              {exp.position}
                            </h3>
                            <p className="text-blue-600 font-semibold text-sm">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-500 text-sm mb-2 flex items-center gap-1">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {exp.location}
                        </p>

                        {exp.description.split('\\n').map((des, idx) => (
                          <p
                            key={`${idx}-${des}`}
                            className="text-gray-700 text-sm leading-relaxed"
                          >
                            {des}
                          </p>
                        ))}

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map(tech => (
                            <span
                              key={tech}
                              className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium border border-blue-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Node */}
                      <div className="absolute left-8 transform -translate-x-1/2 top-0">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
