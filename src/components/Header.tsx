import React, { useState } from 'react';
import { Menu, X, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Implantations', href: '/implantations' },
    { name: 'À propos', href: '/about' },
    { name: 'Réalisations', href: '/#realisations' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('/#')) {
      // Si on est pas sur la page d'accueil, naviguer vers l'accueil puis scroller
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        // Si on est sur la page d'accueil, scroller vers la section
        const sectionId = href.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Monitor className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-gray-900">
              CARIB<span className="text-red-600">MATIC</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2">
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-red-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-700 hover:text-red-600 font-medium text-left"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                Devis Gratuit
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
