import { motion } from "motion/react";
import { GraduationCap, Award, Trophy } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const education = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 6.51",
    date: "Aug 2023 - Present",
  },
  {
    institution: "North Point School",
    location: "Kolkata, West Bengal",
    degree: "Intermediate",
    score: "Percentage: 63.6",
    date: "Apr 2021 - Mar 2023",
  },
  {
    institution: "North Point School",
    location: "Kolkata, West Bengal",
    degree: "Matriculation",
    score: "Percentage: 89.6",
    date: "Apr 2020 - Mar 2021",
  },
];

const certificates = [
  {
    title: "Data Structure Algorithm in Java",
    type: "Training",
    date: "",
    desc: "Implemented fundamental data structures and algorithms, optimizing for time and space complexity.",
  },
  {
    title: "Master AWS Essentials: A Complete Beginner Guide",
    type: "Udemy",
    date: "Aug 2025",
  },
  {
    title: "Web development with React.js",
    type: "Udemy",
    date: "Oct 2024",
  },
  {
    title: "Backend REST API with Node.js",
    type: "Udemy",
    date: "Nov 2024",
  },
];

const achievements = [
  {
    title: "Built 3+ full-stack projects",
    desc: "Using modern technologies (React, Next.js, Node.js, PHP).",
    date: "Jan 2025",
  },
  {
    title: "Solved 250+ LeetCode questions",
    desc: "Focusing on problem-solving and algorithmic thinking.",
    date: "",
  },
  {
    title: "Completed NPTEL certifications",
    desc: "Achieved good scores in comprehensive technical courses.",
    date: "Dec 2025",
  },
];

const TimelineItem = ({ data, isLast, delay, isDark }) => (
  <motion.div
    initial={{ opacity: 0, x: -20, rotateX: -10 }}
    whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, type: "spring", stiffness: 80 }}
    whileHover={{ x: 10, scale: 1.02 }}
    className="relative pl-8 sm:pl-12 py-6 group cursor-default"
  >
    {/* Line */}
    {!isLast && (
      <div className={`absolute left-[11px] sm:left-[19px] top-10 bottom-0 w-px ${isDark ? 'bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent' : 'bg-gradient-to-b from-blue-600/50 via-slate-300 to-transparent'} group-hover:from-blue-600 dark:group-hover:from-cyan-400 transition-colors duration-500`} />
    )}
    
    {/* Animated Dot */}
    <motion.div 
      animate={{ 
          scale: [1, 1.2, 1], 
          boxShadow: isDark 
            ? ["0 0 0px rgba(59,130,246,0)", "0 0 15px rgba(59,130,246,0.5)", "0 0 0px rgba(59,130,246,0)"]
            : ["0 0 0px rgba(37,99,235,0)", "0 0 15px rgba(37,99,235,0.4)", "0 0 0px rgba(37,99,235,0)"]
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute left-0 sm:left-2 top-7 h-6 w-6 rounded-full border-4 ${isDark ? 'border-[#030712] bg-slate-700' : 'border-white bg-slate-200'} transform transition-transform duration-300 group-hover:scale-125 group-hover:bg-blue-600 dark:group-hover:bg-cyan-400 group-hover:shadow-lg z-10`} 
    />

    <div className="flex flex-col gap-1.5 rounded-3xl bg-white/40 dark:bg-white/5 p-6 sm:p-8 border border-slate-300 dark:border-white/10 group-hover:bg-white/60 dark:group-hover:bg-white/10 group-hover:border-blue-600 dark:group-hover:border-blue-500/50 transition-all duration-300 shadow-xl backdrop-blur-md">
      <div className="flex flex-wrap justify-between items-start gap-x-4 gap-y-2">
        <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-wide group-hover:text-blue-700 dark:group-hover:text-cyan-300 transition-colors">
          {data.institution || data.title}
        </h4>
        {data.date && (
          <motion.span 
            whileHover={{ scale: 1.05, backgroundColor: isDark ? "rgba(6, 182, 212, 0.2)" : "rgba(37, 99, 235, 0.1)" }}
            className="shrink-0 rounded-full bg-blue-600/10 dark:bg-blue-500/10 border border-blue-600/20 dark:border-blue-500/20 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-blue-700 dark:text-cyan-400"
          >
            {data.date}
          </motion.span>
        )}
      </div>
      
      {data.degree && (
        <p className="text-[14px] font-black text-slate-700 dark:text-slate-300 mt-1">
          {data.degree}
        </p>
      )}
      
      {(data.location || data.type) && (
        <p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500 flex items-center gap-1.5 mt-2 transition-colors">
          {data.location || data.type}
        </p>
      )}

      {(data.score || data.desc) && (
        <div className="mt-4 text-[14px] text-slate-800 dark:text-slate-400 leading-relaxed font-bold">
          {data.score && <span className="text-white bg-blue-600 dark:text-cyan-400 dark:bg-cyan-500/10 px-2.5 py-1 rounded-lg mr-2 shadow-sm font-black">{data.score}</span>}
          {data.desc && <span>{data.desc}</span>}
        </div>
      )}
    </div>
  </motion.div>
);

export default function Credentials() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="credentials" className="relative py-24 sm:py-32 overflow-hidden z-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-3 text-left max-w-3xl"
        >
          <div className="flex items-center gap-3">
             <div className="h-px w-8 bg-blue-600 dark:bg-blue-500" />
             <p className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-cyan-400">
              Journey & Accolades
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
            Credentials
          </h2>
          <p className="text-[16px] text-slate-700 dark:text-slate-400 font-bold max-w-2xl leading-relaxed">
            Academic milestones and professional training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-12">
          
          <div>
            <div className="flex items-center gap-4 mb-10 pl-2">
              <motion.div 
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="p-3 rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-blue-700 dark:text-blue-400 shadow-xl"
              >
                <GraduationCap className="h-7 w-7" />
              </motion.div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Education</h3>
            </div>
            
            <div className="flex flex-col">
              {education.map((item, idx) => (
                <TimelineItem 
                  key={idx} 
                  data={item} 
                  isLast={idx === education.length - 1} 
                  delay={0.1 * idx}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-16">
            <div>
               <div className="flex items-center gap-4 mb-10 pl-2">
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="p-3 rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-cyan-600 dark:text-cyan-400 shadow-xl"
                >
                  <Award className="h-7 w-7" />
                </motion.div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Certifications</h3>
              </div>
              <div className="flex flex-col">
                {certificates.map((item, idx) => (
                  <TimelineItem 
                    key={idx} 
                    data={item} 
                    isLast={idx === certificates.length - 1} 
                    delay={0.1 * idx + 0.3} 
                    isDark={isDark}
                  />
                ))}
              </div>
            </div>

            <div>
               <div className="flex items-center gap-4 mb-10 pl-2">
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="p-3 rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-indigo-700 dark:text-indigo-400 shadow-xl"
                >
                  <Trophy className="h-7 w-7" />
                </motion.div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Achievements</h3>
              </div>
              <div className="flex flex-col">
                {achievements.map((item, idx) => (
                  <TimelineItem 
                    key={idx} 
                    data={item} 
                    isLast={idx === achievements.length - 1} 
                    delay={0.1 * idx + 0.6} 
                    isDark={isDark}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
