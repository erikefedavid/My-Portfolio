import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Clock, 
  ArrowDownToLine, 
  AlertCircle 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState({ show: false, message: "", isError: false });

  const email = "dafenone2006@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ show: false, message: "", isError: false });

    emailjs
      .sendForm(
        "service_485pe1r",
        "template_ap4s5ff",
        form.current,
        "Qb84x7gNNcGfCtnrp"
      )
      .then(
        (result) => {
          setLoading(false);
          setStatus({
            show: true,
            message: "Thank you! Your message was sent successfully. I'll get back to you shortly.",
            isError: false,
          });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus({
            show: true,
            message: "Failed to send message. Please message directly on WhatsApp or copy my email.",
            isError: true,
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 border-t border-white/[0.06]">
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6"
      >
        
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have a project in mind, want to hire, or looking to collaborate? Reach out below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Direct channels */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 space-y-4"
          >
            
            {/* Email Copier */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2.5 truncate">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs font-mono text-slate-300 truncate">{email}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.05] hover:bg-white/[0.1] text-blue-400 border border-white/[0.08] transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2347043554052?text=Hi%20David%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/25 text-[#25D366] font-semibold text-xs transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Resume Download Card */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="text-xs font-semibold text-white mb-1">Looking for my CV?</p>
              <p className="text-xs text-slate-400 mb-3">
                Download my complete resume with full work history and skills.
              </p>
              <a
                href="/David_Erikefe_CV.pdf"
                download="David_Erikefe_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
              >
                <ArrowDownToLine className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

          </motion.div>

          {/* Simple Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
          >
            {status.show && (
              <div
                className={`p-3 rounded-xl mb-4 text-xs flex items-start gap-2 border ${
                  status.isError
                    ? "bg-rose-500/10 border-rose-500/20 text-rose-300"
                    : "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                }`}
              >
                {status.isError ? (
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                ) : (
                  <Check className="w-4 h-4 shrink-0 mt-0.5" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    name="from_name"
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-500 text-xs focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    name="from_email"
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-500 text-xs focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  placeholder="How can I help you?"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-500 text-xs focus:border-blue-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-xs bg-blue-600 hover:bg-blue-500 text-white transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};