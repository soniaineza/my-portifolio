import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12 rounded-full"></div>
        
        <div className="max-w-3xl mx-auto">
          {/* Current Education */}
          <div className="relative pl-8 sm:pl-32 py-6 group glass-dark backdrop-blur-lg rounded-2xl p-6 shadow-xl mb-6 animate-fade-in bg-slate-800/50">
            <div className="flex flex-col sm:flex-row items-start mb-4 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-blue-500 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-blue-500 after:border-2 after:box-content after:border-blue-500 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-300 bg-blue-900/50 rounded-full">
                Current
              </time>
              <div className="text-xl font-bold text-gray-100">
                Level 5 TVET Certificate in Software Development
              </div>
            </div>
            <div className="text-gray-300 font-medium mb-4">
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-blue-400 flex items-center">
                <BookOpen size={18} className="mr-2" />
                Notable Units
              </h4>
              <ul className="mt-3 space-y-2">
                {[
                  'GENPP501 - Python Programming', 
                  'SWDND501 - NoSQL Database Development', 
                  'SWDOT501 - DevOps Application', 
                  'GENQA501 - Quality Assurance Application', 
                  'PHYMP401 - Mechanics & Properties of Matter', 
                  'SWDVF301 - Game Development (Vue.js)', 
                  'Advanced Mathematics (Complex Numbers, Taylor Series, Statistics, etc.)'
                ].map((unit, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">{unit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Past Education - Wisdom High School */}
          <div className="relative pl-8 sm:pl-32 py-6 group bg-slate-700/50 rounded-2xl p-6 mb-6 animate-slide-up">
            <div className="flex flex-col sm:flex-row items-start mb-4 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-600 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-slate-500 after:border-2 after:box-content after:border-slate-500 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-gray-400 bg-slate-800 rounded-full">
                Past
              </time>
              <div className="text-xl font-bold text-gray-100">
                Wisdom High School
              </div>
            </div>
            <div className="text-gray-300">Senior 1 – Senior 3</div>
          </div>
          
          {/* Early Education - LaPromise School */}
          <div className="relative pl-8 sm:pl-32 py-6 group bg-slate-700/50 rounded-2xl p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col sm:flex-row items-start mb-4 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-600 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-slate-500 after:border-2 after:box-content after:border-slate-500 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-gray-400 bg-slate-800 rounded-full">
                2018
              </time>
              <div className="text-xl font-bold text-gray-100">
                LaPromise School
              </div>
            </div>
            <div className="text-gray-300">Nursery 1 – Primary 6</div>
          </div>
        </div>
      </div>
    </section>
  );
}