import React from 'react';
import { ExternalLink } from 'lucide-react';

const designs = [
  {
    title: "TRIPLE TRADE",
    description: "Financial trading platform design",
    figmaUrl: "https://www.figma.com/design/tIPpmIZDcIpVunTZ2luac8/TRIPLE-TRADE?node-id=2-5137&t=fBChemTnfHviUK6y-0",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "INKINGI RESCUE",
    description: "Emergency response app design",
    figmaUrl: "https://www.figma.com/design/Gxm7tg8VpZFpL6U71S5lju/INKINGI-RESCUE?node-id=2-142&t=eeVPzxW2f7799F9I-0",
    imageUrl: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "BITWORK Tech",
    description: "Technology company website design",
    figmaUrl: "https://www.figma.com/design/hPs63Aes8su9SVok0DqJ9a/BITWORK-Tech?node-id=149-6387&t=dw2G2cusE3D4fsEa-0",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];
export function Designs() {
  return (
    <section id="designs" className="py-20 px-4 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Designs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out my UI/UX design work on Figma. Each project represents my approach to creating intuitive and visually appealing user experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div 
              key={index} 
              className="neumorphic rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={design.imageUrl} 
                  alt={design.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{design.title}</h3>
                <p className="text-gray-600 mb-4">{design.description}</p>
                <a 
                  href={design.figmaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 neumorphic-orange text-white rounded-lg hover:scale-105 transition-all duration-300"
                >
                  View in Figma
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}