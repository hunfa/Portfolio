import React, { useRef } from 'react';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';
import { Navbar } from './components/Navbar';
import { Hero3DCanvas } from './components/Hero3DCanvas';
import { WavingAvatarHero } from './components/WavingAvatarHero';
import { VideoShowcaseSection } from './components/VideoShowcaseSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitectureBento } from './components/ArchitectureBento';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const avatarHeroRef = useRef<{ triggerWaveBack?: () => void }>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#04060d] text-slate-100 overflow-x-hidden">
        {/* Luxury Noise Texture Overlay */}
        <div className="noise-overlay" />

        {/* Global Floating Navigation Bar */}
        <Navbar onWaveClick={() => scrollToSection('hero')} />

        {/* 3D Interactive WebGL Centerpiece Canvas */}
        <Hero3DCanvas />

        {/* Hero Section with Muhammad Hunfa Jalil's Waving Avatar & Tagline */}
        <WavingAvatarHero
          onExploreProjects={() => scrollToSection('projects')}
          onWatchVideos={() => scrollToSection('videos')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Video Showcase Section (Garajio, Finance Lobby, KiddieCove) */}
        <VideoShowcaseSection />

        {/* Flagship Production Projects with Interactive Live Simulators */}
        <ProjectsSection />

        {/* System Design Architecture & Technical Bento Grid */}
        <ArchitectureBento />

        {/* Professional Experience & Education Timeline */}
        <ExperienceTimeline />

        {/* Direct Contact & Collaboration Form */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
