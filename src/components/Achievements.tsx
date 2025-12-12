import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'Expert Python Developer',
      issuer: 'Codingal',
      date: 'Mar 20, 2025',
      description: 'Advanced Data Structures & Algorithms, mastering time complexity analysis, bit manipulation, & mathematical optimization while solving complex programming challenges',
      grade: 'Grade 12',
      image: '/certificates/python-expert.jpg',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 2,
      title: 'Advanced Website Developer',
      issuer: 'Codingal',
      date: 'Aug 20, 2024',
      description: 'Website Development Fundamentals, mastering HTML structure, CSS styling, & Bootstrap framework while building responsive websites with modern design principles',
      grade: 'Grade 12',
      image: '/certificates/web-developer.jpg',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      title: 'COPE Climate Change Certificate',
      issuer: 'Ingazi & COPE',
      date: 'Sep 03, 2024',
      description: 'Successfully completed comprehensive course on climate change, demonstrating acquired knowledge and skills in environmental sustainability and climate action',
      image: '/certificates/climate-change.jpg',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      id: 4,
      title: 'Flutter Mobile Development',
      issuer: 'Self-Directed Learning',
      date: 'Jun 15, 2024',
      description: 'Mastered Flutter framework for cross-platform mobile development, building multiple apps with complex UI/UX and state management',
      grade: 'Advanced Level',
      image: '/certificates/flutter-dev.jpg',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 5,
      title: 'AI & Machine Learning Projects',
      issuer: 'Personal Portfolio',
      date: 'Ongoing 2024',
      description: 'Developed multiple AI-powered applications including weather prediction, image processing, and smart city solutions using Python and ML libraries',
      grade: 'Intermediate',
      image: '/certificates/ai-ml.jpg',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 6,
      title: 'Smart City Solutions Developer',
      issuer: 'Project Portfolio',
      date: 'Dec 2024',
      description: 'Created comprehensive smart city infrastructure including waste management, traffic optimization, and environmental monitoring systems',
      grade: 'Advanced',
      image: '/certificates/smart-city.jpg',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary-600 to-orange-500 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-gray-600 text-lg">
            Milestones in my journey of continuous learning and skill development
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="group glass backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Preview */}
              <div className={`relative h-64 bg-gradient-to-br ${achievement.color} p-6 flex items-center justify-center`}>
                <div className="text-center text-white">
                  <Award size={64} className="mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm opacity-90">{achievement.issuer}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-medium flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {achievement.date}
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {achievement.title}
                  </h4>
                  {achievement.grade && (
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium mb-3">
                      {achievement.grade}
                    </span>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Award size={16} className="mr-2" />
                    <span>{achievement.issuer}</span>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6 glass backdrop-blur-lg rounded-xl">
            <div className="text-4xl font-bold text-primary-600 mb-2">6+</div>
            <div className="text-gray-600">Achievements</div>
          </div>
          <div className="text-center p-6 glass backdrop-blur-lg rounded-xl">
            <div className="text-4xl font-bold text-primary-600 mb-2">24+</div>
            <div className="text-gray-600">Projects Built</div>
          </div>
          <div className="text-center p-6 glass backdrop-blur-lg rounded-xl">
            <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="text-center p-6 glass backdrop-blur-lg rounded-xl">
            <div className="text-4xl font-bold text-primary-600 mb-2">2+</div>
            <div className="text-gray-600">Years Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
}
