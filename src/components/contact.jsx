import { motion } from "motion/react";
import { Mail, Smartphone, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden z-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-3 text-left max-w-3xl"
        >
          <div className="flex items-center gap-3">
             <div className="h-px w-8 bg-blue-600 dark:bg-blue-500" />
             <p className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-cyan-400">
              Availability
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
            Let's build something.
          </h2>
          <p className="text-[16px] text-slate-700 dark:text-slate-400 font-bold max-w-2xl leading-relaxed">
            Have an idea, project, or opportunity? Drop a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Contact Details Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: isDark ? "0 25px 50px -12px rgba(6,182,212,0.15)" : "0 25px 50px -12px rgba(37,99,235,0.15)" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
            className="lg:col-span-2 flex flex-col gap-8 rounded-3xl bg-white/60 dark:bg-white/5 p-8 border border-slate-300 dark:border-white/10 backdrop-blur-xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-500 shadow-xl"
          >
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 underline decoration-blue-600 dark:decoration-cyan-400 underline-offset-8">Direct Contact</h3>
            <div className="flex flex-col gap-8">
              <motion.a 
                whileHover={{ x: 10 }}
                href="mailto:parnaghosh628@gmail.com" 
                className="group flex items-center gap-5 transition-transform cursor-pointer"
              >
                <div className="relative">
                  <div className={`absolute inset-0 ${isDark ? 'bg-blue-500' : 'bg-blue-600'} blur-md opacity-20 group-hover:opacity-60 transition-opacity`} />
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-blue-700 dark:text-blue-400 group-hover:border-blue-600 dark:group-hover:border-blue-500 group-hover:bg-blue-600/10 dark:group-hover:bg-blue-500/20 transition-all shadow-lg">
                    <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email</span>
                  <span className="text-[15px] font-black text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors mt-0.5">parnaghosh628@gmail.com</span>
                </div>
              </motion.a>

              <motion.a 
                whileHover={{ x: 10 }}
                href="tel:+919163878703" 
                className="group flex items-center gap-5 transition-transform cursor-pointer"
              >
                <div className="relative">
                  <div className={`absolute inset-0 ${isDark ? 'bg-cyan-400' : 'bg-cyan-600'} blur-md opacity-20 group-hover:opacity-60 transition-opacity`} />
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-600 dark:group-hover:border-cyan-400 group-hover:bg-cyan-600/10 dark:group-hover:bg-cyan-500/20 transition-all shadow-lg">
                    <Smartphone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Phone</span>
                  <span className="text-[15px] font-black text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors mt-0.5">+91 9163878703</span>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
            className="lg:col-span-3 relative flex w-full flex-col gap-6 rounded-3xl border border-slate-300 dark:border-white/10 bg-white/60 dark:bg-[#030712]/60 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl hover:bg-white/80 dark:hover:bg-[#030712]/80 transition-all duration-500 group/form"
          >
            <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-black ml-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="h-14 rounded-2xl border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-black/40 px-5 text-[14px] text-slate-900 dark:text-white outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:border-blue-500 dark:focus:border-cyan-400/60 focus:ring-1 focus:ring-blue-500 dark:focus:ring-cyan-400/60 transition-all shadow-inner font-bold"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-black ml-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="h-14 rounded-2xl border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-black/40 px-5 text-[14px] text-slate-900 dark:text-white outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:border-blue-500 dark:focus:border-cyan-400/60 focus:ring-1 focus:ring-blue-500 dark:focus:ring-cyan-400/60 transition-all shadow-inner font-bold"
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.01 }} className="relative z-10 flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-black ml-1">
                Message
              </label>
              <textarea
                required
                placeholder="Message me..."
                rows="5"
                className="rounded-2xl border border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-black/40 px-5 py-5 text-[14px] text-slate-900 dark:text-white outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:border-blue-500 dark:focus:border-cyan-400/60 focus:ring-1 focus:ring-blue-500 dark:focus:ring-cyan-400/60 transition-all resize-none shadow-inner font-bold"
              />
            </motion.div>

            <div className="relative z-10 mt-4 flex items-center justify-end">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: isDark ? "0 0 30px rgba(6, 182, 212, 0.5)" : "0 10px 30px rgba(37, 99, 235, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-blue-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 px-10 py-4 text-[13px] font-black uppercase tracking-widest text-white shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
