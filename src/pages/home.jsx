import { motion, useScroll, useTransform } from "motion/react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Skills from "../components/skills";
import Projects from "../components/project";
import Credentials from "../components/credentials";
import Contact from "../components/contact";
import Cursor from "../components/ui/Cursor";
import Orb from "../components/ui/Orb";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 overflow-x-hidden transition-colors duration-500">
      <Cursor />

      <div className="fixed inset-0 -z-20 pointer-events-none">
        <Orb backgroundColor={isDark ? "#030712" : "#f8fafc"} />
      </div>

      {/* 
        REFINED BACKGROUND SYSTEM
        Light mode: subtle tint for readability
        Dark mode: transparent to let the high-vibrancy Orb shine through
      */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-white/15 dark:bg-transparent transition-colors duration-700 pointer-events-none" />
      
      {/* Floating ambient gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-50 dark:opacity-30 mix-blend-overlay">
        <motion.div 
          animate={{ 
            x: [0, 80, -80, 0], 
            y: [0, -80, 80, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-500 blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 100, 0], 
            y: [0, 100, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-400 blur-[120px]" 
        />
      </div>

      <Navbar />
      
      <main className="relative flex flex-col">
        <Hero />
        <Skills />
        <Projects />
        <Credentials />
        <Contact />

        <footer className="border-t border-slate-300 dark:border-white/10 py-12 text-center bg-white/40 dark:bg-black/20 backdrop-blur-md transition-colors">
          <p className="text-[14px] font-bold tracking-wide text-slate-900 dark:text-slate-400">
            © {new Date().getFullYear()} PARNA GHOSH. CRAFTED WITH PASSION.
          </p>
        </footer>
      </main>
    </div>
  );
}
