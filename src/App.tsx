/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calculator, Atom, Home as HomeIcon, Menu, X, GraduationCap as GradIcon, Phone, Mail, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import HomePage from './pages/Home';
import BiologyPage from './pages/Biology';
import PhysicsPage from './pages/Physics';
import MathematicsPage from './pages/Mathematics';
import CookieBanner from './components/CookieBanner';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Start', path: '/', icon: HomeIcon },
    { name: 'Biologia', path: '/biologia', icon: BookOpen },
    { name: 'Fizyka', path: '/fizyka', icon: Atom },
    { name: 'Matematyka', path: '/matematyka', icon: Calculator },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <GradIcon size={24} />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">Korepetycje Online</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1.5 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                <link.icon size={18} />
                <span>{link.name}</span>
              </Link>
            ))}
            <a 
              href="https://www.qjonathan.pl/kontakt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-shadow hover:shadow-lg active:scale-95 duration-200"
            >
              Kontakt
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-xl text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <link.icon size={20} />
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="pt-4 px-3">
                <a 
                  href="https://www.qjonathan.pl/kontakt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white px-5 py-3 rounded-xl text-base font-semibold text-center"
                >
                  Kontakt
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  const handleFooterNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <GradIcon className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold tracking-tight">Korepetycje Online</span>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="text-white font-semibold text-lg mb-6 uppercase tracking-wider">Kontakt</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <a href="tel:+48796305827" className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors">
                <Phone size={16} />
                +48 796 305 827
              </a>
              <a href="mailto:contact.qjonathan@gmail.com" className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors">
                <Mail size={16} />
                contact.qjonathan@gmail.com
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="text-white font-semibold text-lg mb-6 uppercase tracking-wider">Zasady i bezpieczeństwo</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <a href="https://www.qjonathan.pl/warunki-swiadczenia-uslug" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                Warunki świadczenia usług
              </a>
              <a href="https://www.qjonathan.pl/polityka-prywatnosci" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                Polityka prywatności
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} qJonathan.pl Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/biologia" element={<BiologyPage />} />
            <Route path="/fizyka" element={<PhysicsPage />} />
            <Route path="/matematyka" element={<MathematicsPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}


