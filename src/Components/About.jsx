import { motion } from "framer-motion";
import { 
  User, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Code2,
  ArrowDownToLine
} from "lucide-react";

export const About = () => {
  const highlights = [
    {
      title: "Pixel-Perfect Implementation",
      description: "Translating Figma designs into responsive code with clean precision.",
      icon: <Layers className="w-4 h-4 text-blue-400" />,
    },
    {
      title: "Performance & Responsive First",
      description: "Fast loading times, optimized bundles, and fluid layouts across all viewports.",
      icon: <Zap className="w-4 h-4 text-cyan-400" />,
    },
    {
      title: "Clean Component Architecture",
      description: "Writing maintainable, modular React/Next.js code built to scale.",
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-white/[0.06]">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6"
      >
        
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Background, philosophy, and engineering approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Bio text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            <p>
              I am a frontend engineer who loves transforming intricate designs into polished, intuitive, and high-performance web applications.
            </p>
            <p>
              Under <strong className="text-white font-medium">davebuiltit</strong>, I focus on the React and Next.js ecosystems, building dashboards, AI-integrated productivity tools, and modern landing pages with strict attention to typography, spacing, and micro-interactions.
            </p>
            
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Based in Nigeria • Collaborating globally</span>
            </div>

            {/* Quick CV Download Link */}
            <div className="pt-3">
              <a
                href="/David_Erikefe_CV.pdf"
                download="David_Erikefe_CV.pdf"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowDownToLine className="w-3.5 h-3.5" />
                <span>Download Full Resume / CV (PDF)</span>
              </a>
            </div>
          </motion.div>

          {/* Core highlights */}
          <div className="md:col-span-5 space-y-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1 rounded-md bg-white/[0.04]">
                    {item.icon}
                  </div>
                  <h3 className="text-xs font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-normal pl-7">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </motion.div>
    </section>
  );
};
