/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: 'cybersecurity' | 'mobile' | 'web';
  subtitle: string;
  summary: string;
  tags: string[];
  features: string[];
  securityHighlights: string[];
  architecture: string;
  liveUrl?: string;
  githubUrl?: string;
  demoType?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; icon: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'experience' | 'education' | 'certification';
  highlights: string[];
  badge?: string;
}

export const PERSONAL_INFO = {
  name: 'Acou Paul',
  role: 'Cybersecurity, Mobile & Software Engineer',
  headline: 'I engineer secure systems, mobile apps &',
  headlineAccent: 'resilient web architectures.',
  subheadline: 'Cybersecurity Specialist · Mobile Application Developer · Full-Stack Web',
  description:
    'Dedicated to building defensive, fault-tolerant digital architectures across mobile and web platforms. Specializing in proactive vulnerability mitigation, native mobile security, and hardened cloud backends.',
  phones: [
    { display: '0763480495', dial: '+256763480495', label: 'Primary Contact' },
    { display: '0741257369', dial: '+256741257369', label: 'Secondary / Direct' },
  ],
  whatsapp: {
    display: '0741257369',
    url: 'https://wa.me/256741257369?text=Hello%20Acou%20Paul,%20I%20am%20reaching%20out%20via%20your%20portfolio.',
  },
  xTwitter: {
    display: '0741257369',
    url: 'https://x.com',
  },
  email: 'paulacou4@gmail.com',
  location: 'Uganda · Available Globally / Remote',
  availability: 'Open for Security Audits, Mobile Apps & Web Systems',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  photoUrl: '', // Ready for photo file
};

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'sentinel-guard',
    title: 'SentinelGuard - Threat Surface Analyzer',
    category: 'cybersecurity',
    subtitle: 'Automated vulnerability scanning & defensive posture assessment',
    summary:
      'A defensive security platform that conducts continuous web and network asset discovery, SSL/TLS posture auditing, OWASP security header verification, and automated vulnerability intelligence mapping.',
    tags: ['Network Security', 'OWASP', 'Vulnerability Assessment', 'TypeScript', 'Node.js'],
    features: [
      'Automated HTTP security headers inspector (CSP, HSTS, X-Frame-Options)',
      'TLS cipher suite evaluation & weak protocol detection',
      'CVE risk scoring engine based on CVSS v3 standards',
      'Exportable remediation checklists for system administrators',
    ],
    securityHighlights: [
      'Zero-storage architecture: scans execute in-memory with strict rate limiting',
      'Defensive input sanitization preventing SSRF (Server-Side Request Forgery)',
      'Cryptographically signed audit digests with SHA-256 integrity verification',
    ],
    architecture: 'Modular scanning engine with worker queue, decoupled frontend analysis console, and asynchronous telemetry streaming.',
    liveUrl: 'https://github.com/paulacou4',
    githubUrl: 'https://github.com/paulacou4',
    demoType: 'Live Project & Source',
    featured: true,
  },
  {
    id: 'shield-mobile-vault',
    title: 'ShieldMobile - Secure Vault & 2FA Authenticator',
    category: 'mobile',
    subtitle: 'Cross-platform mobile application with biometric hardware encryption',
    summary:
      'A production-grade mobile security application for iOS and Android featuring biometric authentication (FaceID/Fingerprint), secure hardware Keystore/Keychain integration, and TOTP 2FA code generation.',
    tags: ['Mobile Development', 'React Native', 'iOS & Android', 'Biometrics', 'Hardware Keystore'],
    features: [
      'Biometric authentication enforcement with Secure Enclave hardware key generation',
      'Zero-knowledge encrypted credential storage with auto-timeout locking',
      'Time-based One-Time Password (TOTP) token generation with QR code scanner',
      'Offline-first synchronization with encrypted local SQLite database',
    ],
    securityHighlights: [
      'Hardware-backed cryptographic keys preventing cold-boot extraction',
      'Root and jailbreak detection heuristics with automatic session termination',
      'Secure screen-masking to prevent background OS screenshot leakage',
    ],
    architecture: 'Cross-platform native bridges connecting React Native to platform Keychain/KeyStore and WebCrypto primitives.',
    liveUrl: 'https://github.com/paulacou4',
    githubUrl: 'https://github.com/paulacou4',
    demoType: 'Mobile App Source',
    featured: true,
  },
  {
    id: 'zerotrust-gateway',
    title: 'Zero-Trust API Gateway & RBAC Proxy',
    category: 'cybersecurity',
    subtitle: 'Identity-aware microservice proxy with cryptographic verification',
    summary:
      'Engineered an edge authentication proxy enforcing granular role-based access control, cryptographic JWT signature validation, token revocation lists, and adaptive rate-limiting.',
    tags: ['Zero Trust', 'Authentication', 'Cryptography', 'Express', 'Redis'],
    features: [
      'Sub-millisecond token verification with ephemeral session storage',
      'Dynamic IP reputation tracking and automated brute-force throttling',
      'Strict role hierarchy and permission matrix evaluation',
      'Comprehensive audit logging with tamper-evident log streaming',
    ],
    securityHighlights: [
      'Protection against token replay attacks via cryptographically random jti nonces',
      'Constant-time string comparison algorithms to prevent timing side-channel attacks',
      'Enforced TLS 1.3 termination with strict forward secrecy',
    ],
    architecture: 'High-throughput reverse proxy layer positioned between public ingress and protected microservices.',
    liveUrl: 'https://github.com/paulacou4',
    githubUrl: 'https://github.com/paulacou4',
    demoType: 'API Source & Specs',
    featured: true,
  },
  {
    id: 'pulse-mobile-guard',
    title: 'PulseMobile - Network Security & Threat Companion',
    category: 'mobile',
    subtitle: 'Real-time WiFi security inspector and network scanner app',
    summary:
      'Native mobile utility app enabling field technicians and security conscious users to audit local WiFi encryption, detect rogue access points, ARP spoofing, and insecure DNS resolvers.',
    tags: ['Mobile Development', 'Flutter / Dart', 'Network Telemetry', 'WiFi Security', 'Mobile UX'],
    features: [
      'One-tap local subnet scanning identifying unauthorized connected devices',
      'WiFi security protocol auditing (WPA2 vs WPA3 vs Open Network risks)',
      'DNS leak detection and DNS-over-HTTPS (DoH) connection verification',
      'Interactive visual network topology map on mobile screens',
    ],
    securityHighlights: [
      'Strict background permission boundaries adhering to Android 14 and iOS 18 guidelines',
      'No tracking telemetry or third-party advertising SDKs',
      'Encrypted report sharing via standard platform share sheets',
    ],
    architecture: 'Flutter reactive UI layer backed by native C++ packet inspection libraries.',
    liveUrl: 'https://github.com/paulacou4',
    githubUrl: 'https://github.com/paulacou4',
    demoType: 'Mobile App Source',
    featured: true,
  },
  {
    id: 'nexus-cloud-platform',
    title: 'Nexus Cloud Web Application',
    category: 'web',
    subtitle: 'High-performance React 19 & TypeScript enterprise workspace',
    summary:
      'A full-stack, responsive web application built with modern component architecture, real-time optimistic state synchronization, strict type safety, and WCAG AA accessibility compliance.',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'RESTful APIs'],
    features: [
      'Instantaneous client-side navigation with responsive adaptive layout',
      'Comprehensive form validation with accessible error messaging',
      'Optimistic state updates with seamless rollback capabilities',
      'Custom theme orchestration with system preference synchronization',
    ],
    securityHighlights: [
      'Robust Content Security Policy (CSP) mitigating XSS vectors',
      'Strict origin checks and SameSite cookie isolation',
      'Client-side sanitize pipelines for all user-generated content',
    ],
    architecture: 'Vite React SPA paired with typed API client, centralized domain store, and modular presentation components.',
    liveUrl: 'https://github.com/paulacou4',
    githubUrl: 'https://github.com/paulacou4',
    demoType: 'Web App & Code',
    featured: true,
  },
  {
    id: 'secure-vault-web',
    title: 'Cryptographic SecureVault Web Client',
    category: 'web',
    subtitle: 'End-to-end encrypted browser credential storage system',
    summary:
      'Browser-based encrypted note and credential vault using the Web Cryptography API (SubtleCrypto) with client-side AES-GCM 256-bit encryption and PBKDF2 key derivation.',
    tags: ['Web Crypto API', 'AES-256', 'Client-Side Encryption', 'React', 'TypeScript'],
    features: [
      'Zero-knowledge architecture: plaintext never leaves user memory',
      'PBKDF2 key stretching with 600,000 iterations and cryptographic salt',
      'Automated inactivity lock with secure memory zeroization',
      'Offline-first capability with encrypted IndexedDB storage',
    ],
    securityHighlights: [
      'Guaranteed zero-knowledge server boundary',
      'Cryptographic tamper-evidence via authenticated ciphertext tags (GCM)',
      'Memory management routines to prevent lingering key fragments',
    ],
    architecture: 'Single-page client running strictly within isolated browser context with Web Worker cryptography.',
    liveUrl: 'https://github.com/paulacou4',
    githubUrl: 'https://github.com/paulacou4',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Cybersecurity & Defensive Engineering',
    description: 'Protecting systems, identifying vulnerabilities, and enforcing zero-trust architectures.',
    skills: [
      { name: 'Network Security & Firewalls', level: 'Advanced', icon: 'Shield' },
      { name: 'OWASP Top 10 Mitigation', level: 'Advanced', icon: 'Lock' },
      { name: 'Vulnerability Assessment', level: 'Proficient', icon: 'Search' },
      { name: 'Cryptography & PKI (AES/RSA)', level: 'Proficient', icon: 'Key' },
      { name: 'Zero-Trust Architecture', level: 'Proficient', icon: 'CheckCircle' },
      { name: 'Security Auditing & Code Review', level: 'Proficient', icon: 'FileText' },
    ],
  },
  {
    title: 'Mobile App Development',
    description: 'Building native and cross-platform secure mobile experiences for iOS and Android.',
    skills: [
      { name: 'React Native & Cross-Platform', level: 'Advanced', icon: 'Smartphone' },
      { name: 'iOS Keychain & Android Keystore Security', level: 'Advanced', icon: 'Key' },
      { name: 'Mobile Biometrics & Authentication', level: 'Proficient', icon: 'Lock' },
      { name: 'Offline Data Sync & SQLite', level: 'Proficient', icon: 'Database' },
      { name: 'Mobile App Performance Optimization', level: 'Advanced', icon: 'Zap' },
      { name: 'App Store & Play Store Deployment', level: 'Proficient', icon: 'Globe' },
    ],
  },
  {
    title: 'Full-Stack Web Engineering',
    description: 'Crafting responsive, performant, and type-safe modern web applications.',
    skills: [
      { name: 'TypeScript & JavaScript (ESNext)', level: 'Advanced', icon: 'Code' },
      { name: 'React 19 & Component Architecture', level: 'Advanced', icon: 'Layers' },
      { name: 'Node.js & Express APIs', level: 'Proficient', icon: 'Server' },
      { name: 'Tailwind CSS & Design Systems', level: 'Advanced', icon: 'Palette' },
      { name: 'REST & GraphQL Architecture', level: 'Proficient', icon: 'Cpu' },
      { name: 'Web Accessibility (WCAG AA)', level: 'Proficient', icon: 'Eye' },
    ],
  },
  {
    title: 'DevOps, Systems & Infrastructure',
    description: 'Hardening runtime environments and automating deployment pipelines.',
    skills: [
      { name: 'Linux / Unix System Administration', level: 'Proficient', icon: 'Terminal' },
      { name: 'Docker & Container Isolation', level: 'Proficient', icon: 'Box' },
      { name: 'Git & Secure Version Control', level: 'Advanced', icon: 'GitBranch' },
      { name: 'CI/CD Automated Security Scans', level: 'Proficient', icon: 'Repeat' },
      { name: 'Nginx Configuration & Hardening', level: 'Proficient', icon: 'Globe' },
    ],
  },
];

export const SECURITY_PRINCIPLES = [
  {
    title: 'Least Privilege by Default',
    description: 'Every user, component, and microservice operates with the minimal set of permissions required to perform its dedicated function.',
    metric: 'Zero-Trust Access',
  },
  {
    title: 'Defense in Depth',
    description: 'Multiple redundant defensive layers: network boundary filtering, application sanitization, and cryptographic data at rest.',
    metric: 'Multi-Layer Guard',
  },
  {
    title: 'Fail-Closed Posture',
    description: 'Upon exception or unexpected state, the system safely terminates execution without exposing internal stacks or authorization bypasses.',
    metric: 'Strict Termination',
  },
  {
    title: 'Continuous Verification',
    description: 'Session states, cryptographic tokens, and input parameters are continually validated throughout their complete lifecycle.',
    metric: 'Real-Time Attestation',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: '2025 - To date',
    role: 'Cybersecurity, Mobile & Software Engineer',
    organization: 'Independent Security Labs & Technical Projects',
    location: 'Uganda · Remote Available',
    type: 'experience',
    badge: 'Active & Current',
    highlights: [
      'Engineering secure web and mobile applications with proactive vulnerability auditing and OWASP adherence.',
      'Developing cross-platform mobile solutions with biometric hardware authentication and encrypted local storage.',
      'Building defensive security assessment tools, automated scanning scripts, and resilient web platforms.',
    ],
  },
  {
    period: 'Foundational Journey',
    role: 'Computer Systems, Security & Full-Stack Development',
    organization: 'Applied Engineering & Security Studies',
    location: 'Uganda',
    type: 'education',
    badge: 'Core Foundation',
    highlights: [
      'Rigorous studies in computer networks, operating system internals, cryptography, and modern mobile/web frameworks.',
      'Practical lab research on penetration testing, zero-trust architectures, and secure client-server communication.',
      'Continuous hands-on implementation of production-grade software projects and code auditing.',
    ],
  },
];
