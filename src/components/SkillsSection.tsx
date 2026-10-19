/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Shield, Layers, Bot, Terminal, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase mb-2 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Tools and technologies across security, mobile, web, and infrastructure.
          </p>
        </div>

        {/* Categories 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="rounded-2xl card-dark p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span className="text-emerald-400">DOMAIN 0{idx + 1}</span>
                  <span>{cat.skills.length} COMPETENCIES</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{cat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills List with Zero-Pill Discipline */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 tabular-nums">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
