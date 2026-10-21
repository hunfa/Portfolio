import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Layout, GitBranch, Cpu, Radio, Shield, Globe, Terminal, Box, Layers, BookOpen, Mountain } from 'lucide-react';

export const ArchitectureBento: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Full Stack & Distributed Ecosystem</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          System Architecture & <br />
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Technical Skill Matrix
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Battle-tested engineering competencies across distributed messaging, enterprise microservices, real-time web, and multi-tenant cloud storage.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Distributed Messaging (2 cols wide) */}
        <div className="md:col-span-2 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full -z-10 group-hover:bg-cyan-500/20 transition-all duration-500" />
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Radio className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Event Streams & Distributed Queues</h3>
              <p className="text-xs text-slate-400">High-throughput sub-15ms message orchestration</p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Designing distributed event topologies with <strong>Apache Kafka</strong> and <strong>MQTT</strong>. Capable of processing over 50,000 real-time telemetry packets per second with fault-tolerant partitioning, consumer groups, and Redis backplanes.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
              <span className="block text-sm font-bold text-cyan-400">Apache Kafka</span>
              <span className="text-[10px] text-slate-500">Event Logs</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
              <span className="block text-sm font-bold text-amber-400">MQTT Broker</span>
              <span className="text-[10px] text-slate-500">IoT Telemetry</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
              <span className="block text-sm font-bold text-emerald-400">WebSockets</span>
              <span className="text-[10px] text-slate-500">Instant Chat</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
              <span className="block text-sm font-bold text-purple-400">Redis Pub/Sub</span>
              <span className="text-[10px] text-slate-500">In-Memory Bus</span>
            </div>
          </div>
        </div>

        {/* Card 2: Enterprise Backend & Microservices */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Microservices</h3>
              <p className="text-xs text-slate-400">Resilient APIs & Scaling</p>
            </div>
          </div>

          <ul className="space-y-2 text-xs text-slate-300 mb-6">
            <li className="flex items-center justify-between p-2 rounded-lg bg-black/30">
              <span>NestJS / TypeScript</span>
              <span className="text-purple-400 font-bold">Expert</span>
            </li>
            <li className="flex items-center justify-between p-2 rounded-lg bg-black/30">
              <span>Node.js / Express</span>
              <span className="text-purple-400 font-bold">5+ Yrs</span>
            </li>
            <li className="flex items-center justify-between p-2 rounded-lg bg-black/30">
              <span>AI Agent Pipelines</span>
              <span className="text-purple-400 font-bold">Advanced</span>
            </li>
            <li className="flex items-center justify-between p-2 rounded-lg bg-black/30">
              <span>C++ & Low-Level</span>
              <span className="text-purple-400 font-bold">Core CS</span>
            </li>
          </ul>

          <div className="text-[11px] text-slate-400">
            Modular dependency injection, rate limiting, and JWT/OAuth2 security.
          </div>
        </div>

        {/* Card 3: Databases & Data Partitioning */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Database Engines</h3>
              <p className="text-xs text-slate-400">Polyglot Persistence</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">MongoDB / Document Store</span>
                <span className="text-emerald-400">95%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[95%]" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">PostgreSQL & MySQL (Relational)</span>
                <span className="text-cyan-400">92%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-cyan-400 h-full w-[92%]" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Redis Cache & Cluster</span>
                <span className="text-amber-400">94%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full w-[94%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Modern Frontend Architecture (2 cols wide) */}
        <div className="md:col-span-2 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Layout className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Modern Frontend & Interactive 3D</h3>
              <p className="text-xs text-slate-400">Performance-first reactive applications</p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Building intuitive user interfaces with <strong>React.js</strong> and <strong>Next.js</strong>. Integrating WebGL/Three.js, Framer Motion physics, Tailwind CSS design tokens, and real-time state synchronization via WebSockets.
          </p>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-cyan-300 font-semibold">React.js 19</span>
            <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-cyan-300 font-semibold">Next.js App Router</span>
            <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-cyan-300 font-semibold">TypeScript</span>
            <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-amber-300 font-semibold">Tailwind CSS</span>
            <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-purple-300 font-semibold">Three.js / WebGL</span>
            <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-pink-300 font-semibold">Framer Motion</span>
            <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-emerald-300 font-semibold">Bootstrap</span>
          </div>
        </div>

        {/* Card 5: DevOps & Infrastructure */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Box className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">DevOps & Cloud</h3>
              <p className="text-xs text-slate-400">Containers & Orchestration</p>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
              <span>Docker & Containerization</span>
              <span className="text-sky-400 font-mono">✓</span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
              <span>Nginx Reverse Proxy & SSL</span>
              <span className="text-sky-400 font-mono">✓</span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
              <span>Git CI/CD Workflows</span>
              <span className="text-sky-400 font-mono">✓</span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
              <span>System Design Architecture</span>
              <span className="text-sky-400 font-mono">✓</span>
            </div>
          </div>
        </div>

        {/* Card 6: Languages & Beyond Code */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Beyond Code</h3>
              <p className="text-xs text-slate-400">Communication & Passions</p>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-slate-400 block mb-1">Languages:</span>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-black/40 text-slate-200">English (Advanced)</span>
                <span className="px-2.5 py-1 rounded-lg bg-black/40 text-slate-200">Urdu (Native)</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <span className="text-slate-400 block mb-1">Interests:</span>
              <div className="flex flex-wrap gap-2 text-slate-300">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40">
                  <Mountain className="w-3 h-3 text-emerald-400" />
                  Outdoor Activities
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40">
                  <BookOpen className="w-3 h-3 text-amber-400" />
                  Book Reading
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
