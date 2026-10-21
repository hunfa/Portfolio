import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Building2, Car, GraduationCap, ShieldCheck, Cpu, ArrowUpRight, Check, Activity, Sliders, MapPin, Bus, Gauge } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  // Interactive DSCR Simulator State for Finance Lobby
  const [noi, setNoi] = useState<number>(380000);
  const [debtService, setDebtService] = useState<number>(275000);
  const dscr = (noi / (debtService || 1)).toFixed(2);
  const dscrApproved = parseFloat(dscr) >= 1.25;

  // Interactive Live Vehicle Telemetry State for Garajio
  const [rpm, setRpm] = useState<number>(4500);
  const [speed, setSpeed] = useState<number>(98);
  const [isRevving, setIsRevving] = useState<boolean>(false);

  // Interactive GPS Bus Simulator State for KiddieCove
  const [busStep, setBusStep] = useState<number>(2);
  const stops = [
    { name: 'Central Campus', time: 'Departed 07:45 AM', status: 'Completed' },
    { name: 'Oakland Blvd & 4th', time: 'Departed 08:02 AM', status: 'Completed' },
    { name: 'Riverside Park Way', time: 'Arriving in 3 mins', status: 'In Transit' },
    { name: 'Highland Elementary', time: 'ETA 08:25 AM', status: 'Scheduled' },
  ];

  // Dynamic telemetry rev effect
  useEffect(() => {
    let interval: any;
    if (isRevving) {
      interval = setInterval(() => {
        setRpm(prev => Math.min(8500, prev + 400 + Math.floor(Math.random() * 200)));
        setSpeed(prev => Math.min(185, prev + 5));
      }, 100);
    } else {
      interval = setInterval(() => {
        setRpm(prev => (prev > 3000 ? prev - 300 : 3000 + Math.floor(Math.random() * 150)));
        setSpeed(prev => (prev > 60 ? prev - 3 : 60));
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isRevving]);

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Proven Production Impact</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Flagship Engineering <br />
          <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400 bg-clip-text text-transparent">
            Production Platforms
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Deep architectural breakdowns and interactive live simulations of the platforms built and scaled by Muhammad Hunfa Jalil.
        </p>
      </div>

      <div className="space-y-24">
        
        {/* ================= PROJECT 1: FINANCE LOBBY ================= */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual & Interactive Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src="/images/financelobby-dashboard.jpg"
                  alt="Finance Lobby Platform UI"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-semibold text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>13,000+ Verified Lenders</span>
                </div>
              </div>

              {/* Interactive Live Underwriting Simulator Widget */}
              <div className="glass-panel p-5 rounded-2xl border border-cyan-500/20 bg-slate-900/80 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                    <Sliders className="w-4 h-4 text-cyan-400" />
                    <span>Try Hunfa's AI Underwriting Algorithm:</span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    dscrApproved ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  }`}>
                    {dscrApproved ? '✓ Meets Bank DSCR' : '⚠ High Risk DSCR'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1">Net Operating Income (NOI): ${noi.toLocaleString()}</label>
                    <input
                      type="range"
                      min={100000}
                      max={1000000}
                      step={10000}
                      value={noi}
                      onChange={(e) => setNoi(Number(e.target.value))}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Annual Debt Service: ${debtService.toLocaleString()}</label>
                    <input
                      type="range"
                      min={100000}
                      max={800000}
                      step={10000}
                      value={debtService}
                      onChange={(e) => setDebtService(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-slate-400">Calculated DSCR Ratio:</span>
                  <span className={`text-xl font-black ${dscrApproved ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {dscr}x <span className="text-xs font-normal text-slate-400">(Benchmark: &gt;1.25x)</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Description & Engineering Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold">
                  Flagship 01 • Enterprise CRE Financing Platform
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Finance Lobby
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  A high-volume commercial real-estate financing platform connecting commercial brokers, borrowers, and <strong>13,000+ verified lenders</strong> across the US. Brokers publish once; lenders match based on precise credit box parameters.
                </p>
              </div>

              {/* Engineering Contributions */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Technical Achievements:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>AI-Assisted Underwriting Engine:</strong> Parsed deal terms from PDFs and rent rolls to dynamically calculate DSCR, LTV, debt yield, and flag potential dealbreakers in seconds.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>End-to-End Deal Pipeline:</strong> Architected quote comparison engines, lender direct messaging, document hub, and live sales/rent comparables.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>High Availability Architecture:</strong> Scaled microservices handling sensitive financial deal documents with strict compliance and security.</span>
                  </li>
                </ul>
              </div>

              {/* Tech Stack Pills & CTA */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-white/5">React / Next.js</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-white/5">Node.js / Express</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-white/5">AI Document Extract</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-white/5">PostgreSQL / Redis</span>
                </div>

                <a
                  href="https://financelobby.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>financelobby.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ================= PROJECT 2: GARAJIO ================= */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Description & Engineering Highlights */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="space-y-3">
                <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-bold">
                  Flagship 02 • Real-Time IoT & Automotive Social Network
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Garajio
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  The dedicated social ecosystem and connected telemetry platform for car enthusiasts. Features digital virtual garages, vehicle build timelines, real-time OBD2 diagnostics, and instant car buddy chat.
                </p>
              </div>

              {/* Engineering Contributions */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Technical Achievements:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Event-Driven Kafka & MQTT Pipelines:</strong> Developed microservices leveraging Apache Kafka and MQTT to ingest sub-15ms real-time vehicle telemetry streams.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Instant Real-Time Chat Engine:</strong> Engineered WebSocket messaging for instant community interactions, group meetups, and technical car advice.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Mobile Ecosystem Sync:</strong> Built synchronized REST and WebSocket APIs serving both native iOS and Android applications.</span>
                  </li>
                </ul>
              </div>

              {/* Tech Stack Pills & CTA */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-amber-300 border border-white/5">Apache Kafka</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-amber-300 border border-white/5">MQTT Broker</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-amber-300 border border-white/5">NestJS / Node.js</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-amber-300 border border-white/5">MongoDB / Redis</span>
                </div>

                <a
                  href="https://garajio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>garajio.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Visual & Interactive Column */}
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src="/images/garajio-dashboard.jpg"
                  alt="Garajio Automotive Platform UI"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-semibold text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5" />
                  <span>Real-Time Fleet & Social</span>
                </div>
              </div>

              {/* Interactive Live Telemetry Simulator Widget */}
              <div className="glass-panel p-5 rounded-2xl border border-amber-500/20 bg-slate-900/80 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    <Gauge className="w-4 h-4 text-amber-400" />
                    <span>Live MQTT Telemetry Stream</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Stream Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 rounded-xl bg-black/50 border border-white/5">
                    <span className="text-xs text-slate-400 block mb-1">Engine RPM</span>
                    <span className="text-2xl font-black text-amber-400 font-mono">{rpm}</span>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div
                        className="bg-amber-400 h-full transition-all duration-150"
                        style={{ width: `${(rpm / 9000) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-white/5">
                    <span className="text-xs text-slate-400 block mb-1">Vehicle Speed</span>
                    <span className="text-2xl font-black text-rose-400 font-mono">{speed} <span className="text-xs font-normal">km/h</span></span>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div
                        className="bg-rose-500 h-full transition-all duration-150"
                        style={{ width: `${(speed / 200) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center pt-1">
                  <button
                    onMouseDown={() => setIsRevving(true)}
                    onMouseUp={() => setIsRevving(false)}
                    onTouchStart={() => setIsRevving(true)}
                    onTouchEnd={() => setIsRevving(false)}
                    className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white shadow-lg shadow-red-500/20 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Hold to Rev Engine (Trigger MQTT Telemetry) 🔥
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= PROJECT 3: KIDDIECOVE ================= */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual & Interactive Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src="/images/kiddiecove-dashboard.jpg"
                  alt="KiddieCove Platform UI"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-semibold text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>500+ Schools Network</span>
                </div>
              </div>

              {/* Interactive Live Bus Tracking Simulation Widget */}
              <div className="glass-panel p-5 rounded-2xl border border-emerald-500/20 bg-slate-900/80 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    <Bus className="w-4 h-4 text-emerald-400" />
                    <span>Real-Time GPS Bus Route (Bus #12)</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Geofence Live
                  </span>
                </div>

                <div className="space-y-2.5">
                  {stops.map((stop, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-2.5 rounded-xl text-xs transition-colors ${
                        busStep === idx
                          ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold'
                          : 'bg-black/30 border border-white/5 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <MapPin className={`w-3.5 h-3.5 ${busStep === idx ? 'text-emerald-400 animate-bounce' : 'text-slate-500'}`} />
                        <span>{stop.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] block">{stop.time}</span>
                        <span className="text-[10px] text-slate-400">{stop.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setBusStep(s => (s + 1) % stops.length)}
                  className="w-full py-2 rounded-xl text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 transition-colors cursor-pointer"
                >
                  Simulate Next GPS Checkpoint 📍
                </button>
              </div>
            </div>

            {/* Description & Engineering Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">
                  Flagship 03 • Multi-Tenant Cloud SaaS & Transit Safety
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  KiddieCove
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Enterprise cloud-based school management platform centralizing student records, attendance, digital fee collection, and real-time child transit safety across <strong>500+ schools</strong>.
                </p>
              </div>

              {/* Engineering Contributions */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Technical Achievements:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Real-Time GPS Bus Tracking:</strong> Engineered real-time vehicle geofencing, sub-second pickup/drop notifications, and speed anomaly alerts for parents and school dispatch.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Multi-Tenant Database Architecture:</strong> Architected cloud schema segregation ensuring seamless performance and HIPAA/FERPA compliant isolation across 500+ institutions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Automated Financials & Attendance:</strong> Centralized digital billing gateways, automated late payment reconciliation, and RFID/biometric attendance streams.</span>
                  </li>
                </ul>
              </div>

              {/* Tech Stack Pills & CTA */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-emerald-300 border border-white/5">Multi-Tenant Architecture</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-emerald-300 border border-white/5">GPS Geofencing</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-emerald-300 border border-white/5">Node.js / Express</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-emerald-300 border border-white/5">MySQL / Redis</span>
                </div>

                <a
                  href="https://admin.kiddiecove.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>admin.kiddiecove.io</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
