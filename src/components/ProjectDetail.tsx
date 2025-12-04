import React from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Shield, Target } from 'lucide-react';
interface ProjectDetailProps {
  projectId: string;
}
export function ProjectDetail({
  projectId
}: ProjectDetailProps) {
  const projectsData: Record<string, any> = {
    'verbatim-web-maker': {
      name: 'Verbatim Web Maker',
      tagline: 'AI Voice-Controlled Web Development Platform',
      description: 'AI-powered web development platform that generates websites from voice commands and natural language descriptions.',
      fullDescription: 'Verbatim Web Maker is an innovative AI-powered platform that revolutionizes web development by allowing users to create websites using only their voice. By leveraging advanced natural language processing and voice recognition technologies, users can describe their website requirements in plain English and have a fully functional website generated instantly.',
      problem: 'Traditional web development requires technical skills, significant time investment, and often involves complex coding. Many people with great ideas lack the technical expertise to bring them to life online, creating a barrier between creativity and implementation.',
      solution: 'Verbatim Web Maker eliminates the technical barriers to web development by translating natural language descriptions into functional websites. Users simply describe what they want their website to do, and the AI generates the appropriate code and structure automatically.',
      features: ['Voice command recognition', 'Natural language processing', 'Instant website generation', 'Template customization options', 'Drag-and-drop editor', 'Responsive design', 'SEO optimization', 'Hosting integration'],
      techStack: ['React', 'Node.js', 'AI/ML', 'Voice Recognition API', 'Natural Language Processing', 'Tailwind CSS'],
      role: 'Full Stack Developer & AI Integration Specialist',
      responsibilities: ['AI model integration and training', 'Voice recognition system implementation', 'Natural language processing pipeline', 'Frontend development with React', 'Backend API development', 'UI/UX design'],
      impact: ['Democratized web development for non-technical users', 'Reduced website creation time from weeks to minutes', 'Enabled rapid prototyping and iteration', 'Provided accessible web development tools'],
      images: [],
      liveUrl: 'https://verbatim-web-maker.lovable.app',
      githubUrl: 'https://github.com/soniaineza/verbatim-web-maker',
      status: 'Live'
    },
    'sheja-cards': {
      name: 'Sheja Cards',
      tagline: 'Modern Student Card Management Platform',
      description: 'A comprehensive student card management platform that helps schools run effortlessly, responsive, and built to simplify everything from enrollment to analytics.',
      fullDescription: 'Sheja Cards is a modern web platform designed to revolutionize how schools manage student information and cards. Built with a focus on user experience and efficiency, it provides schools with powerful tools to handle enrollment, generate student cards, track analytics, and manage their entire student database from a single, intuitive dashboard.',
      problem: 'Schools struggle with manual student card management, leading to inefficiencies, errors, and time-consuming administrative tasks. Traditional systems lack modern features like real-time analytics, responsive design, and seamless integration.',
      solution: 'Sheja Cards provides a centralized digital platform where schools can manage student information, generate professional cards, track enrollment trends, and access powerful analytics—all through an intuitive, modern interface.',
      features: ['Student enrollment and management', 'Digital card generation', 'Real-time analytics dashboard', 'Class and staff management', 'Responsive design for all devices', 'Secure authentication system', 'Export and reporting tools', 'Academic year tracking'],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Database'],
      role: 'Full Stack Developer',
      responsibilities: ['System architecture and design', 'Frontend development with React', 'Backend API development', 'Database design and optimization', 'UI/UX design and implementation'],
      impact: ['Streamlined school administration', 'Reduced card generation time by 80%', 'Improved data accuracy and accessibility', 'Enhanced user experience for administrators'],
      images: [],
      liveUrl: 'https://shejacards.vercel.app/',
      status: 'Live in Beta'
    },
    'inkingi-rescue': {
      name: 'INKINGI Rescue',
      tagline: 'Emergency Response & Rescue Coordination System',
      description: 'Digital emergency response platform enabling real-time incident reporting, secure data handling, and faster response from emergency authorities.',
      fullDescription: 'INKINGI is a technology-driven emergency rescue and response platform designed to improve how emergencies are reported, managed, and resolved. The system connects citizens with emergency responders through real-time communication, location tracking, and secure data transmission. Its main goal is to reduce response time, improve coordination between institutions, and ultimately save lives.',
      problem: 'In many communities, emergency response is slow due to poor communication between victims and responders, manual reporting systems, lack of real-time location tracking, fragmented coordination between institutions, and weak data security in emergency records. These gaps lead to delayed interventions and loss of lives.',
      solution: 'INKINGI provides a centralized digital platform where emergencies can be reported instantly, locations are shared in real time, authorities receive verified alerts, data is stored securely, and response coordination becomes faster and more accurate.',
      features: ['Real-time emergency reporting', 'GPS-based location sharing', 'Secure user authentication', 'Incident tracking dashboard', 'Role-based access control (citizens, responders, administrators)', 'Data encryption and secure storage', 'Notification and alert system', 'Reporting and analytics tools'],
      techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PostgreSQL', 'Maps API'],
      role: 'Project Founder & Lead Developer',
      responsibilities: ['System design and architecture', 'Security and data protection planning', 'Coordination with institutions and stakeholders', 'Feature planning and implementation', 'Compliance with national ICT policies'],
      security: ['Data privacy protection', 'Encrypted communication', 'Secure authentication', 'Institutional access control', 'Compliance with data protection policies'],
      impact: ['Reduced emergency response time', 'Improved coordination between responders', 'Protected sensitive emergency data', 'Strengthened community safety', 'Support for national disaster management'],
      images: [],
      status: 'Under Development',
      vision: 'Scale the system nationally and regionally to become the primary emergency response platform.'
    },
    'micro-weather': {
      name: 'Micro Weather Forecast',
      tagline: 'ML-Powered Weather Prediction Platform',
      description: 'Advanced weather forecasting application using machine learning for temperature and rain predictions with interactive visualizations.',
      fullDescription: 'Micro Weather Forecast is a sophisticated weather prediction platform that leverages machine learning models to provide accurate temperature and rainfall forecasts. The application features interactive charts, map integration, and a clean interface for viewing 7-day weather predictions with detailed ML model insights.',
      features: ['ML-based temperature predictions', 'Rain forecast with probability analysis', 'Interactive prediction charts', '7-day weather forecast', 'Map integration with location tracking', 'Historical weather data view', 'Real-time weather updates', 'Detailed daily forecasts with sunrise/sunset times'],
      techStack: ['React', 'Machine Learning', 'Charts Library', 'Maps API', 'Weather API'],
      role: 'Full Stack Developer',
      responsibilities: ['ML model integration', 'Data visualization implementation', 'Weather API integration', 'UI/UX design and development'],
      impact: ['Accurate weather predictions using ML', 'User-friendly weather visualization', 'Accessible forecast data for planning'],
      images: [],
      liveUrl: 'https://microweatherforecast.netlify.app/forecast',
      status: 'Live'
    },
    'twin-mind': {
      name: 'My Twin Mind',
      tagline: 'AI Digital Twin Platform',
      description: 'Create a virtual version of yourself that thinks, speaks, and decides like you for self-exploration and decision-making.',
      fullDescription: 'My Twin Mind is an innovative AI-powered platform that creates a digital twin of yourself. This virtual doppelgänger can engage in conversations, provide suggestions, help with decision-making, and offer a unique way to explore your own thoughts and perspectives through AI-driven interactions.',
      features: ['AI-powered digital twin creation', 'Natural conversation interface', 'Decision-making assistance', 'Self-exploration tools', 'Friendly debate functionality', 'Personalized AI responses', 'Secure and private interactions', 'Cosmic-themed interface'],
      techStack: ['React', 'AI/ML', 'Natural Language Processing', 'Cloud Services'],
      role: 'Full Stack Developer',
      responsibilities: ['AI integration and training', 'Conversation interface development', 'User experience design', 'Backend architecture'],
      impact: ['Innovative self-exploration tool', 'AI-powered personal assistant', 'Unique decision-making support'],
      images: [],
      liveUrl: 'https://my-twin-mind.lovable.app/',
      status: 'Live'
    },
    'universe-weather': {
      name: 'Alternate Reality Weather',
      tagline: 'Weather in Parallel Universes',
      description: 'Discover what the weather is like in parallel universes with this creative and immersive weather exploration platform.',
      fullDescription: 'Alternate Reality Weather is a creative weather application that takes the concept of weather forecasting to a whole new dimension. Instead of just showing local weather, it imagines and displays what the weather might be like in parallel universes, creating an engaging and imaginative user experience with a cosmic interface.',
      features: ['Parallel universe weather simulation', 'Cosmic-themed interface with animations', 'Dimensional weather exploration', 'Interactive universe selection', 'Creative weather visualizations', 'Immersive loading experiences', 'Unique weather phenomena', 'Sci-fi inspired design'],
      techStack: ['React', 'Animation Libraries', 'Creative Design', 'Weather Simulation'],
      role: 'Full Stack Developer',
      responsibilities: ['Creative concept development', 'Animation and visual effects', 'Weather simulation logic', 'UI/UX design'],
      impact: ['Unique take on weather apps', 'Engaging user experience', 'Creative technology showcase'],
      images: [],
      liveUrl: 'https://universe-weather-dream.lovable.app/',
      status: 'Live'
    },
    'triple-trade': {
      name: 'Triple Trade App',
      tagline: 'Mobile Trading Platform',
      description: 'Mobile application built with Flutter for trading services with intuitive UI and seamless user experience.',
      fullDescription: 'Triple Trade is a mobile trading application that provides users with a seamless platform to engage in trading activities. Built with Flutter for cross-platform compatibility, it offers a smooth and responsive experience on both iOS and Android devices.',
      features: ['Cross-platform mobile application', 'Intuitive trading interface', 'Real-time market data', 'Secure transactions', 'User portfolio management'],
      techStack: ['Flutter', 'Dart', 'Firebase'],
      role: 'Mobile Developer',
      images: [],
      status: 'Completed'
    },
    'lapromise-nursery': {
      name: 'LaPromise Nursery Management System',
      tagline: 'School Administration Dashboard',
      description: 'Clean dashboard system using Python and SQLite for managing nursery school operations, student records, and administrative tasks.',
      fullDescription: 'A comprehensive management system designed specifically for LaPromise Nursery School. The system streamlines administrative tasks, student record management, and provides insightful analytics for better decision-making.',
      features: ['Student enrollment and records', 'Attendance tracking', 'Parent communication portal', 'Fee management', 'Report generation', 'Staff management', 'Clean, intuitive dashboard'],
      techStack: ['Python', 'SQLite', 'HTML/CSS', 'JavaScript'],
      role: 'Full Stack Developer',
      images: [],
      status: 'Deployed'
    },
    'kina-gorilla': {
      name: 'Kina - Gorilla Game',
      tagline: 'Interactive Vue.js Game',
      description: 'Interactive game developed with Vue.js featuring gorilla characters and engaging gameplay mechanics.',
      fullDescription: 'Kina is an interactive browser-based game developed as part of the SWDVF301 Game Development unit. The game features gorilla characters and provides an engaging gameplay experience built entirely with Vue.js framework.',
      features: ['Interactive gameplay', 'Gorilla character animations', 'Score tracking system', 'Responsive controls', 'Sound effects and music', 'Multiple difficulty levels'],
      techStack: ['Vue.js', 'JavaScript', 'CSS3', 'HTML5 Canvas'],
      role: 'Game Developer',
      images: [],
      status: 'Completed'
    },
    'library-system': {
      name: 'Library Management System',
      tagline: 'Digital Library Platform',
      description: 'Comprehensive library management platform for tracking books, managing loans, and organizing library resources.',
      fullDescription: 'A complete library management solution that digitizes library operations, from cataloging books to managing member loans and tracking inventory. The system provides librarians with powerful tools to efficiently manage their collections.',
      features: ['Book cataloging and search', 'Member management', 'Loan tracking and due dates', 'Fine calculation', 'Inventory management', 'Report generation', 'Barcode scanning support'],
      techStack: ['Python', 'SQLite', 'Web Framework'],
      role: 'Developer',
      images: [],
      status: 'Completed'
    },
    'tree-track': {
      name: 'Tree Track',
      tagline: 'Environmental Monitoring System',
      description: 'Environmental tracking application for monitoring tree planting initiatives and forest conservation efforts.',
      fullDescription: 'Tree Track is an environmental monitoring platform designed to track tree planting initiatives and support forest conservation efforts. The system helps organizations monitor their environmental impact and manage reforestation projects.',
      features: ['Tree planting tracking', 'GPS location mapping', 'Growth monitoring', 'Species cataloging', 'Impact analytics', 'Project management', 'Photo documentation'],
      techStack: ['Web Technologies', 'Maps API', 'Database'],
      role: 'Developer',
      images: [],
      status: 'Completed'
    },
    'movie-streaming': {
      name: 'Movie Streaming Platform',
      tagline: 'Entertainment Streaming Service',
      description: 'Modern streaming platform with intuitive interface for browsing and watching movies with smooth playback experience.',
      fullDescription: 'A feature-rich movie streaming platform that provides users with an intuitive interface for discovering and watching movies. The platform includes search functionality, categorization, and a smooth video playback experience.',
      features: ['Movie catalog and search', 'Category browsing', 'Video player with controls', 'User watchlist', 'Responsive design', 'Smooth streaming experience', 'Movie details and ratings'],
      techStack: ['React', 'Video API', 'Database'],
      role: 'Full Stack Developer',
      images: [],
      status: 'Completed'
    }
  };
  const project = projectsData[projectId];
  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <a href="#projects" className="text-primary-600 hover:text-primary-800">
            ← Back to projects
          </a>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-white/80 to-white/50 border-b border-gray-100 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <a href="#projects" className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors duration-300">
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </a>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.name}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{project.tagline}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300">
                  View Live Site
                  <ExternalLink size={18} className="ml-2" />
                </a>}
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300">
                  <Github size={18} className="mr-2" />
                  View Code
                </a>}
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center text-gray-600">
                <Calendar size={18} className="mr-2" />
                <span className="font-medium">Status:</span>
                <span className="ml-2">{project.status}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users size={18} className="mr-2" />
                <span className="font-medium">Role:</span>
                <span className="ml-2">{project.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {project.fullDescription}
            </p>
          </section>

          {/* Problem & Solution */}
          {project.problem && <section className="mb-16">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Target size={24} className="mr-2 text-red-600" />
                    Problem
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Target size={24} className="mr-2 text-green-600" />
                    Solution
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </section>}

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature: string, index: number) => <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>)}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Code size={28} className="mr-3" />
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech: string, index: number) => <span key={index} className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium border border-primary-200">
                  {tech}
                </span>)}
            </div>
          </section>

          {/* Security (if applicable) */}
          {project.security && <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Shield size={28} className="mr-3" />
                Security & Compliance
              </h2>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <ul className="space-y-3">
                  {project.security.map((item: string, index: number) => <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>)}
                </ul>
              </div>
            </section>}

          {/* My Role */}
          {project.responsibilities && <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">My Role</h2>
              <p className="text-lg font-medium text-primary-600 mb-4">
                {project.role}
              </p>
              <ul className="space-y-3">
                {project.responsibilities.map((resp: string, index: number) => <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{resp}</span>
                  </li>)}
              </ul>
            </section>}

          {/* Impact */}
          {project.impact && <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Impact & Results</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.impact.map((item: string, index: number) => <div key={index} className="p-4 bg-gradient-to-br from-primary-50 to-purple-50 rounded-lg border border-primary-100">
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>)}
              </div>
            </section>}

          {/* Vision (if applicable) */}
          {project.vision && <section className="mb-16">
              <div className="bg-gradient-to-br from-primary-600 to-purple-600 text-white p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Vision</h2>
                <p className="text-lg leading-relaxed">{project.vision}</p>
              </div>
            </section>}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Let's create something amazing
          </p>
          <a href="#contact" className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
            Get In Touch
          </a>
        </div>
      </div>
    </div>;
}