import { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-2xl border ${
          scrolled
            ? "bg-[#0b0e14]/90 border-white/10 shadow-xl shadow-black/40 backdrop-blur-md py-2.5 px-4 sm:px-6"
            : "bg-[#0b0e14]/70 border-white/10 backdrop-blur-sm py-3 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & davebuiltit text */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 border border-white/20 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-105">
              <img
                src="/images/logo_icon.png"
                alt="davebuiltit logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                davebuiltit
              </span>
              <span className="text-[10px] text-slate-400 font-mono -mt-0.5">David Erikefe</span>
            </div>
          </a>

          {/* Center Nav Links - Minimalist */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-lg transition-colors hover:bg-white/[0.05]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: Download CV / Resume CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/David_Erikefe_CV.pdf"
              download="David_Erikefe_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white transition-all duration-200 hover:border-blue-400/50"
              title="Download David's Resume (PDF)"
            >
              <ArrowDownToLine className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-95"
            >
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/David_Erikefe_CV.pdf"
              download="David_Erikefe_CV.pdf"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white/[0.06] border border-white/15 text-white"
            >
              <ArrowDownToLine className="w-3 h-3 text-blue-400" />
              <span>CV</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden pt-3 pb-1 border-t border-white/10 mt-3"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.06] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href="/David_Erikefe_CV.pdf"
                    download="David_Erikefe_CV.pdf"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-semibold bg-white/[0.06] border border-white/15 text-white"
                  >
                    <ArrowDownToLine className="w-4 h-4 text-blue-400" />
                    <span>Download CV (PDF)</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white font-medium"
                  >
                    <span>Contact Me</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};