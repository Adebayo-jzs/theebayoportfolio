"use client"
import React,{useState,useEffect} from "react";

const ProjectCard = ({id,projectname,desc,imgurl,preview,code,type,year}) => (
    <div className="min-w-[85vw] md:min-w-[450px] lg:min-w-[500px] group snap-center">
        <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900 mb-6 border border-white/10 rounded-sm">
      <img 
        alt={projectname} 
        className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" 
        src={imgurl} 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pr-6">
        <h3 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white uppercase tracking-tighter leading-none">
          {projectname}
        </h3>
        <a className="inline-block py-3 px-6 md:py-4 md:px-10 border-2 border-white text-xs md:text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all bg-black/50 backdrop-blur-md" href={preview}>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
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
					<div className="order-2 lg:order-2 lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl rotate-12 flex items-center justify-center border border-white/30 backdrop-blur-sm">
                  <div className="w-2/3 h-2/3 border border-white/40 -rotate-12 flex items-center justify-center">
                     <div className="w-1/2 h-1/2 border-2 border-white/60 rotate-45 flex items-center justify-center">
										 	<div className="w-1/3 h-1/3 bg-white/20 blur-xl"></div>
										 </div>
                  </div>
                </div>
                {/* Placeholder image for stability */}
                <img alt="Abstract Art" className="w-full h-full object-cover mix-blend-lighten opacity-60 rounded-3xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMZ671MaKeJEWJEA19VmKxiwVPnejyNc69XyGHgU8pYdc6bdsmLEzLNjbmVa61i6RsmYgckpmct6PjZNVx3dLyRO5c6x9SXvUsKJ5nBvFODZeHW5zh1kQor1V61yk42Ey8MzFbq5THoZyn0vNdvyo2KspWHvwGwRKetjiEnueqpmjCr7tpcShtAWpdCLbDViCSU2LGbi5hZutOm3lxu_SMKs0-FzUxfkgk9ciLpr1-pDvmhGcM9n6ztjzBjzEQcMobfno9uhE9ltc" />
              </div>
          </div>
				</div>
			</section>

		</div>
		</div>
	);
}