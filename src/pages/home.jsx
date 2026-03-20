import { motion } from "motion/react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Skills from "../components/skills";
import Projects from "../components/project";
import Credentials from "../components/credentials";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30">
      {/* 
        ANIMATED PORTRAIT BACKGROUND
        The user's picture is fixed in the background and slowly scales infinitely
      */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-20">
        <motion.img
          src="/parna.png"
          alt="Background"
          className="w-full h-full object-cover object-top opacity-100"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 
        DUAL-THEME DYNAMIC OVERLAY 
        Changes drastically between Light and Dark mode to ensure text is readable
      */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-slate-100/85 dark:bg-[#030712]/85 backdrop-blur-[2px] transition-colors duration-700" />
      
      {/* Floating ambient gradients to add magical feel in both modes */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-40 dark:opacity-20 mix-blend-overlay">
        <motion.div 
          animate={{ 
            x: [0, 100, -100, 0], 
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -150, 150, 0], 
            y: [0, 150, -150, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-400 blur-[150px]" 
        />
      </div>

      <Navbar />
      
      <main className="relative flex flex-col">
        {/* Sections */}
        <Hero />
        <Skills />
        <Projects />
        <Credentials />
        <Contact />

        {/* Footer */}
        <footer className="border-t border-slate-300/30 dark:border-white/10 py-8 text-center bg-white/10 dark:bg-black/10 backdrop-blur-md">
          <p className="text-[14px] font-medium text-slate-800 dark:text-slate-400">
            © {new Date().getFullYear()} Parna Ghosh. Built with React & Tailwind CSS.
          </p>
        </footer>
      </main>
    </div>
  );
}
