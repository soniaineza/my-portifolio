import React from 'react';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-28 pb-20 px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in">
          <div className="inline-block px-4 py-2 neumorphic-orange text-orange-800 rounded-full text-sm font-medium mb-6 animate-float">
            👋 Available for opportunities
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-600 to-orange-500 bg-clip-text text-transparent">
              Sonia
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Software Developer & Problem Solver
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Building impactful solutions with JavaScript, Flutter, and smart
            city technologies. Passionate about creating platforms that connect
            developers with opportunities.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="#contact" 
              className="px-6 py-3 neumorphic-orange text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Talk
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 glass backdrop-blur-sm text-primary-600 border-2 border-primary-200 rounded-lg hover:bg-primary-50 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/soniaineza" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 neumorphic rounded-full hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md" 
              aria-label="GitHub profile"
            >
              <div className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/soniaineza" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 neumorphic rounded-full hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md" 
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:inezasonia124@gmail.com" 
              className="p-3 neumorphic rounded-full hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md" 
              aria-label="Email me"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full neumorphic shadow-2xl bg-center bg-cover bg-no-repeat animate-blob"
                 style={{ backgroundImage: "url(/90.jpg)" }}>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <a 
          href="#about" 
          className="animate-bounce p-3 neumorphic rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110" 
          aria-label="Scroll down"
        >
          <ArrowDown size={24} className="text-primary-600" />
        </a>
      </div>
    </section>
  );
}