import { useLayoutEffect, useState, useEffect } from "react";
import {
  Cloud,
  ExternalLink,
  Shield,
  Mail,
  Car,
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
  ArrowRight
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
    title: "AWS Academy Graduate - Cloud Developing",
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
    title: "Learning Linux Basics - Course & Labs",
    issuer: "KodeKloud",
    issued: "Jun 2025",
    verifyUrl: "https://learn.kodekloud.com/certificate/4cfa4c0a-e93f-4c42-8d4e-978fd9d0082b",
    skills: ["Linux Systems", "Administration"],
  },
];









// ─── AWS Architecture visualizer configurations ─────────────────────────────





// ─── Translations ──────────────────────────────────────────────────────────
const translations = {
  en: {
    nav: {
      Overview: "Overview",
      Projects: "Projects",
      Skills: "Skills",
      Education: "Education",
      Contact: "Contact"
    },
    profile: {
      available: "{t.profile.available}",
      hi: "Hi, I'm",
      title: "{t.profile.title}",
      bio: "Software Engineer and Computer Science graduate specializing in backend development, system automation, and AI/GenAI engineering. Experienced in building serverless RAG systems, developing automated testing scripts (Python, Bash), and deploying containerized services on AWS. Dedicated to delivering production-ready, resilient software pipelines and integrating modern AI technologies.",
      contactBtn: "Contact Me",
      viewCodeBtn: "View Code"
    },
    haifa: {
      liveClock: "{t.haifa.liveClock}",
      timezone: "Haifa, Israel · timezone UTC+3 🌊",
      vibeTitle: "{t.haifa.vibeTitle}",
      swell: "🏄‍♂️ Swell: 0.8m @ 7s",
      wind: "💨 Wind: 6kt Offshore",
      temp: "🌡️ Sea Temp: 22°C",
      quote: "“Surfer by day, Software Engineer by night.”",
      medSea: "{t.haifa.medSea}"
    },
    projects: {
      title: "Featured Projects",
      subtitle: "{t.projects.subtitle}",
      botanicalTitle: "Secure Botanical AI Agent",
      botanicalDesc: "Engineered a serverless, hybrid RAG pipeline utilizing Groq LLMs and Pinecone. Blended dense semantic search (multilingual-e5-small) with local BM25 using Reciprocal Rank Fusion (RRF), featuring local ONNX WASM inference fallback, Docker containerization on AWS Lambda, and Terraform IaC.",
      vpcTitle: "AWS Secure VPC Architecture",
      vpcDesc: "Architected a secure, multi-VPC AWS environment with VPC peering, RDS Proxy, and layered security (NACLs, Security Groups) to ensure strict service isolation and traffic control.",
      emailTitle: "Malicious Email Scorer (Gmail Add-on)",
      emailDesc: "Built a secure Gmail extension integrating the VirusTotal API for real-time detection of malicious links and phishing, significantly enhancing user threat visibility.",
      f1Title: "Project F1 — Formula 1 Fan Site",
      f1Desc: "Engineered a full-stack web application using React and .NET Web API, designing RESTful services and managing data persistence with Entity Framework and SQL databases.",
      bashTitle: "Bash Automation Utility",
      bashDesc: "Developed a recursive CLI tool for multi format archive extraction (ZIP, GZ, BZ2) utilizing content-based detection (file -b) and robust error handling logic."
    },
    skills: {
      title: "Skills & Background",
      subtitle: "{t.skills.subtitle}",
      matrixTitle: "{t.skills.matrixTitle}",
      categories: [
        { title: "Infrastructure & Tools", detail: "Linux, AWS, GCP, CloudFormation, Terraform, Docker" },
        { title: "AI & GenAI Systems", detail: "Hybrid RAG, Pinecone Vector DB, BM25, RRF, ONNX (WASM), Groq/HF APIs" },
        { title: "Databases & Storage", detail: "MySQL, Amazon RDS, Pinecone, Firebase" },
        { title: "Programming", detail: "Python, Bash, JavaScript, TypeScript, React, Java, C#" },
        { title: "Languages", detail: "Hebrew - Native, English - Proficient, Russian - Proficient" }
      ],
      idfTitle: "{t.skills.idfTitle}",
      idfDuration: "IDF | 2016 – 2019",
      idfBullets: [
        "Served as a combat soldier in “Orev Tzanhanim” unit.",
        "Demonstrated discipline, accountability, and teamwork under demanding conditions."
      ],
      idfFooter: "{t.skills.idfFooter}",
      idfFooterDate: "2016 – 2019",
      techStackTitle: "{t.skills.techStackTitle}",
      techStacks: [
        { name: "Backend Systems", details: "Node.js · Python · Java · C#", icon: "💻" },
        { name: "Cloud & IaC", details: "AWS · GCP · Terraform", icon: "☁️" },
        { name: "Containers", details: "Docker · Compose", icon: "🐳" },
        { name: "Automation", details: "Bash · Linux · Scripting", icon: "⚙️" },
        { name: "AI & GenAI", details: "RAG · LLMs · Pinecone · ONNX", icon: "🧠" }
      ]
    },
    education: {
      title: "{t.education.title}",
      subtitle: "{t.education.subtitle}",
      highlights: "{t.education.highlights}",
      focus: "Focus Area: Software Systems Development & Algorithms",
      langs: "Languages: Hebrew (Native) · English (Proficient) · Russian (Proficient)",
      courses: [
        { name: "AI & Intelligent Algorithms", grade: "94" },
        { name: "Java Systems", grade: "94" },
        { name: "Data Structures & Alg.", grade: "93" },
        { name: "C# & .NET Framework", grade: "91" },
        { name: "React + TypeScript", grade: "87" },
        { name: "C Programming", grade: "86" },
        { name: "Web Technologies (JS/HTML)", grade: "85" }
      ],
      badgesTitle: "Badges",
      badgesCount: "{t.education.badgesCount}",
      linkedinBtn: "LinkedIn {t.education.badgesCount} Directory"
    },
    contact: {
      title: "{t.contact.title}",
      connect: "Let's Connect",
      subtitle: "Open to entry-level software engineering, backend, cloud database, AI engineering/development, or automation roles. Also open to summer internships."
    },
    footer: {
      builtWith: "Built with React + TypeScript + Tailwind v4",
      rights: "© {year} Dan Gutman. All rights reserved."
    }
  },
  he: {
    nav: {
      Overview: "סקירה",
      Projects: "פרויקטים",
      Skills: "כישורים",
      Education: "לימודים",
      Contact: "צור קשר"
    },
    profile: {
      available: "זמין לעבודה",
      hi: "היי, אני",
      title: "בוגר מדעי המחשב",
      bio: "מהנדס תוכנה ובוגר מדעי המחשב המתמחה בפיתוח בקאנד, אוטומציה של מערכות, והנדסת AI/GenAI. בעל ניסיון בבניית מערכות RAG סרברלס, פיתוח סקריפטי בדיקות אוטומטיים (Python, Bash) ופריסת שירותים מבוססי Docker ב-AWS. מסור ליצירת תהליכי תוכנה עמידים ומוכנים לייצור ושילוב טכנולוגיות AI מתקדמות.",
      contactBtn: "צור קשר",
      viewCodeBtn: "צפה בקוד"
    },
    haifa: {
      liveClock: "חיפה · שעון מקומי",
      timezone: "חיפה, ישראל · אזור זמן UTC+3 🌊",
      vibeTitle: "מצב הים ומזג האוויר",
      swell: "🏄‍♂️ גובה גלים: 0.8 מ׳ @ 7 שניות",
      wind: "💨 רוח: 6 קשר אופשור",
      temp: "🌡️ חום המים: 22°C",
      quote: "״גולש ביום, מהנדס תוכנה בלילה.״",
      medSea: "הים התיכון 🌊"
    },
    projects: {
      title: "פרויקטים נבחרים",
      subtitle: "ארכיטקטורת מערכות, אינטגרציית APIs וכלי אוטומציה שפותחו במהלך הלימודים והמחקר.",
      botanicalTitle: "סוכן AI בוטני מאובטח",
      botanicalDesc: "פיתוח מערכת RAG היברידית סרברלס המבוססת על Groq ו-Pinecone. שילוב חיפוש סמנטי צפוף (multilingual-e5-small) עם חיפוש דליל (BM25) באמצעות Reciprocal Rank Fusion (RRF), כולל הרצת מודל מקומית ב-WASM באמצעות ONNX, מכולות Docker ב-AWS Lambda, וניהול תשתית כקוד באמצעות Terraform.",
      vpcTitle: "ארכיטקטורת VPC מאובטחת ב-AWS",
      vpcDesc: "תכנון ויישום סביבת ענן מאובטחת ומרובת VPCs ב-AWS הכוללת VPC peering, RDS Proxy, ואבטחה שכבתית (NACLs, Security Groups) כדי להבטיח בידוד מוחלט של שירותים ובקרת תעבורה קפדנית.",
      emailTitle: "מזהה אימייל זדוני (תוסף ל-Gmail)",
      emailDesc: "פיתוח תוסף אבטחה ל-Gmail המשלב את ה-API של VirusTotal לזיהוי בזמן אמת של קישורים זדוניים וניסיונות פישינג, מה שמשפר משמעותית את נראות האיומים למשתמשי הקצה.",
      f1Title: "פרויקט F1 — פורמולה 1",
      f1Desc: "פיתוח אפליקציית Full-Stack באמצעות React ו-NET Web API., עיצוב שירותי RESTful וניהול שמירת נתונים בעזרת Entity Framework ומסדי נתונים של SQL.",
      bashTitle: "כלי אוטומציה ב-Bash",
      bashDesc: "פיתוח כלי CLI רקורסיבי לחילוץ אוטומטי של ארכיונים מרובי פורמטים (ZIP, GZ, BZ2) באמצעות זיהוי מבוסס תוכן הקובץ (file -b) ומנגנוני טיפול בשגיאות מורכבים."
    },
    skills: {
      title: "כישורים ורקע",
      subtitle: "מטריצת כישורים טכנולוגיים, תעודות מוסמכות, ופרטי השירות הצבאי.",
      matrixTitle: "מטריצת כישורים",
      categories: [
        { title: "תשתיות וכלים", detail: "Linux, AWS, GCP, CloudFormation, Terraform, Docker" },
        { title: "מערכות AI ו-GenAI", detail: "Hybrid RAG, Pinecone Vector DB, BM25, RRF, ONNX (WASM), Groq/HF APIs" },
        { title: "מסדי נתונים ואחסון", detail: "MySQL, Amazon RDS, Pinecone, Firebase" },
        { title: "שפות תכנות", detail: "Python, Bash, JavaScript, TypeScript, React, Java, C#" },
        { title: "שפות", detail: "עברית - שפת אם, אנגלית - ברמה גבוהה, רוסית - ברמה גבוהה" }
      ],
      idfTitle: "שירות צבאי",
      idfDuration: "צה״ל | 2016 – 2019",
      idfBullets: [
        "לוחם ביחידת עורב צנחנים.",
        "הפגנת משמעת עצמית, אחריות ועבודת צוות תחת תנאים תובעניים."
      ],
      idfFooter: "שירות מלא",
      idfFooterDate: "2016 – 2019",
      techStackTitle: "טכנולוגיות ליבה",
      techStacks: [
        { name: "מערכות בקאנד", details: "Node.js · Python · Java · C#", icon: "💻" },
        { name: "ענן ותשתיות", details: "AWS · GCP · Terraform", icon: "☁️" },
        { name: "קונטיינרים", details: "Docker · Compose", icon: "🐳" },
        { name: "אוטומציה", details: "Bash · Linux · Scripting", icon: "⚙️" },
        { name: "מערכות AI", details: "RAG · LLMs · Pinecone · ONNX", icon: "🧠" }
      ]
    },
    education: {
      title: "B.Sc. במדעי המחשב",
      subtitle: "המרכז האקדמי רופין · בוגר (2022 – 2026)",
      highlights: "קורסים בולטים וציונים",
      focus: "התמחות: פיתוח מערכות תוכנה ואלגוריתמיקה",
      langs: "שפות: עברית (שפת אם) · אנגלית (שליטה גבוהה) · רוסית (שליטה גבוהה)",
      courses: [
        { name: "בינה מלאכותית ואלגוריתמים", grade: "94" },
        { name: "מערכות Java", grade: "94" },
        { name: "מבני נתונים ואלגוריתמים", grade: "93" },
        { name: "C# וסביבת .NET", grade: "91" },
        { name: "React ו-TypeScript", grade: "87" },
        { name: "שפת C", grade: "86" },
        { name: "טכנולוגיות אינטרנט", grade: "85" }
      ],
      badgesTitle: "הסמכות",
      badgesCount: "תעודות מוסמכות",
      linkedinBtn: "אינדקס הסמכות ב-LinkedIn"
    },
    contact: {
      title: "צור קשר",
      connect: "בואו נתחבר",
      subtitle: "פתוח למשרות ג'וניור / משרות התחלתיות בהנדסת תוכנה, פיתוח בקאנד, עבודה עם מסדי נתונים בענן, הנדסת AI/פיתוח AI או אוטומציה. כמו כן, פתוח להתמחויות קיץ."
    },
    footer: {
      builtWith: "נבנה באמצעות React + TypeScript + Tailwind v4",
      rights: "© {year} דן גוטמן. כל הזכויות שמורות."
    }
  }
};

function getProjects(t: any): Project[] {
  return [
    {
      title: t.projects.botanicalTitle,
      description: t.projects.botanicalDesc,
      tags: ["AWS Lambda", "Pinecone", "Groq LLM", "RRF Hybrid Search", "ONNX WASM", "Terraform"],
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
      href: "https://github.com/Dangutman98/botanical-agent",
    },
    {
      title: t.projects.vpcTitle,
      description: t.projects.vpcDesc,
      tags: ["AWS", "CloudFormation", "RDS Proxy", "VPC Peering", "CloudWatch"],
      icon: <Cloud className="w-5 h-5 text-amber-500" />,
      href: "https://github.com/Dangutman98/aws-secure-vpc-architecture",
    },
    {
      title: t.projects.emailTitle,
      description: t.projects.emailDesc,
      tags: ["Google Apps Script", "Gmail API", "Cybersecurity", "VirusTotal"],
      icon: <Mail className="w-5 h-5 text-sky-500" />,
      href: "https://github.com/Dangutman98/Gmail-Add-on---Malicious-Email-Scorer",
    },
    {
      title: t.projects.f1Title,
      description: t.projects.f1Desc,
      tags: ["React", ".NET Web API", "Entity Framework", "SQL Server", "Firebase"],
      icon: <Car className="w-5 h-5 text-rose-500" />,
      href: "https://github.com/Dangutman98/F1Project",
    },
    {
      title: t.projects.bashTitle,
      description: t.projects.bashDesc,
      tags: ["Bash", "Linux Shell", "CLI Tooling", "Automation"],
      icon: <Archive className="w-5 h-5 text-amber-600" />,
      href: "https://github.com/Dangutman98/advanced-bash-unpacker",
    },
  ];
}

function getCoursework(t: any): { name: string; grade: string }[] {
  return t.education.courses;
}

// LangToggle component
function LangToggle({ lang, onToggle }: { lang: "en" | "he"; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="px-2.5 py-1.5 rounded-lg border border-stone-200 dark:border-zinc-800 text-xs font-bold text-stone-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 transition-all font-mono shrink-0 cursor-pointer"
      aria-label="Toggle language"
    >
      {lang === "en" ? "עב" : "EN"}
    </button>
  );
}

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
  const [lang, setLang] = useState<"en" | "he">("en");
  const t = translations[lang];
  const toggleLang = () => setLang((l) => (l === "en" ? "he" : "en"));
  const projectsList = getProjects(t);
  const courseworkList = getCoursework(t);






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
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative min-h-screen grid-bg font-sans antialiased text-stone-900 dark:text-zinc-100 transition-colors duration-300" dir={lang === "he" ? "rtl" : "ltr"}>
      
      {/* ── Navbar ────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 dark:border-zinc-800/40 bg-stone-50/80 dark:bg-[#09090b]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-bold text-sm tracking-tight">dan.gutman.dev</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-zinc-400">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link transition-colors hover:text-stone-900 dark:hover:text-white">
                {t.nav[item.label as keyof typeof t.nav] || item.label}
              </a>
            ))}
            <div className="flex items-center gap-2.5">
              <LangToggle lang={lang} onToggle={toggleLang} />
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          </nav>

          {/* Mobile Right */}
          <div className="flex items-center gap-2 md:hidden">
            <LangToggle lang={lang} onToggle={toggleLang} />
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
                {t.nav[item.label as keyof typeof t.nav] || item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-16">
        
        {/* ── Section 1: The Bento Grid Dashboard ─────────────────────────── */}
        <section id="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
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
                      {t.profile.available}
                    </span>
                  </div>
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  <span className="gradient-text font-heading me-2">{t.profile.hi}</span>
                  Dan Gutman
                </h1>
                <h2 className="text-sm font-mono tracking-widest uppercase text-amber-600 dark:text-amber-400 mt-2 font-bold">
                  {t.profile.title}
                </h2>
                
                <p className="mt-6 text-sm text-stone-600 dark:text-zinc-400 leading-relaxed max-w-md">
                  {t.profile.bio}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-full bg-stone-900 dark:bg-zinc-100 text-stone-100 dark:text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-stone-800 dark:hover:bg-zinc-200 transition-all hover:scale-102"
                >
                  {t.profile.contactBtn}
                </a>
                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-full border border-stone-300 dark:border-zinc-800 text-stone-600 dark:text-zinc-400 font-bold text-xs uppercase tracking-wider hover:bg-stone-100 dark:hover:bg-zinc-900 transition-all"
                >
                  {t.profile.viewCodeBtn}
                </a>
              </div>
            </div>

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
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-zinc-400 group-hover:text-stone-700 dark:group-hover:text-zinc-200 transition-colors">{t.haifa.liveClock}</span>
                </div>
                <Compass className="w-5 h-5 text-amber-600 dark:text-amber-400 group-hover:text-amber-500 animate-spin-slow transition-colors" />
              </div>
              
              <div className="z-10 group-hover:text-stone-900 dark:group-hover:text-white transition-colors">
                <div className="flex items-baseline gap-2 text-stone-850 dark:text-white font-mono font-black text-5xl md:text-6xl tracking-tight">
                  <Clock className="w-8 h-8 md:w-10 md:h-10 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>{time || "12:00:00"}</span>
                </div>
                <p className="text-xs font-mono text-stone-500 dark:text-zinc-400 mt-2 ms-1">{t.haifa.timezone}</p>
              </div>

              {/* Surf Conditions */}
              <div className="z-10 py-3 mt-4 border-y border-stone-200/40 dark:border-zinc-800/40 space-y-1">
                <span className="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400 font-bold block">{t.haifa.vibeTitle}</span>
                <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs font-mono text-stone-600 dark:text-zinc-400 group-hover:text-stone-850 dark:group-hover:text-zinc-200 transition-colors">
                  <span className="flex items-center gap-1">{t.haifa.swell}</span>
                  <span className="flex items-center gap-1">{t.haifa.wind}</span>
                  <span className="flex items-center gap-1">{t.haifa.temp}</span>
                </div>
              </div>
              
              <div className="pt-4 z-10 flex items-center justify-between border-t border-stone-200/20 dark:border-zinc-800/20">
                <p className="text-sm md:text-base italic font-serif text-stone-700 dark:text-zinc-300 group-hover:text-stone-900 group-hover:dark:text-white transition-colors leading-snug animate-wave">
                  {t.haifa.quote}
                </p>
                <span className="text-[10px] text-stone-400 dark:text-zinc-500 font-mono hidden sm:inline">{t.haifa.medSea}</span>
              </div>
            </div>

            </div>
        </section>

        <div className="sep" />

        {/* ── Section 3: Projects ─────────────────────────────────────────── */}
        <section id="projects" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{t.projects.title}</h2>
            <p className="text-sm text-stone-600 dark:text-zinc-400">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsList.map((proj) => {
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

        {/* ── Section: Skills & Background ───────────────────────────────── */}
        <section id="skills" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{t.skills.title}</h2>
            <p className="text-sm text-stone-600 dark:text-zinc-400">
              {t.skills.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Full skill matrix summary bento (2x1) */}
            <div className="bento-card p-6 md:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-stone-500 dark:text-zinc-400 mb-3">{t.skills.matrixTitle}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                  {t.skills.categories.map((sc) => (
                    <li key={sc.title} className="flex flex-col border-b border-stone-200/30 dark:border-zinc-800/30 pb-2">
                      <span className="font-semibold text-stone-800 dark:text-zinc-300">{sc.title}</span>
                      <span className="text-[11px] text-stone-500 dark:text-zinc-500 mt-0.5">{sc.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            

                        {/* IDF Combat Service Widget (2x1) */}
            <div className="bento-card p-6 md:col-span-2 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-stone-200/60 dark:border-zinc-800/60 pb-2">
                <Shield className="w-5 h-5 text-rose-500" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-zinc-500">{t.skills.idfTitle}</span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-stone-900 dark:text-white mt-4">{t.skills.idfDuration}</h3>
                <ul className="list-disc ps-4 text-xs text-stone-600 dark:text-zinc-400 mt-4 space-y-2 leading-relaxed">
                  {t.skills.idfBullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-stone-200/60 dark:border-zinc-800/60 pt-2 mt-4 flex items-center justify-between">
                <span className="text-[9px] uppercase font-mono tracking-wider font-semibold text-rose-500 dark:text-rose-400">{t.skills.idfFooter}</span>
                <span className="text-[9px] text-stone-400">{t.skills.idfFooterDate}</span>
              </div>
            </div>

            {/* Tech stack widget (spans all 4 cols) */}
            <div className="bento-card p-6 md:col-span-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm uppercase tracking-wider text-stone-500 dark:text-zinc-400">{t.skills.techStackTitle}</h3>
                <Cpu className="w-4 h-4 text-amber-500" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {t.skills.techStacks.map((stack) => (
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

        {/* ── Section 4: Education & Certs ───────────────────────────────── */}
        <section id="education" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Ruppin B.Sc. card */}
          <div className="bento-card p-6 lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-200/60 dark:border-zinc-800/60 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-stone-900 dark:text-white">{t.education.title}</h2>
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold font-mono">
                    {t.education.subtitle}
                  </p>
                </div>
              </div>
              <Globe2 className="w-5 h-5 text-stone-300 dark:text-zinc-600" />
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-zinc-500">
                {t.education.highlights}
              </h3>
              <div className="flex flex-wrap gap-2">
                {courseworkList.map((course) => (
                  <span
                    key={course.name}
                    className="text-xs px-3 py-1 rounded-full bg-stone-100 dark:bg-zinc-900/60 text-stone-600 dark:text-zinc-400 border border-stone-200/50 dark:border-zinc-800/50"
                  >
                    {course.name}{" "}
                    <span className="text-amber-600 dark:text-amber-400 font-bold ms-1">{course.grade}</span>
                  </span>
                ))}
              </div>

              <div className="border-t border-stone-200/30 dark:border-zinc-800/30 pt-4 text-xs text-stone-500 dark:text-zinc-500 space-y-1.5 font-mono">
                <p>{t.education.focus}</p>
                <p>{t.education.langs}</p>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bento-card p-6 flex flex-col justify-between min-h-[310px]">
            <div>
              <div className="flex items-center justify-between border-b border-stone-200/60 dark:border-zinc-800/60 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-emerald-500" />
                  <h2 className="font-bold text-sm uppercase tracking-wider text-stone-500 dark:text-zinc-400">{t.education.badgesTitle}</h2>
                </div>
                <span className="text-xs font-mono text-stone-400">{certifications.length} {t.education.badgesCount}</span>
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
                {t.education.linkedinBtn}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </section>

        <div className="sep" />

        {/* ── Section 5: Contact ──────────────────────────────────────────── */}
        <section id="contact" className="max-w-2xl mx-auto space-y-8 text-center">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">
              {t.contact.title}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight">{t.contact.connect}</h2>
            <p className="text-sm text-stone-600 dark:text-zinc-400">
              {t.contact.subtitle}
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
          <p>{t.footer.rights.replace("{year}", new Date().getFullYear().toString())}</p>
          <p className="font-mono">{t.footer.builtWith}</p>
        </div>
      </footer>

    </div>
  );
}
