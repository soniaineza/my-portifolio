import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Designs', href: '#designs' },
      { name: 'Achievements', href: '#Achievements ' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass backdrop-blur-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-orange-500 bg-clip-text text-transparent animate-fade-in"
        >
          Sonia Ineza
        </a>
        <div className="hidden md:flex items-center space-x-1">
          <nav className="flex space-x-1">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-4 py-2 text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium rounded-lg hover:bg-white/30 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-lg hover:bg-white/30 transition-colors glass backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="text-primary-600" /> : <Menu size={24} className="text-primary-600" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-lg shadow-lg border-t border-white/20 animate-slide-up">
          <nav className="flex flex-col py-2">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-white/50 transition-all duration-300 font-medium rounded-lg mx-2 my-1"
                onClick={toggleMenu}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}