import re

filepath = "src/App.tsx"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add certification
cert_replacement = """const certifications: Certification[] = [
  {
    title: "AI-First Developer Bootcamp",
    issuer: "Abra",
    issued: "2026 - Present",
    verifyUrl: "#",
    skills: ["AI Agents", "Architecture", "CI/CD"],
  },"""
content = content.replace("const certifications: Certification[] = [", cert_replacement)

# 2. Add project
proj_replacement = """const projects: Project[] = [
  {
    title: "E2E Time Tracking System",
    description: "Owned delivery E2E CI/CD, migrations, go-live and stabilization for a time tracking system built by a 4-developer Agile team. Debugged 4 live production failures. Shipped using AI coding agents under a spec-driven workflow.",
    tags: ["Node.js", "TypeScript", "React", "PostgreSQL"],
    icon: <Clock className="w-5 h-5 text-blue-500" />,
  },"""
content = content.replace("const projects: Project[] = [", proj_replacement)

# 3. Update skillCategories
old_skills = """const skillCategories = [
  { title: "Infrastructure & Tools", detail: "Linux, AWS, GCP, CloudFormation, Terraform, Docker" },
  { title: "AI & GenAI Systems", detail: "Hybrid RAG, Pinecone Vector DB, BM25, RRF, ONNX (WASM), Groq/HF APIs" },
  { title: "Databases & Storage", detail: "MySQL, Amazon RDS, Pinecone, Firebase" },
  { title: "Programming", detail: "Python, Bash, JavaScript, TypeScript, React, Java, C#" },
  { title: "Languages", detail: "Hebrew - Native, English - Proficient, Russian - Proficient" },
];"""

new_skills = """const skillCategories = [
  { title: "Infrastructure & Tools", detail: "Linux, AWS, GCP, CloudFormation, Terraform, Docker, GitHub Actions, Jira" },
  { title: "AI & GenAI Systems", detail: "Hybrid RAG, Pinecone Vector DB, BM25, RRF, ONNX (WASM), Groq/HF APIs, Claude, Anti-Gravity" },
  { title: "Databases & Storage", detail: "PostgreSQL, MySQL, Amazon RDS, Pinecone, Firebase, Prisma" },
  { title: "Programming", detail: "Node.js, Python, Bash, JavaScript, TypeScript, React, Java, C#" },
  { title: "Languages", detail: "Hebrew - Native, English - Proficient, Russian - Proficient" },
];"""
content = content.replace(old_skills, new_skills)

# 4. Update Profile Summary
old_summary = """Software Engineer and Computer Science graduate specializing in backend development, system automation, and AI/GenAI engineering. Experienced in building serverless RAG systems, developing automated testing scripts (Python, Bash), and deploying containerized services on AWS. Dedicated to delivering production-ready, resilient software pipelines and integrating modern AI technologies."""
new_summary = """Software Engineer Graduate with a strong computer science foundation, currently specializing in AI-integrated architectures via the AI-First Bootcamp at Abra Company. Experienced in building serverless RAG systems, developing automated testing scripts, and deploying containerized services on AWS. Dedicated to delivering production-ready, resilient software pipelines and integrating modern AI technologies."""
content = content.replace(old_summary, new_summary)

# 5. Update Primary Stack Grid
old_stack_grid = """              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "Backend Systems", details: "Node.js · Python · Java · C#", icon: "💻" },
                  { name: "Cloud & IaC", details: "AWS · GCP · Terraform", icon: "☁️" },
                  { name: "Containers", details: "Docker · Compose", icon: "🐳" },
                  { name: "Automation", details: "Bash · Linux · Scripting", icon: "⚙️" },
                  { name: "AI & GenAI", details: "RAG · LLMs · Pinecone · ONNX", icon: "🧠" }
                ].map((stack) => ("""

new_stack_grid = """              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { name: "Backend Systems", details: "Node.js · Python · Java · C#", icon: "💻" },
                  { name: "Cloud & IaC", details: "AWS · GCP · Terraform · Actions", icon: "☁️" },
                  { name: "Containers", details: "Docker · Compose", icon: "🐳" },
                  { name: "Automation", details: "Bash · Linux · Jira", icon: "⚙️" },
                  { name: "AI & GenAI", details: "RAG · Claude · Anti-Gravity", icon: "🧠" },
                  { name: "Databases", details: "PostgreSQL · Prisma", icon: "🗄️" }
                ].map((stack) => ("""
content = content.replace(old_stack_grid, new_stack_grid)

# 6. Update Education Section to include Bootcamp
old_edu = """        {/* ── Section 4: Education & Certs ───────────────────────────────── */}
        <section id="education" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Ruppin B.Sc. card */}
          <div className="bento-card p-6 lg:col-span-2 space-y-6">"""

new_edu = """        {/* ── Section 4: Education & Certs ───────────────────────────────── */}
        <section id="education" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            {/* Bootcamp card */}
            <div className="bento-card p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200/60 dark:border-zinc-800/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-stone-900 dark:text-white">AI-First Developer Bootcamp</h2>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-semibold font-mono">
                      Abra · 2026 – Present
                    </p>
                  </div>
                </div>
                <Globe2 className="w-5 h-5 text-stone-300 dark:text-zinc-600" />
              </div>
              <div className="space-y-4">
                <p className="text-sm text-stone-600 dark:text-zinc-400">
                  Specializing in AI-integrated architectures, advanced AI coding agents, and modern cloud deployment pipelines.
                </p>
              </div>
            </div>

            {/* Ruppin B.Sc. card */}
            <div className="bento-card p-6 space-y-6">"""
content = content.replace(old_edu, new_edu)

# we need to close the div for lg:col-span-2 space-y-6
old_ruppin_close = """              </div>
            </div>
          </div>

          {/* Certifications Card */}"""
new_ruppin_close = """              </div>
            </div>
          </div>
          </div>

          {/* Certifications Card */}"""
content = content.replace(old_ruppin_close, new_ruppin_close)


with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
