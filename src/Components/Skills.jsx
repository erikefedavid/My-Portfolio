import { motion } from "framer-motion";
import { 
  FaReact, 
  FaGitAlt 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiJavascript, 
  SiMongodb, 
  SiFramer,
  SiVite
} from "react-icons/si";
import { Cpu, Zap } from "lucide-react";

export const Skills = () => {
  const groups = [
    {
      category: "Frontend",
      skills: ["React 19", "Next.js 15", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3"]
    },
    {
      category: "Styling & UI",
      skills: ["Tailwind CSS", "Framer Motion", "Shadcn UI", "Responsive Design"]
    },
    {
      category: "Backend & AI",
      skills: ["Groq Cloud AI", "RESTful APIs", "MongoDB", "Cloudinary"]
    },
    {
      category: "Workflow",
      skills: ["Git & GitHub", "Vite", "Web Performance", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-white/[0.06]">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6"
      >
        
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Skills & Toolkit
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Technologies and tools I use to bring ideas to reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
            >
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] text-slate-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};
