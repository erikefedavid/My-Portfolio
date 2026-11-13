import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "tooldeck",
      category: "fullstack",
      title: "ToolDeck — Curated Free AI & Dev Tools Directory",
      badge: "Featured • AI Directory",
      image: "/images/tooldeck.png",
      alt: "ToolDeck Free AI Tools Directory",
      liveUrl: "https://aitooldesk.vercel.app/",
      githubUrl: "https://github.com/erikefedavid/Tooldesk",
      description:
        "A curated discovery platform of 100+ free AI tools, developer utilities, and creative software. Integrates Gemini API recommendations to guide users to the exact tool for their task without paywalls or fake trials.",
      techStack: ["Next.js", "TypeScript", "Gemini API", "Tailwind CSS", "Framer Motion"]
    },
    {
      id: "docdigitize",
      category: "fullstack",
      title: "DocDigitize — AI Document Intelligence & RAG Platform",
      badge: "Featured • RAG & Vision AI",
      image: "/images/Docdigitize.png",
      alt: "DocDigitize AI Document Platform",
      liveUrl: "https://docdigitize.vercel.app/",
      githubUrl: "https://github.com/erikefedavid/DocDigitise",
      description:
        "Full-stack document intelligence and grounded RAG platform. Extracts text from multi-format scans using Groq Cloud Vision, embeds documents into dense vectors, and provides sub-second Q&A with exact page citations. Research paper accepted at ICMLDE.",
      techStack: ["Next.js", "TypeScript", "RAG Pipeline", "Groq AI", "MongoDB", "Tailwind CSS"]
    },
    {
      id: "omniagent",
      category: "fullstack",
      title: "OmniAgent — Autonomous Problem-Solving ReAct Agent",
      badge: "Autonomous AI • ReAct Loop",
      image: "/images/omniagent.png",
      alt: "OmniAgent Autonomous Architecture",
      liveUrl: "https://erikefedavid.github.io/OmniAgent/",
      githubUrl: "https://github.com/erikefedavid/OmniAgent",
      description:
        "Autonomous ReAct (Reasoning + Acting) problem-solving engine. Decomposes multi-step user objectives into dynamic subtasks, executes telemetry and mathematical tools, and validates evidence against zero-hallucination compliance rules.",
      techStack: ["Node.js", "ReAct Framework", "Tool Execution", "Vector Matching", "Agentic Loops"]
    },
    {
      id: "omnisearch",
      category: "fullstack",
      title: "OmniSearch — Edge Semantic Search & Vector Engine",
      badge: "Edge AI • Zero Egress",
      image: "/images/omnisearch.png",
      alt: "OmniSearch Edge Semantic Engine Preview",
      liveUrl: "https://erikefedavid.github.io/OmniSearch/",
      githubUrl: "https://github.com/erikefedavid/OmniSearch",
      description:
        "In-process dense vector retrieval engine evaluating unit-normalized dot products in memory. Delivers sub-millisecond query responses across documents with zero external API calls and $0.00 cloud token cost.",
      techStack: ["Node.js", "Dense Vectors", "Cosine Dot-Product", "Local RAG", "Edge AI"]
    },
    {
      id: "nexusrag",
      category: "fullstack",
      title: "NexusRAG — Zero-Cloud Agentic RAG & Guardrails",
      badge: "Agentic RAG • Anti-Hallucination",
      image: "/images/omnisearch.png",
      alt: "NexusRAG Autonomous Agentic Retrieval Engine",
      liveUrl: "https://erikefedavid.github.io/NexusRAG/",
      githubUrl: "https://github.com/erikefedavid/NexusRAG",
      description:
        "Autonomous zero-cloud-egress agentic RAG engine with hybrid dense vector projection, BM25 sparse re-ranking, and proactive self-correction critic guardrails preventing out-of-domain hallucinations.",
      techStack: ["Agentic RAG", "BM25 Re-Ranking", "Self-Correction Critic", "Zero Egress", "TypeScript"]
    },
    {
      id: "gitsentry",
      category: "fullstack",
      title: "GitSentry — Autonomous Frontend Architecture & Anti-AI Auditor",
      badge: "Autonomous CLI • DevTools",
      image: "/images/gitsentry.png",
      alt: "GitSentry Autonomous Codebase Auditor",
      liveUrl: "https://erikefedavid.github.io/GitSentry/",
      githubUrl: "https://github.com/erikefedavid/GitSentry",
      description:
        "Autonomous CLI and CI/CD sentinel that audits frontend repositories in under 30ms. Enforces 60fps composite animation physics (blocking layout-thrashing geometry animations) and eliminates generic AI-generated tells and matrix grids.",
      techStack: ["Node.js CLI", "AST Analysis", "Regex Heuristics", "Design Engineering", "CI/CD"]
    },
    {
      id: "devradar",
      category: "fullstack",
      title: "DevRadar — Autonomous Developer Job Scanner & Outreach Agent",
      badge: "Autonomous Agent • AI",
      image: "/images/devradar.png",
      alt: "DevRadar Autonomous Agent Banner",
      liveUrl: "https://github.com/erikefedavid/devradar",
      githubUrl: "https://github.com/erikefedavid/devradar",
      description:
        "Autonomous job discovery engine running on GitHub Actions. Scans multiple developer job APIs every 6 hours, leverages Google Gemini AI to analyze company tech bottlenecks, and dispatches interactive Telegram alerts with instant outreach pitches.",
      techStack: ["Node.js", "Google Gemini AI", "GitHub Actions", "Telegram Bot API", "REST APIs"]
    },
    {
      id: "pulseops",
      category: "frontend",
      title: "PulseOps — Enterprise B2B Operations & Logistics Dashboard",
      badge: "B2B Enterprise • Logistics",
      image: "/images/dashboard.png",
      alt: "PulseOps Enterprise Logistics Dashboard",
      liveUrl: "https://erikefedavid.github.io/PulseOps/",
      githubUrl: "https://github.com/erikefedavid/PulseOps",
      description:
        "High-density B2B operations and logistics telemetry dashboard. Tracks revenue metrics (₦148.5M), active shipment transit velocity curves, carrier SLA adherence, and real-time dispatch management with instant CSV export.",
      techStack: ["B2B Architecture", "Tailwind CSS", "Logistics Telemetry", "Geist Design System", "Realtime Filters"]
    },
    {
      id: "payslot",
      category: "frontend",
      title: "PaySlot — Mobile-First Booking Engine & Paystack Storefront PWA",
      badge: "Fintech PWA • Paystack",
      image: "/images/swissmark.png",
      alt: "PaySlot Mobile-First Storefront Preview",
      liveUrl: "https://erikefedavid.github.io/PaySlot/",
      githubUrl: "https://github.com/erikefedavid/PaySlot",
      description:
        "Commercial mobile-first service booking engine. Enforces fintech transaction integrity with HMAC-SHA512 webhook signature verification, atomic slot lockouts, and offline-first PWA caching.",
      techStack: ["Mobile-First PWA", "Paystack API", "HMAC Webhook Verification", "Tailwind CSS", "Offline Caching"]
    }
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header & Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              Featured Work
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A selection of products and web applications I've engineered.
            </p>
          </div>

          {/* Simple Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] self-start sm:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                filter === "fullstack"
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Full-Stack / AI
            </button>
            <button
              onClick={() => setFilter("frontend")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                filter === "frontend"
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Frontend
            </button>
          </div>
        </motion.div>

        {/* Projects List - Minimalist Clean Cards */}
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Image Preview */}
                <div className="md:col-span-5 rounded-xl overflow-hidden border border-white/10 bg-[#0d1017] aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="md:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-500/10">
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <span className="text-slate-600">•</span>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};