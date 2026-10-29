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
      title: "DocDigitize — AI Document Scanner & Summarizer",
      badge: "AI & Full-Stack",
      image: "/images/Docdigitize.png",
      alt: "DocDigitize AI Document Platform",
      liveUrl: "https://docdigitize.vercel.app/",
      githubUrl: "https://github.com/erikefedavid",
      description:
        "Full-stack document digitization and AI summarization platform that extracts text from scanned documents and images using Groq Cloud AI and Next.js. Research paper accepted at ICMLDE.",
      techStack: ["Next.js", "React", "Groq AI", "Tailwind CSS", "MongoDB", "Cloudinary"]
    },
    {
      id: "dashboard",
      category: "frontend",
      title: "Interactive Enterprise Admin Dashboard",
      badge: "Frontend UI",
      image: "/images/dashboard.png",
      alt: "Admin Dashboard UI Preview",
      liveUrl: "https://erikefedavid.github.io/Admin-Dashboard/",
      githubUrl: "https://github.com/erikefedavid/Admin-Dashboard",
      description:
        "A responsive management dashboard built with React and Tailwind CSS for seamless data monitoring, user administration, and real-time interface workflows.",
      techStack: ["React", "Tailwind CSS", "Lucide Icons", "Vite"]
    },
    {
      id: "swissmark",
      category: "frontend",
      title: "Swissmarkk — Luxury Fragrance Brand Showcase",
      badge: "Commercial UI",
      image: "/images/swissmark.png",
      alt: "Swissmarkk Luxury Website",
      liveUrl: "https://erikefedavid.github.io/SWISSMARK/",
      githubUrl: "https://github.com/erikefedavid/SWISSMARK",
      description:
        "An elegant, high-conversion commercial website built to showcase luxury fragrances, featuring smooth product exploration, curated typography, and responsive storytelling.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"]
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