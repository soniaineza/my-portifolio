import React from 'react';
import { ExternalLink, Smartphone, School, Gamepad2, BookOpen, Trees, Film, AlertCircle, Cloud, Brain, Sparkles, Home } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 'weown',
      name: 'WeOwn Real Estate',
      description: 'Modern real estate platform for buying, selling, and investing in properties with intuitive search and comparison tools.',
      icon: <Home size={24} className="text-blue-600" />,
      tags: ['Real Estate', 'Web Platform', 'Property Search', 'Investment']
    },
    {
      id: 'verbatim-web-maker',
      name: 'Verbatim Web Maker',
      description: 'AI-powered web development platform that generates websites from voice commands and natural language descriptions.',
      icon: <Mic size={24} className="text-blue-600" />,
      tags: ['AI', 'Voice Recognition', 'Web Development', 'No-Code']
    },
    {
      id: 'sheja-cards',
      name: 'Sheja Cards',
      description: 'A modern student card management platform that helps schools run effortlessly, responsive, and built to simplify everything from enrollment to analytics.',
      icon: <School size={24} className="text-purple-600" />,
      tags: ['Web Platform', 'School Management', 'Analytics']
    },
    {
      id: 'inkingi-rescue',
      name: 'INKINGI Rescue',
      description: 'Emergency response and rescue coordination system enabling real-time incident reporting, secure data handling, and faster response from emergency authorities.',
      icon: <AlertCircle size={24} className="text-red-600" />,
      tags: ['Emergency System', 'Real-time', 'Security']
    },
    {
      id: 'micro-weather',
      name: 'Micro Weather Forecast',
      description: 'ML-powered weather forecasting application with temperature and rain predictions, featuring interactive charts and 7-day forecasts with map integration.',
      icon: <Cloud size={24} className="text-blue-500" />,
      tags: ['Machine Learning', 'Weather', 'Data Visualization']
    },
    {
      id: 'twin-mind',
      name: 'My Twin Mind',
      description: 'AI-powered digital twin platform that creates a virtual version of yourself for self-exploration, decision-making, and friendly debates with your digital doppelgänger.',
      icon: <Brain size={24} className="text-cyan-500" />,
      tags: ['AI', 'Digital Twin', 'Self-Exploration']
    },
    {
      id: 'universe-weather',
      name: 'Alternate Reality Weather',
      description: 'Creative weather application that shows what the weather is like in parallel universes, featuring a cosmic interface and dimensional exploration.',
      icon: <Sparkles size={24} className="text-purple-500" />,
      tags: ['Creative', 'Weather', 'Interactive']
    },
    {
      id: 'triple-trade',
      name: 'Triple Trade App',
      description: 'Mobile application built with Flutter for trading services with intuitive UI and seamless user experience.',
      icon: <Smartphone size={24} className="text-blue-600" />,
      tags: ['Flutter', 'Mobile Development', 'Trading']
    },
    {
      id: 'lapromise-nursery',
      name: 'LaPromise Nursery Management',
      description: 'Clean dashboard system using Python and SQLite for managing nursery school operations, student records, and administrative tasks.',
      icon: <School size={24} className="text-green-600" />,
      tags: ['Python', 'SQLite', 'Dashboard']
    },
    {
      id: 'kina-gorilla',
      name: 'Kina - Gorilla Game',
      description: 'Interactive game developed with Vue.js featuring gorilla characters and engaging gameplay mechanics.',
      icon: <Gamepad2 size={24} className="text-orange-600" />,
      tags: ['Vue.js', 'Game Development', 'Interactive']
    },
    {
      id: 'library-system',
      name: 'Library Management System',
      description: 'Comprehensive library management platform for tracking books, managing loans, and organizing library resources.',
      icon: <BookOpen size={24} className="text-indigo-600" />,
      tags: ['Library', 'Management', 'Database']
    },
    {
      id: 'tree-track',
      name: 'Tree Track',
      description: 'Environmental tracking application for monitoring tree planting initiatives and forest conservation efforts.',
      icon: <Trees size={24} className="text-emerald-600" />,
      tags: ['Environment', 'Tracking', 'Conservation']
    },
    {
      id: 'movie-streaming',
      name: 'Movie Streaming Platform',
      description: 'Modern streaming platform with intuitive interface for browsing and watching movies with smooth playback experience.',
      icon: <Film size={24} className="text-pink-600" />,
      tags: ['Streaming', 'Entertainment', 'Web App']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary-600 to-orange-500 bg-clip-text text-transparent">
            Things I've Built
          </h2>
          <p className="text-gray-600 text-lg">
            A collection of projects that solve real problems
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a 
              key={project.id} 
              href={`/project/${project.id}`} 
              className="group glass backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 neumorphic rounded-lg group-hover:bg-primary-50 transition-colors duration-300">
                  {project.icon}
                </div>
                <ExternalLink size={16} className="text-gray-400 group-hover:text-primary-600 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 glass backdrop-blur-sm text-gray-600 rounded-full text-xs font-medium hover:bg-white/30 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}