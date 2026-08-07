"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { East, North, West } from "@mui/icons-material";
import { useRef } from "react";
import ProjectsCard from "@/components/ProjectCard";
import Contact from "./Contact";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, ArrowLeft02Icon, AiChat02Icon } from '@hugeicons/core-free-icons';
import Link from "next/link";
import { projects } from "@/lib/projects";
import TechIcon from "@/components/TechIcon";

const ExperienceItem = ({ date, title, institution, description, isLast }) => (
  <motion.div variants={fadeUp} className="relative pl-8 md:pl-10 group">
    {/* Timeline Dot */}
    <div className={`absolute left-0 top-2 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full border-2 border-foreground z-10 transition-all ${isLast ? 'bg-primary shadow-[0_0_10px_var(--primary)]' : 'bg-background group-hover:bg-foreground'}`}></div>

    <span className="text-xs md:text-sm font-bold mb-1.5 block uppercase tracking-[0.2em] text-foreground/60">
      {date}
    </span>
    <h3 className="text-xl md:text-2xl font-black text-foreground mb-1">
      {title} <span className="block text-base md:text-lg font-semibold text-foreground/70 mt-0.5">{institution}</span>
    </h3>
    {description ? (
      <p className="text-foreground/75 text-sm md:text-base leading-relaxed max-w-xl font-medium mt-2">
        {description}
      </p>
    ) : null}
  </motion.div>
);


// const ProjectCard = ({ id, projectname, desc, imgurl, preview, code, type, year }) => (
//   <div className="min-w-[85vw] md:min-w-[450px] lg:min-w-[500px] group snap-center">
//     <div className="relative overflow-hidden aspect-[4/5] bg-card mb-6 border border-border/40 rounded-sm">
//       <img
//         alt={projectname}
//         className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700  hover:grayscale-0"
//         src={imgurl}
//         loading="lazy"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
//       <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pr-6">
//         <h3 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 text-foreground uppercase tracking-tighter leading-none">
//           {projectname}
//         </h3>
//         <a className="inline-block py-3 px-6 md:py-4 md:px-10 border-2 border-foreground text-xs md:text-sm font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all bg-background/50 backdrop-blur-md" href={preview} target="_blank" >
//           View Project
//         </a>
//       </div>
//     </div>
//     <div className="flex justify-between text-foreground font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">
//       <span>{type}</span>
//       <span>{year}</span>
//     </div>
//   </div>
// );
const techs = ["REACT", "JAVASCRIPT", "NEXT.JS", "SUPABASE", "TAILWIND", "REACT", "JAVASCRIPT", "NEXT.JS", "SUPABASE", "TAILWIND"];
const social_links = [
  { id: 1, href: "https://github.com/Adebayo-jzs", label: "github", iconPath: <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path> },
  { id: 2, href: "https://linkendin/in/theebayo", label: "LInkedin", iconPath: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path> },
  { id: 3, href: "https://x.com/bytebybayo", label: "x", iconPath: <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path> }
]
const SocialLink = ({ href, iconPath, label }) => (
  <a className="group text-white flex flex-col items-center" href={href} target="_blank" aria-label={label}>
    <svg className="w-12 h-12 md:w-20 md:h-20 transition-transform group-hover:-translate-y-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {iconPath}
    </svg>
    <span className="uppercase block text-center mt-4 md:mt-6 text-[10px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.4em] text-white">
      {label}
    </span>
    {/* <Github/> */}
  </a>
);



const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const staggerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const chipFade = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  },
};

export default function HomePage() {
  const scrollRef = useRef(null);

  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground min-h-screen overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 ">
        {/* <div className="noise-texture"></div> */}
        <section className="min-h-[85svh] sm:min-h-screen flex flex-col justify-center relative grid-bg pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 lg:py-0" id="hero">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="order-1 lg:col-span-7 z-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center gap-3 sm:gap-6"
              >
                <div className="h-px w-6 sm:w-12 md:w-24 bg-foreground"></div>
                <p className="text-xs sm:text-sm md:text-xl text-foreground font-bold font-sans tracking-widest uppercase">SOFTWARE DEVELOPER</p>
              </motion.div>
              
              <div className="overflow-hidden mt-2 sm:mt-4">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="font-outfit leading-[0.85] flex flex-col"
                >
                  <span className="font-black tracking-tighter text-foreground/90 whitespace-nowrap text-[clamp(3.75rem,17vw,5.5rem)] sm:text-7xl md:text-8xl lg:text-9xl xl:text-[135px]">
                    ADEDEJI
                  </span>
                  <span className="font-black tracking-tighter outline-text opacity-50 whitespace-nowrap text-[clamp(3.75rem,17vw,5.5rem)] sm:text-7xl md:text-8xl lg:text-9xl xl:text-[135px] -mt-1 sm:-mt-2 md:-mt-4">
                    SAMOD
                  </span>
                </motion.h1>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="max-w-2xl text-sm sm:text-base md:text-lg mt-4 sm:mt-6 text-foreground/70 font-medium leading-relaxed"
              >
                Year 3 Software Engineering student passionate about creating beautiful, functional websites and web applications using modern technologies.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a
                  href="#contact"
                  className="mt-6 sm:mt-8 group relative inline-flex items-center gap-3 py-3 px-8 sm:py-4 sm:px-10 bg-foreground text-background font-black uppercase tracking-widest overflow-hidden transition-all hover:pr-14 text-xs sm:text-sm"
                >
                  <span className="relative z-10">Hire Me!</span>
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-background/10 opacity-40 group-hover:animate-shine" />
                  <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    →
                  </span>
                </a>
              </motion.div>
            </div>

            <div className="hidden order-2 lg:col-span-5 relative justify-center lg:justify-end py-12 lg:py-0">
              <motion.div
                className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              > 
                <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-110" />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-foreground/5 to-transparent rounded-[40px] rotate-[35deg] flex items-center justify-center border border-foreground/10 backdrop-blur-[2px]"
                  animate={{ rotate: [35, 38, 35] }}
                  transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
                >
                  <motion.div className="w-[85%] h-[85%] border border-foreground/20 -rotate-12 flex items-center justify-center rounded-[30px]"
                    animate={{ rotate: [-12, -15, -12] }}
                    transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
                  >
                    <motion.div
                      className="w-3/4 h-3/4 border-2 border-foreground/30 rotate-45 flex items-center justify-center rounded-2xl relative"
                      animate={{
                        rotate: [45, 52, 45],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 8,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                    >
                      <div className="absolute inset-0 border border-foreground/10 translate-x-4 translate-y-4 rounded-2xl -z-10" />
                      <motion.div
                        className="w-1/2 h-1/2 bg-foreground/5 blur-[60px]"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                {/* The 3D-like technical asset */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <img 
                    alt="Technical Abstract Asset" 
                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-lighten opacity-80 rounded-3xl z-20" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMZ671MaKeJEWJEA19VmKxiwVPnejyNc69XyGHgU8pYdc6bdsmLEzLNjbmVa61i6RsmYgckpmct6PjZNVx3dLyRO5c6x9SXvUsKJ5nBvFODZeHW5zh1kQor1V61yk42Ey8MzFbq5THoZyn0vNdvyo2KspWHvwGwRKetjiEnueqpmjCr7tpcShtAWpdCLbDViCSU2LGbi5hZutOm3lxu_SMKs0-FzUxfkgk9ciLpr1-pDvmhGcM9n6ztjzBjzEQcMobfno9uhE9ltc" 
                  />
                </div>
              </motion.div>
            </div> 
          </div> 
        </section>

        {/* Ask Bayo – Chat CTA */}
        <motion.section 
          className="py-8 md:py-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Link
            href="/chat"
            id="ask-bayo-cta"
            className="group relative block overflow-hidden border border-border/40 hover:border-foreground/30 rounded-2xl transition-all duration-500 hover:shadow-lg hover:shadow-foreground/5 bg-card/40 backdrop-blur-sm"
          >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex items-center justify-between gap-4 sm:gap-6 px-5 py-4 sm:px-8 sm:py-6 md:px-10 md:py-7">
              {/* Left: Icon + Text */}
              <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
                {/* Pulsing avatar container with SVG icon */}
                <div className="relative shrink-0">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform duration-300">
                    <HugeiconsIcon icon={AiChat02Icon} size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  {/* Pulse ring */}
                  <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3 sm:h-3.5 sm:w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-emerald-500 border-2 border-background" />
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-black text-foreground tracking-tight truncate">
                    Ask about Bayo
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 line-clamp-2 sm:line-clamp-1">
                    Chat with an AI that knows my projects, skills & experience
                  </p>
                </div>
              </div>

              {/* Right: Arrow */}
              <div className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-border/50 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background flex items-center justify-center transition-all duration-300">
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={20}
                  className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-0.5 transition-transform duration-300"
                />
              </div>
            </div>
          </Link>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          className="py-20 md:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-4xl md:text-5xl font-display font-black tracking-tight flex items-center gap-4 text-foreground"
          >
            About <span className="text-xs md:text-base font-bold text-foreground/50 tracking-widest uppercase mt-2">/ 01</span>
          </motion.h2>
          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-6"
          >
            <motion.div className="space-y-4" variants={fadeUp}>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                I am a passionate Software Engineering student at Babcock University with a focus on Full Stack Development. My journey in tech began with a curiosity about how websites work, which led me to explore the fascinating world of web development.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                I specialize in both frontend and backend development, continuously exploring new technologies and methodologies to stay at the forefront of web development. My main goal is to become a proficient Software Engineer by consistently exploring how technology can be applied to solve real-world problems in our daily lives.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="py-20 md:py-32 border-t border-border/20" 
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <motion.div 
            variants={fadeUp}
            className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16 gap-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight flex items-center gap-4 text-foreground">
              Projects <span className="text-xs md:text-base font-bold text-foreground/50 tracking-widest uppercase mt-2">/ 02</span>
            </h2>
            <Link 
              href="/projects" 
              className="border-2 border-foreground py-4 px-10 font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all inline-block w-fit"
            >
              All Projects
            </Link>
          </motion.div>

          {/* Grid of Projects with Stagger */}
          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-7 pb-12 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0"
          >
            {projects.slice(0, 6).map((project) => (
              <motion.div 
                key={project.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectsCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience & Education Section */}
        <motion.section 
          className="py-20 md:py-32 border-t font-outfit border-border/20" 
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Experience Column */}
            <div>
              <motion.h2 
                variants={fadeUp}
                className="text-4xl md:text-5xl font-display font-black mb-10 md:mb-16 tracking-tight flex items-center gap-4 text-foreground"
              >
                Experience <span className="text-xs md:text-base font-bold text-foreground/50 tracking-widest uppercase mt-2">/ 03</span>
              </motion.h2>

              <motion.div variants={stagger} className="space-y-12 md:space-y-14 relative">
                <div className="absolute left-[5px] md:left-[6px] top-2 bottom-2 w-px bg-foreground/30"></div>

                <ExperienceItem
                  date="July 2026 - Present"
                  title="FRONTEND INTERN"
                  institution="Manaja Solutions"
                  description="Contributing to the startup's frontend codebase, implementing UI components, optimizing user workflows, and gaining practical product development experience."
                />
                <ExperienceItem
                  date="2024 - Present"
                  title="FULL-STACK & BACKEND ENGINEERING"
                  institution="Projects & Open-Source"
                  description="Architected and shipped 10+ web applications, AI tools (RAG, Gemini, pgvector), secure REST APIs (Node.js/Express/TypeScript, JWT auth/RBAC), and database schemas with PostgreSQL, Supabase, and MongoDB."
                  isLast={true}
                />
              </motion.div>
            </div>

            {/* Education Column */}
            <div id="education">
              <motion.h2 
                variants={fadeUp}
                className="text-4xl md:text-5xl font-display font-black mb-10 md:mb-16 tracking-tight flex items-center gap-4 text-foreground"
              >
                Education <span className="text-xs md:text-base font-bold text-foreground/50 tracking-widest uppercase mt-2">/ 04</span>
              </motion.h2>

              <motion.div variants={stagger} className="space-y-12 md:space-y-14 relative">
                <div className="absolute left-[5px] md:left-[6px] top-2 bottom-2 w-px bg-foreground/30"></div>

                <ExperienceItem
                  date="October 2024 - Present"
                  title="BSC. SOFTWARE ENGINEERING"
                  institution="Babcock University"
                  description="Undergraduate student pursuing a degree in Software Engineering with core focus on algorithms, distributed systems, and modern software architectures."
                />
                <ExperienceItem
                  date="July 2024 - October 2024"
                  title="FRONTEND ENGINEERING"
                  institution="Tech Talent Academy"
                  description="Intensive practical training in responsive web development, modern JavaScript (ES6+), React component architectures, and UI/UX best practices."
                />
                <ExperienceItem
                  date="September 2021 - June 2024"
                  title="SECONDARY EDUCATION"
                  institution="Sacred Heart Catholic College"
                  description="Completed senior secondary school certificate with distinction in science and mathematics subjects."
                  isLast={true}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Tools Section */}
        <motion.section 
          className="pt-20 md:pt-32 pb-12 border-t font-outfit border-border/20" 
          id="tools"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-12">
              <motion.h2 
                variants={fadeUp}
                className="text-4xl md:text-5xl font-display font-black mb-12 md:mb-20 tracking-tight flex items-center gap-4 text-foreground"
              >
                Tools <span className="text-xs md:text-base font-bold text-foreground/50 tracking-widest uppercase mt-2">/ 05</span>
              </motion.h2>
              <motion.div 
                variants={staggerFast}
                className="flex flex-wrap gap-x-6 gap-y-8 md:gap-x-10 md:gap-y-14 items-baseline"
              >
                {[
                  { name: "React", size: "text-4xl md:text-6xl font-black text-foreground", iconSize: "w-8 h-8 md:w-12 md:h-12" },
                  { name: "Node.js", size: "text-2xl md:text-4xl font-black text-foreground/90", iconSize: "w-6 h-6 md:w-8 md:h-8" },
                  { name: "Javascript", size: "text-xl md:text-2xl font-bold text-foreground/80", iconSize: "w-4 h-4 md:w-6 md:h-6" },
                  { name: "Typescript", size: "text-3xl md:text-5xl font-bold text-foreground/80", iconSize: "w-4 h-4 md:w-6 md:h-6" },
                  { name: "Framer", size: "text-2xl md:text-4xl font-black text-foreground/90", iconSize: "w-6 h-6 md:w-8 md:h-8" },
                  { name: "HTML", size: "text-3xl md:text-5xl font-black text-foreground", iconSize: "w-6 h-6 md:w-10 md:h-10" },
                  { name: "NextJS", label: "Next.js", size: "text-2xl md:text-3xl font-bold text-foreground/85", iconSize: "w-6 h-6 md:w-8 md:h-8" },
                  { name: "MongoDB", size: "text-3xl md:text-5xl font-black outline-text", iconSize: "w-6 h-6 md:w-10 md:h-10" },
                  { name: "Supabase", size: "text-xl md:text-2xl font-bold text-foreground/60", iconSize: "w-4 h-4 md:w-6 md:h-6" },
                  { name: "PostgreSQL", size: "text-2xl md:text-3xl font-black text-foreground/90", iconSize: "w-6 h-6 md:w-8 md:h-8" },
                  { name: "Git", size: "text-xl md:text-2xl font-bold text-foreground/70", iconSize: "w-4 h-4 md:w-6 md:h-6" },
                  { name: "Github", size: "text-2xl md:text-4xl font-black text-foreground", iconSize: "w-6 h-6 md:w-10 md:h-10" },
                  { name: "Bootstrap", size: "text-xl md:text-2xl font-bold text-foreground/60", iconSize: "w-4 h-4 md:w-6 md:h-6" },
                  { name: "Tailwind", size: "text-2xl md:text-3xl font-black text-foreground/90", iconSize: "w-6 h-6 md:w-8 md:h-8" },
                ].map((item, idx) => (
                  <motion.span 
                    key={idx}
                    variants={chipFade}
                    whileHover={{ scale: 1.08, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center gap-2 cursor-default transition-colors ${item.size}`}
                  >
                    <TechIcon name={item.name} className={item.iconSize} /> {item.label || item.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="w-full py-10">
            <div className="flex w-full overflow-hidden">
              <div className="flex whitespace-nowrap animate-scroll">
                {[...techs, ...techs].map((tech, i) => (
                  <span key={i} className="text-6xl md:text-8xl font-black mx-8 text-stroke font-sans tracking-tighter">
                    {tech} <span className="text-white/20 ml-8">///</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}