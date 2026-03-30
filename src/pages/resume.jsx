import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import LaserFlow from "../components/ui/LaserFlow";

const contacts = [
  {
    label: "Email",
    value: "parnaghosh628@gmail.com",
    href: "mailto:parnaghosh628@gmail.com",
  },
  { label: "Mobile", value: "+91 9163878703", href: "tel:+919163878703" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/parnaghosh324",
    href: "https://www.linkedin.com/in/parnaghosh324/",
  },
  {
    label: "GitHub",
    value: "github.com/Parna324",
    href: "https://github.com/Parna324",
  },
];

const skills = {
  Languages: ["C++", "Python", "JavaScript", "Java"],
  Frameworks: ["React.js", "Express.js", "Node.js", "Tailwind CSS"],
  "Database & Tools": ["MySQL", "MongoDB", "Git/GitHub"],
  "Soft Skills": [
    "Problem Solving",
    "Team Collaboration",
    "Adaptability",
    "Leadership",
    "Ownership",
  ],
};

const projects = [
  {
    name: "Heritage of India – Cultural Web Platform",
    period: "Sep' 25 – Oct' 25",
    links: { GitHub: "https://github.com/Parna324/indian-culture-main" },
    points: [
      "Crafted an interactive digital platform highlighting Indian monuments, traditions, and historical narratives through structured content organization.",
      "Integrated server-side logic using PHP to enable dynamic data retrieval and content administration.",
      "Produced a visually consistent and mobile-friendly interface with Tailwind CSS, enhancing accessibility across screen sizes.",
      "Restructured page layout and media handling to accelerate loading speed and improve navigation efficiency.",
    ],
    tech: ["HTML", "Tailwind CSS", "PHP"],
  },
  {
    name: "AI-Powered Virtual Bartender",
    period: "Nov' 25 – Dec' 25",
    links: {
      GitHub: "https://github.com/Parna324",
      Live: "https://virtual-bartender-sandy.vercel.app/",
    },
    points: [
      "Designed an intelligent beverage suggestion platform that recommends drinks according to user mood and preference inputs.",
      "Constructed reusable UI components using React.js, improving maintainability and interface responsiveness.",
      "Established backend services using Node.js and Express.js to process requests and deliver personalized drink results.",
      "Coordinated client-server communication by implementing efficient state handling and structured API interaction.",
      "Delivered device-compatible layouts using Tailwind CSS, ensuring seamless usability across multiple form factors.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
  },
  {
    name: "E-Learning Platform",
    period: "Mar' 25 – Apr' 25",
    links: {
      GitHub: "https://github.com/Parna324",
      Live: "https://github.com/Parna324",
    },
    points: [
      "Engineered a scalable learning management solution supporting course exploration, user registration, and structured content delivery.",
      "Organized application architecture using Next.js, enabling optimized routing, metadata configuration, and reusable layout modules.",
      "Assembled adaptive interface components using Tailwind CSS, improving user engagement and accessibility.",
      "Strengthened code reliability through TypeScript integration, ES-Lint configuration, and Post-CSS optimization.",
      "Maintained collaborative version control through Git, contributing 40+ commits during team-based development.",
    ],
    tech: ["Next.js", "React.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
];

const training = [
  {
    name: "Data Structure Algorithm in Java",
    sub: "Certificate",
    points: [
      "Implemented fundamental data structures and algorithms in Java to build strong problem-solving foundations.",
      "Solved coding challenges focusing on time and space complexity optimization.",
    ],
  },
];

const certificates = [
  "Master AWS Essentials: A Complete Beginner Guide - Udemy Aug' 25",
  "Web development with React.js - Udemy Oct' 24",
  "Backend REST API with Node.js - Udemy Nov' 24",
];

const achievements = [
  "Built 3+ full-stack projects using modern technologies (React, Next.js, Node.js, PHP). Jan' 25",
  "Completed NPTEL certifications with good scores Dec' 25",
  "Solved 250+ LeetCode questions",
];

const education = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    detail: "CGPA: 8.51",
    period: "Aug' 23 - Present",
  },
  {
    institution: "North Point School",
    location: "Kolkata, West Bengal",
    degree: "Intermediate",
    detail: "Percentage: 63.6%",
    period: "Apr' 21 – Mar' 23",
  },
  {
    institution: "North Point School",
    location: "Kolkata, West Bengal",
    degree: "Matriculation",
    detail: "Percentage: 89.6%",
    period: "Apr' 20 – Mar' 21",
  },
];

function Section({ title, children, id }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function ResumeCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function Resume() {
  const pdfUrl = "/parna-resume.pdf";

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LaserFlow
          color="#3B82F6"
          fogIntensity={0.35}
          wispIntensity={4}
          flowSpeed={0.3}
        />
        <div className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(56,189,248,0.4),transparent_65%)] blur-3xl opacity-80" />
        <div className="absolute bottom-[-120px] right-[-60px] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_70%_100%,rgba(129,140,248,0.45),transparent_70%)] blur-3xl opacity-80" />
      </div>
      <div className="fixed inset-0 z-10 bg-gradient-to-b from-black/85 via-black/80 to-black/90" />

      <div className="relative z-20">
        <Navbar />

        <main className="mx-auto max-w-4xl px-4 pt-28 pb-20 sm:px-6">
          {/* Hero + Download */}
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Link
                to="/"
                className="mb-4 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-sky-300 transition-colors"
              >
                <span>←</span> Back to home
              </Link>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                  Parna Ghosh
                </span>
              </h1>
              <p className="mt-1 text-gray-300/90">
                Computer Science & Engineering · Full Stack Developer
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={pdfUrl}
                download="Parna-Ghosh-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_24px_rgba(56,189,248,0.6)] transition-all hover:shadow-[0_0_36px_rgba(56,189,248,0.8)] hover:-translate-y-0.5"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download PDF
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 backdrop-blur-xl transition-all hover:bg-white/10 hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Open in new tab
              </a>
            </div>
          </div>

          {/* Contact strip */}
          <ResumeCard className="mb-10">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {contacts.map(({ label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-300 hover:text-sky-300 transition-colors"
                >
                  <span className="text-gray-500">{label}:</span> {value}
                </a>
              ))}
            </div>
          </ResumeCard>

          <div className="space-y-10">
            <Section title="Skills">
              <ResumeCard>
                <div className="grid gap-4 sm:grid-cols-2">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <p className="text-xs font-medium uppercase tracking-wider text-sky-200/90 mb-2">
                        {category}
                      </p>
                      <p className="text-sm text-gray-200/90">
                        {items.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </ResumeCard>
            </Section>

            <Section title="Projects">
              <div className="space-y-6">
                {projects.map((proj) => (
                  <ResumeCard key={proj.name}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                      <h3 className="text-lg font-semibold text-white">
                        {proj.name}
                      </h3>
                      <span className="text-xs text-gray-400">
                        {proj.period}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {Object.entries(proj.links).map(([label, url]) => (
                        <a
                          key={label}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-sky-300 hover:underline"
                        >
                          {label} →
                        </a>
                      ))}
                    </div>
                    <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-200/90 mb-3">
                      {proj.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                    <p className="text-xs text-gray-400">
                      Tech: {proj.tech.join(", ")}
                    </p>
                  </ResumeCard>
                ))}
              </div>
            </Section>

            <Section title="Training">
              {training.map((t) => (
                <ResumeCard key={t.name}>
                  <h3 className="font-semibold text-white">{t.name}</h3>
                  <p className="text-xs text-sky-200/80 mb-2">{t.sub}</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-200/90">
                    {t.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </ResumeCard>
              ))}
            </Section>

            <Section title="Certificates">
              <ResumeCard>
                <ul className="space-y-2 text-sm text-gray-200/90">
                  {certificates.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sky-400 mt-0.5">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </ResumeCard>
            </Section>

            <Section title="Achievements">
              <ResumeCard>
                <ul className="space-y-2 text-sm text-gray-200/90">
                  {achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">•</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </ResumeCard>
            </Section>

            <Section title="Education">
              <div className="space-y-4">
                {education.map((e) => (
                  <ResumeCard key={`${e.institution}-${e.degree}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-semibold text-white">
                        {e.institution}
                      </h3>
                      <span className="text-xs text-gray-400">{e.period}</span>
                    </div>
                    <p className="text-sm text-gray-400">{e.location}</p>
                    <p className="text-sm text-gray-200/90 mt-1">
                      {e.degree} · {e.detail}
                    </p>
                  </ResumeCard>
                ))}
              </div>
            </Section>
          </div>

          {/* Bottom download CTA */}
          <div className="mt-14 rounded-2xl border border-sky-400/20 bg-sky-500/10 p-6 text-center backdrop-blur-xl">
            <p className="text-sm text-gray-200/90 mb-4">
              Save or share this resume
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={pdfUrl}
                download="Parna-Ghosh-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500/30 px-4 py-2 text-sm font-medium text-sky-200 hover:bg-sky-500/40 transition-colors"
              >
                Download PDF
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-white/10 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
