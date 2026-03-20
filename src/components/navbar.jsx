import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 w-full"
    >
      {/* LOGO */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          <span className="text-white font-bold text-xl tracking-tighter">PG</span>
        </div>
        <div className="flex flex-col select-none">
          <span className="text-sm font-bold tracking-widest text-slate-900 dark:text-slate-200 transition-colors">PARNA</span>
          <span className="text-[10px] font-medium tracking-[0.3em] text-blue-600 dark:text-cyan-400 uppercase transition-colors">Engineer</span>
        </div>
      </motion.div>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center gap-4">
        <nav className="flex items-center gap-2 rounded-full bg-white/40 dark:bg-white/5 border border-slate-300/40 dark:border-white/10 px-4 py-2 backdrop-blur-xl shadow-lg dark:shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-colors duration-500">
          <Link 
            to="/"
            className="px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-cyan-400 rounded-full"
          >
            home
          </Link>
          <Link 
            to="/about"
            className="px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-cyan-400 rounded-full"
          >
            about
          </Link>
          {["skills", "projects", "contact"].map((item) => (
            <a 
              key={item}
              href={`/#${item}`} 
              className="px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-cyan-400 rounded-full"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* THEME TOGGLE (Desktop) */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
          onClick={toggleTheme}
          className="p-3 rounded-full bg-white/40 dark:bg-white/5 border border-slate-300/40 dark:border-white/10 backdrop-blur-xl text-slate-800 dark:text-cyan-400 shadow-lg dark:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-colors duration-500"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </motion.button>
      </div>

      {/* MOBILE CONTROLS */}
      <div className="md:hidden flex items-center gap-4">
        {/* THEME TOGGLE (Mobile) */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2.5 rounded-lg bg-white/40 dark:bg-white/5 border border-slate-300/40 dark:border-white/10 text-slate-800 dark:text-cyan-400"
        >
           {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </motion.button>

        {/* MOBILE MENU TRIGGER */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col gap-1.5 p-2.5 rounded-lg bg-white/40 dark:bg-white/5 border border-slate-300/40 dark:border-white/10" 
          aria-label="Menu"
        >
          <div className="h-[2.5px] w-5 bg-blue-600 dark:bg-cyan-400 rounded-full" />
          <div className="h-[2.5px] w-5 bg-blue-600 dark:bg-cyan-400 rounded-full" />
        </motion.button>
      </div>
    </motion.header>
  );
}
