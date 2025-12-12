import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';
import { Designs } from './components/Designs';

export function App() {
  // Simple routing based on hash
  const [currentView, setCurrentView] = useState<'home' | 'project'>('home');
  const [projectId, setProjectId] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const id = hash.replace('#/project/', '');
        setProjectId(id);
        setCurrentView('project');
      } else {
        setCurrentView('home');
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle link clicks for project navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href.includes('/project/')) {
        e.preventDefault();
        const id = link.href.split('/project/')[1];
        window.location.hash = `/project/${id}`;
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (currentView === 'project') {
    return (
      <div className="font-sans bg-gradient-to-b from-orange-50 to-amber-50 text-gray-800 min-h-screen">
        <Header />
        <ProjectDetail projectId={projectId} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans bg-gradient-to-b from-orange-50 to-amber-50 text-gray-800 min-h-screen">
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
        <Designs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}