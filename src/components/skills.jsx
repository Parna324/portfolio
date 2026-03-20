import { motion } from "motion/react";
import { Terminal, Database, Layout, Lightbulb } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const skillCategories = [
  {
    title: "Languages",
    icon: <Terminal className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    skills: ["C++", "Python", "JavaScript", "Java"],
  },
  {
    title: "Frameworks",
    icon: <Layout className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />,
    skills: ["React.js", "Express.js", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Database & Tools",
    icon: <Database className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />,
    skills: ["MySQL", "MongoDB", "Git", "GitHub"],
  },
  {
    title: "Soft Skills",
    icon: <Lightbulb className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400" />,
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Adaptability",
      "Leadership",
      "Ownership",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden z-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-3 text-left max-w-2xl"
        >
          <div className="flex items-center gap-3">
             <div className="h-px w-8 bg-blue-600 dark:bg-blue-500" />
             <p className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-cyan-400">
              Technical Arsenal
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Core Competencies
          </h2>
          <p className="text-[16px] text-slate-700 dark:text-slate-400 leading-relaxed mt-2 font-medium">
            A comprehensive toolkit designed for building scalable backend architectures 
            and fluid frontend experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                border: theme === 'dark' ? "1px solid rgba(6, 182, 212, 0.5)" : "1px solid rgba(37, 99, 235, 0.5)", 
                backgroundColor: theme === 'dark' ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.8)", 
                boxShadow: theme === 'dark' ? "0 25px 50px -12px rgba(6, 182, 212, 0.25)" : "0 25px 50px -12px rgba(37, 99, 235, 0.25)"
              }}
              className="group relative flex flex-col gap-6 rounded-3xl border border-slate-300/50 dark:border-white/10 bg-white/40 dark:bg-black/40 p-8 backdrop-blur-xl transition-all duration-500 shadow-xl"
            >
              <div className="flex items-center gap-3 border-b border-slate-300/40 dark:border-white/10 pb-4">
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                  className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 group-hover:border-blue-400/50 group-hover:bg-blue-50 dark:group-hover:border-cyan-400/50 dark:group-hover:bg-cyan-500/10 transition-colors shadow-sm dark:shadow-[0_0_15px_rgba(255,255,255,0.05)] dark:group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">
                  {category.title}
                </h3>
              </div>
              
              <ul className="flex flex-col gap-4">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 10, color: theme === 'dark' ? "#22d3ee" : "#2563eb" }}
                    className="flex items-center gap-3 text-[14px] sm:text-[15px] font-bold text-slate-700 dark:text-slate-400 transition-colors cursor-default"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-600 group-hover:bg-blue-600 dark:group-hover:bg-cyan-400 dark:group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
