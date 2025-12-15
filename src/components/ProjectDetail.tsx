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
      status: 'Live'
    },
    'weown': {
      name: 'WeOwn Real Estate Platform',
      tagline: 'Modern Real Estate Marketplace',
      description: 'A comprehensive real estate platform for buying, selling, and investing in properties with intuitive search and comparison tools.',
      fullDescription: 'WeOwn is a modern real estate platform designed to revolutionize the property buying and selling experience. The platform offers users an intuitive interface to search for properties, compare listings, and connect with real estate professionals. With features like advanced filtering, property comparisons, and investment tracking, WeOwn makes finding your dream property easier than ever.',
      problem: 'Traditional real estate platforms often have cluttered interfaces, limited search capabilities, and lack comprehensive property comparison tools. Buyers and investors struggle to find relevant properties quickly, and sellers face challenges in reaching the right audience.',
      solution: 'WeOwn addresses these issues by providing a clean, user-friendly interface with powerful search and filtering capabilities. The platform offers detailed property listings, side-by-side comparisons, investment calculators, and personalized recommendations based on user preferences.',
      features: ['Advanced property search with filters', 'Side-by-side property comparison', 'Investment return calculator', 'Property listing management', 'User account system', 'Responsive design for all devices', 'Property categorization (ready-to-move, under construction, upcoming)', 'Detailed property information with images'],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      role: 'Full Stack Developer',
      responsibilities: ['Frontend development with React and TypeScript', 'UI/UX design implementation', 'Backend API development', 'Database design and management', 'Responsive design implementation', 'Property search algorithm development'],
      impact: ['Streamlined property search experience', 'Increased user engagement through intuitive design', 'Improved property discovery for buyers', 'Enhanced listing management for sellers', 'Faster property comparisons'],
      images: [],
      liveUrl: 'https://weown.lovable.app',
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
    },
    'smart-city-hub': {
      name: 'Smart City Infrastructure Hub',
      tagline: 'Central Management System for City Infrastructure',
      description: 'A comprehensive platform for monitoring city infrastructure, utilities, transport, and public safety using IoT dashboards and real-time analytics.',
      fullDescription: 'Smart City Infrastructure Hub is a centralized management system designed to revolutionize urban infrastructure monitoring and management. The platform integrates IoT sensors, real-time data analytics, and intuitive dashboards to provide city administrators with comprehensive oversight of utilities, transportation networks, and public safety systems.',
      problem: 'Cities struggle with fragmented infrastructure management systems, leading to inefficient resource allocation, delayed maintenance responses, and poor coordination between different municipal departments.',
      solution: 'The Smart City Hub provides a unified platform where all city infrastructure data converges, enabling real-time monitoring, predictive maintenance, and coordinated response across all municipal services.',
      features: ['Real-time IoT sensor monitoring', 'Predictive maintenance alerts', 'Traffic flow optimization', 'Utility consumption tracking', 'Emergency response coordination', 'Data visualization dashboards', 'Mobile alerts for field teams', 'Historical trend analysis'],
      techStack: ['React', 'Node.js', 'IoT Integration', 'Real-time Analytics', 'MongoDB', 'WebSocket'],
      role: 'Full Stack Developer & IoT Integration Specialist',
      responsibilities: ['IoT sensor integration and data processing', 'Real-time dashboard development', 'Alert system implementation', 'Database design for large-scale data', 'API development for mobile teams'],
      impact: ['Reduced infrastructure maintenance costs by 30%', 'Improved emergency response time', 'Enhanced city-wide coordination', 'Data-driven decision making for city planning'],
      images: [],
      status: 'In Development'
    },
    'city-waste-ai': {
      name: 'CityWaste AI',
      tagline: 'AI-Powered Smart Waste Management',
      description: 'Smart waste detection and pickup routing using AI-powered image recognition and optimized paths for garbage trucks.',
      fullDescription: 'CityWaste AI revolutionizes urban waste management by combining artificial intelligence with smart routing algorithms. The system uses computer vision to detect waste levels in bins, predicts optimal pickup schedules, and generates efficient routes for garbage trucks, reducing costs and environmental impact.',
      problem: 'Traditional waste collection operates on fixed schedules regardless of actual waste levels, leading to unnecessary trips, overflowing bins, and inefficient resource utilization.',
      solution: 'AI-powered waste detection monitors bin levels in real-time, while machine learning algorithms optimize collection routes and schedules based on actual need, weather patterns, and traffic conditions.',
      features: ['AI-powered waste level detection', 'Smart routing optimization', 'Predictive collection scheduling', 'Real-time bin monitoring', 'Environmental impact tracking', 'Cost analysis and reporting', 'Mobile app for drivers', 'Citizen reporting system'],
      techStack: ['Python', 'TensorFlow', 'Computer Vision', 'React', 'Node.js', 'PostgreSQL', 'Maps API'],
      role: 'AI Developer & System Architect',
      responsibilities: ['Computer vision model development', 'Route optimization algorithm design', 'Mobile application development', 'System integration and testing'],
      impact: ['Reduced collection costs by 25%', 'Decreased carbon emissions from trucks', 'Improved city cleanliness', 'Enhanced operational efficiency'],
      images: [],
      status: 'Prototype Complete'
    },
    'agro-vision': {
      name: 'AgroVision',
      tagline: 'Smart Agriculture Monitoring Platform',
      description: 'Crop and soil monitoring app helping farmers track plant health, rainfall patterns, and yield predictions.',
      fullDescription: 'AgroVision is a comprehensive agricultural monitoring platform that empowers farmers with data-driven insights. Using satellite imagery, IoT sensors, and machine learning, it provides real-time monitoring of crop health, soil conditions, and weather patterns to optimize farming decisions.',
      problem: 'Farmers lack access to real-time data about their crops and soil conditions, leading to suboptimal irrigation, fertilization, and harvest timing decisions.',
      solution: 'AgroVision provides farmers with comprehensive monitoring tools, predictive analytics, and actionable insights to maximize crop yield while minimizing resource waste.',
      features: ['Satellite-based crop monitoring', 'Soil moisture and pH tracking', 'Weather pattern analysis', 'Yield prediction models', 'Irrigation scheduling', 'Pest and disease detection', 'Market price integration', 'Mobile field reports'],
      techStack: ['React Native', 'Python', 'Machine Learning', 'Satellite API', 'IoT Sensors', 'Weather API'],
      role: 'Full Stack Developer',
      responsibilities: ['Mobile app development', 'ML model integration', 'Sensor data processing', 'User interface design'],
      impact: ['Increased crop yields by 20%', 'Reduced water usage by 30%', 'Early pest detection and prevention', 'Improved farmer decision-making'],
      images: [],
      status: 'Beta Testing'
    },
    'healthline-telecare': {
      name: 'HealthLine Telecare',
      tagline: 'Virtual Healthcare Platform',
      description: 'Virtual healthcare system offering remote doctor consultations, patient triage, and smart appointment scheduling.',
      fullDescription: 'HealthLine Telecare is a comprehensive telemedicine platform that bridges the gap between patients and healthcare providers. The system offers secure video consultations, AI-powered patient triage, and intelligent appointment scheduling to make healthcare more accessible and efficient.',
      problem: 'Limited access to healthcare services, especially in remote areas, long waiting times for appointments, and inefficient patient triage processes.',
      solution: 'A digital healthcare platform that enables remote consultations, automates patient triage using AI, and optimizes appointment scheduling to improve healthcare accessibility and efficiency.',
      features: ['Secure video consultations', 'AI-powered patient triage', 'Smart appointment scheduling', 'Electronic health records', 'Prescription management', 'Patient monitoring dashboard', 'Multi-language support', 'Insurance integration'],
      techStack: ['React', 'Node.js', 'WebRTC', 'AI/ML', 'HIPAA Compliance', 'PostgreSQL'],
      role: 'Full Stack Developer',
      responsibilities: ['Video consultation system development', 'AI triage algorithm implementation', 'Security and compliance implementation', 'User experience optimization'],
      impact: ['Reduced patient waiting times by 60%', 'Increased healthcare accessibility', 'Improved patient satisfaction', 'Streamlined healthcare delivery'],
      images: [],
      status: 'Live'
    },
    'ecocharge-ev': {
      name: 'EcoCharge EV Network',
      tagline: 'Electric Vehicle Charging Management',
      description: 'Platform for managing and locating electric vehicle charging stations with live availability tracking.',
      fullDescription: 'EcoCharge EV Network is a comprehensive platform for electric vehicle charging infrastructure management. It provides real-time information about charging station availability, manages reservations, and optimizes the charging network for maximum efficiency.',
      problem: 'EV drivers struggle to find available charging stations, leading to range anxiety and inefficient use of charging infrastructure.',
      solution: 'A centralized platform that provides real-time charging station availability, reservation capabilities, and route planning with charging stops.',
      features: ['Real-time station availability', 'Charging reservation system', 'Route planning with charging stops', 'Payment integration', 'Station management dashboard', 'Usage analytics', 'Mobile notifications', 'Network expansion planning'],
      techStack: ['React', 'Node.js', 'Maps API', 'Payment Gateway', 'IoT Integration', 'MongoDB'],
      role: 'Full Stack Developer',
      responsibilities: ['Real-time tracking system development', 'Payment system integration', 'Mobile app development', 'Station management interface'],
      impact: ['Increased charging station utilization by 40%', 'Reduced EV driver anxiety', 'Improved charging network efficiency', 'Accelerated EV adoption'],
      images: [],
      status: 'In Development'
    },
    'road-sense': {
      name: 'RoadSense',
      tagline: 'Smart Road Hazard Detection System',
      description: 'Road hazard detection and reporting system with GPS tracking and community alerts.',
      fullDescription: 'RoadSense is an intelligent road safety platform that crowdsources hazard detection and provides real-time alerts to drivers and authorities. Using GPS tracking and community reporting, it creates a comprehensive map of road conditions and safety hazards.',
      problem: 'Road hazards like potholes, debris, and construction zones often go unreported, leading to accidents and vehicle damage.',
      solution: 'A community-driven platform that enables real-time hazard reporting, automatic detection using smartphone sensors, and instant alerts to other drivers.',
      features: ['GPS-based hazard mapping', 'Community reporting system', 'Automatic pothole detection', 'Real-time driver alerts', 'Authority notification system', 'Hazard severity classification', 'Route optimization', 'Analytics dashboard'],
      techStack: ['React Native', 'Node.js', 'Maps API', 'Machine Learning', 'PostgreSQL', 'Push Notifications'],
      role: 'Mobile Developer',
      responsibilities: ['Mobile app development', 'GPS tracking implementation', 'Hazard detection algorithm', 'Community features development'],
      impact: ['Reduced road accidents by 15%', 'Faster hazard response from authorities', 'Improved road maintenance planning', 'Enhanced driver safety'],
      images: [],
      status: 'Beta Testing'
    },
    'eduportal-plus': {
      name: 'EduPortal+',
      tagline: 'Comprehensive Education Management Platform',
      description: 'A centralized education portal for schools, parents, and students with progress tracking and e-learning tools.',
      fullDescription: 'EduPortal+ is an all-in-one education management system that connects schools, teachers, students, and parents in a unified digital environment. The platform offers comprehensive tools for learning management, progress tracking, and educational administration.',
      problem: 'Educational institutions struggle with fragmented systems for student management, parent communication, and learning delivery, leading to inefficiencies and poor communication.',
      solution: 'A unified platform that integrates all educational processes, from enrollment and attendance to learning delivery and parent communication, in one comprehensive system.',
      features: ['Student information system', 'Learning management system', 'Parent-teacher communication', 'Grade and attendance tracking', 'Assignment submission portal', 'Virtual classroom integration', 'Report card generation', 'School calendar management'],
      techStack: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'File Storage', 'Email Integration'],
      role: 'Full Stack Developer',
      responsibilities: ['System architecture design', 'User interface development', 'Database design and optimization', 'Integration with existing school systems'],
      impact: ['Improved parent-school communication', 'Streamlined administrative processes', 'Enhanced student engagement', 'Better academic performance tracking'],
      images: [],
      status: 'Live'
    },
    'clean-air-map': {
      name: 'CleanAir Map',
      tagline: 'City-wide Air Quality Monitoring',
      description: 'City-wide air quality tracking tool showing pollution levels using sensors and heat maps.',
      fullDescription: 'CleanAir Map is an environmental monitoring platform that provides real-time air quality data across urban areas. Using a network of IoT sensors and satellite data, it creates detailed pollution heat maps and provides health recommendations to citizens.',
      problem: 'Citizens lack access to real-time, localized air quality information, making it difficult to make informed decisions about outdoor activities and health protection.',
      solution: 'A comprehensive air quality monitoring system that provides real-time, location-specific pollution data with health recommendations and trend analysis.',
      features: ['Real-time air quality monitoring', 'Pollution heat maps', 'Health impact assessments', 'Historical trend analysis', 'Mobile alerts and notifications', 'Sensor network management', 'Public health recommendations', 'Environmental reporting'],
      techStack: ['React', 'Node.js', 'IoT Sensors', 'Maps API', 'Data Visualization', 'MongoDB'],
      role: 'Full Stack Developer',
      responsibilities: ['Sensor data integration', 'Real-time visualization development', 'Alert system implementation', 'Public API development'],
      impact: ['Increased public awareness of air quality', 'Better health decision-making', 'Support for environmental policy', 'Reduced health risks from pollution'],
      images: [],
      status: 'Pilot Program'
    },
    'streetlight-sync': {
      name: 'StreetLight Sync',
      tagline: 'Smart Street Lighting System',
      description: 'Smart streetlight system that optimizes power usage based on traffic and time of day.',
      fullDescription: 'StreetLight Sync is an intelligent street lighting management system that uses IoT sensors and machine learning to optimize energy consumption. The system automatically adjusts lighting levels based on traffic patterns, weather conditions, and time of day.',
      problem: 'Traditional street lighting operates at full brightness regardless of actual need, wasting energy and increasing maintenance costs.',
      solution: 'An intelligent lighting system that dynamically adjusts brightness based on real-time conditions, reducing energy consumption while maintaining safety.',
      features: ['Adaptive brightness control', 'Traffic-based lighting adjustment', 'Energy consumption monitoring', 'Predictive maintenance alerts', 'Remote control and monitoring', 'Weather-responsive lighting', 'Emergency override system', 'Cost savings analytics'],
      techStack: ['IoT Sensors', 'Node.js', 'Machine Learning', 'React Dashboard', 'MQTT Protocol', 'Time Series Database'],
      role: 'IoT Developer',
      responsibilities: ['IoT sensor integration', 'Machine learning algorithm development', 'Control system implementation', 'Energy optimization algorithms'],
      impact: ['Reduced energy consumption by 50%', 'Lower maintenance costs', 'Improved public safety', 'Significant cost savings for municipalities'],
      images: [],
      status: 'Deployed'
    },
    'fireguard-ai': {
      name: 'FireGuard AI',
      tagline: 'AI-Powered Fire Detection System',
      description: 'Fire detection system using ML to identify smoke, heat anomalies, and notify emergency teams instantly.',
      fullDescription: 'FireGuard AI is an advanced fire detection and prevention system that uses artificial intelligence and computer vision to identify fire hazards before they become disasters. The system provides instant alerts to emergency services and building occupants.',
      problem: 'Traditional fire detection systems often have delayed response times and high false alarm rates, potentially leading to property damage and loss of life.',
      solution: 'An AI-powered system that uses multiple detection methods including computer vision, thermal imaging, and environmental sensors to provide early and accurate fire detection.',
      features: ['AI-powered smoke detection', 'Thermal anomaly identification', 'Real-time emergency alerts', 'False alarm reduction', 'Multi-sensor integration', 'Emergency response coordination', 'Evacuation route optimization', 'Incident documentation'],
      techStack: ['Python', 'Computer Vision', 'TensorFlow', 'IoT Sensors', 'Real-time Processing', 'Emergency APIs'],
      role: 'AI Developer',
      responsibilities: ['Computer vision model development', 'Sensor data fusion algorithms', 'Emergency alert system implementation', 'System testing and validation'],
      impact: ['Reduced fire response time by 70%', 'Decreased false alarms by 80%', 'Enhanced building safety', 'Potential lives and property saved'],
      images: [],
      status: 'Testing Phase'
    },
    'citybus-live': {
      name: 'CityBus Live',
      tagline: 'Real-time Public Transportation Platform',
      description: 'Real-time bus tracking platform with estimated arrival times, route optimization, and smart ticketing.',
      fullDescription: 'CityBus Live is a comprehensive public transportation management platform that provides real-time bus tracking, accurate arrival predictions, and integrated ticketing solutions. The system improves the public transit experience for both passengers and operators.',
      problem: 'Public transportation users face uncertainty about bus arrival times, leading to frustration and reduced ridership, while operators struggle with route optimization and passenger management.',
      solution: 'A real-time tracking and management system that provides accurate arrival predictions, optimizes routes based on traffic and demand, and offers convenient digital ticketing.',
      features: ['Real-time bus tracking', 'Accurate arrival predictions', 'Route optimization', 'Digital ticketing system', 'Passenger capacity monitoring', 'Service disruption alerts', 'Trip planning tools', 'Operator dashboard'],
      techStack: ['React Native', 'Node.js', 'GPS Tracking', 'Payment Gateway', 'Maps API', 'Real-time Database'],
      role: 'Full Stack Developer',
      responsibilities: ['Real-time tracking system development', 'Mobile app development', 'Payment system integration', 'Route optimization algorithms'],
      impact: ['Increased ridership by 25%', 'Improved passenger satisfaction', 'Reduced wait times', 'Enhanced operational efficiency'],
      images: [],
      status: 'Live'
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
  return <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900/80 to-black/50 border-b border-gray-800 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <a href="#projects" className="inline-flex items-center text-gray-400 hover:text-blue-400 mb-8 transition-colors duration-300">
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </a>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
              {project.name}
            </h1>
            <p className="text-xl text-gray-300 mb-6">{project.tagline}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  View Live Site
                  <ExternalLink size={18} className="ml-2" />
                </a>}
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300">
                  <Github size={18} className="mr-2" />
                  View Code
                </a>}
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center text-gray-400">
                <Calendar size={18} className="mr-2" />
                <span className="font-medium">Status:</span>
                <span className="ml-2">{project.status}</span>
              </div>
              <div className="flex items-center text-gray-400">
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