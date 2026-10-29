import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { ArrowRight, Code2 } from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiMongodb 
} from "react-icons/si";
import { ReactTyped } from "react-typed";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Hero = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-4 h-4" />,
      link: "https://github.com/erikefedavid",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-4 h-4" />,
      link: "https://www.linkedin.com/in/davebuiltit",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-4 h-4" />,
      link: "https://x.com/Davebuiltit",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-4 h-4" />,
      link: "https://wa.me/2347043554052",
    },
  ];

  const coreStack = [
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  ];

  const codeString = `const aboutMe = {
  codename: "davebuiltit",
  origin: "🌍 Nigeria to the World",
  role: "Frontend Developer",
  stack: {
    languages: ["TypeScript", "JavaScript"],
    frameworks: ["React", "Next.js", "TailwindCSS"],
    aiAndTools: ["Groq API", "Gemini API", "MongoDB"]
  },
  traits: [
    "clean-code advocate",
    "pixel-perfect builder",
    "dark mode lover",
    "always learning"
  ],
  mission: "Bringing designs to life with code that is functional and elegant.",
  availability: "Open to opportunities & collaborations",
  contact: "dafenone2006@gmail.com"
};`;

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Automatic Typing & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Frontend Roles & Contracts</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4"
            >
              David Erikefe
            </motion.h1>

            {/* Automatic Typing Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl sm:text-2xl font-bold text-blue-400 font-mono mb-6"
            >
              <span>&gt; </span>
              <ReactTyped
                strings={[
                  "Creative Frontend Engineer",
                  "React & Next.js Developer",
                  "UI/UX Craftsman",
                  "davebuiltit",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                backDelay={1600}
              />
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            >
              I merge code and creativity under <strong className="text-white font-semibold">davebuiltit</strong> to deliver dynamic, pixel-perfect websites with seamless micro-animations and clean architecture.
            </motion.p>

            {/* Action Button: View Projects */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-3.5 mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-md shadow-blue-600/20 active:scale-95 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white transition-colors"
              >
                <span>Get in touch</span>
              </a>
            </motion.div>

            {/* Core Stack Pills & Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08] w-full"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-slate-400 mr-1">Stack:</span>
                {coreStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs text-slate-300"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-blue-400 hover:border-blue-400/40 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Code Window Preview (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block lg:col-span-5 w-full"
          >
            <div className="rounded-2xl overflow-hidden bg-[#0c1017]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">aboutMe.ts</span>
                <Code2 className="w-4 h-4 text-slate-400" />
              </div>

              {/* Code Content */}
              <div className="p-3 text-[12px] leading-relaxed font-mono overflow-x-auto">
                <SyntaxHighlighter
                  language="typescript"
                  style={vscDarkPlus}
                  customStyle={{
                    background: "transparent",
                    margin: 0,
                    padding: "0.5rem",
                    fontSize: "0.78rem",
                    lineHeight: "1.5",
                  }}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>

              {/* Window Footer */}
              <div className="flex items-center justify-between px-4 py-2 bg-white/[0.02] border-t border-white/[0.06] text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>davebuiltit • Ready</span>
                </div>
                <span>TypeScript</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
