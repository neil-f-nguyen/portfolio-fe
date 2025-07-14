'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type {
  Profile,
  Project,
  Skill,
  Experience,
  AboutCard,
  LearningItem,
  Goal,
  FunFact,
} from '@/types';
import { apiClient } from '@/lib/api';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ExperienceComponent from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [aboutCards, setAboutCards] = useState<AboutCard[]>([]);
  const [learningItems, setLearningItems] = useState<LearningItem[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [funFacts, setFunFacts] = useState<FunFact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          profileData,
          projectsData,
          skillsData,
          experiencesData,
          aboutCardsData,
          learningItemsData,
          goalsData,
          funFactsData,
        ] = await Promise.all([
          apiClient.getProfile(),
          apiClient.getProjects(),
          apiClient.getSkills(),
          apiClient.getExperiences(),
          apiClient.getAboutCards(),
          apiClient.getLearningItems(),
          apiClient.getGoals(),
          apiClient.getFunFacts(),
        ]);
        setProfile(profileData);
        setProjects(projectsData);
        setSkills(skillsData);
        setExperiences(experiencesData);
        setAboutCards(aboutCardsData);
        setLearningItems(learningItemsData);
        setGoals(goalsData);
        setFunFacts(funFactsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white flex items-center justify-center">
        <div className="text-gray-800 text-xl font-medium">Loading...</div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white flex items-center justify-center">
        <div className="text-gray-800 text-xl font-medium">
          Error loading profile
        </div>
      </div>
    );
  }

  // Smooth scroll handler (copy from Header)
  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen section-ai">
      <Header />

      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="card-ai p-6 md:p-8 lg:p-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-4">
            Hello, I'm <span className="text-blue-500">{profile.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-4xl text-blue-400 mb-4 md:mb-6 min-h-[32px] md:min-h-[48px]">
            <Typewriter
              words={[
                'Frontend Developer',
                'UI Enthusiast',
                'React/Next.js Expert',
                'Web Animation Lover',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6 md:mb-8">
            {profile.about}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ai"
              onClick={e => handleNavClick(e, '#projects')}
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ai"
              onClick={e => handleNavClick(e, '#contact')}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <About
        profile={profile}
        aboutCards={aboutCards}
        learningItems={learningItems}
        goals={goals}
        funFacts={funFacts}
      />

      {/* Projects Section */}
      <Projects projects={projects} />

      {/* Skills Section */}
      <Skills skills={skills} />

      {/* Experience Section */}
      <ExperienceComponent experiences={experiences} />

      {/* Contact Section */}
      <Contact profile={profile} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
