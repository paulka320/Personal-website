/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { Calendar, Briefcase, GraduationCap, Award, Info } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase mb-2 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>BACKGROUND</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Experience & education
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Recent work in security, mobile apps, and software engineering.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:bg-white/10">
          {EXPERIENCE_ITEMS.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex items-center md:justify-between flex-col md:flex-row gap-6 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node Indicator */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1d294b] border-2 border-emerald-400 z-10" />

                {/* Content Box */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className="p-6 rounded-2xl card-dark border border-white/5 hover:border-white/15 transition-all">
                    <div className="flex items-center justify-between gap-2 mb-2 text-xs font-mono text-slate-400">
                      <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      {item.badge && (
                        <span className="text-[11px] text-slate-300 font-sans">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.role}
                    </h3>
                    <div className="text-xs text-slate-400 font-medium mt-0.5 mb-3">
                      {item.organization} · {item.location}
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">·</span>
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty opposite spacer for desktop alignment */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>

        {/* Clear Marker for User Customization */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-slate-400 font-mono">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="text-slate-300 font-semibold">User Customization Note:</span> Specific institution degrees, university names, or industry certifications (e.g., CompTIA Security+, CEH, CISSP) can be seamlessly customized in <code className="text-emerald-300 bg-white/5 px-1 py-0.5 rounded">src/data/portfolioData.ts</code>.
          </p>
        </div>
      </div>
    </section>
  );
};
