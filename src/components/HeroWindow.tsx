/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowDown,
  Shield,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  Camera,
  MessageSquare,
  Smartphone,
  Globe,
} from 'lucide-react';

interface HeroWindowProps {
  onExploreWork: () => void;
  onContactClick: () => void;
  onToast: (msg: string) => void;
}

export const HeroWindow: React.FC<HeroWindowProps> = ({
  onExploreWork,
  onContactClick,
  onToast,
}) => {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [userPhoto, setUserPhoto] = useState<string | null>(PERSONAL_INFO.photoUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(text);
    onToast(`Copied ${label} (${text}) to clipboard!`);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUserPhoto(event.target.result as string);
          onToast('Profile picture updated successfully!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden ambient-glow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Dimensional OS Window Frame (Replicating User's Reference Aesthetic) */}
        <div className="relative rounded-2xl window-glass overflow-hidden transition-all duration-300">
          {/* OS Window Titlebar: Clean with only macOS traffic lights (No buttons) */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 window-titlebar select-none">
            {/* macOS Traffic Lights */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
              <span className="ml-3 text-xs font-mono text-slate-400">
                Acou Paul · Cybersecurity & Mobile Engineer (2025 - To date)
              </span>
            </div>

            {/* Clean window right marker */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="hidden sm:inline">Active</span>
            </div>
          </div>

          {/* Window Hero Content Area */}
          <div className="px-6 py-12 sm:px-12 sm:py-16 md:py-20 flex flex-col justify-between min-h-[500px]">
            {/* Top Grid: Headline + Prominent Big Picture Frame (size 30 x 30 scale) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-4 text-xs font-medium text-emerald-400 tracking-wide font-mono">
                  <Shield className="w-3.5 h-3.5" />
                  <span>CYBERSECURITY · MOBILE APPS · WEB SYSTEMS</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
                  I engineer <span className="text-white">secure systems</span>,
                  <br />
                  mobile apps &{' '}
                  <span className="font-editorial text-slate-200 font-normal italic pr-1 tracking-normal">
                    resilient web.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-300 mt-5 max-w-xl leading-relaxed">
                  Active engineering from <span className="text-emerald-400 font-mono font-semibold">2025 - To date</span>. Delivering threat-resilient mobile applications for iOS and Android, hardened web architectures, and proactive security assessments.
                </p>

                {/* Quick Discipline Markers */}
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-300 font-mono">
                  <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    Cybersecurity & Defense
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                    Mobile App Engineering
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                    Full-Stack Web Systems
                  </span>
                </div>
              </div>

              {/* Prominent Large Photo Container for Acou Paul (size ~30 x 30rem / large frame) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative group">
                  {/* Large Photo Frame */}
                  <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden bg-gradient-to-b from-white/15 via-white/5 to-transparent p-1.5 border border-white/20 shadow-2xl shadow-black/80 relative">
                    {userPhoto ? (
                      <img
                        src={userPhoto}
                        alt="Acou Paul"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    ) : (
                      <div className="w-full h-full rounded-2xl bg-[#0f1117] flex flex-col items-center justify-center text-center p-6 border border-dashed border-white/15">
                        <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-3xl mb-3 shadow-inner">
                          AP
                        </div>
                        <span className="text-base font-bold text-white tracking-tight">Acou Paul</span>
                        <span className="text-xs text-slate-400 font-mono mt-1">Photo Frame (30 x 30)</span>
                        <span className="text-[11px] text-emerald-400 font-mono mt-2 flex items-center gap-1">
                          <Camera className="w-3.5 h-3.5" /> Click below or hover to add photo
                        </span>
                      </div>
                    )}

                    {/* Change / Upload Button Overlay */}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-1.5 rounded-2xl bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-xs gap-2 cursor-pointer backdrop-blur-sm"
                      title="Upload or change portrait photo"
                    >
                      <Camera className="w-6 h-6 text-emerald-400" />
                      <span className="text-xs font-semibold">Upload Your Photo</span>
                      <span className="text-[10px] text-slate-400 font-mono">JPG, PNG, WebP</span>
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handlePhotoUpload}
                      accept="image/*"
                      className="hidden"
                      aria-label="Upload photo"
                    />
                  </div>

                  <div className="text-center mt-3 flex items-center justify-center gap-2 text-xs text-slate-300 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-medium text-white">Acou Paul</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-slate-400">Cybersecurity & Mobile</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section Inside Window: Split Subheadline & Direct Actions */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              {/* Left Action Shortcuts */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onExploreWork}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-full transition-all duration-200 flex items-center gap-2 group shadow-lg shadow-white/5"
                >
                  <span>Explore Projects & Links</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <a
                  href={PERSONAL_INFO.whatsapp.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 text-xs sm:text-sm font-medium text-emerald-300 hover:text-emerald-200 bg-emerald-950/40 hover:bg-emerald-950/60 rounded-full border border-emerald-500/30 transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp 0741257369</span>
                </a>
              </div>

              {/* Right Subheadline Block */}
              <div className="text-left md:text-right max-w-sm">
                <p className="text-sm sm:text-base font-semibold text-white">
                  Acou Paul · Cybersecurity & Mobile Engineer
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  Specializing in secure cloud systems, iOS & Android mobile applications, and vulnerability testing.
                </p>
                <div className="mt-3 flex items-center md:justify-end gap-3 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    2025 - To date
                  </span>
                  <span>·</span>
                  <span>Uganda / Remote</span>
                </div>
              </div>
            </div>

            {/* Centered Scroll Down Arrow Indicator */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={onExploreWork}
                className="p-2 text-slate-400 hover:text-white transition-colors animate-bounce"
                aria-label="Scroll down to featured work"
              >
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Verified Quick Contact Strip Below Window */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 px-2 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-medium text-slate-300">Channels:</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-emerald-400 transition-colors underline decoration-slate-600 underline-offset-4"
            >
              {PERSONAL_INFO.email}
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={PERSONAL_INFO.whatsapp.url}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: 0741257369</span>
            </a>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300 flex items-center gap-1 font-mono">
              <span>X (Twitter): 0741257369</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {PERSONAL_INFO.phones.map((phone) => (
              <div key={phone.display} className="flex items-center gap-1.5">
                <a
                  href={`tel:${phone.dial}`}
                  className="hover:text-white transition-colors font-mono"
                  title={`Direct call ${phone.display}`}
                >
                  {phone.display}
                </a>
                <button
                  onClick={() => handleCopy(phone.display, `Phone number`)}
                  className="p-1 hover:text-white text-slate-500 transition-colors"
                  title="Copy number"
                  aria-label={`Copy ${phone.display}`}
                >
                  {copiedPhone === phone.display ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
