"use client"
import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";
import { East, North, West} from "@mui/icons-material";
import { useRef } from "react";
import ProjectsCard from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    projectname: "Textcognito",
    desc:"Textcognito is an anonymous messaging website where users can create unique links to receive anonymous messages from their friends.",
    tools: ["NextJS", "Tailwind","Vanilla CSS","Supabase","Node.js"],
    preview: "https://textcognito.click",
    code: "https://github.com/adebayo-jzs/incognito",
    imgurl:"/textcognito.png",
		type:"Web Application",
		year:2026,
  },
  {
    id: 2,
    projectname: "Tourtech Admin Dashboard",
    desc:"Overview and analytics dashboard for an industrial visit planning and booking system for a school project",
    tools: ["NextJS", "Tailwind","Vanilla CSS","Supabase","Node.js"],
    preview: "https://tourtech.name.ng/admin",
    code: "https://github.com/adebayo-jzs/tourtech",
    imgurl:"/admindash.jpg",
		type:"Web Application",
		year:2025,
  },
  {
    id: 3,
    projectname: "Personal Blog",
    desc:"Personal Developer blog built with supabase fully optimisized for Search Engines ",
    tools: ["React", "Tailwind", "Typescript","Supabse"],
    preview: "https://blog.theebayo.name.ng",
    code: "https://github.com/adebayo-jzs/examhelp",
    imgurl:"/blog.jpg",
		type:"Web Application",
		year:2025,
  },
  {
    id: 4,
    projectname: "Basic Weather App",
    desc:"A basic weather app built with Open Weather API for checking 24 hours weather forecast for various locations ",
    tools: ["HTML", "CSS", "Javascript"],
    preview: "https://adebayo-jzs.github.io/weatherapp",
    code: "https://github.com/adebayo-jzs/examhelp",
    imgurl:"/weatherapp.jpg",
		type:"Web Application",
		year:2025,
  },
];
const ProjectCard = ({id,projectname,desc,imgurl,preview,code,type,year}) => (
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

const SocialLink = ({ href, iconPath, label }) => (
  <a className="group text-white flex flex-col items-center" href={href} aria-label={label}>
    <svg className="w-12 h-12 md:w-20 md:h-20 transition-transform group-hover:-translate-y-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {iconPath}
    </svg>
    <span className="block text-center mt-4 md:mt-6 text-[10px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.4em] text-white">
      {label}
    </span>
  </a>
);

      

export default function HomePage() {
  const [scrollProgress,setScrollProgress] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
		const handleScroll = () => {
			const totalScroll = document.documentElement.scrollTop;
			const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const scroll = `${totalScroll / windowHeight}`;
			setScrollProgress(Number(scroll)); 
		}
		window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

	return (
		<div className="bg-[#050505] text-white selection:bg-white selection:text-black min-h-screen overflow-x-hidden">
		<div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 pb-32">
			<div className="noise-texture"></div>
			<section className="min-h-screen flex flex-col justify-center relative grid-bg pt-20 lg:pt-0" id="hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-27 lg:gap-8 items-center">
					<div className="order-1 lg:order-1 lg:col-span-7 z-10">
						<span className="text-white/80 tracking-[0.4em] md:tracking-[0.6em] text-xs md:text-sm font-bold font-sans uppercase mb-4 md:mb-6 block">
                Premium Software Engineering
            </span>
						<h1 className="font-outfit leading-[0.9] flex flex-col gap-2 lg:gap-0">
							<span className="text-6xl md:text-8xl lg:text-[130px] font-black tracking-tighter text-white">ADEDEJI</span>
							<span className="text-6xl md:text-8xl lg:text-[130px] font-black tracking-tighter outline-text">ADEBAYO</span>
						</h1>
						<div className="mt-8 md:mt-12 flex items-center gap-6">
							<div className="h-px w-12 md:w-24 bg-white"></div>
							<p className="text-sm md:text-xl text-white font-bold font-sans tracking-widest uppercase">Senior Fullstack Architect</p>
						</div>
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
			<section className="flex flex-col justify-center py-20" id="experience">
				{/* <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-12 md:mb-20 tracking-tight flex items-center gap-4 text-white">
              Experience <span className="text-xs md:text-base font-bold text-white/50 tracking-widest uppercase mt-2">/ 01</span>
            </h2>
            
            <div className="space-y-16 md:space-y-20 relative"> 
              <div className="absolute left-[5px] md:left-[7px] top-2 bottom-2 w-px bg-white/20"></div>
              
              <ExperienceItem 
                date="January 2024 - Present" 
                title="Senior Developer" 
                company="Horizon Tech"
                description="Architecting scalable microservices and leading a cross-functional team of 12 engineers in building next-gen fintech solutions."
                isLast={true}
              />
              <ExperienceItem 
                date="May 2022 - Dec 2023" 
                title="Lead Frontend Engineer" 
                company="Nexus Systems"
                description="Pioneered the migration of legacy systems to a unified Design System using React and Tailwind, improving deployment speed by 40%."
              />
              <ExperienceItem 
                date="Oct 2020 - April 2022" 
                title="Fullstack Developer" 
                company="StartUp Inc"
                description="Developed high-performance APIs and interactive dashboards for data-driven analytics platforms."
              />
            </div>
          </div> */}
          
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-12 md:mb-20 tracking-tight flex items-center gap-4 text-white">
              Tools <span className="text-xs md:text-base font-bold text-white/50 tracking-widest uppercase mt-2">/ 02</span>
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-8 md:gap-x-10 md:gap-y-14 items-baseline">
              <span className="text-4xl md:text-6xl font-black text-white">React</span>
              <span className="text-2xl md:text-4xl font-black text-white/90">Node.js</span>
              <span className="text-xl md:text-2xl font-bold text-white/80">Javascript</span>
              {/* <span className="text-3xl md:text-5xl font-black text-white">AWS</span> */}
              <span className="text-2xl md:text-3xl font-bold text-white/85">Next.js</span>
              <span className="text-3xl md:text-5xl font-black outline-text">MongoDB</span>
              <span className="text-xl md:text-2xl font-bold text-white/70">Git</span>
              <span className="text-2xl md:text-4xl font-black text-white">Github</span>
              <span className="text-xl md:text-2xl font-bold text-white/60">Supabase</span>
              <span className="text-2xl md:text-3xl font-black text-white/90">Tailwind</span>
              <span className="text-2xl md:text-3xl font-black text-white/90">Bootstrap</span>
            </div>
          </div>
			</section>
			<section className="py-20 md:py-32 border-t border-white/10" id="projects">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight flex items-center gap-4 text-white">
              Projects <span className="text-xs md:text-base font-bold text-white/50 tracking-widest uppercase mt-2">/ 03</span>
            </h2>
            {/* Arrows hidden on mobile, user naturally swipes */}
            <div className="flex gap-4">
              <button 
                onClick={() =>
                  scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
                }
                className="p-4 md:p-5 border border-white/20 hover:border-white text-white transition-colors">
                <West/>
              </button>
              <button 
                onClick={() =>
                  scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
                }
                className="p-4 md:p-5 border border-white/20 hover:border-white text-white transition-colors">
                <East/>
              </button>
            </div>
          </div>
          
          {/* Scroll Container with Snap */}
          <div ref={scrollRef} className="flex gap-6 md:gap-10 overflow-x-auto hide-scrollbar pb-12 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
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
		</div>

      <div className="block fixed bottom-8 right-3 mix-blend-difference z-50">
        <div className="flex flex-col items-center gap-6">
          <span className="[writing-mode:vertical-rl] text-[11px] font-black tracking-[0.6em] text-white uppercase">SCROLL TO EXPLORE</span>
          <div className="h-16 w-[2px] bg-white/20 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-full bg-white transition-all duration-100 ease-out" 
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>
        </div>
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="border rounded-full p-2 mt-3"
        >
          <North/>
        </button>

      </div>
		</div>
	);
}