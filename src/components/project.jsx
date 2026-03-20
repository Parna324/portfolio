import { motion } from "motion/react";
import { getLanguageColor } from "../lib/github";
import { ExternalLink, Github } from "lucide-react";
import TiltedCard from "./ui/TiltedCard";

const cvProjects = [
  {
    id: "heritage-of-india",
    name: "Heritage of India",
    subtitle: "Cultural Web Platform",
    date: "Sep 2025",
    github: "https://github.com/parna324",
    live: "",
    bullets: [
      "Crafted an interactive digital platform highlighting Indian monuments and traditions.",
      "Integrated server-side logic using PHP to enable dynamic data retrieval.",
      "Produced a visually consistent and mobile-friendly interface with Tailwind CSS.",
      "Restructured page layout to accelerate loading speed."
    ],
    tech: ["HTML", "Tailwind CSS", "PHP"],
    primaryLang: "PHP"
  },
  {
    id: "virtual-bartender",
    name: "AI-Powered",
    subtitle: "Virtual Bartender",
    date: "Dec 2025",
    github: "https://github.com/parna324",
    live: "#",
    bullets: [
      "Designed an intelligent beverage suggestion platform recommending drinks based on user mood.",
      "Constructed reusable UI components using React.js improving interface responsiveness.",
      "Established backend services using Node.js and Express.js to process customized requests.",
      "Delivered device-compatible layouts using Tailwind CSS."
    ],
    tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
    primaryLang: "JavaScript"
  },
  {
    id: "e-learning",
    name: "E-Learning",
    subtitle: "Management Platform",
    date: "Apr 2025",
    github: "https://github.com/parna324",
    live: "#",
    bullets: [
      "Engineered a scalable learning management solution supporting course exploration.",
      "Organized application architecture using Next.js enabling optimized routing.",
      "Strengthened code reliability through TypeScript integration and ES-Lint configuration.",
      "Maintained version control contributing 40+ commits during team development."
    ],
    tech: ["Next.js", "React.js", "Node.js", "Express.js", "TypeScript"],
    primaryLang: "TypeScript"
  }
];

function ProjectCard({ project, index }) {
  const langColor = getLanguageColor(project.primaryLang) || "#3b82f6";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.4 }}
      className="h-full z-10"
    >
      <TiltedCard
        altText={`${project.name} cover`}
        captionText={project.name}
        containerHeight="480px"
        imageHeight="480px"
        scaleOnHover={1.05}
        rotateAmplitude={8}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent
        overlayContent={
          <div className="group relative flex h-full flex-col p-6 sm:p-8 overflow-hidden bg-[#030712]/60 backdrop-blur-2xl border border-white/10 hover:border-cyan-400/50 hover:bg-[#030712]/40 transition-all duration-700 rounded-3xl">
            {/* Subtle glow effect on hover */}
            <div className="pointer-events-none absolute -inset-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <div className="h-full w-full bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.15),transparent_60%)]" />
            </div>

            <div className="relative flex flex-1 flex-col z-10">
              <div className="mb-6 flex flex-col gap-1.5">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm font-semibold text-slate-400 mt-1">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <motion.a whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} href={project.github} target="_blank" rel="noopener" className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                        <Github className="h-4 w-4" />
                      </motion.a>
                    )}
                    {project.live && (
                       <motion.a whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }} href={project.live} target="_blank" rel="noopener" className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <ul className="text-[13px] sm:text-[14px] font-medium leading-[1.6] text-slate-300 space-y-2.5 mb-6 flex-1 pr-2 max-h-[200px] overflow-y-auto custom-scrollbar">
                {project.bullets.map((bullet, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex gap-2"
                  >
                    <span className="text-cyan-500 mt-1 text-xs">▹</span>
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <motion.span
                      whileHover={{ scale: 1.05, y: -2 }}
                      key={t}
                      className="rounded-md bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-slate-300 font-bold border border-white/10 cursor-default hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        }
      />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden z-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-3 text-left max-w-3xl"
        >
          <div className="flex items-center gap-3">
             <div className="h-px w-8 bg-blue-500" />
             <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Selected Works
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
            Featured Projects
          </h2>
          <p className="text-[16px] text-slate-400 font-medium max-w-2xl leading-relaxed">
            A showcase of comprehensive full-stack applications built to solve problems with scalable solutions. Hover over cards to interact.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-10 sm:grid-cols-1 lg:grid-cols-3 perspective-[1000px]">
          {cvProjects.map((repo, i) => (
            <ProjectCard key={repo.id} project={repo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
