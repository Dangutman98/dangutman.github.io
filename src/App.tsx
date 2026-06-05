import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Cloud,
  Container,
  Terminal as TerminalIcon,
  GitBranch,
  Server,
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
  ChevronDown,
  Cpu,
  Database,
  Code2,
  Bot,
  Zap,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────── */
/*  SVG icons                                                                 */
/* ────────────────────────────────────────────────────────────────────────── */

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Data                                                                      */
/* ────────────────────────────────────────────────────────────────────────── */

const CONTACT_EMAIL = "Dangutman.98@gmail.com";
const CONTACT_PHONE_DISPLAY = "+972-54-436-3309";
const CONTACT_PHONE_TEL = "+972544363309";
const LINKEDIN_URL = "https://www.linkedin.com/in/dan-gutman-0b4334228/";
const GITHUB_URL = "https://github.com/Dangutman98";
const FACEBOOK_URL = "https://www.facebook.com/dan.gutman.79";
const LINKEDIN_CERTS_URL = "https://www.linkedin.com/in/dan-gutman-0b4334228/details/certifications/";
const PROFILE_IMAGE_SRC = "/dan-profile.png";

const navItems = [
  { label: "About",    href: "#about" },
  { label: "Stack",    href: "#stack" },
  { label: "Terminal", href: "#terminal" },
  { label: "Projects", href: "#projects" },
  { label: "Certs",    href: "#certifications" },
  { label: "Contact",  href: "#contact" },
];

interface TechItem {
  icon: React.ReactNode;
  name: string;
  sub: string;
  color: string;
}

const techStack: TechItem[] = [
  { icon: <Cloud className="w-7 h-7" />,         name: "AWS & GCP",        sub: "EC2 · S3 · Networking · CloudWatch", color: "text-amber-400" },
  { icon: <Server className="w-7 h-7" />,        name: "Terraform & CF",   sub: "IaC · CloudFormation · Modules",     color: "text-violet-400" },
  { icon: <Container className="w-7 h-7" />,     name: "Docker",           sub: "Containers · Compose",               color: "text-cyan-400"   },
  { icon: <TerminalIcon className="w-7 h-7" />,  name: "Linux",            sub: "Red Hat · Ubuntu · CentOS · Bash",   color: "text-emerald-400"},
  { icon: <GitBranch className="w-7 h-7" />,     name: "GitHub Actions",   sub: "CI/CD Pipelines",                    color: "text-rose-400"   },
  { icon: <Database className="w-7 h-7" />,      name: "Databases",        sub: "MySQL · RDS · Firebase",             color: "text-sky-400"    },
  { icon: <Code2 className="w-7 h-7" />,         name: "Programming",      sub: "Python · Bash · JS/TS · Java · C#",  color: "text-orange-400" },
  { icon: <Bot className="w-7 h-7" />,           name: "AI & Tooling",     sub: "Cursor IDE · Prompt Eng.",           color: "text-pink-400"   },
  { icon: <Cpu className="w-7 h-7" />,           name: "PowerShell",       sub: "Windows automation",                 color: "text-indigo-400" },
  { icon: <Zap className="w-7 h-7" />,           name: "CI/CD",            sub: "GitHub Actions · Pipelines",         color: "text-yellow-400" },
];

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  iconBg: string;
  href?: string;
}

const projects: Project[] = [
  {
    title: "AWS Secure VPC Architecture",
    description: "Production-grade AWS networking with CloudFormation: peered multi-VPC architecture, RDS Proxy, hardened security groups & NACLs, bastion access, and CloudWatch alarms for EC2 health.",
    tags: ["AWS", "CloudFormation", "VPC", "RDS Proxy", "CloudWatch"],
    icon: <Cloud className="w-5 h-5" />,
    iconBg: "bg-amber-500/15 text-amber-400",
    href: "https://github.com/Dangutman98/aws-secure-vpc-architecture",
  },
  {
    title: "Serverless RAG Application",
    description: "Fully serverless RAG pipeline using Groq LLMs, Pinecone vector store, AWS Lambda, Docker, and CI/CD — production-ready retrieval-augmented generation with infrastructure as code.",
    tags: ["Groq", "Pinecone", "Lambda", "Docker", "RAG", "IaC"],
    icon: <Bot className="w-5 h-5" />,
    iconBg: "bg-violet-500/15 text-violet-400",
    href: "https://github.com/Dangutman98",
  },
  {
    title: "Malicious Email Scorer",
    description: "Gmail Add-on that scores emails in real time for phishing and abuse: SPF/DKIM/DMARC checks, sender heuristics, content & attachment analysis, optional VirusTotal enrichment, and explainable verdicts.",
    tags: ["Google Apps Script", "Gmail", "Security", "VirusTotal"],
    icon: <Shield className="w-5 h-5" />,
    iconBg: "bg-sky-500/15 text-sky-400",
    href: "https://github.com/Dangutman98/Gmail-Add-on---Malicious-Email-Scorer",
  },
  {
    title: "Project F1 — Formula 1 Fan Site",
    description: "Full-stack F1 web app: React (TypeScript) + ASP.NET Core, Firebase auth, SQL Server, external APIs, and staged CloudFormation templates reflecting a realistic cloud topology.",
    tags: ["React", ".NET", "SQL", "Firebase", "CloudFormation"],
    icon: <Car className="w-5 h-5" />,
    iconBg: "bg-red-500/15 text-red-400",
    href: "https://github.com/Dangutman98/F1Project",
  },
  {
    title: "Ropes & Ladders with Smart AI",
    description: "Desktop strategy game in Python and pygame with minimax + alpha-beta pruning, transposition tables, and phase-aware rope placement — human vs AI, AI vs AI, and local multiplayer.",
    tags: ["Python", "pygame", "Minimax", "AI", "Alpha-Beta"],
    icon: <Gamepad2 className="w-5 h-5" />,
    iconBg: "bg-emerald-500/15 text-emerald-400",
    href: "https://github.com/Dangutman98/RopesAndLadders",
  },
  {
    title: "Advanced Bash Archive Unpacker",
    description: "CLI utility for Linux that unpacks archives recursively using magic-byte detection, safe stream-based extraction, collision-safe output naming, and robust handling of awkward paths.",
    tags: ["Bash", "Linux", "CLI", "Automation"],
    icon: <Archive className="w-5 h-5" />,
    iconBg: "bg-emerald-500/15 text-emerald-400",
    href: "https://github.com/Dangutman98/advanced-bash-unpacker",
  },
];

interface Certification {
  title: string;
  issuer: string;
  issued: string;
  verifyUrl: string;
  skills: string[];
}

const certifications: Certification[] = [
  { title: "AWS Academy Graduate — Cloud Developing", issuer: "Amazon Web Services (AWS)", issued: "Jan 2026", verifyUrl: "https://www.credly.com/earner/earned/badge/6c5b9b34-0917-4eb3-9ed7-13b06b2753a2", skills: ["Amazon Web Services (AWS)", "Cloud Computing"] },
  { title: "AWS CloudFormation", issuer: "KodeKloud", issued: "Mar 2026", verifyUrl: "https://learn.kodekloud.com/certificate/d7cae018-dec9-4bbd-a265-f7dc55392e75", skills: ["AWS CloudFormation", "IaC"] },
  { title: "AWS Networking Fundamentals", issuer: "KodeKloud", issued: "Mar 2026", verifyUrl: "https://learn.kodekloud.com/certificate/897ef7a0-9d8f-4714-92f2-f2aea51a69b0", skills: ["Networking", "AWS"] },
  { title: "Shell Scripts for Beginners", issuer: "KodeKloud", issued: "Mar 2026", verifyUrl: "https://learn.kodekloud.com/certificate/a87ea55c-c7d9-4823-8c93-d13508a899a3", skills: ["Bash", "Shell Scripting"] },
  { title: "Learning Linux Basics — Course & Labs", issuer: "KodeKloud", issued: "Jun 2025", verifyUrl: "https://learn.kodekloud.com/certificate/4cfa4c0a-e93f-4c42-8d4e-978fd9d0082b", skills: ["Linux"] },
];

const coursework = [
  { name: "AI & Intelligent Algorithms", grade: "94" },
  { name: "Java",                         grade: "94" },
  { name: "Data Structures",              grade: "93" },
  { name: "C#",                           grade: "91" },
  { name: "React + TypeScript",           grade: "87" },
  { name: "C",                            grade: "86" },
  { name: "HTML/CSS/JS",                  grade: "85" },
];

/* ────────────────────────────────────────────────────────────────────────── */
/*  Interactive Terminal                                                       */
/* ────────────────────────────────────────────────────────────────────────── */

type TerminalLine =
  | { type: "prompt"; text: string }
  | { type: "output"; text: string; color?: string }
  | { type: "blank" };

const COMMANDS: Record<string, TerminalLine[]> = {
  help: [
    { type: "output", text: "Available commands:", color: "text-indigo-400" },
    { type: "output", text: "  whoami          — about Dan" },
    { type: "output", text: "  skills          — tech stack" },
    { type: "output", text: "  projects        — featured work" },
    { type: "output", text: "  certs           — certifications" },
    { type: "output", text: "  education       — academic background" },
    { type: "output", text: "  contact         — get in touch" },
    { type: "output", text: "  clear           — clear the terminal" },
    { type: "blank" },
  ],
  whoami: [
    { type: "output", text: "┌─ Dan Gutman ────────────────────────────────────────┐", color: "text-indigo-400" },
    { type: "output", text: "│  Role    : Computer Science Graduate                │" },
    { type: "output", text: "│  Location: Haifa, Israel 🌊                          │" },
    { type: "output", text: "│  Status  : Available for hire 🟢                    │" },
    { type: "output", text: "│  Hobbies : Surfing · Extreme sports · Motorcycles   │" },
    { type: "output", text: "│  Reserve : IDF active combat reservist (miluim)     │" },
    { type: "output", text: "└────────────────────────────────────────────────────┘", color: "text-indigo-400" },
    { type: "blank" },
  ],
  skills: [
    { type: "output", text: "$ cat skills.json", color: "text-emerald-400" },
    { type: "output", text: "{" },
    { type: "output", text: '  "cloud"      : ["AWS (EC2, S3, RDS, CloudWatch)", "GCP"],' },
    { type: "output", text: '  "iac"        : ["Terraform", "AWS CloudFormation"],' },
    { type: "output", text: '  "containers" : ["Docker", "Docker Compose"],' },
    { type: "output", text: '  "linux"      : ["Red Hat", "Ubuntu", "CentOS", "Bash"],' },
    { type: "output", text: '  "ci_cd"      : ["GitHub Actions"],' },
    { type: "output", text: '  "databases"  : ["MySQL", "Amazon RDS", "Firebase"],' },
    { type: "output", text: '  "languages"  : ["Python", "TypeScript", "JavaScript", "Java", "C#", "Bash", "PowerShell"]' },
    { type: "output", text: "}" },
    { type: "blank" },
  ],
  projects: [
    { type: "output", text: "$ ls -la ~/projects/", color: "text-cyan-400" },
    { type: "output", text: "drwxr-xr-x  aws-secure-vpc-architecture  [AWS · CloudFormation · VPC]", color: "text-amber-300" },
    { type: "output", text: "drwxr-xr-x  serverless-rag-app            [Groq · Pinecone · Lambda]", color: "text-violet-300" },
    { type: "output", text: "drwxr-xr-x  gmail-email-scorer            [Google Apps Script · Security]", color: "text-sky-300" },
    { type: "output", text: "drwxr-xr-x  project-f1-fan-site          [React · .NET · SQL · Firebase]", color: "text-red-300" },
    { type: "output", text: "drwxr-xr-x  ropes-ladders-ai             [Python · Minimax · AI]", color: "text-emerald-300" },
    { type: "output", text: "drwxr-xr-x  bash-archive-unpacker        [Bash · Linux · CLI]", color: "text-orange-300" },
    { type: "blank" },
  ],
  certs: [
    { type: "output", text: "$ kubectl get certificates --all", color: "text-emerald-400" },
    { type: "output", text: "NAME                                     ISSUER    ISSUED" },
    { type: "output", text: "aws-academy-graduate-cloud-developing    AWS       Jan 2026", color: "text-amber-300" },
    { type: "output", text: "aws-cloudformation                       KodeKloud Mar 2026", color: "text-amber-300" },
    { type: "output", text: "aws-networking-fundamentals              KodeKloud Mar 2026", color: "text-amber-300" },
    { type: "output", text: "shell-scripts-for-beginners              KodeKloud Mar 2026", color: "text-amber-300" },
    { type: "output", text: "learning-linux-basics                    KodeKloud Jun 2025", color: "text-amber-300" },
    { type: "blank" },
  ],
  education: [
    { type: "output", text: "$ cat /etc/education", color: "text-indigo-400" },
    { type: "output", text: "Degree  : B.Sc. Computer Science" },
    { type: "output", text: "School  : Ruppin Academic Center, Israel" },
    { type: "output", text: "Period  : 2022 – 2026 (in progress)" },
    { type: "output", text: "Focus   : Software Systems Development" },
    { type: "blank" },
    { type: "output", text: "Top grades:", color: "text-emerald-400" },
    { type: "output", text: "  AI & Intelligent Algorithms  94" },
    { type: "output", text: "  Java                         94" },
    { type: "output", text: "  Data Structures              93" },
    { type: "output", text: "  C#                           91" },
    { type: "blank" },
  ],
  contact: [
    { type: "output", text: "$ ping dan@devops", color: "text-cyan-400" },
    { type: "output", text: "PING dan — 1 packet transmitted, 1 received 🟢", color: "text-emerald-400" },
    { type: "blank" },
    { type: "output", text: "  Email  : Dangutman.98@gmail.com" },
    { type: "output", text: "  Phone  : +972-54-436-3309" },
    { type: "output", text: "  GitHub : https://github.com/Dangutman98" },
    { type: "output", text: "  LinkedIn: https://linkedin.com/in/dan-gutman-0b4334228" },
    { type: "blank" },
  ],
};

function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", text: "Welcome to dan-gutman-shell v1.0.0 🚀", color: "text-indigo-400" },
    { type: "output", text: 'Type "help" to see available commands.' },
    { type: "blank" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  function runCommand(cmd: string) {
    const trimmed = cmd.trim().toLowerCase();
    const promptLine: TerminalLine = { type: "prompt", text: cmd };

    if (!trimmed) {
      setLines((l) => [...l, promptLine, { type: "blank" }]);
      return;
    }

    setHistory((h) => [cmd, ...h]);
    setHistIdx(-1);

    if (trimmed === "clear") {
      setLines([]);
      return;
    }

    const result = COMMANDS[trimmed];
    if (result) {
      setLines((l) => [...l, promptLine, ...result]);
    } else {
      setLines((l) => [
        ...l,
        promptLine,
        { type: "output", text: `Command not found: ${trimmed}. Try "help".`, color: "text-rose-400" },
        { type: "blank" },
      ]);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(next);
      setInput(history[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? "" : history[next]);
    }
  }

  const quickCmds = ["whoami", "skills", "projects", "certs", "education", "contact", "clear"];

  return (
    <section id="terminal" className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Interactive"
          title="DevOps Console"
          sub="Type a command below or click a quick-run button to explore my skills interactively."
        />

        <div
          className="mt-10 rounded-2xl overflow-hidden border border-indigo-500/20 dark:border-indigo-500/30 glow-indigo"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 font-mono text-xs text-gray-500">dan@devops-workstation ~ $</span>
          </div>

          {/* Quick-run buttons */}
          <div className="flex flex-wrap gap-2 px-4 py-3 bg-gray-950 border-b border-white/5">
            {quickCmds.map((c) => (
              <button
                key={c}
                id={`terminal-cmd-${c}`}
                onClick={(e) => { e.stopPropagation(); runCommand(c); }}
                className="font-mono text-xs px-3 py-1 rounded-md bg-indigo-500/10 hover:bg-indigo-500/25 text-indigo-400 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors"
              >
                {c}
              </button>
            ))}
          </div>

          {/* Output */}
          <div className="h-72 sm:h-96 overflow-y-auto bg-gray-950 px-4 pt-3 pb-2 font-mono text-sm leading-6 cursor-text">
            {lines.map((line, i) => {
              if (line.type === "blank") return <div key={i} className="h-3" />;
              if (line.type === "prompt") return (
                <div key={i} className="flex gap-2">
                  <span className="text-indigo-400 shrink-0">❯</span>
                  <span className="text-gray-100">{line.text}</span>
                </div>
              );
              return (
                <div key={i} className={`pl-4 ${line.color ?? "text-gray-400"}`}>
                  {line.text}
                </div>
              );
            })}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-950 border-t border-white/5">
            <span className="text-indigo-400 font-mono text-sm shrink-0">❯</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="type a command…"
              aria-label="Terminal command input"
              id="terminal-input"
              className="flex-1 bg-transparent font-mono text-sm text-gray-100 placeholder:text-gray-700 outline-none caret-indigo-400"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
            />
            <span className="cursor-blink text-indigo-400 font-mono select-none">▌</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Theme toggle                                                              */
/* ────────────────────────────────────────────────────────────────────────── */

function ThemeToggle({ theme, onToggle }: { theme: "light" | "dark"; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      id="theme-toggle"
      className="p-2 rounded-lg text-gray-500 hover:text-indigo-400 hover:bg-indigo-500/10 dark:text-gray-400 dark:hover:text-indigo-400 transition-all"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark"
        ? <Sun className="w-4 h-4" strokeWidth={2} />
        : <Moon className="w-4 h-4" strokeWidth={2} />}
    </button>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Navbar                                                                    */
/* ────────────────────────────────────────────────────────────────────────── */

function NavBar({ theme, onToggleTheme }: { theme: "light" | "dark"; onToggleTheme: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/85 backdrop-blur-xl border-b border-slate-200/70 dark:border-indigo-500/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <a href="#about" className="flex shrink-0 items-center gap-2.5" onClick={() => setMobileOpen(false)} id="nav-logo">
          <img
            src={PROFILE_IMAGE_SRC}
            alt="Dan Gutman"
            width={36} height={36}
            className="h-9 w-9 rounded-full object-cover object-center ring-2 ring-indigo-500/30"
            decoding="async"
          />
          <span className="font-semibold text-sm tracking-wide text-gray-900 dark:text-white">
            Dan<span className="gradient-text ml-1">Gutman</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="ml-2 h-5 w-px bg-gray-200 dark:bg-gray-700" />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            id="mobile-menu-toggle"
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-slate-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/98 backdrop-blur-xl shadow-xl"
        >
          <div className="mx-auto flex max-w-5xl flex-col px-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-slate-100 dark:border-gray-800 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Hero                                                                      */
/* ────────────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl animate-pulse [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 -z-10 grid-bg" />

      {/* Available badge */}
      <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-emerald-400 uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Available for hire
      </div>

      {/* Profile image */}
      <div className="animate-fade-up delay-100 relative mb-8">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 blur-md opacity-40 scale-110" />
        <img
          src={PROFILE_IMAGE_SRC}
          alt="Dan Gutman"
          width={160} height={160}
          className="relative aspect-square h-36 w-36 sm:h-44 sm:w-44 rounded-full object-cover object-center shadow-2xl ring-4 ring-indigo-500/30"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {/* Name */}
      <h1 className="animate-fade-up delay-200 mb-3 text-5xl sm:text-7xl font-extrabold tracking-tight leading-none">
        <span className="gradient-text">Dan Gutman</span>
        <span aria-hidden className="ml-2 select-none text-3xl sm:text-5xl">🏍️🌊</span>
      </h1>

      {/* Role */}
      <h2 className="animate-fade-up delay-300 mb-6 text-lg sm:text-2xl font-medium text-gray-500 dark:text-gray-400">
        Computer Science Graduate
      </h2>

      {/* Description */}
      <div className="animate-fade-up delay-400 max-w-2xl space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-sm sm:text-base">
        <p>
          I&apos;m a{" "}
          <span className="font-semibold text-gray-900 dark:text-white">Computer Science</span>{" "}
          B.Sc. student at Ruppin Academic Center finishing my degree in 2026, focused on growing in{" "}
          <span className="font-semibold text-indigo-500 dark:text-indigo-400">cloud, infrastructure, and DevOps</span>
          {" "}— building reliable platforms, automation, and CI/CD.
        </p>
        <p>
          Based in <span className="font-semibold text-gray-900 dark:text-white">Haifa</span>.
          {" "}Active combat reservist (IDF miluim). I surf whenever I can and I&apos;m into extreme sports.
        </p>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
          Open to{" "}
          <span className="text-indigo-400 font-semibold">entry-level</span>,{" "}
          <span className="text-indigo-400 font-semibold">internship</span>, and{" "}
          <span className="text-indigo-400 font-semibold">full-time</span>{" "}
          DevOps & cloud roles — let&apos;s connect.
        </p>
      </div>

      {/* CTA buttons */}
      <div className="animate-fade-up delay-500 flex flex-wrap gap-3 justify-center mb-12">
        <a
          href="#projects"
          id="hero-view-projects"
          className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
        >
          View Projects
        </a>
        <a
          href="#terminal"
          id="hero-open-terminal"
          className="px-6 py-2.5 rounded-full border border-indigo-500/30 hover:border-indigo-500/60 text-indigo-500 dark:text-indigo-400 hover:bg-indigo-500/10 font-semibold text-sm transition-all"
        >
          Open Terminal
        </a>
        <a
          href="#contact"
          id="hero-contact"
          className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 font-semibold text-sm transition-all"
        >
          Contact Me
        </a>
      </div>

      {/* Social row */}
      <div className="animate-fade-up delay-500 flex items-center gap-4 text-gray-500 dark:text-gray-500">
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" id="hero-linkedin" className="hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" id="hero-github" className="hover:text-indigo-400 transition-colors" aria-label="GitHub">
          <GithubIcon className="w-5 h-5" />
        </a>
        <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" id="hero-facebook" className="hover:text-indigo-400 transition-colors" aria-label="Facebook">
          <FacebookIcon className="w-5 h-5" />
        </a>
        <div className="h-px w-8 bg-gray-300 dark:bg-gray-700" />
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs font-mono hover:text-indigo-400 transition-colors">
          {CONTACT_EMAIL}
        </a>
      </div>

      {/* Scroll cue */}
      <a href="#stack" aria-label="Scroll down" className="absolute bottom-8 text-gray-400 hover:text-indigo-400 transition-colors animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Section heading                                                           */
/* ────────────────────────────────────────────────────────────────────────── */

function SectionHeading({ label, title, sub }: { label: string; title: string; sub: string }) {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 mb-3">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">{title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-500 max-w-lg mx-auto leading-relaxed">{sub}</p>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Tech stack                                                                */
/* ────────────────────────────────────────────────────────────────────────── */

function TechStack() {
  return (
    <section id="stack" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Skills & Tools"
          title="My Tech Stack"
          sub="The tools I reach for when building and automating cloud infrastructure."
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {techStack.map((item) => (
            <div
              key={item.name}
              className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl glass dark:glass hover:glow-indigo transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 rounded-2xl" />
              <div className={`p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <p className="text-gray-900 dark:text-white font-semibold text-xs text-center leading-snug">{item.name}</p>
              <p className="text-gray-500 dark:text-gray-500 text-[10px] text-center leading-snug">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Projects                                                                  */
/* ────────────────────────────────────────────────────────────────────────── */

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <div className="group relative flex flex-col gap-4 p-6 rounded-2xl glass dark:glass border border-transparent hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:glow-indigo overflow-hidden h-full">
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 rounded-2xl" />

      <div className="flex items-center gap-3">
        <div className={`shrink-0 p-2.5 rounded-xl ${project.iconBg}`}>
          {project.icon}
        </div>
        <h3 className="font-bold text-gray-900 dark:text-white leading-snug text-sm sm:text-base">{project.title}</h3>
        {project.href && (
          <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-600 ml-auto shrink-0 group-hover:text-indigo-400 transition-colors" />
        )}
      </div>

      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((t) => (
          <span
            key={t}
            className="tag text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }
  return <div className="h-full">{inner}</div>;
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Work"
          title="Featured Projects"
          sub="Infrastructure, security, full-stack apps, and tooling — from AWS and IaC to scripts and games."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Education & Background                                                    */
/* ────────────────────────────────────────────────────────────────────────── */

function EducationAndBackground() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Education & Background"
          title="Credentials & Context"
          sub="Degree progress, coursework highlights, military service, and languages."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Degree card */}
          <div className="rounded-2xl glass dark:glass p-6 border border-transparent hover:border-indigo-500/20 transition-all">
            <div className="flex items-start gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                <Award className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">B.Sc. Computer Science</h3>
                <p className="text-indigo-500 dark:text-indigo-400 text-sm font-medium">Ruppin Academic Center · 2022 – 2026 (in progress)</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">Focus: Software Systems Development</p>
              </div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-3">
              Relevant coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((c) => (
                <span
                  key={c.name}
                  className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {c.name}{" "}
                  <span className="text-indigo-500 dark:text-indigo-400 font-semibold">{c.grade}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Military card */}
          <div className="rounded-2xl glass dark:glass p-6 border border-transparent hover:border-indigo-500/20 transition-all">
            <div className="flex items-start gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-slate-500/10 text-slate-400 dark:text-slate-500 shrink-0">
                <Shield className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">Military Service — IDF</h3>
                <p className="text-gray-500 dark:text-gray-500 text-sm">2016 – 2019</p>
              </div>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
              <li>Combat soldier, &ldquo;Orev Tzanhanim&rdquo; unit (mandatory service)</li>
              <li>International NATO exercises with US and European forces</li>
              <li>Discipline, accountability, and teamwork under pressure</li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="font-semibold text-gray-800 dark:text-gray-200">Reserves:</span>{" "}
              active combat reservist (miluim) — deployed when operational needs require.
            </p>
          </div>
        </div>

        {/* Languages row */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-500 rounded-2xl glass dark:glass p-4 border border-transparent">
          <Globe2 className="w-4 h-4 shrink-0 text-indigo-400" />
          <span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">Languages:</span>{" "}
            Hebrew — native · English — proficient · Russian — proficient
          </span>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Certifications                                                            */
/* ────────────────────────────────────────────────────────────────────────── */

function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Learning"
          title="Certifications"
          sub="Verified courses and badges — click a card to open the issuer's credential page."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <a
              key={cert.verifyUrl}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 p-5 rounded-2xl glass dark:glass border border-transparent hover:border-indigo-500/30 hover:glow-indigo transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-indigo-500/10 p-2.5 shrink-0">
                  <BadgeCheck className="h-5 w-5 text-indigo-400" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white leading-snug text-sm">{cert.title}</h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">{cert.issuer} · {cert.issued}</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-gray-400 group-hover:text-indigo-400 transition-colors" />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <span key={s} className="tag text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700">
                    {s}
                  </span>
                ))}
              </div>
              <span className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 group-hover:underline">
                Show credential →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={LINKEDIN_CERTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="all-certs-linkedin"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:border-indigo-500 hover:text-indigo-500 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            <LinkedinIcon className="h-4 w-4" />
            All certifications on LinkedIn
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Contact                                                                   */
/* ────────────────────────────────────────────────────────────────────────── */

function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading
          label="Get in touch"
          title="Let's Connect"
          sub="Open to entry-level DevOps and cloud roles, internships, and full-time work — reach out anytime."
        />

        {/* Contact card */}
        <div className="mt-10 rounded-2xl glass dark:glass p-8 border border-indigo-500/20 glow-indigo">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              id="contact-email"
              className="inline-flex items-center gap-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              <Mail className="w-4 h-4 shrink-0" strokeWidth={1.75} />
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:${CONTACT_PHONE_TEL}`}
              id="contact-phone"
              className="inline-flex items-center gap-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              <Phone className="w-4 h-4 shrink-0" strokeWidth={1.75} />
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>

          <div className="sep mb-8" />

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: LINKEDIN_URL, icon: <LinkedinIcon className="w-5 h-5" />, label: "LinkedIn", id: "contact-linkedin" },
              { href: GITHUB_URL,   icon: <GithubIcon   className="w-5 h-5" />, label: "GitHub",   id: "contact-github"   },
              { href: FACEBOOK_URL, icon: <FacebookIcon className="w-5 h-5" />, label: "Facebook", id: "contact-facebook" },
            ].map(({ href, icon, label, id }) => (
              <a
                key={id}
                id={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:border-indigo-500 text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all text-sm font-medium hover:-translate-y-0.5"
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Footer                                                                    */
/* ────────────────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800/60 text-center text-xs text-gray-400 dark:text-gray-600">
      <div className="sep mb-6" />
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="gradient-text font-semibold">Dan Gutman</span>
        {" "}· Built with React, TypeScript & Tailwind CSS
      </p>
    </footer>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  App                                                                       */
/* ────────────────────────────────────────────────────────────────────────── */

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

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="relative min-h-screen font-sans antialiased bg-slate-50 text-gray-900 dark:bg-[#080810] dark:text-white transition-colors">
      <NavBar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <div className="sep" />
        <TechStack />
        <div className="sep" />
        <InteractiveTerminal />
        <div className="sep" />
        <Projects />
        <div className="sep" />
        <EducationAndBackground />
        <div className="sep" />
        <Certifications />
        <div className="sep" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
