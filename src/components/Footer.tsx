import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#030408] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Avatar & Bio */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-amber-400/60 flex-shrink-0">
            <img src="/real-hunfa-avatar.png" alt="Hunfa Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-sm font-bold text-white block">Muhammad Hunfa Jalil</span>
            <p className="text-xs text-slate-400">Senior Software Engineer • Full Stack Developer</p>
          </div>
        </div>

        {/* Center: Live Projects Reference */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <a href="https://financelobby.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            Finance Lobby
          </a>
          <span>•</span>
          <a href="https://garajio.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
            Garajio
          </a>
          <span>•</span>
          <a href="https://admin.kiddiecove.io/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
            KiddieCove
          </a>
        </div>

        {/* Right: Social & Scroll To Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/muhammad-hunfa-jalil/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/hunfa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="mailto:hunfa.jalil786@gmail.com"
            className="text-slate-400 hover:text-amber-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="text-center text-xs text-slate-600 mt-8 pt-6 border-t border-white/5">
        Designed & Built for Muhammad Hunfa Jalil • All Rights Reserved © {new Date().getFullYear()}
      </div>
    </footer>
  );
};
