import React from 'react';
import { Code, Smartphone, Server, Database, Palette } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} className="text-primary-600" />,
      skills: ['JavaScript', 'Python', 'Dart (Flutter)']
    },
    {
      title: 'Web Development',
      icon: <Code size={24} className="text-primary-600" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js']
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone size={24} className="text-primary-600" />,
      skills: ['Flutter']
    },
    {
      title: 'Backend',
      icon: <Server size={24} className="text-primary-600" />,
      skills: ['Python (SQLite)', 'NoSQL' ,'java script' ]
    },
    {
      title: 'Databases',
      icon: <Database size={24} className="text-primary-600" />,
      skills: ['SQLite', 'NoSQL','Mongo DB','pocketBase']
    },
    {
      title: 'DevOps & QA',
      icon: <div className="w-6 h-6 text-primary-600 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h2c.6 0 1 .4 1 1z"/>
          <circle cx="14" cy="4" r="2"/>
          <path d="M10 9c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h2c.6 0 1 .4 1 1z"/>
          <circle cx="10" cy="4" r="2"/>
          <path d="M20 21v-8"/>
          <path d="M12 21v-4"/>
          <path d="M4 21v-4"/>
          <path d="M16 21v-6"/>
          <path d="M8 21v-8"/>
        </svg>
      </div>,
      skills: ['CI/CD', 'Software Testing', 'Quality Assurance']
    },
    {
      title: 'Tools',
      icon: <div className="w-6 h-6 text-primary-600 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20"/>
          <path d="M20 6 4 18"/>
          <path d="m6 6 12 12"/>
        </svg>
      </div>,
      skills: ['IDX', 'VS Code', 'GitHub' ,'mongo Atlas','Mongo Compass']
    },
    {
      title: 'Other',
      icon: <Palette size={24} className="text-primary-600" />,
      skills: ['UI/UX Design', 'Smart City Solutions', 'Algorithm Design', 'Problem Solving','Godot' ,'']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-orange-500 bg-clip-text text-transparent">
          My Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="neumorphic p-3 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4 text-primary-700">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center group">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-primary-700 transition-colors duration-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}