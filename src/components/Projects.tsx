/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FEATURED_PROJECTS, ProjectItem } from '../data/portfolioData';
import { ArrowUpRight, Shield, Layers, Bot, Code, Eye, Smartphone, Github, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  onContactClick: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject, onContactClick }) => {
  const [filter, setFilter] = useState<'all' | 'cybersecurity' | 'mobile' | 'web' | 'ai'>('all');

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section id="work" className="py-20 sm:py-28 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase mb-2">
              PORTFOLIO & PROJECT DIRECTORY (2025 - TO DATE)
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects & Direct Links
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Engineered repositories, native mobile applications, and defensive software with direct links and architecture specifications.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white/[0.04] border border-white/10 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({FEATURED_PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('cybersecurity')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                filter === 'cybersecurity'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Shield className="w-3 h-3 text-emerald-400" />
              Cybersecurity
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                filter === 'mobile'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3 h-3 text-emerald-400" />
              Mobile Apps
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                filter === 'web'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code className="w-3 h-3 text-blue-400" />
              Web Architecture
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                filter === 'ai'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bot className="w-3 h-3 text-purple-400" />
              Applied AI
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const categoryIcon =
              project.category === 'cybersecurity' ? (
                <Shield className="w-4 h-4 text-emerald-400" />
              ) : project.category === 'mobile' ? (
                <Smartphone className="w-4 h-4 text-emerald-400" />
              ) : project.category === 'web' ? (
                <Code className="w-4 h-4 text-blue-400" />
              ) : (
                <Bot className="w-4 h-4 text-purple-400" />
              );

            return (
              <div
                key={project.id}
                className="group rounded-2xl card-dark p-6 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Card Top: Category & Index */}
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      {categoryIcon}
                      <span className="capitalize">{project.category === 'mobile' ? 'Mobile App' : project.category}</span>
                    </span>
                    <span>0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Security Consideration Excerpt */}
                  <div className="mt-4 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 mb-1">
                      <Shield className="w-3 h-3" />
                      <span>Security & Defense:</span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {project.securityHighlights[0]}
                    </p>
                  </div>
                </div>

                {/* Card Bottom: Tags, Direct Link, and Inspect Specs Action */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap items-center gap-1 text-[11px] text-slate-400 font-mono mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span className="text-slate-400">{tag}</span>
                        {i < 2 && <span className="text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Action Row with Direct Project Links */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex-1 py-2 px-3 text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors flex items-center justify-center gap-1.5 group/btn"
                    >
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Inspect Specs</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 px-3 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors flex items-center gap-1"
                        title="View Project Source & Links"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <ArrowUpRight className="w-3 h-3 text-slate-400" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 p-6 rounded-2xl window-glass flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">
              Have a mobile app or security system requirement?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Acou Paul provides mobile development, security audits, and hardened full-stack architectures.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="px-5 py-2 text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-full shrink-0 transition-colors"
          >
            Inquire for Engagements
          </button>
        </div>
      </div>
    </section>
  );
};
