/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050608] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand & Subtitle */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-slate-500">·</span>
              <span className="text-xs text-slate-400 font-mono">Cybersecurity · Mobile · Web Systems</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              Building secure mobile applications, threat-resistant web architectures, and defensive systems. Active: <span className="text-slate-300 font-mono">2025 - To date</span>.
            </p>
          </div>

          {/* Nav Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <button
              onClick={() => onNavigate('work')}
              className="hover:text-white transition-colors"
            >
              Work & Links
            </button>
            <button
              onClick={() => onNavigate('security')}
              className="hover:text-white transition-colors"
            >
              Security
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="hover:text-white transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Bottom Row: Direct contacts, WhatsApp, X, copyright & back-to-top */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <a
              href={PERSONAL_INFO.whatsapp.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-mono text-emerald-400"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: 0741257369</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <a
              href={PERSONAL_INFO.xTwitter.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5 font-mono"
            >
              <span>X (Twitter): 0741257369</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <a
              href={`tel:${PERSONAL_INFO.phones[0].dial}`}
              className="hover:text-white transition-colors flex items-center gap-1.5 font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PERSONAL_INFO.phones[0].display}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2025 - To date Acou Paul. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
