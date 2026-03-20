import { motion } from "motion/react";
import Navbar from "../components/navbar";
import Orb from "../components/ui/Orb";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 overflow-x-hidden transition-colors duration-500">
      <Navbar />
      
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <Orb backgroundColor={isDark ? "#030712" : "#f8fafc"} />
      </div>

      {/* Theme Overlay */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-white/10 dark:bg-transparent transition-colors duration-700 pointer-events-none" />

      <main className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
              <img 
                src="/parna.png" 
                alt="Parna Ghosh" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-blue-600/10 backdrop-blur-3xl rounded-full border border-white/10 -z-10 animate-pulse" />
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-blue-600 dark:bg-blue-500" />
                <p className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-cyan-400">
                  The Person Behind The Code
                </p>
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Engineer</span> <br />
                & Full Stack Developer
              </h1>
            </div>

            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed max-w-xl">
              I'm Parna Ghosh, a Computer Science student at Lovely Professional University with a deep interest in building scalable, 
              high-performance web applications. I love bridging the gap between design and technology, ensuring every project I touch 
              feels polished, premium, and meaningful.
            </p>

            <div className="grid grid-cols-2 gap-6 py-4">
              <div className="space-y-1">
                <p className="text-2xl font-black text-blue-600 dark:text-cyan-400">3+</p>
                <p className="text-xs font-bold uppercase tracking-tighter text-slate-500 dark:text-slate-400">Core Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black text-blue-600 dark:text-cyan-400">250+</p>
                <p className="text-xs font-bold uppercase tracking-tighter text-slate-500 dark:text-slate-400">LeetCode Solved</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1">
                View My Work
              </Link>
              <Link to="/resume" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-2xl backdrop-blur-xl transition-all hover:-translate-y-1">
                My Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-slate-300 dark:border-white/10 py-12 text-center bg-white/40 dark:bg-black/20 backdrop-blur-md transition-colors mt-auto">
        <p className="text-[14px] font-bold tracking-wide text-slate-900 dark:text-slate-400">
          © {new Date().getFullYear()} PARNA GHOSH. CRAFTED WITH PASSION.
        </p>
      </footer>
    </div>
  );
}
