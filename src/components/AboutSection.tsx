/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Shield, Compass, CheckCircle2, Smartphone, MessageSquare, Camera } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const [photo, setPhoto] = useState<string | null>(PERSONAL_INFO.photoUrl || null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) setPhoto(event.target.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>ABOUT ACOU PAUL</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Engineering Resilient Software with a Defensive Mindset
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              I am a Cybersecurity Specialist, Mobile Application Developer, and Software Engineer actively building and hardening digital infrastructure (<span className="text-emerald-400 font-mono font-semibold">2025 - To date</span>). In an era of automated exploit tools, applications must resist adversarial attack across both native mobile touchpoints and cloud backends.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              My hands-on practice encompasses native cross-platform mobile engineering (iOS & Android hardware keystore integration), proactive web vulnerability auditing, secure API gateways, and defensive system architecture.
            </p>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs font-mono text-emerald-400 mb-1 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Defensive by Design</span>
                </div>
                <p className="text-xs text-slate-300">
                  Defaulting to least privilege, hardware biometrics, input sanitization, and verified cryptographic signatures.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs font-mono text-emerald-400 mb-1 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile & Cloud Engineering</span>
                </div>
                <p className="text-xs text-slate-300">
                  Secure cross-platform mobile apps, strict type safety, and fault-tolerant cloud backends.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-full transition-colors"
              >
                Discuss a Project with Acou Paul
              </button>
              <a
                href={PERSONAL_INFO.whatsapp.url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 text-xs sm:text-sm font-medium text-emerald-300 hover:text-white bg-emerald-950/40 rounded-full border border-emerald-500/30 transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp (0741257369)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Identity Card / Specification Box with Big Picture Frame */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl window-glass p-6 sm:p-8 space-y-6">
              {/* Profile Card Header with Big Photo */}
              <div className="flex flex-col items-center sm:items-start pb-5 border-b border-white/10">
                <div className="relative group mb-4">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-[#263554] border border-white/15 p-1 relative shadow-none">
                    {photo ? (
                      <img src={photo} alt="Acou Paul" className="w-full h-full object-cover rounded-2xl" />
                    ) : (
                      <div className="w-full h-full rounded-xl bg-[#202d50] flex flex-col items-center justify-center p-4">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-2xl text-emerald-400 font-mono mb-2">
                          AP
                        </div>
                        <span className="text-sm font-bold text-white">Acou Paul</span>
                        <span className="text-xs text-slate-400 font-mono mt-0.5">Verified Profile</span>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="absolute inset-1 rounded-2xl bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-xs gap-1 cursor-pointer"
                      title="Upload or change portrait photo"
                      aria-label="Upload photo"
                    >
                      <Camera className="w-5 h-5 text-emerald-400" />
                      <span>Change Photo</span>
                    </button>
                    <input
                      type="file"
                      ref={fileRef}
                      onChange={handleUpload}
                      accept="image/*"
                      className="hidden"
                      aria-label="Upload photo file"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-slate-400">{PERSONAL_INFO.role}</p>
                  <span className="text-[11px] text-emerald-400 font-mono block mt-0.5">
                    Active Period: 2025 - To date
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs font-mono text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-500">Disciplines</span>
                  <span className="text-white text-right">Cybersecurity · Mobile · Web</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-500">Location</span>
                  <span className="text-white text-right">Uganda · Remote Available</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-500">Contact Email</span>
                  <span className="text-emerald-400 text-right">{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-500">WhatsApp / X</span>
                  <span className="text-white text-right">0741257369</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-500">Direct Phones</span>
                  <span className="text-white text-right">0763480495 / 0741257369</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Active Status</span>
                  <span className="text-emerald-400 text-right flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Open for Projects (2025 - To date)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
