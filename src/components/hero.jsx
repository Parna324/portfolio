import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section id="home" className="relative flex min-h-[90vh] w-full flex-col justify-center items-center overflow-hidden pt-20">
      
      {/* 
        HERO CONTENT OVERLAY 
        The background photo handles the visuals, so Hero focuses purely on cinematic typography
      */}
      <div className="z-10 flex flex-col items-center justify-center gap-8 px-6 text-center mt-10">
        
        {/* Available for work badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="flex items-center gap-2.5 rounded-full bg-white/40 dark:bg-black/40 border border-slate-300/50 dark:border-white/10 px-4 py-2 backdrop-blur-md shadow-lg dark:shadow-[0_0_20px_rgba(6,182,212,0.15)] group"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 dark:bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600 dark:bg-cyan-500"></span>
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-800 dark:text-cyan-400">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main Title Array */}
        <div className="flex flex-col gap-2 items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Parna Ghosh
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2"
          >
            <span className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-blue-700 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-500">
              Full-Stack Developer
            </span>
            <span className="hidden sm:block text-slate-400 dark:text-slate-600 text-3xl font-light">|</span>
            <span className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-700 dark:text-slate-400">
              Software Engineer
            </span>
          </motion.div>
        </div>

        {/* Bio */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-[16px] sm:text-lg font-medium leading-relaxed text-slate-800 dark:text-slate-300 drop-shadow-sm"
        >
          Specializing in React.js, Next.js, and Node.js. Passionate about crafting scalable architectures, intuitive user interfaces, and solving complex algorithmic challenges.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 mt-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: theme === 'dark' ? "0 0 30px rgba(6, 182, 212, 0.4)" : "0 10px 30px rgba(37, 99, 235, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 px-8 py-4 text-[13px] font-bold uppercase tracking-widest text-white shadow-xl transition-all duration-300"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.15, y: -5 }} 
              whileTap={{ scale: 0.9 }}
              href="https://github.com/parna324" 
              target="_blank" 
              rel="noopener"
              className="p-3.5 rounded-full bg-white/40 dark:bg-white/10 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/50 dark:hover:border-cyan-400/50 backdrop-blur-md shadow-lg transition-colors"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.15, y: -5 }} 
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/parna-ghosh" 
              target="_blank" 
              rel="noopener"
              className="p-3.5 rounded-full bg-white/40 dark:bg-white/10 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/50 dark:hover:border-cyan-400/50 backdrop-blur-md shadow-lg transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.15, y: -5 }} 
              whileTap={{ scale: 0.9 }}
              href="mailto:parnaghosh628@gmail.com" 
              className="p-3.5 rounded-full bg-white/40 dark:bg-white/10 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/50 dark:hover:border-cyan-400/50 backdrop-blur-md shadow-lg transition-colors"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}
