/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, Shield, Cpu, Layers, ExternalLink, Github, Check, Copy, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
  onToast: (msg: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onContactClick,
  onToast,
}) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopySpecs = () => {
    const specs = `${project.title}\nCategory: ${project.category}\n${project.subtitle}\n\nSummary:\n${project.summary}\n\nArchitecture:\n${project.architecture}\n\nSecurity Highlights:\n${project.securityHighlights.join('\n')}\n\nRepository: ${project.githubUrl || 'Available on request'}`;
    navigator.clipboard.writeText(specs);
    setCopied(true);
    onToast('Project specifications copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl rounded-2xl window-glass my-8 overflow-hidden shadow-2xl border border-white/10 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Window Header */}
        <div className="flex items-center justify-between px-6 py-4 window-titlebar border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
            <span className="ml-3 text-xs font-mono text-slate-400">
              acou-paul://projects/{project.id}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          {/* Header Title & Tags */}
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 mb-2 font-mono">
              <Shield className="w-4 h-4" />
              <span className="uppercase tracking-wider">{project.category} SPECIFICATION & CODE</span>
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              {project.subtitle}
            </p>

            {/* Direct Project Links Banner */}
            <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <span className="text-emerald-400">●</span>
                <span>Direct Access Links:</span>
              </div>
              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repository</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Project Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Unboxed Metadata Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
              {project.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span className="text-slate-300">{tag}</span>
                  {idx < project.tags.length - 1 && <span className="text-slate-600">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Overview Statement */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Executive Overview
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Architecture Specification */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Architectural Blueprint</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed pl-6 border-l border-white/10">
              {project.architecture}
            </p>
          </div>

          {/* Core Functional Capabilities */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>Engineered Capabilities</span>
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 pl-6">
              {project.features.map((feature, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                  <span className="text-emerald-400 shrink-0 font-mono text-xs">0{i + 1}.</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security & Hardening Highlights */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Security Posture & Defensive Measures</span>
            </h3>
            <div className="grid grid-cols-1 gap-2.5 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              {project.securityHighlights.map((sec, i) => (
                <div key={i} className="text-xs sm:text-sm text-emerald-200/90 flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{sec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopySpecs}
                className="px-4 py-2 text-xs font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors flex items-center gap-2"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Specs' : 'Copy Specifications'}</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors"
              >
                Inquire With Acou Paul
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
