
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import ExperiencePage from './pages/Experience';
import Skills from './pages/Skills';
import Credentials from './pages/Credentials';
import Contact from './pages/Contact';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Credentials', path: '/credentials' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>architecture</span>
          </div>
          <h2 className="text-white text-lg font-bold tracking-tight group-hover:text-primary transition-colors">LAMECH.DESIGN</h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all ${
                location.pathname === link.path 
                  ? 'text-primary after:w-full' 
                  : 'text-slate-300 hover:text-primary after:w-0 hover:after:w-full'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/30 bg-primary/10 text-primary text-sm font-bold hover:bg-primary hover:text-white transition-all duration-300 group">
            <span>Hire Me</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontSize: '16px' }}>arrow_forward</span>
          </Link>
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass-panel absolute top-20 left-0 w-full p-6 border-t border-white/5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-bold ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="w-full py-3 bg-primary text-white text-center rounded-lg font-bold mt-2">
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-background-dark py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
             <span className="material-symbols-outlined text-primary">terminal</span>
             <h3 className="text-white font-bold tracking-widest uppercase">Lamech Imeh-john</h3>
          </div>
          <p className="text-slate-500 text-sm">© 2024 Lamech Imeh-john. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">share</span></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">alternate_email</span></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">language</span></a>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col relative">
        <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-grid-pattern bg-[length:40px_40px]"></div>
        <div className="fixed inset-0 z-0 pointer-events-none bg-radial-glow"></div>
        
        <Navbar />
        <main className="flex-grow z-10 relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating Scroll Indicator (only visible on home usually) */}
        <div className="fixed bottom-8 right-8 z-50 hidden md:flex items-center gap-2 animate-bounce">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Scroll</span>
          <span className="material-symbols-outlined text-primary">arrow_downward</span>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
