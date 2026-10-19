/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SECURITY_PRINCIPLES } from '../data/portfolioData';
import { Shield, Lock, Key, Terminal, FileCode, CheckCircle2 } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityDomains = [
    {
      title: 'Web & API Boundary Defense',
      description: 'Enforcing strict Content Security Policies, TLS 1.3 encryption, CORS isolation, and anti-CSRF token validation across all ingress points.',
      points: ['CSP Header Hardening', 'Zero SSRF / Injection tolerant parsers', 'Cryptographic Nonce verification'],
    },
    {
      title: 'Mobile Application Security',
      description: 'Hardening iOS and Android runtimes with biometric authentication, hardware Secure Enclave key storage, and screen-blurring defenses.',
      points: ['Keychain / KeyStore isolation', 'Root & Jailbreak detection', 'Certificate pinning against MITM'],
    },
    {
      title: 'Identity & Access Architecture',
      description: 'Role-Based Access Control (RBAC) engineered around the Principle of Least Privilege and tamper-evident append-only session auditing.',
      points: ['Sub-millisecond JWT attestation', 'Ephemeral token lifecycles', 'Adaptive brute-force rate-limiting'],
    },
    {
      title: 'Cryptographic Integrity & Storage',
      description: 'End-to-end data encryption at rest and in transit utilizing AES-256-GCM authenticated ciphers and PBKDF2/Argon2 key stretching.',
      points: ['Zero-knowledge client encryption', 'Constant-time string comparisons', 'Automated memory zeroization'],
    },
  ];

  return (
    <section id="security" className="py-20 sm:py-28 border-t border-white/5 relative security-glow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>CYBERSECURITY & DEFENSIVE ENGINEERING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Security by design
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Practical security principles for the systems I build.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {SECURITY_PRINCIPLES.map((principle, index) => (
            <div
              key={principle.title}
              className="p-6 rounded-xl card-dark border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="text-emerald-400">0{index + 1}. PROTOCOL</span>
                  <span>{principle.metric}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Defensive Domains */}
        <div className="rounded-2xl window-glass p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <Lock className="w-4 h-4" />
            <span>SYSTEM AUDIT & PROTECTION PRACTICES</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-6">
            Security practices
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityDomains.map((dom) => (
              <div
                key={dom.title}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {dom.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  {dom.description}
                </p>
                <div className="space-y-1.5 border-t border-white/5 pt-3">
                  {dom.points.map((pt) => (
                    <div key={pt} className="text-xs text-slate-400 flex items-center gap-2 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
