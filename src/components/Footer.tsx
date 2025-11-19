import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-noir-profond text-blanc-pur py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="The Pertinent Group Logo" className="h-10 w-auto" />
              <span className="font-semibold">The Pertinent Group</span>
            </Link>
            <p className="text-blanc-pur/80 mb-4">
              Where Insight Fuels Influence
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-or-doux hover:text-blanc-pur transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-or-doux hover:text-blanc-pur transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-or-doux hover:text-blanc-pur transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-or-doux hover:text-blanc-pur transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-blanc-pur/80 hover:text-or-doux transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-blanc-pur/80 hover:text-or-doux transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-blanc-pur/80 hover:text-or-doux transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/idea"
                  className="text-blanc-pur/80 hover:text-or-doux transition-colors"
                >
                  Méthode IDEA®
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blanc-pur/80 hover:text-or-doux transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-blanc-pur/80 hover:text-or-doux transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-blanc-pur/80 hover:text-or-doux transition-colors">
                  Conditions d'utilisation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blanc-pur/20 pt-8 text-center text-blanc-pur/60">
          <p>&copy; {new Date().getFullYear()} The Pertinent Group. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
