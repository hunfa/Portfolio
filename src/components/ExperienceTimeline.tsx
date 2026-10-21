import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, GraduationCap, ChevronRight, CheckCircle2, Sparkles, Server, Bot, Radio } from 'lucide-react';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  tag: string;
  icon: any;
  achievements: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: 'Apr 2026 – Present',
    role: 'Senior Software Engineer – Full Stack Developer',
    company: 'Afiniti',
    location: 'Lahore, Pakistan',
    tag: 'Current Role • Enterprise AI & Call Center',
    icon: Bot,
    achievements: [
      'Developing and maintaining ultra-scalable microservices for enterprise call center software, optimizing sub-second real-time communication and mission-critical system reliability.',
      'Integrating AI-powered agents and intelligent automation into complex customer interaction workflows.',
      'Building hardened, secure APIs and resilient backend services that enhance operational throughput and enterprise customer satisfaction.',
    ],
    skills: ['AI Agents', 'Microservices', 'Enterprise APIs', 'Real-Time Routing', 'High Concurrency'],
  },
  {
    period: 'Jan 2023 – Apr 2026',
    role: 'Software Engineer (Backend Team Lead)',
    company: 'letsRemotify',
    location: 'Lahore, Pakistan',
    tag: '3+ Years • Distributed Systems & Kafka',
    icon: Server,
    achievements: [
      'Led a team of backend developers in architecting and delivering a secure, scalable, high-performance real-time tracking platform complying with international best practices.',
      'Architected and implemented distributed microservices leveraging Apache Kafka and MQTT for sub-15ms event-driven communication.',
      'Developed a high-concurrency real-time chat application that facilitated instant communication between thousands of concurrent users.',
    ],
    skills: ['Apache Kafka', 'MQTT Brokers', 'Team Leadership', 'WebSockets', 'System Architecture'],
  },
  {
    period: 'Nov 2021 – Dec 2022',
    role: 'Software Engineer',
    company: 'Freelancer.com',
    location: 'Lahore, Pakistan',
    tag: 'Full-Stack Web Development',
    icon: Briefcase,
    achievements: [
      'Developed and maintained robust websites and bespoke web applications for global clients across diverse commercial industries.',
      'Collaborated directly with product owners to convert operational requirements into fast, responsive digital experiences.',
      'Implemented modern database schemas, REST APIs, and component-based frontend interfaces.',
    ],
    skills: ['React.js', 'Node.js', 'MongoDB', 'Client Collaboration', 'REST APIs'],
  },
];

export const ExperienceTimeline: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  return (
    <section id="experience" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Trajectory</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Engineering Leadership & <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Over 5 years of progressive experience delivering enterprise microservices, AI agents, and event-driven backends.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation / Role Selector Column */}
        <div className="lg:col-span-4 space-y-3">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                  isSelected
                    ? 'glass-card border-l-4 border-l-purple-500 border-white/20 bg-purple-950/20 shadow-xl'
                    : 'glass-panel hover:bg-white/5 border border-white/5 opacity-75 hover:opacity-100'
                }`}
              >
                <div className={`p-3 rounded-xl ${isSelected ? 'bg-purple-500/20 text-purple-300' : 'bg-slate-800 text-slate-400'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-mono text-purple-400 block">{exp.period}</span>
                  <h3 className="text-base font-bold text-white truncate">{exp.company}</h3>
                  <p className="text-xs text-slate-400 truncate">{exp.role}</p>
                </div>
              </button>
            );
          })}

          {/* Education Card */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 mt-6 bg-slate-900/60">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Bachelors of Computer Science</h4>
                <p className="text-xs text-slate-400">University of the Central Punjab</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/10">
              <span>Jan 2019 – Jan 2023</span>
              <span className="font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                GPA: 3.02 / 4.0
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown Card */}
        <div className="lg:col-span-8">
          <motion.div
            key={selectedIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.7)] space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 inline-block mb-2">
                  {experiences[selectedIdx].tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {experiences[selectedIdx].role}
                </h3>
                <p className="text-base text-purple-300 font-semibold mt-1">
                  @ {experiences[selectedIdx].company}
                </p>
              </div>

              <div className="text-right space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{experiences[selectedIdx].period}</span>
                </div>
                <div className="flex items-center justify-end gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{experiences[selectedIdx].location}</span>
                </div>
              </div>
            </div>

            {/* Achievements Bullet Points */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Responsibilities & Impact:
              </h4>
              <ul className="space-y-3.5">
                {experiences[selectedIdx].achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-200 text-sm sm:text-base leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Tagged */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Technologies & Competencies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {experiences[selectedIdx].skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-200 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
