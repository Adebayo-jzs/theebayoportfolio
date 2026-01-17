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
			<section className="min-h-screen flex flex-col justify-center relative grid-bg pt-20 lg:pt-0" id="hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
					<div className="order-2 lg:order-1 ">

					</div>
				</div>
			</section>
		</div>
	);
}