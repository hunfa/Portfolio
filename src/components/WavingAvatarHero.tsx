import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Hand, MessageSquare, ArrowRight, Radio } from 'lucide-react';

interface WavingAvatarHeroProps {
  onExploreProjects: () => void;
  onWatchVideos: () => void;
  onContactClick: () => void;
}

export const WavingAvatarHero: React.FC<WavingAvatarHeroProps> = ({
  onExploreProjects,
  onWatchVideos,
  onContactClick,
}) => {
  const [speechBubbleText, setSpeechBubbleText] = useState("Hi! I'm Hunfa 👋 Welcome to my portfolio!");
  const [isGreeted, setIsGreeted] = useState(false);
  const avatarCardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics for the 3D card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!avatarCardRef.current) return;
    const rect = avatarCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const triggerGreeting = () => {
    setIsGreeted(true);
    setSpeechBubbleText("Great to connect! Let's build scalable platforms together 🚀");

    // Launch celebratory confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6, x: 0.65 },
      colors: ['#00f0ff', '#f5b921', '#9d4edd', '#10b981'],
    });

    setTimeout(() => {
      setSpeechBubbleText("Hi! I'm Hunfa 👋 Senior Software Engineer & Full Stack Architect");
      setIsGreeted(false);
    }, 4500);
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 px-4 md:px-8 overflow-hidden">
      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-purple-600/15 to-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gradient-to-br from-amber-500/10 via-pink-600/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Column: Cover Content & Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs md:text-sm font-medium tracking-wide text-cyan-300">
              Senior Software Engineer & Distributed Systems Architect
            </span>
          </div>

          {/* Main Name & Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Muhammad <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(245,185,33,0.3)]">
                Hunfa Jalil
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Full Stack Developer • Enterprise Microservices & Real-Time AI
            </p>
          </div>

          {/* Tagline / Cover Summary */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Senior Software Engineer with <strong>5+ years</strong> architecting resilient distributed systems, event-driven microservices with <strong className="text-cyan-300">Kafka & MQTT</strong>, AI-powered underwriting engines for <strong className="text-amber-400">Finance Lobby</strong>, real-time IoT tracking for <strong className="text-rose-400">Garajio</strong>, and multi-tenant school platforms for <strong className="text-emerald-400">KiddieCove</strong>.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl py-2">
            <div className="glass-card p-3 rounded-xl border border-white/10 text-center">
              <span className="text-2xl font-black text-amber-400">5+</span>
              <p className="text-xs text-slate-400 font-medium">Years Experience</p>
            </div>
            <div className="glass-card p-3 rounded-xl border border-white/10 text-center">
              <span className="text-2xl font-black text-cyan-400">13K+</span>
              <p className="text-xs text-slate-400 font-medium">Lenders Powered</p>
            </div>
            <div className="glass-card p-3 rounded-xl border border-white/10 text-center">
              <span className="text-2xl font-black text-emerald-400">500+</span>
              <p className="text-xs text-slate-400 font-medium">Schools Connected</p>
            </div>
            <div className="glass-card p-3 rounded-xl border border-white/10 text-center">
              <span className="text-2xl font-black text-purple-400">&lt;15ms</span>
              <p className="text-xs text-slate-400 font-medium">Real-Time Latency</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full">
            <button
              onClick={onExploreProjects}
              className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 hover:to-yellow-400 shadow-[0_0_30px_rgba(245,185,33,0.4)] hover:shadow-[0_0_45px_rgba(245,185,33,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore 3 Flagship Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onWatchVideos}
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full font-semibold text-white bg-slate-900/80 hover:bg-slate-800/90 border border-white/15 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-500/20 backdrop-blur-xl transition-all duration-300 cursor-pointer"
            >
              <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Watch Video Demos</span>
            </button>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-5 py-4 rounded-full font-medium text-slate-300 hover:text-white border border-transparent hover:border-white/10 transition-colors cursor-pointer"
            >
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 text-xs text-slate-400">
            <span className="text-slate-500 font-medium">Core Stack:</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-white/5 text-slate-300">NestJS / Node.js</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-white/5 text-slate-300">React / Next.js</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-white/5 text-slate-300">Apache Kafka</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-white/5 text-slate-300">MQTT & WebSockets</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-white/5 text-slate-300">AI Agents & Underwriting</span>
          </div>
        </motion.div>

        {/* Right Column: Clean Original Avatar with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative z-20"
        >
          {/* Interactive Speech Bubble */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            key={speechBubbleText}
            className="mb-4 max-w-sm px-4 py-2.5 rounded-2xl bg-gradient-to-r from-slate-900/95 to-slate-800/95 border border-amber-400/30 text-white shadow-[0_10px_25px_rgba(0,0,0,0.5)] backdrop-blur-xl relative z-30 flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-100">
              {speechBubbleText}
            </p>
            {/* Bubble Tail */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rotate-45 border-r border-b border-amber-400/30" />
          </motion.div>

          {/* 3D Perspective Avatar Container */}
          <motion.div
            ref={avatarCardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] cursor-pointer group"
          >
            {/* Outer Glowing Rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/30 via-yellow-400/20 to-cyan-500/25 blur-2xl -z-10 animate-pulse" />
            <div className="absolute -inset-2 rounded-full border border-amber-400/25 group-hover:border-amber-400/60 transition-colors duration-500 pointer-events-none" />

            {/* Avatar Container: Clean, Crisp Original Avatar */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border-4 border-amber-400/70 bg-[#141416]">
              <img
                src="/real-hunfa-avatar.png"
                alt="Muhammad Hunfa Jalil"
                className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500"
              />

              {/* Interactive Hover Vignette / Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
            </div>

            {/* Floating Live Indicator Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-3 -right-2 glass-panel px-3.5 py-1.5 rounded-full border border-white/20 shadow-xl flex items-center gap-2 z-30"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold text-white tracking-wide">Available for Roles</span>
            </motion.div>
          </motion.div>

          {/* Interactive Greeting Deck */}
          <div className="mt-6 flex flex-col items-center gap-2 z-30">
            <button
              onClick={triggerGreeting}
              className={`px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2.5 shadow-lg transition-all duration-300 transform active:scale-95 cursor-pointer ${isGreeted
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-500/40'
                  : 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-yellow-300 shadow-amber-400/30 hover:shadow-amber-400/50'
                }`}
            >
              <Hand className={`w-4 h-4 ${isGreeted ? 'animate-bounce' : ''}`} />
              <span>{isGreeted ? 'Greeting Sent! 🎉' : 'Say Hello 👋'}</span>
            </button>

            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Interactive 3D Avatar • Hover to tilt
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
