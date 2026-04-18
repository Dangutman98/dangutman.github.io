import { useLayoutEffect, useState } from "react";
import {
  Cloud,
  Container,
  Terminal,
  GitBranch,
  Server,
  ExternalLink,
  ChevronUp,
  Shield,
  Mail,
  Car,
  Gamepad2,
  Archive,
  Sun,
  Moon,
  Phone,
  Globe2,
  Award,
  BadgeCheck,
} from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────────

interface TechItem {
  icon: React.ReactNode;
  name: string;
  sub: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  /** GitHub or other repo URL; card is clickable when set */
  href?: string;
}

interface Certification {
  title: string;
  issuer: string;
  issued: string;
  verifyUrl: string;
  skills: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const CONTACT_EMAIL = "Dangutman.98@gmail.com";
const CONTACT_PHONE_DISPLAY = "+972544363309";
const CONTACT_PHONE_TEL = "+972544363309";

const LINKEDIN_CERTIFICATIONS_URL =
  "https://www.linkedin.com/in/dan-gutman-0b4334228/details/certifications/";

const certifications: Certification[] = [
  {
    title: "AWS CloudFormation",
    issuer: "KodeKloud",
    issued: "Mar 2026",
    verifyUrl:
      "https://learn.kodekloud.com/certificate/d7cae018-dec9-4bbd-a265-f7dc55392e75",
    skills: ["AWS CloudFormation", "Amazon Web Services (AWS)"],
  },
  {
    title: "AWS Networking Fundamentals",
    issuer: "KodeKloud",
    issued: "Mar 2026",
    verifyUrl:
      "https://learn.kodekloud.com/certificate/897ef7a0-9d8f-4714-92f2-f2aea51a69b0",
    skills: ["Developing on AWS", "Amazon Web Services (AWS)"],
  },
  {
    title: "Shell Scripts for Beginners",
    issuer: "KodeKloud",
    issued: "Mar 2026",
    verifyUrl:
      "https://learn.kodekloud.com/certificate/a87ea55c-c7d9-4823-8c93-d13508a899a3",
    skills: ["Bash", "Shell scripting"],
  },
  {
    title: "AWS Academy Graduate — Cloud Developing",
    issuer: "Amazon Web Services (AWS)",
    issued: "Jan 2026",
    verifyUrl:
      "https://www.credly.com/earner/earned/badge/6c5b9b34-0917-4eb3-9ed7-13b06b2753a2",
    skills: ["Amazon Web Services (AWS)", "AWS cloud computing"],
  },
  {
    title: "Learning Linux Basics — Course & Labs",
    issuer: "KodeKloud",
    issued: "Jun 2025",
    verifyUrl:
      "https://learn.kodekloud.com/certificate/4cfa4c0a-e93f-4c42-8d4e-978fd9d0082b",
    skills: ["Linux"],
  },
];

const skillCategories: { title: string; detail: string }[] = [
  {
    title: "Operating systems",
    detail: "Linux — Red Hat, Ubuntu, CentOS",
  },
  {
    title: "Cloud & IaC",
    detail: "AWS, GCP, CloudFormation, Terraform",
  },
  {
    title: "Containers & deployment",
    detail: "Docker",
  },
  {
    title: "Automation & scripting",
    detail: "Python, Bash, PowerShell",
  },
  {
    title: "Databases",
    detail: "MySQL, Amazon RDS, Firebase",
  },
  {
    title: "Programming & web",
    detail: "JavaScript, TypeScript, React, Java, C#",
  },
  {
    title: "AI & tooling",
    detail: "Cursor IDE, prompt engineering",
  },
];

const courseworkHighlights: { name: string; grade: string }[] = [
  { name: "AI & Intelligent Algorithms", grade: "94" },
  { name: "Java", grade: "94" },
  { name: "Data Structures", grade: "93" },
  { name: "C#", grade: "91" },
  { name: "React + TypeScript", grade: "87" },
  { name: "C", grade: "86" },
  { name: "HTML/CSS/JS", grade: "85" },
];

const techStack: TechItem[] = [
  {
    icon: <Cloud className="w-8 h-8 text-amber-400" />,
    name: "AWS & GCP",
    sub: "EC2 · S3 · Networking · CloudWatch",
  },
  {
    icon: <Server className="w-8 h-8 text-violet-400" />,
    name: "Terraform",
    sub: "CloudFormation · IaC",
  },
  {
    icon: <Container className="w-8 h-8 text-sky-400" />,
    name: "Docker",
    sub: "Containers & Compose",
  },
  {
    icon: <Terminal className="w-8 h-8 text-emerald-400" />,
    name: "Linux",
    sub: "Red Hat · Ubuntu · CentOS · Bash",
  },
  {
    icon: <GitBranch className="w-8 h-8 text-rose-400" />,
    name: "GitHub Actions",
    sub: "CI/CD Pipelines",
  },
];

const projects: Project[] = [
  {
    title: "Secure Botanical AI Agent",
    description:
      "A fully containerised DevOps project that provisions cloud infrastructure locally using LocalStack and Terraform, orchestrates services with Docker Compose, and exposes a secure AI agent API. The stack demonstrates IaC best practices, network isolation, secrets management, and repeatable environment setup — all without touching a live cloud account.",
    tags: ["Terraform", "Docker Compose", "LocalStack", "IaC", "DevOps"],
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "AWS Secure VPC Architecture",
    description:
      "Production-oriented AWS networking deployed with CloudFormation: peered multi-VPC architecture with RDS Proxy and hardened layers (security groups, NACLs), bastion access patterns, and CloudWatch alarms for EC2 health — a security-focused, production-style topology.",
    tags: [
      "AWS",
      "CloudFormation",
      "VPC",
      "RDS Proxy",
      "CloudWatch",
    ],
    icon: <Cloud className="w-6 h-6 text-amber-400" />,
    href: "https://github.com/Dangutman98/aws-secure-vpc-architecture",
  },
  {
    title: "Malicious Email Scorer (Gmail Add-on)",
    description:
      "A Gmail add-on that scores emails in real time for phishing and abuse: layered checks across SPF/DKIM/DMARC, sender heuristics, content and attachment analysis, optional VirusTotal enrichment, and explainable verdicts — built on Google Apps Script with a full settings and history console.",
    tags: ["Google Apps Script", "Gmail", "Security", "VirusTotal"],
    icon: <Mail className="w-6 h-6 text-sky-400" />,
    href: "https://github.com/Dangutman98/Gmail-Add-on---Malicious-Email-Scorer",
  },
  {
    title: "Project F1 — Formula 1 Fan Site",
    description:
      "Full-stack F1 web app: React (TypeScript) and ASP.NET Core, Firebase auth, SQL Server, and external APIs — plus staged CloudFormation templates for VPC, NAT/RDS hardening, and peering, reflecting how the app fits into a realistic cloud topology.",
    tags: ["React", ".NET", "SQL", "Firebase", "CloudFormation"],
    icon: <Car className="w-6 h-6 text-red-400" />,
    href: "https://github.com/Dangutman98/F1Project",
  },
  {
    title: "Ropes & Ladders with Smart AI",
    description:
      "Desktop strategy game in Python and pygame with minimax and alpha–beta pruning, transposition tables, and phase-aware rope placement — human vs AI, AI vs AI, and local multiplayer modes.",
    tags: ["Python", "pygame", "Minimax", "AI"],
    icon: <Gamepad2 className="w-6 h-6 text-violet-400" />,
    href: "https://github.com/Dangutman98/RopesAndLadders",
  },
  {
    title: "Advanced Bash Archive Unpacker",
    description:
      "CLI utility for Linux that unpacks archives recursively using magic-byte detection (not just extensions), safe stream-based extraction, collision-safe output naming, and robust handling of awkward paths — ideal automation fodder for ops-style workflows.",
    tags: ["Bash", "Linux", "CLI", "Automation"],
    icon: <Archive className="w-6 h-6 text-emerald-400" />,
    href: "https://github.com/Dangutman98/advanced-bash-unpacker",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: "light" | "dark";
  onToggle: () => void;
}) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      className="p-0 text-slate-500 hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400 transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5" strokeWidth={1.75} />
      ) : (
        <Moon className="w-5 h-5" strokeWidth={1.75} />
      )}
    </button>
  );
}

function NavBar({
  theme,
  onToggleTheme,
}: {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200 dark:bg-gray-950/70 dark:border-gray-800">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold tracking-widest text-slate-600 uppercase dark:text-gray-400">
          Dan Gutman
        </span>
        <div className="flex items-center gap-4 sm:gap-5 text-sm text-slate-600 dark:text-gray-400 flex-wrap justify-end">
          {[
            "About",
            "Stack",
            "Education",
            "Certs",
            "Projects",
            "Contact",
          ].map((s) => (
            <a
              key={s}
              href={`#${s === "Certs" ? "certifications" : s.toLowerCase()}`}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {s}
            </a>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <p className="text-sky-600 dark:text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">
        Available for hire
      </p>

      <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
        Dan Gutman
      </h1>

      <h2 className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-gray-300 mb-6">
        Junior DevOps Engineer
      </h2>

      <p className="max-w-2xl text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
        I&apos;m a{" "}
        <span className="text-slate-900 dark:text-white font-medium">
          Computer Science
        </span>{" "}
        B.Sc. student finishing my degree, and I&apos;m focused on growing in{" "}
        <span className="text-sky-600 dark:text-sky-400 font-medium">
          cloud, infrastructure, and DevOps
        </span>
        — building reliable platforms, automation, and CI/CD, not QA test
        automation.
      </p>

      <p className="max-w-2xl text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
        Based in{" "}
        <span className="text-slate-900 dark:text-white font-medium">Haifa</span>
        . I surf whenever I can and I&apos;m into{" "}
        <span className="text-slate-800 dark:text-gray-200 font-medium">
          extreme sports
        </span>{" "}
        off the keyboard.
      </p>

      <p className="max-w-2xl text-slate-500 dark:text-gray-500 text-sm leading-relaxed mb-10">
        <span className="text-slate-700 dark:text-gray-300 font-medium">
          Active combat reservist
        </span>{" "}
        (IDF reserves / milu&apos;im). Open to{" "}
        <span className="text-sky-600 dark:text-sky-400 font-medium">
          entry-level
        </span>{" "}
        roles,{" "}
        <span className="text-sky-600 dark:text-sky-400 font-medium">
          internships
        </span>
        , and{" "}
        <span className="text-sky-600 dark:text-sky-400 font-medium">
          full-time
        </span>{" "}
        work in DevOps and cloud — let&apos;s connect.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href="#projects"
          className="px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-2.5 rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 dark:border-gray-700 dark:hover:border-gray-500 dark:text-gray-300 dark:hover:text-white font-semibold text-sm transition-colors"
        >
          Contact Me
        </a>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 animate-bounce text-slate-400 hover:text-slate-600 dark:text-gray-600 dark:hover:text-gray-400 transition-colors"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </a>
    </section>
  );
}

function TechStack() {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Skills & Tools"
          title="My Tech Stack"
          sub="The tools I reach for when building and automating cloud infrastructure."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
          {techStack.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 dark:bg-gray-900 dark:border-gray-800 dark:hover:border-gray-600 transition-colors group"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-gray-800 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-slate-900 dark:text-white font-semibold text-sm text-center">
                {item.name}
              </p>
              <p className="text-slate-500 dark:text-gray-500 text-xs text-center leading-snug">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-white/80 p-6 sm:p-8 dark:border-gray-800 dark:bg-gray-900/60">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4">
            Full skill matrix
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {skillCategories.map((row) => (
              <li key={row.title} className="text-sm">
                <span className="font-medium text-slate-800 dark:text-gray-200">
                  {row.title}
                </span>
                <span className="text-slate-500 dark:text-gray-500"> — </span>
                <span className="text-slate-600 dark:text-gray-400">
                  {row.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function EducationAndBackground() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-100/80 dark:bg-gray-900/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Education & background"
          title="Credentials & context"
          sub="Degree progress, strong coursework, military service, and languages — quick signals recruiters often scan for."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-gray-800">
                <Award className="w-5 h-5 text-amber-500" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  B.Sc. Computer Science
                </h3>
                <p className="text-sky-600 dark:text-sky-400 text-sm font-medium">
                  2022 – 2026 · in progress
                </p>
                <p className="text-slate-600 dark:text-gray-400 text-sm mt-1">
                  Focus: development of software systems
                </p>
              </div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-500 mb-3">
              Relevant coursework (grades)
            </p>
            <ul className="flex flex-wrap gap-2">
              {courseworkHighlights.map((c) => (
                <li
                  key={c.name}
                  className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
                >
                  {c.name}{" "}
                  <span className="text-sky-600 dark:text-sky-400 font-semibold">
                    {c.grade}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-gray-800">
                <Shield className="w-5 h-5 text-slate-600 dark:text-gray-400" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Military service — IDF
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm">
                  2016 – 2019
                </p>
              </div>
            </div>
            <ul className="text-sm text-slate-600 dark:text-gray-400 space-y-2 list-disc list-inside">
              <li>Combat soldier, &ldquo;Orev Tzanhanim&rdquo; unit (mandatory service)</li>
              <li>Discipline, accountability, and teamwork under pressure</li>
              <li>
                International NATO exercises with US and European forces
              </li>
            </ul>
            <p className="text-sm text-slate-600 dark:text-gray-400 mt-4 pt-4 border-t border-slate-200 dark:border-gray-700">
              <span className="font-medium text-slate-800 dark:text-gray-200">
                Reserves:
              </span>{" "}
              active combat reservist (milog) — deployed when operational needs
              require.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600 dark:text-gray-400">
          <Globe2 className="w-4 h-4 shrink-0 text-sky-600 dark:text-sky-400" />
          <span>
            <span className="font-medium text-slate-800 dark:text-gray-200">
              Languages:
            </span>{" "}
            Hebrew — native · English — proficient · Russian — proficient
          </span>
        </div>
      </div>
    </section>
  );
}

function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <a
      href={cert.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 text-left transition-colors hover:border-sky-500/50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-sky-500/40"
    >
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-slate-100 p-2 dark:bg-gray-800">
          <BadgeCheck
            className="h-5 w-5 shrink-0 text-sky-600 dark:text-sky-400"
            strokeWidth={1.75}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-slate-900 dark:text-white leading-snug">
            {cert.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-gray-400">
            {cert.issuer} · {cert.issued}
          </p>
        </div>
        <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-sky-600 dark:text-gray-600 dark:group-hover:text-sky-400" />
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {cert.skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
          >
            {s}
          </span>
        ))}
      </div>
      <span className="mt-4 text-xs font-medium text-sky-600 dark:text-sky-400">
        Show credential →
      </span>
    </a>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3 dark:bg-gray-800">
            <BadgeCheck
              className="h-8 w-8 text-sky-600 dark:text-sky-400"
              strokeWidth={1.5}
            />
          </div>
          <SectionHeading
            label="Learning"
            title="Certifications"
            sub="Verified courses and badges — click a card to open the issuer’s credential page."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <CertificationCard key={cert.verifyUrl} cert={cert} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={LINKEDIN_CERTIFICATIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:border-sky-500 hover:text-sky-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-sky-500 dark:hover:text-sky-400"
          >
            <LinkedinIcon className="h-4 w-4" />
            Also on LinkedIn
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-100/80 dark:bg-gray-900/40"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Work"
          title="Featured Projects"
          sub="Infrastructure, security, full-stack apps, and tooling — from AWS and IaC to scripts and games."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const className =
    "relative flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-500/50 dark:bg-gray-900 dark:border-gray-800 dark:hover:border-sky-500/40 transition-colors overflow-hidden group text-left";

  const body = (
    <>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-sky-500/10 to-transparent dark:from-sky-500/5 pointer-events-none rounded-2xl" />

      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-slate-100 dark:bg-gray-800 shrink-0">
          {project.icon}
        </div>
        <h3 className="text-slate-900 dark:text-white font-bold text-lg min-w-0">
          {project.title}
        </h3>
        {project.href ? (
          <ExternalLink className="w-4 h-4 text-slate-400 dark:text-gray-600 ml-auto shrink-0 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors" />
        ) : null}
      </div>

      <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {body}
      </a>
    );
  }

  return <div className={className}>{body}</div>;
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <SectionHeading
          label="Get in touch"
          title="Let's Connect"
          sub="Open to entry-level DevOps and cloud roles, internships, and full-time work — reach out by email, phone, or socials."
        />

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-slate-600 dark:text-gray-400">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <Mail className="w-4 h-4 shrink-0" strokeWidth={1.75} />
            <span>{CONTACT_EMAIL}</span>
          </a>
          <a
            href={`tel:${CONTACT_PHONE_TEL}`}
            className="inline-flex items-center gap-2 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <Phone className="w-4 h-4 shrink-0" strokeWidth={1.75} />
            <span>{CONTACT_PHONE_DISPLAY}</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10">
          <SocialLink
            href="https://www.linkedin.com/in/dan-gutman-0b4334228/"
            icon={<LinkedinIcon className="w-5 h-5" />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://github.com/Dangutman98"
            icon={<GithubIcon className="w-5 h-5" />}
            label="GitHub"
          />
          <SocialLink
            href="https://www.facebook.com/dan.gutman.79"
            icon={<FacebookIcon className="w-5 h-5" />}
            label="Facebook"
          />
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-300 hover:border-sky-500 text-slate-600 hover:text-sky-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-sky-400 transition-colors text-sm font-medium"
    >
      {icon}
      {label}
    </a>
  );
}

function Footer() {
  return (
    <footer className="py-6 border-t border-slate-200 dark:border-gray-800 text-center text-slate-500 dark:text-gray-600 text-xs">
      © {new Date().getFullYear()} Dan Gutman · Built with React, TypeScript &
      Tailwind CSS
    </footer>
  );
}

function SectionHeading({
  label,
  title,
  sub,
}: {
  label: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="text-center">
      <p className="text-sky-600 dark:text-sky-400 text-xs font-semibold tracking-widest uppercase mb-2">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
        {title}
      </h2>
      <p className="text-slate-600 dark:text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
        {sub}
      </p>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem("theme") === "light" ? "light" : "dark";
}

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="relative min-h-screen font-sans antialiased bg-slate-50 text-slate-900 dark:bg-gray-950 dark:text-white transition-colors">
      <NavBar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <TechStack />
        <EducationAndBackground />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
