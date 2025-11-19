import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '@/assets/logo.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Méthode IDEA®', path: '/idea' },
    // { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-noir-profond shadow-lg' : 'bg-noir-profond/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img src={logo} alt="The Pertinent Group Logo" className="h-10 w-auto" />
            <span className="text-blanc-pur hidden sm:block font-semibold">
              The Pertinent Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? 'text-or-doux'
                    : 'text-blanc-pur hover:text-or-doux'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild>
              <Link to="/contact" className="bg-or-doux text-noir-profond hover:bg-or-doux/90">
                Planifier un échange
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-blanc-pur"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 border-t border-blanc-pur/20 mt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-left transition-colors ${
                    location.pathname === link.path
                      ? 'text-or-doux'
                      : 'text-blanc-pur hover:text-or-doux'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-or-doux text-noir-profond hover:bg-or-doux/90 w-full"
                >
                  Planifier un échange
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
