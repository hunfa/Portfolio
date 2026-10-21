import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film, ArrowUpRight, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  project: string;
  category: string;
  videoSrc: string;
  posterSrc: string;
  duration: string;
  description: string;
  keyContributions: string[];
  metrics: { label: string; value: string }[];
  liveUrl: string;
}

const videos: VideoItem[] = [
  {
    id: 'garajio',
    title: 'Garajio • Real-Time Automotive Social Network & IoT Fleet',
    project: 'Garajio (garajio.com)',
    category: 'IoT Telemetry & Kafka Streaming',
    videoSrc: '/videos/garajio-showcase.mp4',
    posterSrc: '/images/garajio-dashboard.jpg',
    duration: '0:34 Demo',
    description: 'Real-time automotive social ecosystem and telemetry hub connecting drivers, virtual digital garages, and OBD2 vehicle diagnostics. Built with scalable event-driven microservices.',
    keyContributions: [
      'Architected event-driven microservices with Apache Kafka & MQTT for high-frequency telemetry.',
      'Engineered real-time vehicle messaging & community chat engine using WebSockets.',
      'Designed responsive cross-platform mobile telemetry synchronization for iOS & Android.',
    ],
    metrics: [
      { label: 'Latency', value: '< 12ms' },
      { label: 'Throughput', value: '50K msg/s' },
      { label: 'Protocols', value: 'MQTT / Kafka' },
    ],
    liveUrl: 'https://garajio.com/',
  },
  {
    id: 'financelobby',
    title: 'Finance Lobby • AI Underwriting & CRE Financing Marketplace',
    project: 'Finance Lobby (financelobby.com)',
    category: 'Fintech & AI Automation',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterSrc: '/images/financelobby-dashboard.jpg',
    duration: '0:15 Teaser',
    description: 'Commercial real estate financing powerhouse connecting brokers, borrowers, and 13,000+ verified lenders. Automatically extracts deal terms from PDFs and rent rolls, calculating DSCR, LTV, and debt yields in seconds.',
    keyContributions: [
      'Supported AI-assisted underwriting workflows extracting deal terms from financial documents.',
      'Built automated DSCR (Debt Service Coverage Ratio) and LTV risk evaluation pipelines.',
      'Implemented full deal lifecycle: quote comparisons, term sheet negotiation, lender CRM.',
    ],
    metrics: [
      { label: 'Lenders', value: '13,000+' },
      { label: 'Extraction', value: 'Instant' },
      { label: 'Deals Funded', value: '$1B+' },
    ],
    liveUrl: 'https://financelobby.com/',
  },
  {
    id: 'kiddiecove',
    title: 'KiddieCove • Multi-Tenant School System & Live GPS Transit',
    project: 'KiddieCove (admin.kiddiecove.io)',
    category: 'Cloud SaaS & GPS Geofencing',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    posterSrc: '/images/kiddiecove-dashboard.jpg',
    duration: '0:12 Preview',
    description: 'Cloud-based multi-tenant school administration system centralizing student attendance, digital fee collection, and child transit safety across 500+ private schools and daycare centers.',
    keyContributions: [
      'Engineered real-time GPS school bus live tracking with geofenced pickup and drop alerts.',
      'Architected multi-tenant database partitioning ensuring strict student data isolation.',
      'Integrated digital fee collections and parent-teacher instant encrypted communication.',
    ],
    metrics: [
      { label: 'Schools', value: '500+' },
      { label: 'Bus Tracking', value: 'Sub-second' },
      { label: 'Daily Students', value: '50,000+' },
    ],
    liveUrl: 'https://admin.kiddiecove.io/',
  },
];

export const VideoShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentVideo = videos[activeTab];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="videos" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Film className="w-3.5 h-3.5" />
          <span>Interactive Video Showcase</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Systems in Motion: <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            Animated Video Walkthroughs
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Explore live video demos and technical animations demonstrating the enterprise systems and real-time platforms engineered by Muhammad Hunfa Jalil.
        </p>
      </div>

      {/* Video Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {videos.map((vid, idx) => (
          <button
            key={vid.id}
            onClick={() => {
              setActiveTab(idx);
              setIsPlaying(true);
            }}
            className={`px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
              activeTab === idx
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_25px_rgba(0,240,255,0.4)] border border-cyan-300/40'
                : 'glass-panel text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>{vid.project}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-black/30 text-slate-300">
              {vid.duration}
            </span>
          </button>
        ))}
      </div>

      {/* Main Video Cinema Deck */}
      <div className="glass-card rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Video Player Column */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-black/90 border border-white/10 shadow-2xl">
              <video
                key={currentVideo.videoSrc}
                ref={videoRef}
                src={currentVideo.videoSrc}
                poster={currentVideo.posterSrc}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Video Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-6 pointer-events-none">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between pointer-events-auto">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                    {currentVideo.category}
                  </span>
                  <span className="text-xs text-slate-300 bg-black/60 px-2.5 py-1 rounded-md">
                    1080p 60fps Loop
                  </span>
                </div>

                {/* Bottom Control Bar */}
                <div className="flex items-center justify-between pointer-events-auto pt-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg transition-transform active:scale-90 cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleFullscreen}
                      className="w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Accent Beneath Player */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-cyan-500/20 blur-xl rounded-full -z-10" />
          </div>

          {/* Video Metadata & Engineering Breakdown Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                  Project Video 0{activeTab + 1}
                </span>
                <a
                  href={currentVideo.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline"
                >
                  <span>Visit Live Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {currentVideo.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentVideo.description}
              </p>

              {/* Key Architectural Contributions */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Hunfa's Engineering Highlights:
                </h4>
                {currentVideo.keyContributions.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
              {currentVideo.metrics.map((metric, i) => (
                <div key={i} className="glass-panel p-3 rounded-xl text-center border border-white/5">
                  <span className="block text-lg font-bold text-cyan-400">{metric.value}</span>
                  <span className="text-xs text-slate-400">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
