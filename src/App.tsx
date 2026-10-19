/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ProjectItem } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroWindow } from './components/HeroWindow';
import { Projects } from './components/Projects';
import { SecuritySection } from './components/SecuritySection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3200);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll spy to update active section in floating navbar
  useEffect(() => {
    const sections = ['hero', 'work', 'security', 'skills', 'about', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* Hero Section with Dimensional OS Window */}
        <HeroWindow
          onExploreWork={() => scrollToSection('work')}
          onContactClick={() => scrollToSection('contact')}
          onToast={showToast}
        />

        {/* Featured Projects & Engineering Labs */}
        <Projects
          onSelectProject={(proj) => setSelectedProject(proj)}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Cybersecurity & Defensive Engineering */}
        <SecuritySection />

        {/* Technical Skills & Tooling Matrix */}
        <SkillsSection />

        {/* About Acou Paul & Engineering Philosophy */}
        <AboutSection
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Experience, Practical Background & Certifications */}
        <ExperienceTimeline />

        {/* Verified Direct Contact Suite */}
        <ContactSection
          onToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
      />

      {/* Detailed Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={() => scrollToSection('contact')}
        onToast={showToast}
      />

      {/* Global Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
