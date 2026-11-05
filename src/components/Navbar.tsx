import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hand, Menu, X, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

interface NavbarProps {
  onWaveClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onWaveClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Avatar', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Videos', href: '#videos' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 pointer-events-none">
      <div
        className={`max-w-7xl mx-auto rounded-full px-5 py-3 transition-all duration-300 pointer-events-auto flex items-center justify-between ${scrolled
            ? 'glass-card border-white/15 bg-slate-950/85 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
            : 'bg-transparent border border-transparent'
          }`}
      >
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400/80 shadow-[0_0_15px_rgba(245,185,33,0.3)]">
            <img
              src="/real-hunfa-avatar.png"
              alt="Hunfa Avatar"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-extrabold text-white tracking-tight group-hover:text-amber-400 transition-colors">
              Muhammad Hunfa
            </span>
            <span className="text-[11px] font-mono text-cyan-400">Senior Software Engineer</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border-white/10 bg-slate-900/60 text-xs font-semibold text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {onWaveClick && (
            <button
              onClick={onWaveClick}
              className="px-3.5 py-1.5 rounded-full bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Hand className="w-3.5 h-3.5" />
              <span>Say Hello 👋</span>
            </button>
          )}

          <a
            href="https://www.linkedin.com/in/muhammad-hunfa-jalil/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass-panel hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/hunfa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass-panel hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-full font-bold text-xs bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
          >
            Hire Hunfa
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl glass-panel text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-card mx-auto mt-3 rounded-2xl p-6 border border-white/15 bg-slate-950/95 shadow-2xl pointer-events-auto max-w-sm"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-white/10 text-slate-200 font-semibold text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 shadow-lg"
                >
                  Get in Touch
                </a>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href="https://www.linkedin.com/in/muhammad-hunfa-jalil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/hunfa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:hunfa.jalil786@gmail.com"
                    className="text-slate-400 hover:text-amber-400"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
