import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary-600 to-orange-500 bg-clip-text text-transparent">
          Contact Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto mb-12 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="md:w-1/2 glass backdrop-blur-lg rounded-2xl p-8 shadow-xl animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 text-primary-700">Get In Touch</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center p-4 neumorphic rounded-xl hover:scale-[1.02] transition-transform duration-300">
                <Mail size={24} className="text-primary-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <a href="mailto:inezasonia124@gmail.com" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                    inezasonia124@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-4 neumorphic rounded-xl hover:scale-[1.02] transition-transform duration-300">
                <Phone size={24} className="text-primary-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <a href="tel:+250794715042" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                    +250 794 715 042
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-4 neumorphic rounded-xl hover:scale-[1.02] transition-transform duration-300">
                <MapPin size={24} className="text-primary-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600">Kigali, Rwanda</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="font-medium mb-4 text-gray-800">Find me on</p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/soniaineza" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 neumorphic rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary-50" 
                  aria-label="GitHub profile"
                >
                  <div className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/soniaineza" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 neumorphic rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary-50" 
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:w-1/2">
            <form className="glass backdrop-blur-lg rounded-2xl p-8 shadow-xl animate-slide-up">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 neumorphic-inset rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors duration-300" 
                  placeholder="Your Name" 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 neumorphic-inset rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors duration-300" 
                  placeholder="your.email@example.com" 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 neumorphic-inset rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors duration-300" 
                  placeholder="Subject" 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 neumorphic-inset rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors duration-300 resize-none" 
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 neumorphic-orange text-white rounded-lg hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}