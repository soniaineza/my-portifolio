import React from 'react';
import { Heart, Github, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-orange-400 bg-clip-text text-transparent">
              Sonia Ineza
            </h3>
            <p className="text-gray-400 mt-2">Software Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/soniaineza" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 neumorphic rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary-500" 
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/soniaineza" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 neumorphic rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary-500" 
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Sonia Ineza. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="text-red-500 mx-1 animate-pulse" /> 
          </p>
        </div>
      </div>
    </footer>
  );
}