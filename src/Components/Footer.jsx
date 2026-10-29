import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-3.5 h-3.5" />,
      link: "https://github.com/erikefedavid",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-3.5 h-3.5" />,
      link: "https://www.linkedin.com/in/davebuiltit",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-3.5 h-3.5" />,
      link: "https://x.com/Davebuiltit",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-3.5 h-3.5" />,
      link: "https://wa.me/2347043554052",
    },
  ];

  return (
    <footer className="py-10 border-t border-white/[0.06] bg-[#07090e]/70 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-1 border border-white/20 flex items-center justify-center shrink-0">
            <img
              src="/images/logo_icon.png"
              alt="davebuiltit logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xs font-bold text-white tracking-tight">davebuiltit</span>
          <span className="text-slate-600 text-xs">•</span>
          <span className="text-xs text-slate-400">&copy; {new Date().getFullYear()} David Erikefe</span>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-1.5 rounded-md text-slate-400 hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-1.5 rounded-md bg-white/[0.04] text-slate-400 hover:text-white transition-colors"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </motion.div>
    </footer>
  );
};