import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre Nós', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Estudos de Caso', href: '#case-studies' },
  { label: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex-shrink-0">
            <img src="assets/logo.png" alt="Logo" className="h-40" />
          </div>

     
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } hover:text-black transition-all px-3 py-2 text-lg font-medium`}
              >
                {item.label}
              </a>
            ))}
          </div>

       
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-blue-600 transition-all`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute inset-x-0 top-16 p-4 rounded-md transition-all duration-300">
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-md transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
