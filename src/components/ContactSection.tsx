import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Enterprise Microservices & Backend',
    message: '',
  });

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#00f0ff', '#f5b921', '#9d4edd', '#10b981'],
    });

    // Reset after delay
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'Enterprise Microservices & Backend',
        message: '',
      });
    }, 6000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/10 to-amber-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Connection</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Let's Build Something <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Remarkable Together
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Available for senior engineering leadership, distributed systems consulting, and high-impact full-stack development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Details & Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">Direct Email</span>
                <a
                  href="mailto:hunfa.jalil786@gmail.com"
                  className="text-base font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  hunfa.jalil786@gmail.com
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard('hunfa.jalil786@gmail.com', 'email')}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">Direct Phone & WhatsApp</span>
                <a
                  href="tel:+923238810335"
                  className="text-base font-bold text-white hover:text-amber-400 transition-colors"
                >
                  +92 323 8810 335
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard('+923238810335', 'phone')}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Copy Phone Number"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location & Timezone Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Location & Availability</span>
              <span className="text-base font-bold text-white">Lahore, Pakistan</span>
              <p className="text-xs text-slate-400 mt-0.5">Flexible remote overlap with US / UK / EU timezones</p>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href="https://www.linkedin.com/in/muhammad-hunfa-jalil/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-2xl border border-white/10 hover:border-cyan-500/40 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-bold text-white">LinkedIn</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            <a
              href="https://github.com/hunfa"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-2xl border border-white/10 hover:border-white/30 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-2.5">
                <GithubIcon className="w-5 h-5 text-slate-300" />
                <span className="text-xs font-bold text-white">GitHub</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </a>
          </div>

        </div>

        {/* Right Column: Interactive Send Message Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out! Muhammad Hunfa Jalil will get back to you promptly at your provided email.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-xl font-bold text-white">Send Direct Inquiry</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Project Scope / Engagement</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors text-sm cursor-pointer"
                  >
                    <option value="Enterprise Microservices & Backend">Enterprise Microservices & Distributed Backend</option>
                    <option value="Real-Time Streaming (Kafka / MQTT)">Real-Time Event Streaming (Kafka / MQTT / WebSockets)</option>
                    <option value="Full Stack Web Platform (Next.js & React)">Full Stack Web Platform (Next.js & React)</option>
                    <option value="AI Agent Integration & Automation">AI Agent Integration & Workflow Automation</option>
                    <option value="Full-Time Senior / Lead Engineering Role">Full-Time Senior / Lead Engineering Role</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your platform goals, architecture requirements, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 shadow-lg shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Hunfa</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
