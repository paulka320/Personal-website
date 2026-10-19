/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Phone, Mail, MessageSquare } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'work', label: 'Work & Links' },
    { id: 'security', label: 'Security' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3 bg-[#070709]/80 backdrop-blur-md border-b border-white/5' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand & Wordmark */}
            <div className="flex flex-col shrink-0">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('hero');
                }}
                className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-white/90 transition-colors whitespace-nowrap"
              >
                {PERSONAL_INFO.name}
              </a>
              <span className="text-xs text-slate-400 font-normal hidden sm:inline whitespace-nowrap">
                Cybersecurity · Mobile & Software Engineer
              </span>
            </div>

            {/* Zone 2: Floating Pill Segmented Nav */}
            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center gap-1 p-1.5 rounded-full nav-glass"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`relative px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'text-white bg-white/10 shadow-inner'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-emerald-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Direct Action Shortcuts with WhatsApp */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href={PERSONAL_INFO.whatsapp.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors py-1.5 px-2"
                title="Chat on WhatsApp (0741257369)"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-white transition-colors py-1.5 px-2"
                title={`Send email to ${PERSONAL_INFO.email}`}
              >
                <span>Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <button
                onClick={() => handleLinkClick('contact')}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-full transition-all duration-150 shadow-sm"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={PERSONAL_INFO.whatsapp.url}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 text-xs font-semibold text-emerald-950 bg-emerald-400 rounded-full flex items-center gap-1"
              >
                <MessageSquare className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-lg pt-24 px-6 pb-8 flex flex-col justify-between md:hidden"
        >
          <div className="flex flex-col gap-2">
            <div className="text-xs font-medium text-slate-400 tracking-wider mb-2 font-mono">
              NAVIGATION · 2025 - TO DATE
            </div>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left text-lg font-medium py-2.5 px-3 rounded-lg transition-colors ${
                    isActive ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col gap-3">
            <div className="text-xs font-medium text-slate-400 tracking-wider mb-1 font-mono">
              DIRECT REACH
            </div>
            <a
              href={PERSONAL_INFO.whatsapp.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between text-sm text-emerald-400 hover:text-emerald-300 py-1"
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp: 0741257369
              </span>
              <ArrowUpRight className="w-4 h-4 text-emerald-500" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center justify-between text-sm text-slate-300 hover:text-white py-1"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                {PERSONAL_INFO.email}
              </span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phones[0].dial}`}
              className="flex items-center justify-between text-sm text-slate-300 hover:text-white py-1"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                {PERSONAL_INFO.phones[0].display}
              </span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phones[1].dial}`}
              className="flex items-center justify-between text-sm text-slate-300 hover:text-white py-1"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                {PERSONAL_INFO.phones[1].display} (X / Direct)
              </span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
