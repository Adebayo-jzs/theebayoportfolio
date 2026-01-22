"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { East, North, West } from "@mui/icons-material";
import { useRef } from "react";
import ProjectsCard from "@/components/ProjectCard";
// import { GitHub } from "@mui/icons-material";
import { Github } from "lucide-react";
import Contact from "./Contact";

const ExperienceItem = ({ date, title, institution, description, isLast }) => (
  <div className="relative pl-8 md:pl-12 group">
    {/* Timeline Dot */}
    <div className={`absolute left-0 top-2 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white z-10 transition-all ${isLast ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-black group-hover:bg-white'}`}></div>

    <span className="text-white text-xs md:text-sm font-bold mb-2 block uppercase tracking-[0.2em] text-white/60">
      {date}
    </span>
    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
      {title} <span className="block text-lg md:text-xl font-medium text-white/70 mt-1">{institution}</span>
    </h3>
    <p className="text-[#E0E0E0] text-base md:text-lg leading-relaxed max-w-xl font-medium">
      {description}
    </p>
  </div>
);

const projects = [
  {
    id: 1,
    projectname: "Textcognito",
    desc: "Textcognito is an anonymous messaging website where users can create unique links to receive anonymous messages from their friends.",
    tools: ["NextJS", "Tailwind", "Vanilla CSS", "Supabase", "Node.js"],
    preview: "https://textcognito.click",
    code: "https://github.com/adebayo-jzs/incognito",
    imgurl: "/textcognito.png",
    type: "Web Application",
    year: 2026,
  },
  {
    id: 2,
    projectname: "Arecnime",
    desc: "Arecnime is an anime discovery and recommendation website designed to reimagine the anime browsing experience for anime lovers",
    tools: ["TAilwind", "CSS", "Javascript"],
    preview: "https://arecnime.vercel.app",
    code: "https://github.com/adebayo-jzs/arecnime",
    imgurl: "/anime.png",
    type: "Website",
    year: 2026,
  },
  {
    id: 3,
    projectname: "Tourtech Admin Dashboard",
    desc: "Overview and analytics dashboard for an industrial visit planning and booking system for a school project",
    tools: ["NextJS", "Tailwind", "Vanilla CSS", "Supabase", "Node.js"],
    preview: "https://tourtech.name.ng/admin",
    code: "https://github.com/adebayo-jzs/tourtech",
    imgurl: "/admindash.jpg",
    type: "Web Application",
    year: 2025,
  },
  {
    id: 4,
    projectname: "Personal Blog",
    desc: "Personal Developer blog built with supabase fully optimisized for Search Engines ",
    tools: ["React", "Tailwind", "Typescript", "Supabse"],
    preview: "https://blog.theebayo.name.ng",
    code: "https://github.com/adebayo-jzs/examhelp",
    imgurl: "/blog.jpg",
    type: "Web Application",
    year: 2025,
  },
  
  {
    id: 5,
    projectname: "Basic Weather App",
    desc: "A basic weather app built with Open Weather API for checking 24 hours weather forecast for various locations ",
    tools: ["HTML", "CSS", "Javascript"],
    preview: "https://adebayo-jzs.github.io/weatherapp",
    code: "https://github.com/adebayo-jzs/examhelp",
    imgurl: "/weatherapp.jpg",
    type: "Website",
    year: 2025,
  },
  
];
const ProjectCard = ({ id, projectname, desc, imgurl, preview, code, type, year }) => (
  <div className="min-w-[85vw] md:min-w-[450px] lg:min-w-[500px] group snap-center">
    <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900 mb-6 border border-white/10 rounded-sm">
      <img
        alt={projectname}
        className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700  hover:grayscale-0"
        src={imgurl}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pr-6">
        <h3 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white uppercase tracking-tighter leading-none">
          {projectname}
        </h3>
        <a className="inline-block py-3 px-6 md:py-4 md:px-10 border-2 border-white text-xs md:text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all bg-black/50 backdrop-blur-md" href={preview} target="_blank" >
          View Project
        </a>
      </div>
    </div>
    <div className="flex justify-between text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">
      <span>{type}</span>
      <span>{year}</span>
    </div>
  </div>
);
const techs = ["REACT", "JAVASCRIPT", "NEXT.JS", "SUPABASE", "TAILWIND", "REACT", "JAVASCRIPT", "NEXT.JS", "SUPABASE", "TAILWIND"];
const social_links = [
  { id: 1, href: "https://github.com/adebayo-jzs", label: "github", iconPath: <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path> },
  { id: 2, href: "https://linkendin/in/theebayo", label: "LInkedin", iconPath: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path> },
  { id: 3, href: "https://x.com/theebayo", label: "x", iconPath: <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path> }
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



export default function HomePage() {
   
  const scrollRef = useRef(null);

 

  return (
    <div className="bg-[#050505] text-white selection:bg-white selection:text-black min-h-screen overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 ">
        <div className="noise-texture"></div>
        <section className="min-h-screen flex flex-col justify-center relative grid-bg pt-20 lg:pt-0" id="hero">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-27 lg:gap-8 items-center">
            <div className="order-1 lg:order-1 lg:col-span-7 z-10">
              {/* <span className="text-white/80 tracking-[0.4em] md:tracking-[0.6em] text-xs md:text-sm font-bold font-sans uppercase mb-4 md:mb-6 block">
                Premium Software Development
            </span> */}
              <div className="mt-8 md:mt-12 flex items-center gap-6">
                <div className="h-px w-12 md:w-24 bg-white"></div>
                <p className="text-sm md:text-xl text-white font-bold font-sans tracking-widest uppercase">JAVASCRIPT DEVELOPER</p>
              </div>
              <h1 className="font-outfit leading-[0.9] flex flex-col gap-2 lg:gap-0">
                <span className="text-6xl md:text-8xl lg:text-[130px] font-black tracking-tighter text-white">ADEDEJI</span>
                <span className="text-6xl md:text-8xl lg:text-[130px] font-black tracking-tighter outline-text">ADEBAYO</span>
              </h1>
              <p className="max-w-2xl text-base md:text-lg  mt-4 text-white/80 ">
                Year 2 Software Engineering student passionate about creating beautiful, functional websites and web applications using modern technologies.
              </p>
              <a
                href="#contact"
                className="mt-3 inline-block py-3 px-6 border-2 border-white text-xs font-black uppercase tracking-widest
                bg-white text-black hover:bg-transparent hover:text-white transition-all"
              >
                Hire Me!
              </a>

            </div>
            <div className="order-2 lg:order-2  lg:col-span-5 relative flex justify-center lg:justify-end">
              <motion.div
                className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]"
                animate={{
                  y: [0, -14, 0],
                  rotate: [50, 40, 35],
                  // rotate: [12, 10, 12],
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl rotate-12 flex items-center justify-center border border-white/30 backdrop-blur-sm"
                  animate={{ rotate: [12, 14, 12] }}
                  transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
                >
                  <motion.div className="w-2/3 h-2/3 border border-white/40 -rotate-12 flex items-center justify-center"
                    animate={{ rotate: [-12, -16, -12] }}
                    transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
                  >
                    <motion.div
                      className="w-1/2 h-1/2 border-2 border-white/60 rotate-45 flex items-center justify-center"
                      animate={{
                        rotate: [45, 50, 45],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 6,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                    >
                      <motion.div
                        className="w-1/3 h-1/3 bg-white/20 blur-xl"
                        animate={{ opacity: [0.4, 0.7, 0.4] }}
                        transition={{
                          duration: 4,
                          ease: "easeInOut",
                          repeat: Infinity,
                        }}
                      ></motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                {/* Placeholder image for stability */}
                <img alt="Abstract Art" className="w-full h-full object-cover mix-blend-lighten opacity-60 rounded-3xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMZ671MaKeJEWJEA19VmKxiwVPnejyNc69XyGHgU8pYdc6bdsmLEzLNjbmVa61i6RsmYgckpmct6PjZNVx3dLyRO5c6x9SXvUsKJ5nBvFODZeHW5zh1kQor1V61yk42Ey8MzFbq5THoZyn0vNdvyo2KspWHvwGwRKetjiEnueqpmjCr7tpcShtAWpdCLbDViCSU2LGbi5hZutOm3lxu_SMKs0-FzUxfkgk9ciLpr1-pDvmhGcM9n6ztjzBjzEQcMobfno9uhE9ltc" />
              </motion.div>
              {/* <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
							<div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl rotate-12 flex items-center justify-center border border-white/30 backdrop-blur-sm">
								<div className="w-2/3 h-2/3 border border-white/40 -rotate-12 flex items-center justify-center">
										<div className="w-1/2 h-1/2 border-2 border-white/60 rotate-45 flex items-center justify-center">
										<div className="w-1/3 h-1/3 bg-white/20 blur-xl"></div>
										</div>
								</div>
							</div>
							// Placeholder image for stability 
							<img alt="Abstract Art" className="w-full h-full object-cover mix-blend-lighten opacity-60 rounded-3xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMZ671MaKeJEWJEA19VmKxiwVPnejyNc69XyGHgU8pYdc6bdsmLEzLNjbmVa61i6RsmYgckpmct6PjZNVx3dLyRO5c6x9SXvUsKJ5nBvFODZeHW5zh1kQor1V61yk42Ey8MzFbq5THoZyn0vNdvyo2KspWHvwGwRKetjiEnueqpmjCr7tpcShtAWpdCLbDViCSU2LGbi5hZutOm3lxu_SMKs0-FzUxfkgk9ciLpr1-pDvmhGcM9n6ztjzBjzEQcMobfno9uhE9ltc" />
						</div> */}
            </div>
          </div>
        </section>
        <section id="about" className="py-20 md:py-32">
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight flex items-center gap-4 text-white">
            About <span className="text-xs md:text-base font-bold text-white/50 tracking-widest uppercase mt-2">/ 01</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-base md:text-lg  mt-4 text-white/80 ">
                I am a passionate Software Engineering student at Babcock University with a focus on Full Stack Development. My journey in tech began with a curiosity about how websites work, which led me to explore the fascinating world of web development.
              </p>
              <p className="text-base md:text-lg  mt-4 text-white/80 ">
                I specialize in both frontend and backend development, continuously exploring new technologies and methodologies to stay at the forefront of web development. My main goal is to become a proficient web developer by consistently exploring how technology can be applied to solve real-world problems in our daily lives.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-5 font-black tracking-tight flex items-center gap-4 text-white">Favourite Tracks</h2>
              <iframe
                title="Spotify Embed: Recommendation Playlist "
                src={`https://open.spotify.com/embed/playlist/21fSTvzLcGkx12unbI2nMe?utm_source=generator&theme=0`}
                width="100%"
                height="100%"
                style={{ minHeight: '360px' }}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
          {/* const playlistId = '21fSTvzLcGkx12unbI2nMe'; */}


        </section>
        <section className="py-20 md:py-32 border-t border-white/10" id="projects">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight flex items-center gap-4 text-white">
              Projects <span className="text-xs md:text-base font-bold text-white/50 tracking-widest uppercase mt-2">/ 02</span>
            </h2>
            {/* Arrows hidden on mobile, user naturally swipes */}
            <div className="hidden sm:flex gap-4">
              <button
                onClick={() =>
                  scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
                }
                className="p-4 md:p-5 border border-white/20 hover:border-white text-white transition-colors">
                <West />
              </button>
              <button
                onClick={() =>
                  scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
                }
                className="p-4 md:p-5 border border-white/20 hover:border-white text-white transition-colors">
                <East />
              </button>
            </div>
          </div>

          {/* Scroll Container with Snap */}
          <div ref={scrollRef} className="flex flex-col sm:flex-row gap-16 sm:gap-10  overflow-x-auto hide-scrollbar pb-12 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
            {projects.map((project) => (
              <ProjectsCard
                key={project.id}
                {...project}
              />
            ))}
            {/* <ProjectCard 
              title="Aether Finance" 
              type="Web Application" 
              year="2024"
              imgUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
            />
            <ProjectCard 
              title="Nova Dashboard" 
              type="SaaS Platform" 
              year="2023"
              imgUrl="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop"
            />
            <ProjectCard 
              title="Lumina System" 
              type="Design System" 
              year="2023"
              imgUrl="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000&auto=format&fit=crop"
            /> */}
          </div>
        </section>
        <section className="pt-20 md:pt-32 pb-12 border-t border-white/10" id="experience">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* <section className="flex flex-col justify-center py-20" id="experience"> */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-display font-black mb-12 md:mb-20 tracking-tight flex items-center gap-4 text-white">
                Education <span className="text-xs md:text-base font-bold text-white/50 tracking-widest uppercase mt-2">/ 03</span>
              </h2>

              <div className="space-y-16 md:space-y-20 relative">
                <div className="absolute left-[5px] md:left-[7px] top-2 bottom-2 w-px bg-white/20"></div>

                <ExperienceItem
                  date="October 2024 - Present"
                  title="BSC. SOFTWARE ENGINEERING"
                  institution="Babcock University"
                  description=""
                  isLast={true}
                />
                <ExperienceItem
                  date="July 2024 - October 2024"
                  title="FRONTEND ENGINEERING"
                  institution="Tech Talent Academy"
                />
                <ExperienceItem
                  date="September 2021 - June 2024"
                  title="SECONDARY EDUCATION"
                  institution="Sacred Heart Catholic College"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-display font-black mb-12 md:mb-20 tracking-tight flex items-center gap-4 text-white">
                Tools <span className="text-xs md:text-base font-bold text-white/50 tracking-widest uppercase mt-2">/ 04</span>
              </h2>
              <div className="flex flex-wrap gap-x-6 gap-y-8 md:gap-x-10 md:gap-y-14 items-baseline">
                <span className="text-4xl md:text-6xl font-black text-white">React</span>
                <span className="text-2xl md:text-4xl font-black text-white/90">Node.js</span>
                <span className="text-xl md:text-2xl font-bold text-white/80">Javascript</span>
                <span className="text-3xl md:text-5xl font-black text-white">HTML</span>
                <span className="text-2xl md:text-3xl font-bold text-white/85">Next.js</span>
                <span className="text-3xl md:text-5xl font-black outline-text">MongoDB</span>
                <span className="text-xl md:text-2xl font-bold text-white/60">Supabase</span>
                <span className="text-2xl md:text-3xl font-black text-white/90">PostgreSQL</span>
                <span className="text-xl md:text-2xl font-bold text-white/70">Git</span>
                <span className="text-2xl md:text-4xl font-black text-white">Github</span>
                <span className="text-xl md:text-2xl font-bold text-white/60">Bootstrap</span>
                <span className="text-2xl md:text-3xl font-black text-white/90">Tailwind</span>
              </div>
            </div>

          </div>
          <div className="w-full py-10  ">
            <div className="flex w-full overflow-hidden">
              <div className="flex whitespace-nowrap animate-scroll">
                {/* We render the list twice to ensure seamless looping */}
                {[...techs, ...techs].map((tech, i) => (
                  <span key={i} className="text-6xl md:text-8xl font-black mx-8 text-stroke font-sans tracking-tighter">
                    {tech} <span className="text-white/20 ml-8">///</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* <section>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        
        <div className="bg-[#111] border border-white/10 p-8 rounded-2xl hover:bg-[#1a1a1a] hover:-translate-y-1 transition-all duration-300 group">
          <h3 className="text-gray-500 text-sm font-mono mb-6 tracking-widest">BASED IN</h3>
          <p className="text-2xl font-bold flex items-center gap-2">
            <span>🇳🇬</span> IBADAN, NG
          </p>
        </div>

         
        <div className="bg-[#111] border border-white/10 p-8 rounded-2xl hover:bg-[#1a1a1a] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h3 className="text-gray-500 text-sm font-mono tracking-widest">STATUS</h3>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <p className="text-2xl font-bold mt-4">AVAILABLE</p>
        </div>

         
        <div className="bg-[#111] border border-white/10 p-8 rounded-2xl hover:bg-[#1a1a1a] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-gray-500 text-sm font-mono mb-6 tracking-widest">EXPERIENCE</h3>
          <p className="text-4xl font-black">3+ YEARS</p>
        </div>

         
        <div className="bg-[#111] border border-white/10 p-8 rounded-2xl hover:bg-[#1a1a1a] hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-gray-500 text-sm font-mono mb-6 tracking-widest">LISTENING TO</h3>
          <div className="flex items-center gap-4">
             
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center animate-spin-slow">
                🎵
            </div>
            <div>
                <p className="font-bold text-lg leading-tight">City Boys</p>
                <p className="text-gray-500 text-sm">Burna Boy</p>
            </div>
          </div>
        </div>

      </div>
      </section> */}
        {/* <section className="pt-20 md:pt-32 flex flex-col items-center" id="contact">
        <div className="w-full mb-20 md:mb-32 ">
           
          <div className="flex flex-wrap justify-center  items-center gap-12 md:gap-32">
            {social_links.map((links) => (
    					<SocialLink
      					key={links.id}
      					{...links}
							/>
						))}
          </div>
        </div>
        
      
        <div className="w-full flex flex-col md:flex-row justify-between items-center py-10 border-t border-white/20 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em] gap-6 md:gap-0">
            <p> &copy; {new Date().getFullYear()} ADEDEJI ADEBAYO</p>
            <div className="flex gap-8 md:gap-12">
              <a className="hover:underline underline-offset-4 transition-all" href="#">PRIVACY</a>
              <a className="hover:underline underline-offset-4 transition-all" href="#">TERMS</a>
            </div>
            <p>fabriqué la nuit</p>
        </div>

      </section> */}
        <Contact />
      </div>


    </div>
  );
}