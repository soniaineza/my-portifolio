import React from 'react';
import { MapPin, Globe, Calendar } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-orange-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto mb-12 rounded-full"></div>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Who I Am Section */}
          <div className="md:w-1/2 glass backdrop-blur-lg rounded-2xl p-8 shadow-xl animate-fade-in">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Who I Am</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a passionate and creative software developer specializing in
              web and mobile development. I have strong skills in JavaScript,
              Flutter, and smart city solutions, with experience in UI/UX
              design, custom styling, and interactive web components.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I also explore AI and image processing, particularly in
              translating text from images. I'm focused on building impactful
              real-world solutions and dream of creating platforms where
              developers can be discovered by big companies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I'm curious, innovative, and always learning. I believe in faith,
              hard work, and God's timing.
            </p>
          </div>
          
          {/* Personal Details Section */}
          <div className="md:w-1/2">
            <div className="glass backdrop-blur-lg rounded-2xl p-8 shadow-xl animate-slide-up">
              <h3 className="text-xl font-semibold mb-6 text-primary-700">Personal Details</h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 neumorphic rounded-xl hover:scale-[1.02] transition-transform duration-300">
                  <MapPin size={24} className="text-primary-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-800">Location</p>
                    <p className="text-gray-600">Kigali, Rwanda</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 neumorphic rounded-xl hover:scale-[1.02] transition-transform duration-300">
                  <Calendar size={24} className="text-primary-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-800">Age</p>
                    <p className="text-gray-600">17</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 neumorphic rounded-xl hover:scale-[1.02] transition-transform duration-300">
                  <Globe size={24} className="text-primary-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-800">Nationality</p>
                    <p className="text-gray-600">Rwandan</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="font-medium mb-4 text-gray-800">Languages</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 neumorphic-orange text-orange-800 rounded-full text-sm font-medium">
                      English
                    </span>
                    <span className="px-4 py-2 neumorphic-orange text-orange-800 rounded-full text-sm font-medium">
                      Kinyarwanda
                    </span>
                    <span className="px-4 py-2 neumorphic-orange text-orange-800 rounded-full text-sm font-medium">
                      French
                    </span>
                    <span className="px-4 py-2 neumorphic-orange text-orange-800 rounded-full text-sm font-medium">
                      Kiswahili
                    </span>
                    <span className="px-4 py-2 neumorphic-orange text-orange-800 rounded-full text-sm font-medium">
                      chinese
                    </span>
                    <span className="px-4 py-2 neumorphic-orange text-orange-800 rounded-full text-sm font-medium">
                      lingala
                    </span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="font-medium mb-4 text-gray-800">Interests</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 glass backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      Building tech solutions
                    </span>
                    <span className="px-4 py-2 glass backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      AI & automation
                    </span>
                    <span className="px-4 py-2 glass backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      Education technology
                    </span>
                    <span className="px-4 py-2 glass backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      Working abroad
                    </span>
                    <span className="px-4 py-2 glass backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      Personal development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}