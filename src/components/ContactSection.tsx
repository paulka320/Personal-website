/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  AlertCircle,
  ShieldCheck,
  MessageSquare,
  Share2,
} from 'lucide-react';

interface ContactSectionProps {
  onToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onToast }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Form State
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    onToast(`Copied ${label} (${text}) to clipboard!`);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!senderName.trim()) errs.name = 'Please provide your name';
    if (!senderEmail.trim() || !/^\S+@\S+\.\S+$/.test(senderEmail)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!message.trim() || message.trim().length < 10) {
      errs.message = 'Please provide a message of at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onToast('Message formatted! Opening your email client...');

    const emailSubject = encodeURIComponent(
      subject.trim() ? `[Portfolio Inquiry] ${subject}` : `[Portfolio Inquiry] From ${senderName}`
    );
    const emailBody = encodeURIComponent(
      `Hello Acou Paul,\n\nName: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}\n\nSent via your portfolio website.`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyFormattedMessage = () => {
    if (!validate()) return;
    const formatted = `To: ${PERSONAL_INFO.email}\nSubject: ${subject || 'Portfolio Inquiry'}\nFrom: ${senderName} (${senderEmail})\n\n${message}`;
    navigator.clipboard.writeText(formatted);
    onToast('Formatted message copied! You can paste it into any email client or chat.');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-white/5 relative ambient-glow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase mb-2 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>DIRECT CHANNELS & VERIFIED REACH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Initiate Contact with Acou Paul
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Reach out directly for cybersecurity consultations, mobile app engineering, full-stack web builds, or technical audits. Active: <span className="text-white font-mono font-medium">2025 - To date</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Verified Channels & Socials */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp & X (Twitter) Highlight Card */}
            <div className="p-6 rounded-2xl window-glass border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <MessageSquare className="w-4 h-4" />
                  INSTANT MESSAGING & SOCIAL
                </span>
                <span>FASTEST RESPONSE</span>
              </div>

              {/* WhatsApp Row */}
              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 block font-semibold">
                    WhatsApp Direct Line
                  </span>
                  <span className="text-base font-bold text-white font-mono">
                    {PERSONAL_INFO.whatsapp.display}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.whatsapp.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span>Chat</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.whatsapp.display, 'WhatsApp number')}
                    className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                    title="Copy WhatsApp Number"
                  >
                    {copiedItem === 'WhatsApp number' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* X (Twitter) Row */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">
                    X (Twitter) Contact
                  </span>
                  <span className="text-base font-bold text-white font-mono">
                    {PERSONAL_INFO.xTwitter.display}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.xTwitter.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors flex items-center gap-1"
                  >
                    <span>Open X</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.xTwitter.display, 'X contact number')}
                    className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                    title="Copy X Number"
                  >
                    {copiedItem === 'X contact number' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl window-glass border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Mail className="w-3.5 h-3.5" />
                    PRIMARY EMAIL
                  </span>
                  <span>VERIFIED</span>
                </div>
                <div className="text-lg font-bold text-white font-mono break-all mt-1">
                  {PERSONAL_INFO.email}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Direct personal inbox for all engineering inquiries and consultations.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Send Direct Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'Email address')}
                  className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors flex items-center gap-1.5"
                >
                  {copiedItem === 'Email address' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedItem === 'Email address' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Phone Numbers Card */}
            <div className="p-6 rounded-2xl window-glass border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Phone className="w-3.5 h-3.5" />
                  DIRECT PHONE LINES
                </span>
                <span>UGANDA (+256)</span>
              </div>

              {PERSONAL_INFO.phones.map((phone, idx) => (
                <div
                  key={phone.display}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3"
                >
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">
                      Line 0{idx + 1} ({phone.label})
                    </span>
                    <a
                      href={`tel:${phone.dial}`}
                      className="text-base font-bold text-white hover:text-emerald-400 transition-colors font-mono"
                    >
                      {phone.display}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${phone.dial}`}
                      className="p-2 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                      title={`Call ${phone.display}`}
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    </a>
                    <button
                      onClick={() => handleCopy(phone.display, `Phone Line 0${idx + 1}`)}
                      className="p-2 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                      title="Copy phone number"
                      aria-label={`Copy ${phone.display}`}
                    >
                      {copiedItem === `Phone Line 0${idx + 1}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Location & Trust Marker */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Right Column: Transparent Contact Message Composer */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl window-glass p-6 sm:p-8 border border-white/10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Compose an Inquiry</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepares an email addressed to {PERSONAL_INFO.email}.
                  </p>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={senderName}
                      onChange={(e) => {
                        setSenderName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full bg-black/50 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-white/10 focus:border-white/30'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={senderEmail}
                      onChange={(e) => {
                        setSenderEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                      }}
                      placeholder="e.g. alex@example.com"
                      className={`w-full bg-black/50 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-white/10 focus:border-white/30'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject / Project Scope
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Mobile App Development, Security Audit or Consulting"
                    className="w-full bg-black/50 border border-white/10 focus:border-white/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                    }}
                    placeholder="Describe your inquiry, project scope, mobile app, or security objectives..."
                    className={`w-full bg-black/50 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500' : 'border-white/10 focus:border-white/30'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-400 font-mono">
                    Direct dispatch to: <span className="text-slate-200">{PERSONAL_INFO.email}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopyFormattedMessage}
                      className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
                    >
                      Copy Message Text
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors flex items-center gap-2 shadow-sm"
                    >
                      <span>Open in Mail Client</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
