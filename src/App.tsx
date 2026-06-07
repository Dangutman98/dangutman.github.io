import { useLayoutEffect, useState, useEffect } from "react";
import {
  Cloud,
  ExternalLink,
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
  Menu,
  X,
  Clock,
  Compass,
  Cpu,
  ArrowRight,
  Database,
  Lock,
  Check,
  Loader2
} from "lucide-react";

// ─── Data & Config ──────────────────────────────────────────────────────────
const CONTACT_EMAIL = "Dangutman.98@gmail.com";
const CONTACT_PHONE_DISPLAY = "+972 54-436-3309";
const CONTACT_PHONE_TEL = "+972544363309";

const GITHUB_URL = "https://github.com/Dangutman98";
const LINKEDIN_URL = "https://www.linkedin.com/in/dan-gutman-0b4334228/";
const FACEBOOK_URL = "https://www.facebook.com/dan.gutman.79";
const LINKEDIN_CERT_URL = "https://www.linkedin.com/in/dan-gutman-0b4334228/details/certifications/";
const PROFILE_IMAGE_SRC = "/dan-profile.png";

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  href?: string;
}

interface Certification {
  title: string;
  issuer: string;
  issued: string;
  verifyUrl: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    title: "AWS Academy Graduate — Cloud Developing",
    issuer: "Amazon Web Services (AWS)",
    issued: "Jan 2026",
    verifyUrl: "https://www.credly.com/earner/earned/badge/6c5b9b34-0917-4eb3-9ed7-13b06b2753a2",
    skills: ["AWS Cloud Computing", "Development"],
  },
  {
    title: "AWS CloudFormation",
    issuer: "KodeKloud",
    issued: "Mar 2026",
    verifyUrl: "https://learn.kodekloud.com/certificate/d7cae018-dec9-4bbd-a265-f7dc55392e75",
    skills: ["AWS CloudFormation", "Infrastructure as Code"],
  },
  {
    title: "AWS Networking Fundamentals",
    issuer: "KodeKloud",
    issued: "Mar 2026",
    verifyUrl: "https://learn.kodekloud.com/certificate/897ef7a0-9d8f-4714-92f2-f2aea51a69b0",
    skills: ["VPC Peering", "Cloud Security"],
  },
  {
    title: "Shell Scripts for Beginners",
    issuer: "KodeKloud",
    issued: "Mar 2026",
    verifyUrl: "https://learn.kodekloud.com/certificate/a87ea55c-c7d9-4823-8c93-d13508a899a3",
    skills: ["Bash", "Linux Automation"],
  },
  {
    title: "Learning Linux Basics — Course & Labs",
    issuer: "KodeKloud",
    issued: "Jun 2025",
    verifyUrl: "https://learn.kodekloud.com/certificate/4cfa4c0a-e93f-4c42-8d4e-978fd9d0082b",
    skills: ["Linux Systems", "Administration"],
  },
];

const projects: Project[] = [
  {
    title: "Secure Botanical AI Agent",
    description: "Designed a serverless RAG application utilizing Groq LLMs and Pinecone vector search, implementing a hybrid search engine (semantic vectors fused with local BM25) deployed via containerized Docker services on AWS Lambda.",
    tags: ["AWS Lambda", "Pinecone", "Groq LLM", "Docker", "Hybrid Search", "Serverless RAG"],
    icon: <Shield className="w-5 h-5 text-emerald-500" />,
    href: "https://github.com/Dangutman98/botanical-agent",
  },
  {
    title: "AWS Secure VPC Architecture",
    description: "Multi-VPC peered network layout deployed using modular CloudFormation templates. Incorporates RDS Proxy, hardened private subnets, bastion host security patterns, and custom CloudWatch alarms for real-time traffic monitoring and host metric logging.",
    tags: ["AWS", "CloudFormation", "RDS Proxy", "VPC Peering", "CloudWatch"],
    icon: <Cloud className="w-5 h-5 text-amber-500" />,
    href: "https://github.com/Dangutman98/aws-secure-vpc-architecture",
  },
  {
    title: "Malicious Email Scorer (Gmail Add-on)",
    description: "A Google Apps Script add-on that dynamically screens incoming emails. Analyzes SPF/DKIM/DMARC headers, scrapes sender trust indicators, runs safety algorithms on attachment extensions, and fetches VirusTotal API scores to present real-time safety metrics.",
    tags: ["Google Apps Script", "Gmail API", "Cybersecurity", "VirusTotal"],
    icon: <Mail className="w-5 h-5 text-sky-500" />,
    href: "https://github.com/Dangutman98/Gmail-Add-on---Malicious-Email-Scorer",
  },
  {
    title: "Project F1 — Formula 1 Fan Site",
    description: "Full-stack F1 platform built using React, TypeScript, ASP.NET Core, and Firebase Auth. Includes an associated CloudFormation topology setting up a scaled VPC, private SQL Server RDS instance, NAT gateways, and load balancer rules.",
    tags: ["React", "ASP.NET Core", "SQL Server", "Firebase", "IaC"],
    icon: <Car className="w-5 h-5 text-rose-500" />,
    href: "https://github.com/Dangutman98/F1Project",
  },
  {
    title: "Ropes & Ladders with Smart AI",
    description: "Pygame-based tactical implementation of the classic game. Features single-player versus minimax AI (engineered with alpha-beta pruning, transposition tables, and heuristic rope placements) alongside local multi-agent simulations.",
    tags: ["Python", "Pygame", "Minimax AI", "Algorithms"],
    icon: <Gamepad2 className="w-5 h-5 text-violet-500" />,
    href: "https://github.com/Dangutman98/RopesAndLadders",
  },
  {
    title: "Advanced Bash Unpacker",
    description: "Linux systems utility that unpacks file archives recursively. Uses magic-byte signatures rather than file extensions for reliable format detection, handles collisions gracefully, and processes nested directory streams efficiently.",
    tags: ["Bash", "Linux Shell", "CLI Tooling", "Automation"],
    icon: <Archive className="w-5 h-5 text-amber-600" />,
    href: "https://github.com/Dangutman98/advanced-bash-unpacker",
  },
];

const coursework = [
  { name: "AI & Intelligent Algorithms", grade: "94" },
  { name: "Java Systems", grade: "94" },
  { name: "Data Structures & Alg.", grade: "93" },
  { name: "C# & .NET Framework", grade: "91" },
  { name: "React + TypeScript", grade: "87" },
  { name: "C Programming", grade: "86" },
  { name: "Web Technologies (JS/HTML)", grade: "85" },
];

const skillCategories = [
  { title: "Backend Systems", detail: "TypeScript, Javascript, Node.js, Java, C#, Python, Bash" },
  { title: "Cloud & IaC", detail: "AWS, GCP, Terraform, CloudFormation" },
  { title: "Containers & OS", detail: "Docker, Docker Compose, Linux (Red Hat, Ubuntu, CentOS)" },
  { title: "Databases & API", detail: "MySQL, RDS, PostgreSQL, REST APIs, Firebase" },
  { title: "AI & Automation", detail: "AI agents, LLM APIs, automation scripts" },
];



// ─── AWS Architecture visualizer configurations ─────────────────────────────
interface AWSComponent {
  id: string;
  name: string;
  role: string;
  iac: string;
  detail: string;
  icon: React.ReactNode;
}

const awsComponents: AWSComponent[] = [
  {
    id: "vpc",
    name: "Hardened VPC",
    role: "Network Isolation",
    iac: "CloudFormation / Terraform",
    detail: "Segmented into public and private subnets across multiple availability zones. Configured with strict internet gateways and secure route tables to block ingress traffic to internal systems.",
    icon: <Globe2 className="w-5 h-5 text-amber-500" />
  },
  {
    id: "bastion",
    name: "Bastion Host",
    role: "Secure Access Gateway",
    iac: "Terraform AWS Provider",
    detail: "Hardened EC2 instance housed in the public subnet. Acts as a secure proxy gateway for SSH admin traffic. Restricted strictly by IP lockouts and security group rules.",
    icon: <Lock className="w-5 h-5 text-rose-500" />
  },
  {
    id: "rds-proxy",
    name: "RDS Proxy",
    role: "DB Connection Pooler",
    iac: "CloudFormation Template",
    detail: "Maintains active connection pools to the RDS database. Enhances system resilience during traffic spikes and safeguards database credentials via AWS Secrets Manager integration.",
    icon: <Cpu className="w-5 h-5 text-amber-500" />
  },
  {
    id: "database",
    name: "RDS Database",
    role: "Data Persistence Layer",
    iac: "Terraform PostgreSQL/MySQL",
    detail: "Multi-AZ database deployed inside fully private subnets. Blocked from direct internet access. Configured with automatic daily snapshots and encrypted storage volumes.",
    icon: <Database className="w-5 h-5 text-emerald-500" />
  },
  {
    id: "nacls",
    name: "NACLs & SGs",
    role: "Security Firewalls",
    iac: "IaC Security Policies",
    detail: "Layered network access control lists (stateless) and security groups (stateful). Implements a strict least-privilege model allowing traffic only on dedicated required ports.",
    icon: <Shield className="w-5 h-5 text-violet-500" />
  }
];

// ─── Sub-Components ──────────────────────────────────────────────────────────
function ThemeToggle({ theme, onToggle }: { theme: "light" | "dark"; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="p-2.5 rounded-full border border-stone-200 dark:border-zinc-800 text-stone-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

// ─── Main App ────────────────────────────────────────────────────────────────
function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem("dan_theme") === "dark" ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);
  const [time, setTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Pipeline Simulator state
  const [pipelineState, setPipelineState] = useState<"idle" | "running" | "success">("idle");
  const [currentStep, setCurrentStep] = useState(-1);
  const [pipelineLogs, setPipelineLogs] = useState<string[]>([]);

  const runPipeline = () => {
    if (pipelineState === "running") return;
    setPipelineState("running");
    setCurrentStep(0);
    setPipelineLogs(["❯ initializing deploy pipeline..."]);

    const logs = [
      "❯ cloning repository Dangutman98/botanical-agent...",
      "✔ repository cloned successfully [1.2s]",
      "❯ running linter & security scans...",
      "✔ lint & vulnerability scans passed [0.8s]",
      "❯ executing unit tests...",
      "✔ all 14 tests passed successfully [1.1s]",
      "❯ provision cloud resources via terraform...",
      "✔ aws infrastructure updated. 4 resources modified [1.4s]",
      "❯ deploy containerized service to aws lambda...",
      "✔ lambda function updated. vercel routing active [1.0s]",
      "🎉 DEPLOYMENT SUCCESSFUL! prod environment live. lighthouse: 100/100 🚀"
    ];

    let logIdx = 0;
    const interval = setInterval(() => {
      if (logIdx < logs.length) {
        setPipelineLogs(prev => [...prev, logs[logIdx]]);
        if (logs[logIdx].startsWith("✔") || logs[logIdx].startsWith("🎉")) {
          setCurrentStep(prev => prev + 1);
        }
        logIdx++;
      } else {
        clearInterval(interval);
        setPipelineState("success");
      }
    }, 650);
  };

  // AWS Visualizer state
  const [selectedAwsComp, setSelectedAwsComp] = useState<AWSComponent>(awsComponents[0]);

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("dan_theme", theme);
  }, [theme]);

  // Clock Hook (Haifa time)
  useEffect(() => {
    const updateHaifaTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jerusalem",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateHaifaTime();
    const interval = setInterval(updateHaifaTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Architecture", href: "#architecture" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative min-h-screen grid-bg font-sans antialiased text-stone-900 dark:text-zinc-100 transition-colors duration-300">
      
      {/* ── Navbar ────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 dark:border-zinc-800/40 bg-stone-50/80 dark:bg-[#09090b]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-bold text-sm tracking-tight">dan.gutman.dev</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-zinc-400">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link transition-colors hover:text-stone-900 dark:hover:text-white">
                {item.label}
              </a>
            ))}
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </nav>

          {/* Mobile Right */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-500 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200/60 dark:border-zinc-800/40 bg-stone-50 dark:bg-[#09090b] px-4 py-4 space-y-3 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold text-stone-600 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-16">
        
        {/* ── Section 1: The Bento Grid Dashboard ─────────────────────────── */}
        <section id="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Haifa Vibe widget (spans 2 cols, 2 rows) */}
            <div className="bento-card md:col-span-2 md:row-span-2 p-6 flex flex-col justify-between min-h-[360px] relative group overflow-hidden">
              {/* Surfing photo background always visible but styled nicely */}
              <div className="absolute inset-0 pointer-events-none">
                <img 
                  src="/dan-surf.jpg" 
                  alt="Dan surfing" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Theme-aware overlay for text readability */}
                <div className="absolute inset-0 bg-stone-50/80 dark:bg-[#09090b]/85 group-hover:bg-stone-50/60 group-hover:dark:bg-[#09090b]/70 transition-colors duration-300" />
              </div>

              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-zinc-400 group-hover:text-stone-700 dark:group-hover:text-zinc-200 transition-colors">Haifa Local · Live Clock</span>
                </div>
                <Compass className="w-5 h-5 text-amber-600 dark:text-amber-400 group-hover:text-amber-500 animate-spin-slow transition-colors" />
              </div>
              
              <div className="z-10 group-hover:text-stone-900 dark:group-hover:text-white transition-colors">
                <div className="flex items-baseline gap-2 text-stone-850 dark:text-white font-mono font-black text-5xl md:text-6xl tracking-tight">
                  <Clock className="w-8 h-8 md:w-10 md:h-10 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>{time || "12:00:00"}</span>
                </div>
                <p className="text-xs font-mono text-stone-500 dark:text-zinc-400 mt-2 ml-1">Haifa, Israel · timezone UTC+3 🌊</p>
              </div>

              {/* Surf Conditions */}
              <div className="z-10 py-3 mt-4 border-y border-stone-200/40 dark:border-zinc-800/40 space-y-1">
                <span className="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400 font-bold block">Surf & Weather Vibe</span>
                <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs font-mono text-stone-600 dark:text-zinc-400 group-hover:text-stone-850 dark:group-hover:text-zinc-200 transition-colors">
                  <span className="flex items-center gap-1">🏄‍♂️ Swell: 0.8m @ 7s</span>
                  <span className="flex items-center gap-1">💨 Wind: 6kt Offshore</span>
                  <span className="flex items-center gap-1">🌡️ Sea Temp: 22°C</span>
                </div>
              </div>
              
              <div className="pt-4 z-10 flex items-center justify-between border-t border-stone-200/20 dark:border-zinc-800/20">
                <p className="text-sm md:text-base italic font-serif text-stone-700 dark:text-zinc-300 group-hover:text-stone-900 group-hover:dark:text-white transition-colors leading-snug animate-wave">
                  &ldquo;Surfer by day, Software Engineer by night.&rdquo;
                </p>
                <span className="text-[10px] text-stone-400 dark:text-zinc-500 font-mono hidden sm:inline">Med Sea 🌊</span>
              </div>
            </div>

            {/* profile bento card (spans 2 cols, 2 rows) */}
            <div className="bento-card p-6 md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[360px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={PROFILE_IMAGE_SRC}
                      alt="Dan Gutman"
                      className="w-10 h-10 rounded-full object-cover border border-stone-200 dark:border-zinc-800"
                    />
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Available for Hire
                    </span>
                  </div>
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  <span className="gradient-text font-heading mr-2">Hi, I&apos;m</span>
                  Dan Gutman
                </h1>
                <h2 className="text-sm font-mono tracking-widest uppercase text-amber-600 dark:text-amber-400 mt-2 font-bold">
                  Computer Science Graduate
                </h2>
                
                <p className="mt-6 text-sm text-stone-600 dark:text-zinc-400 leading-relaxed max-w-md">
                  Software Engineer and Computer Science graduate with experience in backend environments and system automation. Skilled in Python, Bash, and Linux internals, with a proven ability to develop test scripts and robust CI/CD pipelines. Proactive problem solver who integrates AI tools to ensure system stability, dedicated to delivering production-ready and resilient technology.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-full bg-stone-900 dark:bg-zinc-100 text-stone-100 dark:text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-stone-800 dark:hover:bg-zinc-200 transition-all hover:scale-102"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-full border border-stone-300 dark:border-zinc-800 text-stone-600 dark:text-zinc-400 font-bold text-xs uppercase tracking-wider hover:bg-stone-100 dark:hover:bg-zinc-900 transition-all"
                >
                  View Code
                </a>
              </div>
            </div>


            {/* Featured AI Project Widget (spans 2 cols, 1 row) */}
            <div className="bento-card p-6 md:col-span-2 flex flex-col justify-between min-h-[170px] group">
              <div>
                <div className="flex items-center justify-between border-b border-stone-200/60 dark:border-zinc-800/60 pb-2.5">
                  <div className="flex items-center gap-2.5">
                    <Shield className="w-5 h-5 text-emerald-500 shrink-0" />
                    <h3 className="font-bold text-sm text-stone-900 dark:text-white uppercase tracking-wider">Featured AI Project</h3>
                  </div>
                  <a 
                    href="https://github.com/Dangutman98/botanical-agent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] font-mono text-amber-600 dark:text-amber-400 font-bold hover:underline"
                  >
                    <span>botanical-agent</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                
                <div className="mt-3.5">
                  <h4 className="font-bold text-base text-stone-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                    Secure Botanical AI Agent
                  </h4>
                  <p className="text-[11px] text-stone-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
                    Designed a serverless RAG application utilizing Groq LLMs and Pinecone vector search, implementing a hybrid search engine (semantic vectors fused with local BM25) deployed via containerized Docker services on AWS Lambda.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-200/40 dark:border-zinc-800/40 mt-3.5">
                {["AWS Lambda", "Pinecone", "Groq LLM", "Docker", "Serverless RAG"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-zinc-900/60 border border-stone-250/50 dark:border-zinc-800/50 text-stone-600 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications Widget (1x1) */}
            <div className="bento-card p-5 flex flex-col justify-between aspect-square">
              <div className="flex items-center justify-between border-b border-stone-200/60 dark:border-zinc-800/60 pb-2">
                <BadgeCheck className="w-5 h-5 text-emerald-500" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-zinc-500">Badges</span>
              </div>
              <div className="space-y-2.5 my-2">
                <div className="flex flex-col border-b border-stone-200/30 dark:border-zinc-800/30 pb-1.5">
                  <span className="font-bold text-[11px] text-stone-800 dark:text-zinc-200 truncate leading-snug">AWS Academy Graduate</span>
                  <span className="text-[9px] text-stone-400">Cloud Developing · Jan 26</span>
                </div>
                <div className="flex flex-col border-b border-stone-200/30 dark:border-zinc-800/30 pb-1.5">
                  <span className="font-bold text-[11px] text-stone-800 dark:text-zinc-200 truncate leading-snug">AWS CloudFormation</span>
                  <span className="text-[9px] text-stone-400">KodeKloud · Mar 26</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[11px] text-stone-800 dark:text-zinc-200 truncate leading-snug">AWS Networking</span>
                  <span className="text-[9px] text-stone-400">Fundamentals · Mar 26</span>
                </div>
              </div>
              <div className="border-t border-stone-200/60 dark:border-zinc-800/60 pt-2 text-center">
                <a
                  href="#education"
                  className="text-[9px] font-mono font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-0.5"
                >
                  All {certifications.length} credentials →
                </a>
              </div>
            </div>

            {/* IDF Combat Service Widget (1x1) */}
            <div className="bento-card p-5 flex flex-col justify-between aspect-square">
              <div className="flex items-center justify-between border-b border-stone-200/60 dark:border-zinc-800/60 pb-2">
                <Shield className="w-5 h-5 text-rose-500" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-zinc-500">IDF Service</span>
              </div>
              <div>
                <h3 className="font-bold text-xs text-stone-900 dark:text-white truncate">Combat Commander</h3>
                <p className="text-[10px] font-mono text-stone-400 dark:text-zinc-500 mt-0.5">&ldquo;Orev Tzanhanim&rdquo; Unit</p>
                <p className="text-[10px] text-stone-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  Mandatory paratrooper commander service including advanced joint NATO drills. Active reserve fighter.
                </p>
              </div>
              <div className="border-t border-stone-200/60 dark:border-zinc-800/60 pt-2 flex items-center justify-between">
                <span className="text-[9px] uppercase font-mono tracking-wider font-semibold text-rose-500 dark:text-rose-400">Reservist</span>
                <span className="text-[9px] text-stone-400">2016 – Pres.</span>
              </div>
            </div>

            {/* Full skill matrix summary bento (2x1) */}
            <div className="bento-card p-6 md:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-stone-500 dark:text-zinc-400 mb-3">Skill Matrix</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                  {skillCategories.map((sc) => (
                    <li key={sc.title} className="flex flex-col border-b border-stone-200/30 dark:border-zinc-800/30 pb-2">
                      <span className="font-semibold text-stone-800 dark:text-zinc-300">{sc.title}</span>
                      <span className="text-[11px] text-stone-500 dark:text-zinc-500 mt-0.5">{sc.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CI/CD Pipeline Simulator Card (spans 2 cols) */}
            <div className="bento-card p-6 md:col-span-2 flex flex-col justify-between min-h-[200px] bg-zinc-950 text-zinc-100 border-zinc-850 dark:border-zinc-800">
              <div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      {pipelineState === "running" && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      )}
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${
                        pipelineState === "success" ? "bg-emerald-500" : pipelineState === "running" ? "bg-amber-500" : "bg-zinc-500"
                      }`}></span>
                    </span>
                    <h3 className="font-bold text-xs uppercase tracking-wider text-zinc-400">DevOps CI/CD Pipeline</h3>
                  </div>
                  <button
                    onClick={runPipeline}
                    disabled={pipelineState === "running"}
                    className={`text-[10px] font-mono font-bold px-3 py-1 rounded border transition-all cursor-pointer ${
                      pipelineState === "running"
                        ? "border-zinc-800 bg-zinc-900 text-zinc-500 cursor-not-allowed"
                        : "border-amber-500/50 bg-amber-500/15 text-amber-400 hover:bg-amber-500/30 active:scale-95"
                    }`}
                  >
                    {pipelineState === "running" ? "Deploying..." : pipelineState === "success" ? "Run Pipeline Again" : "Trigger Deploy"}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  {/* Left Column: Visual Steps */}
                  <div className="space-y-3">
                    {[
                      { name: "Git Checkout", desc: "Sync latest main branch" },
                      { name: "Security & Lint", desc: "Run linter & security scans" },
                      { name: "Terraform Apply", desc: "Sync AWS infrastructure" },
                      { name: "Lambda Release", desc: "Deploy container service" }
                    ].map((step, idx) => {
                      let status: "idle" | "running" | "success" = "idle";
                      if (currentStep > idx) status = "success";
                      else if (currentStep === idx && pipelineState === "running") status = "running";

                      return (
                        <div key={step.name} className="flex items-start gap-2.5">
                          <div className="mt-0.5">
                            {status === "success" ? (
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                            ) : status === "running" ? (
                              <Loader2 className="w-3.5 h-3.5 text-amber-500 animate-spin" />
                            ) : (
                              <span className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700 block mt-0.5" />
                            )}
                          </div>
                          <div>
                            <p className={`text-[11px] font-bold leading-tight ${
                              status === "success" ? "text-zinc-200" : status === "running" ? "text-amber-400" : "text-zinc-500"
                            }`}>{step.name}</p>
                            <p className="text-[9px] text-zinc-500 leading-tight mt-0.5">{step.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Column: Log Output Console */}
                  <div className="bg-black/40 border border-zinc-900 rounded-lg p-3 font-mono text-[9px] leading-relaxed text-zinc-400 min-h-[130px] max-h-[130px] overflow-y-auto flex flex-col justify-end">
                    <div className="space-y-1 overflow-y-auto max-h-full">
                      {pipelineLogs.map((log, i) => {
                        let color = "text-zinc-400";
                        if (log.startsWith("✔")) color = "text-emerald-400";
                        else if (log.startsWith("🎉")) color = "text-amber-400 font-semibold";
                        else if (log.startsWith("❯")) color = "text-zinc-500";
                        return (
                          <div key={i} className={color}>
                            {log}
                          </div>
                        );
                      })}
                      {pipelineState === "running" && (
                        <div className="text-amber-400 animate-pulse text-[9px] mt-0.5">▋ pipeline running...</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-zinc-900 pt-2.5 mt-3 text-[9px] font-mono text-zinc-500 flex justify-between">
                <span>Console v2.1.0</span>
                <span>Target: aws-lambda-rag</span>
              </div>
            </div>

            {/* Tech stack widget (spans all 4 cols) */}
            <div className="bento-card p-6 md:col-span-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm uppercase tracking-wider text-stone-500 dark:text-zinc-400">Primary Stack</h3>
                <Cpu className="w-4 h-4 text-amber-500" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: "Backend Systems", details: "Node.js · Python · Java · C#", icon: "💻" },
                  { name: "Cloud & IaC", details: "AWS · GCP · Terraform", icon: "☁️" },
                  { name: "Containers", details: "Docker · Compose", icon: "🐳" },
                  { name: "Automation", details: "Bash · Linux · Scripting", icon: "⚙️" }
                ].map((stack) => (
                  <div key={stack.name} className="p-3 rounded-xl bg-stone-100/50 dark:bg-zinc-900/40 border border-stone-200/40 dark:border-zinc-800/40 hover:-translate-y-0.5 transition-all">
                    <span className="text-base">{stack.icon}</span>
                    <h4 className="font-bold text-xs mt-2 text-stone-800 dark:text-zinc-200">{stack.name}</h4>
                    <p className="text-[10px] text-stone-500 dark:text-zinc-500 mt-0.5">{stack.details}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <div className="sep" />

        {/* ── Section 3: Projects ─────────────────────────────────────────── */}
        <section id="projects" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Featured Projects</h2>
            <p className="text-sm text-stone-600 dark:text-zinc-400">
              Systems architecture, API integration, and automation tools built during my studies and research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => {
              const cardContent = (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-zinc-900 shrink-0">
                      {proj.icon}
                    </div>
                    <h3 className="font-bold text-base text-stone-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                      {proj.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-zinc-400 leading-relaxed mb-6 flex-1">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-stone-200/50 dark:border-zinc-800/40">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-100 dark:bg-zinc-900/60 border border-stone-200/50 dark:border-zinc-800/50 text-stone-600 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              );

              if (proj.href) {
                return (
                  <a
                    key={proj.title}
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-card p-5 flex flex-col justify-between group cursor-pointer"
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <div key={proj.title} className="bento-card p-5 flex flex-col justify-between">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </section>

        <div className="sep" />

        {/* ── Section 4: Education & Certs ───────────────────────────────── */}
        <section id="education" className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Ruppin B.Sc. card */}
          <div className="bento-card p-6 lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-200/60 dark:border-zinc-800/60 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-stone-900 dark:text-white">B.Sc. Computer Science</h2>
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold font-mono">
                    Ruppin Academic Center · Graduate (2022 – 2026)
                  </p>
                </div>
              </div>
              <Globe2 className="w-5 h-5 text-stone-300 dark:text-zinc-600" />
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-zinc-500">
                Coursework highlights & grades
              </h3>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course.name}
                    className="text-xs px-3 py-1 rounded-full bg-stone-100 dark:bg-zinc-900/60 text-stone-600 dark:text-zinc-400 border border-stone-200/50 dark:border-zinc-800/50"
                  >
                    {course.name}{" "}
                    <span className="text-amber-600 dark:text-amber-400 font-bold ml-1">{course.grade}</span>
                  </span>
                ))}
              </div>

              <div className="border-t border-stone-200/30 dark:border-zinc-800/30 pt-4 text-xs text-stone-500 dark:text-zinc-500 space-y-1.5 font-mono">
                <p>Focus Area: Software Systems Development & Algorithms</p>
                <p>Languages: Hebrew (Native) · English (Proficient) · Russian (Proficient)</p>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bento-card p-6 flex flex-col justify-between min-h-[310px]">
            <div>
              <div className="flex items-center justify-between border-b border-stone-200/60 dark:border-zinc-800/60 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-emerald-500" />
                  <h2 className="font-bold text-sm uppercase tracking-wider text-stone-500 dark:text-zinc-400">Badges</h2>
                </div>
                <span className="text-xs font-mono text-stone-400">{certifications.length} Credentials</span>
              </div>

              <div className="space-y-3.5">
                {certifications.map((c) => (
                  <a
                    key={c.verifyUrl}
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-2.5 rounded-xl bg-stone-50/50 dark:bg-zinc-900/25 border border-stone-200/40 dark:border-zinc-800/40 hover:border-amber-500/40 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-xs text-stone-800 dark:text-zinc-200 leading-snug group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                          {c.title}
                        </h4>
                        <p className="text-[10px] text-stone-400 dark:text-zinc-500 mt-0.5">
                          {c.issuer} · {c.issued}
                        </p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-500 transition-colors shrink-0 ml-2" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-stone-200/60 dark:border-zinc-800/60 text-center">
              <a
                href={LINKEDIN_CERT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
              >
                LinkedIn Credentials Directory
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </section>

        <div className="sep" />

        {/* ── Section 2: Interactive AWS Architecture Visualizer ───────────── */}
        <section id="architecture" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Interactive AWS Visualizer</h2>
            <p className="text-sm text-stone-600 dark:text-zinc-400">
              Hover or click elements in the VPC layout below to see the specific IaC configurations and security roles I applied to this setup.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Visualizer canvas */}
            <div className="bento-card p-6 lg:col-span-2 bg-[#fafafc] dark:bg-[#060608] min-h-[380px] flex flex-col justify-center border-stone-200/70 dark:border-zinc-800/80">
              
              {/* Outer border representing internet / public router */}
              <div className="border border-dashed border-stone-300 dark:border-zinc-800 p-4 rounded-xl space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                  <span>OUTSIDE INTERNET</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                </div>

                {/* VPC Boundary */}
                <div className="border-2 border-stone-300 dark:border-zinc-800 p-6 rounded-2xl bg-white dark:bg-[#0b0b0e] space-y-6 shadow-sm">
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold text-amber-500">
                    <span>AWS VPC (10.0.0.0/16)</span>
                    <Globe2 className="w-4 h-4 animate-spin-slow" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Public Subnet */}
                    <div className="border border-stone-200 dark:border-zinc-800/80 bg-stone-50/50 dark:bg-zinc-900/20 p-4 rounded-xl space-y-3">
                      <div className="text-[10px] font-mono text-indigo-500 font-bold">Public Subnet (DMZ)</div>
                      
                      <button
                        onClick={() => setSelectedAwsComp(awsComponents.find(c => c.id === "bastion")!)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                          selectedAwsComp.id === "bastion"
                            ? "bg-amber-500/10 border-amber-500/60 shadow-sm shadow-amber-500/10"
                            : "bg-white dark:bg-zinc-900/40 border-stone-200 dark:border-zinc-800/60 hover:border-amber-500/30"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Lock className="w-4.5 h-4.5 text-rose-500" />
                          <span className="text-xs font-bold">Bastion EC2 Host</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 opacity-55" />
                      </button>
                    </div>

                    {/* Private Subnet */}
                    <div className="border border-stone-200 dark:border-zinc-800/80 bg-stone-50/50 dark:bg-zinc-900/20 p-4 rounded-xl space-y-3">
                      <div className="text-[10px] font-mono text-emerald-500 font-bold">Private Subnet (Isolated)</div>
                      
                      <button
                        onClick={() => setSelectedAwsComp(awsComponents.find(c => c.id === "rds-proxy")!)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                          selectedAwsComp.id === "rds-proxy"
                            ? "bg-amber-500/10 border-amber-500/60 shadow-sm shadow-amber-500/10"
                            : "bg-white dark:bg-zinc-900/40 border-stone-200 dark:border-zinc-800/60 hover:border-amber-500/30"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4.5 h-4.5 text-amber-500" />
                          <span className="text-xs font-bold">RDS Proxy Pool</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 opacity-55" />
                      </button>

                      <button
                        onClick={() => setSelectedAwsComp(awsComponents.find(c => c.id === "database")!)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                          selectedAwsComp.id === "database"
                            ? "bg-amber-500/10 border-amber-500/60 shadow-sm shadow-amber-500/10"
                            : "bg-white dark:bg-zinc-900/40 border-stone-200 dark:border-zinc-800/60 hover:border-amber-500/30"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Database className="w-4.5 h-4.5 text-emerald-500" />
                          <span className="text-xs font-bold">RDS PostgreSQL</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 opacity-55" />
                      </button>
                    </div>

                  </div>

                  {/* Network Controls */}
                  <div className="flex justify-center gap-3 pt-2">
                    <button
                      onClick={() => setSelectedAwsComp(awsComponents.find(c => c.id === "vpc")!)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${
                        selectedAwsComp.id === "vpc"
                          ? "bg-amber-500/10 border-amber-500/60"
                          : "bg-white dark:bg-zinc-900/40 border-stone-200 dark:border-zinc-800/60 hover:border-amber-500/30"
                      }`}
                    >
                      <Globe2 className="w-3.5 h-3.5" />
                      VPC Routing
                    </button>
                    <button
                      onClick={() => setSelectedAwsComp(awsComponents.find(c => c.id === "nacls")!)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${
                        selectedAwsComp.id === "nacls"
                          ? "bg-amber-500/10 border-amber-500/60"
                          : "bg-white dark:bg-zinc-900/40 border-stone-200 dark:border-zinc-800/60 hover:border-amber-500/30"
                      }`}
                    >
                      <Shield className="w-3.5 h-3.5" />
                      Firewall (NACLs)
                    </button>
                  </div>

                </div>
              </div>
            </div>

            {/* Component Detail Sidebar */}
            <div className="bento-card p-6 min-h-[380px] flex flex-col justify-between border-stone-200/80 dark:border-zinc-800/80">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-stone-100 dark:bg-zinc-900 text-amber-500 shrink-0">
                    {selectedAwsComp.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-900 dark:text-white">{selectedAwsComp.name}</h3>
                    <p className="text-[10px] font-mono tracking-widest uppercase text-stone-400 dark:text-zinc-500">
                      {selectedAwsComp.role}
                    </p>
                  </div>
                </div>

                <div className="sep" />

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400 font-bold block">
                    IaC Provisioning
                  </span>
                  <p className="font-mono text-xs text-stone-800 dark:text-zinc-300 bg-stone-100 dark:bg-zinc-900/60 p-2 rounded border border-stone-200/50 dark:border-zinc-800/50">
                    {selectedAwsComp.iac}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono uppercase text-stone-400 dark:text-zinc-500 block">
                    Configuration details
                  </span>
                  <p className="text-xs text-stone-600 dark:text-zinc-400 leading-relaxed">
                    {selectedAwsComp.detail}
                  </p>
                </div>
              </div>

              <div className="text-[10px] text-stone-400 font-mono text-right mt-6">
                Active Component: {selectedAwsComp.id}
              </div>
            </div>

          </div>
        </section>

        <div className="sep" />

        {/* ── Section 5: Contact ──────────────────────────────────────────── */}
        <section id="contact" className="max-w-2xl mx-auto space-y-8 text-center">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight">Let&apos;s Connect</h2>
            <p className="text-sm text-stone-600 dark:text-zinc-400">
              Open to entry-level software engineering, backend, cloud database, or automation roles. Also open to summer internships.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="bento-card p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 font-bold text-stone-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4.5 h-4.5" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="inline-flex items-center gap-2 font-bold text-stone-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4.5 h-4.5" />
                <span>{CONTACT_PHONE_DISPLAY}</span>
              </a>
            </div>

            <div className="sep" />

            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "LinkedIn", url: LINKEDIN_URL },
                { label: "GitHub", url: GITHUB_URL },
                { label: "Facebook", url: FACEBOOK_URL }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-stone-200 dark:border-zinc-800 text-stone-600 dark:text-zinc-400 hover:border-amber-500 hover:text-amber-500 dark:hover:text-amber-400 transition-all font-semibold text-xs uppercase tracking-wider hover:-translate-y-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-stone-200/60 dark:border-zinc-800/40 py-10 mt-20 bg-stone-100/30 dark:bg-[#070709]/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Dan Gutman. All rights reserved.</p>
          <p className="font-mono">Built with React + TypeScript + Tailwind v4</p>
        </div>
      </footer>

    </div>
  );
}
