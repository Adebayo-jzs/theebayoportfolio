// import React from 'react';

// const NewPortfolio = () => {
//   return (
//     <div className="bg-[#000000] text-white font-sans selection:bg-white selection:text-black min-h-screen">
//       {/* NOTE: In a real React app, the <link> tags for fonts 
//         should usually go in your index.html or proper <Head> component.
//       */}
//       <style>{`
//         .noise-texture {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             pointer-events: none;
//             opacity: 0.05;
//             z-index: 9999;
//             background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuBqiCdnVYnvv5wrofiFZjd9hBYXLk0IFw-MP_d1qTnnA4WQMm4rq2XF3A2uUKEBNkeuZuMpCRUHS3UHh29apNigxuHnMTsG7STM_u1oV0wrTBqNXklpdqmfn1t1KryYiZmKIrfEKK85vDo0rCQzGVGbRTx2MtXkixGC2CckAcZt-CQbsuAWtP3x7_zJJje0p0_HaerSGH1Y5grPKKe7BDX_WZWQU-D5EwCVfXPvbIAPYO6VoQuAwXHE3oRrPafYqQJREs0LAq6gl9k);
//         }
//         .outline-text {
//             -webkit-text-stroke: 2px #ffffff;
//             color: transparent;
//             text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
//         }
//         .grid-bg {
//             background-image: linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), 
//                               linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
//             background-size: 60px 60px;
//         }
//         .glass-card {
//             background: rgba(255, 255, 255, 0.05);
//             backdrop-filter: blur(12px);
//             border: 1px solid rgba(255, 255, 255, 0.2);
//         }
//         .hide-scrollbar::-webkit-scrollbar {
//             display: none;
//         }
//       `}</style>

//       <div className="noise-texture"></div>

//       <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-8 py-8 px-4 glass-card rounded-full">
//         <a className="group relative flex items-center justify-center" href="#hero">
//           <span className="material-symbols-outlined text-white/70 group-hover:text-white transition-colors">home</span>
//           <span className="absolute left-14 opacity-0 group-hover:opacity-100 bg-white text-black text-xs font-bold px-2 py-1 rounded whitespace-nowrap transition-all">Home</span>
//         </a>
//         <a className="group relative flex items-center justify-center" href="#experience">
//           <span className="material-symbols-outlined text-white/70 group-hover:text-white transition-colors">history_edu</span>
//           <span className="absolute left-14 opacity-0 group-hover:opacity-100 bg-white text-black text-xs font-bold px-2 py-1 rounded whitespace-nowrap transition-all">Experience</span>
//         </a>
//         <a className="group relative flex items-center justify-center" href="#projects">
//           <span className="material-symbols-outlined text-white/70 group-hover:text-white transition-colors">folder_open</span>
//           <span className="absolute left-14 opacity-0 group-hover:opacity-100 bg-white text-black text-xs font-bold px-2 py-1 rounded whitespace-nowrap transition-all">Projects</span>
//         </a>
//         <a className="group relative flex items-center justify-center" href="#contact">
//           <span className="material-symbols-outlined text-white/70 group-hover:text-white transition-colors">alternate_email</span>
//           <span className="absolute left-14 opacity-0 group-hover:opacity-100 bg-white text-black text-xs font-bold px-2 py-1 rounded whitespace-nowrap transition-all">Contact</span>
//         </a>
//       </nav>

//       <div className="fixed top-8 left-8 z-50">
//         <div className="w-12 h-12 border-2 border-white flex items-center justify-center font-display font-black text-2xl tracking-tighter bg-black">
//           A
//         </div>
//       </div>

//       <main className="max-w-[1600px] mx-auto px-12 lg:px-24">
//         {/* HERO SECTION */}
//         <section className="min-h-screen flex flex-col justify-center relative grid-bg" id="hero">
//           <div className="grid grid-cols-12 gap-8 items-center">
//             <div className="col-span-7 z-10">
//               <span className="text-white tracking-[0.6em] text-sm font-bold uppercase mb-6 block">Premium Software Engineering</span>
//               <h1 className="font-display leading-[0.85] flex flex-col">
//                 <span className="text-7xl lg:text-[140px] font-black tracking-tighter text-white">ADEDEJI</span>
//                 <span className="text-7xl lg:text-[140px] font-black tracking-tighter outline-text">ADEBAYO</span>
//               </h1>
//               <div className="mt-12 flex items-center gap-6">
//                 <div className="h-px w-24 bg-white"></div>
//                 <p className="text-xl text-white font-bold tracking-widest uppercase">Senior Fullstack Architect</p>
//               </div>
//             </div>
//             <div className="col-span-5 relative flex justify-center">
//               <div className="relative w-full aspect-square max-w-md">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl rotate-12 flex items-center justify-center border-2 border-white/30 backdrop-blur-sm">
//                   <div className="w-2/3 h-2/3 border-2 border-white/40 -rotate-12 flex items-center justify-center">
//                     <div className="w-1/2 h-1/2 border-2 border-white/60 rotate-45 flex items-center justify-center">
//                       <div className="w-1/3 h-1/3 bg-white/20 blur-xl"></div>
//                     </div>
//                   </div>
//                 </div>
//                 <img alt="Abstract glass structure" className="w-full h-full object-cover mix-blend-screen opacity-80 rounded-3xl scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMZ671MaKeJEWJEA19VmKxiwVPnejyNc69XyGHgU8pYdc6bdsmLEzLNjbmVa61i6RsmYgckpmct6PjZNVx3dLyRO5c6x9SXvUsKJ5nBvFODZeHW5zh1kQor1V61yk42Ey8MzFbq5THoZyn0vNdvyo2KspWHvwGwRKetjiEnueqpmjCr7tpcShtAWpdCLbDViCSU2LGbi5hZutOm3lxu_SMKs0-FzUxfkgk9ciLpr1-pDvmhGcM9n6ztjzBjzEQcMobfno9uhE9ltc" />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* EXPERIENCE SECTION */}
//         <section className="py-32 grid grid-cols-12 gap-24 border-t border-white/20" id="experience">
//           <div className="col-span-12 lg:col-span-7">
//             <h2 className="text-5xl font-display font-black mb-20 tracking-tight flex items-center gap-4 text-white">
//               Experience <span className="text-base font-bold text-white tracking-widest uppercase mt-2">/ 01</span>
//             </h2>
//             <div className="space-y-20 relative">
//               <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/30"></div>
              
//               <div className="relative pl-12 group">
//                 <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-white bg-white z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
//                 <span className="text-white text-sm font-bold mb-3 block uppercase tracking-[0.2em]">January 2024 - Present</span>
//                 <h3 className="text-3xl font-black text-white mb-3">Senior Developer at Horizon Tech</h3>
//                 <p className="text-[#E0E0E0] text-lg leading-relaxed max-w-xl font-medium">Architecting scalable microservices and leading a cross-functional team of 12 engineers in building next-gen fintech solutions.</p>
//               </div>

//               <div className="relative pl-12 group">
//                 <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-white bg-black z-10 group-hover:bg-white transition-all"></div>
//                 <span className="text-white text-sm font-bold mb-3 block uppercase tracking-[0.2em]">May 2022 - Dec 2023</span>
//                 <h3 className="text-3xl font-black text-white mb-3">Lead Frontend Engineer</h3>
//                 <p className="text-[#E0E0E0] text-lg leading-relaxed max-w-xl font-medium">Pioneered the migration of legacy systems to a unified Design System using React and Tailwind, improving deployment speed by 40%.</p>
//               </div>

//               <div className="relative pl-12 group">
//                 <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-white bg-black z-10 group-hover:bg-white transition-all"></div>
//                 <span className="text-white text-sm font-bold mb-3 block uppercase tracking-[0.2em]">Oct 2020 - April 2022</span>
//                 <h3 className="text-3xl font-black text-white mb-3">Fullstack Developer</h3>
//                 <p className="text-[#E0E0E0] text-lg leading-relaxed max-w-xl font-medium">Developed high-performance APIs and interactive dashboards for data-driven analytics platforms.</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="col-span-12 lg:col-span-5">
//             <h2 className="text-5xl font-display font-black mb-20 tracking-tight flex items-center gap-4 text-white">
//               Expertise <span className="text-base font-bold text-white tracking-widest uppercase mt-2">/ 02</span>
//             </h2>
//             <div className="flex flex-wrap gap-x-10 gap-y-14 items-baseline">
//               <span className="text-6xl font-black text-white">React</span>
//               <span className="text-4xl font-black text-white/90">Node.js</span>
//               <span className="text-2xl font-bold text-white/80">TypeScript</span>
//               <span className="text-5xl font-black text-white shadow-sm">AWS</span>
//               <span className="text-3xl font-bold text-white/85">Next.js</span>
//               <span className="text-5xl font-black outline-text">Python</span>
//               <span className="text-2xl font-bold text-white/70">Docker</span>
//               <span className="text-4xl font-black text-white">Design Systems</span>
//               <span className="text-2xl font-bold text-white/60">GraphQL</span>
//               <span className="text-3xl font-black text-white/90">Tailwind</span>
//               <span className="text-5xl font-black text-white">PostgreSQL</span>
//             </div>
//           </div>
//         </section>

//         {/* PROJECTS SECTION */}
//         <section className="py-32 border-t border-white/20" id="projects">
//           <div className="flex justify-between items-end mb-16">
//             <h2 className="text-5xl font-display font-black tracking-tight flex items-center gap-4 text-white">
//               Selected Work <span className="text-base font-bold text-white tracking-widest uppercase mt-2">/ 03</span>
//             </h2>
//             <div className="flex gap-4">
//               <button className="p-5 border-2 border-white/20 hover:border-white text-white transition-colors">
//                 <span className="material-symbols-outlined">west</span>
//               </button>
//               <button className="p-5 border-2 border-white/20 hover:border-white text-white transition-colors">
//                 <span className="material-symbols-outlined">east</span>
//               </button>
//             </div>
//           </div>
//           <div className="flex gap-10 overflow-x-auto hide-scrollbar pb-12 snap-x">
//             {/* Project 1 */}
//             <div className="min-w-[500px] group snap-start">
//               <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900 mb-6 border border-white/10">
//                 <img alt="Project Mockup" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_t4RpzInk8LU-pA-mA-X6uk9ucoO64QF-f9BIIaenCp6UvwZUPR3C09bFLGWm5EBmUXSbVmb1U6A-FcN5U0nCsM0MNq2RxEIwgoJoMxhvv_7XukjGssm-wqZss__N7wCiRQr_oipMDKuC9VCXq_qJvh9QkJbQdXWu1uysqkDgiCno-HNR2oKN7R0OGkvAmWkyPRaNvxZ0ZcSIefTZmRK09YxewikMyV5ibQVxGQRAhrQTWrpWY0FKbOeKZPHsH3XUw-YFjyjub1U" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
//                 <div className="absolute bottom-10 left-10">
//                   <h3 className="text-4xl font-black mb-6 text-white uppercase tracking-tighter">Aether Finance</h3>
//                   <a className="inline-block py-4 px-10 border-2 border-white text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all" href="#">
//                     View Project
//                   </a>
//                 </div>
//               </div>
//               <div className="flex justify-between text-white font-bold text-xs uppercase tracking-[0.3em]">
//                 <span>Web Application</span>
//                 <span>2024</span>
//               </div>
//             </div>
            
//             {/* Project 2 */}
//             <div className="min-w-[500px] group snap-start">
//               <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900 mb-6 border border-white/10">
//                 <img alt="Project Mockup" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1sfaWzDvRbPOwF5QKZw4i4Ak2XBUsGNKqlKi5DbOe-utakOSrqQSi74ljk8ScTiMJnga7nuFVZtW_f8w85JRuLq0Z8LRwJIaJ-IeIeRn3tSr85XPTT7tao7nuP41Ys-ysqhWY5pIu3GBNtIaIFk2F12MB4H8_8pjQMfjnF42qyipS-zq0YdmXpx3G-XHATgiLuCgjPka-r6Uev5Vk96IeRGMJeAyWCti_XR2Mty5cCVk36_CsT5Czf0NTim6A-H645jE6Oc4IaYE" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
//                 <div className="absolute bottom-10 left-10">
//                   <h3 className="text-4xl font-black mb-6 text-white uppercase tracking-tighter">Nova Dashboard</h3>
//                   <a className="inline-block py-4 px-10 border-2 border-white text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all" href="#">
//                     View Project
//                   </a>
//                 </div>
//               </div>
//               <div className="flex justify-between text-white font-bold text-xs uppercase tracking-[0.3em]">
//                 <span>SaaS Platform</span>
//                 <span>2023</span>
//               </div>
//             </div>

//             {/* Project 3 */}
//             <div className="min-w-[500px] group snap-start">
//               <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900 mb-6 border border-white/10">
//                 <img alt="Project Mockup" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHL--zIvwW6EbHK_yngTIbr-3MGS7zUD5Blc-6pTSx3e1LiGfuDKiEZ__BdIy4aVp5f3c58EptWjTLR7SgMulQPtIsgaUGfkXuKq0VMICqJ-v-BCUJPKTSbUz9njLHta-xUAFDXuOg7mneE5cCYHg907oVW4JPd7dcff9u9igsRKtLKEGy4-bDcC79ulgNcqbWRlCBzaQ22sb8iStljmOjWf7yieigMhKFjsk4KBOapTDKlDXBk-FyqTzb_06Wp7Gj_RAtWOH-r7c" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
//                 <div className="absolute bottom-10 left-10">
//                   <h3 className="text-4xl font-black mb-6 text-white uppercase tracking-tighter">Lumina System</h3>
//                   <a className="inline-block py-4 px-10 border-2 border-white text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all" href="#">
//                     View Project
//                   </a>
//                 </div>
//               </div>
//               <div className="flex justify-between text-white font-bold text-xs uppercase tracking-[0.3em]">
//                 <span>Design System</span>
//                 <span>2023</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CONTACT SECTION */}
//         <section className="py-32 flex flex-col items-center" id="contact">
//           <div className="w-full mb-32">
//             <h2 className="text-[14vw] font-display font-black leading-none text-center whitespace-nowrap overflow-hidden select-none mb-20 text-white">
//               <span className="inline-block transition-transform hover:scale-105 duration-500">LET'S BUILD</span>
//             </h2>
//             <div className="flex justify-center items-center gap-16 md:gap-32">
//               <a className="group text-white" href="#">
//                 <svg className="w-20 h-20 transition-transform group-hover:-translate-y-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
//                 </svg>
//                 <span className="block text-center mt-6 text-sm font-black tracking-[0.4em] text-white">GITHUB</span>
//               </a>
//               <a className="group text-white" href="#">
//                 <svg className="w-20 h-20 transition-transform group-hover:-translate-y-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
//                 </svg>
//                 <span className="block text-center mt-6 text-sm font-black tracking-[0.4em] text-white">LINKEDIN</span>
//               </a>
//               <a className="group text-white" href="#">
//                 <svg className="w-20 h-20 transition-transform group-hover:-translate-y-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
//                 </svg>
//                 <span className="block text-center mt-6 text-sm font-black tracking-[0.4em] text-white">X / TWITTER</span>
//               </a>
//             </div>
//           </div>
//           <div className="w-full flex justify-between items-center py-10 border-t border-white/20 text-white text-xs font-black tracking-[0.4em]">
//             <p>© 2024 ADEDEJI ADEBAYO</p>
//             <div className="flex gap-12">
//               <a className="hover:underline underline-offset-4 transition-all" href="#">PRIVACY POLICY</a>
//               <a className="hover:underline underline-offset-4 transition-all" href="#">TERMS</a>
//             </div>
//             <p>CRAFTED IN NOIR</p>
//           </div>
//         </section>
//       </main>
      
//       <div className="fixed bottom-8 right-8 mix-blend-difference z-50">
//         <div className="flex flex-col items-center gap-6">
//           <span className="[writing-mode:vertical-rl] text-[11px] font-black tracking-[0.6em] text-white uppercase">SCROLL TO EXPLORE</span>
//           <div className="h-16 w-[2px] bg-white/40 relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-pulse"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewPortfolio;


"use client"
import React, { useState, useEffect } from 'react';
// --- Sub-Components for Optimization ---

const NavItem = ({ href, icon, label }) => (
  <a className="group relative flex items-center justify-center p-2" href={href}>
    <span className="material-symbols-outlined text-white/70 group-hover:text-white transition-colors text-2xl md:text-3xl">
      {icon}
    </span>
    {/* Tooltip - Hidden on mobile, visible on desktop hover */}
    <span className="hidden lg:block absolute left-14 opacity-0 group-hover:opacity-100 bg-white text-black text-xs font-bold px-2 py-1 rounded whitespace-nowrap transition-all pointer-events-none">
      {label}
    </span>
  </a>
);

const ExperienceItem = ({ date, title, company, description, isLast }) => (
  <div className="relative pl-8 md:pl-12 group">
    {/* Timeline Dot */}
    <div className={`absolute left-0 top-2 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white z-10 transition-all ${isLast ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-black group-hover:bg-white'}`}></div>
    
    <span className="text-white text-xs md:text-sm font-bold mb-2 block uppercase tracking-[0.2em] text-white/60">
      {date}
    </span>
    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
      {title} <span className="block text-lg md:text-xl font-medium text-white/70 mt-1">@ {company}</span>
    </h3>
    <p className="text-[#E0E0E0] text-base md:text-lg leading-relaxed max-w-xl font-medium">
      {description}
    </p>
  </div>
);

const ProjectCard = ({ title, type, year, imgUrl }) => (
  <div className="min-w-[85vw] md:min-w-[450px] lg:min-w-[500px] group snap-center">
    <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900 mb-6 border border-white/10 rounded-sm">
      <img 
        alt={title} 
        className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" 
        src={imgUrl} 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pr-6">
        <h3 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white uppercase tracking-tighter leading-none">
          {title}
        </h3>
        <a className="inline-block py-3 px-6 md:py-4 md:px-10 border-2 border-white text-xs md:text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all bg-black/50 backdrop-blur-md" href="#">
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

// --- Main Component ---

const NewPortfolio = () => {
  // Simple scroll progress for the side indicator
  const [scrollProgress, setScrollProgress] = useState(0);

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
    <div className="bg-[#050505] text-white font-sans selection:bg-white selection:text-black min-h-screen overflow-x-hidden">
      
      {/* Styles Injection */}
      <style>{`
        .noise-texture {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; opacity: 0.04; z-index: 50;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E");
        }
        // .outline-text {
        //   -webkit-text-stroke: 1px #ffffff; color: transparent;
        // }
        @media (min-width: 768px) {
           .outline-text { -webkit-text-stroke: 2px #ffffff; } 
        }
        .grid-bg {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        @media (min-width: 1024px) { .grid-bg { background-size: 60px 60px; } }
        .glass-card {
          background: rgba(20, 20, 20, 0.6); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="noise-texture"></div>

      {/* Navigation: Bottom on Mobile, Left on Desktop */}
      <nav className="fixed bottom-4 left-4 right-4 lg:bottom-auto lg:top-1/2 lg:left-6 lg:right-auto lg:-translate-y-1/2 z-50 glass-card rounded-full p-2 lg:p-4">
        <div className="flex flex-row lg:flex-col items-center justify-around gap-2 lg:gap-8">
          <NavItem href="#hero" icon="home" label="Home" />
          <NavItem href="#experience" icon="history_edu" label="Experience" />
          <NavItem href="#projects" icon="folder_open" label="Projects" />
          <NavItem href="#contact" icon="alternate_email" label="Contact" />
        </div>
      </nav>

      {/* Logo */}
      <div className="fixed top-6 left-6 md:top-8 md:left-8 z-40 mix-blend-difference">
        <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-white flex items-center justify-center font-display font-black text-xl md:text-2xl tracking-tighter bg-white text-black">
          A
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 pb-32">
        
        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center relative grid-bg pt-20 lg:pt-0" id="hero">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text */}
            <div className="order-2 lg:order-1 lg:col-span-7 z-10">
              <span className="text-white/80 tracking-[0.4em] md:tracking-[0.6em] text-xs md:text-sm font-bold uppercase mb-4 md:mb-6 block">
                Premium Software Engineering
              </span>
              <h1 className="font-display leading-[0.9] flex flex-col gap-2 lg:gap-0">
                <span className="text-6xl md:text-8xl lg:text-[140px] font-black tracking-tighter text-white">ADEDEJI</span>
                <span className="text-6xl md:text-8xl lg:text-[140px] font-black tracking-tighter outline-text">ADEBAYO</span>
              </h1>
              <div className="mt-8 md:mt-12 flex items-center gap-6">
                <div className="h-px w-12 md:w-24 bg-white"></div>
                <p className="text-sm md:text-xl text-white font-bold tracking-widest uppercase">Senior Fullstack Architect</p>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-3xl rotate-12 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                  <div className="w-2/3 h-2/3 border border-white/30 -rotate-12 flex items-center justify-center">
                     <div className="w-1/2 h-1/2 border border-white/40 rotate-45"></div>
                  </div>
                </div>
                {/* Placeholder image for stability */}
                <img alt="Abstract Art" className="w-full h-full object-cover mix-blend-lighten opacity-60 rounded-3xl" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" />
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 border-t border-white/10" id="experience">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-12 md:mb-20 tracking-tight flex items-center gap-4 text-white">
              Experience <span className="text-xs md:text-base font-bold text-white/50 tracking-widest uppercase mt-2">/ 01</span>
            </h2>
            
            <div className="space-y-16 md:space-y-20 relative">
              {/* Vertical connecting line */}
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
          </div>
          
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-12 md:mb-20 tracking-tight flex items-center gap-4 text-white">
              Expertise <span className="text-xs md:text-base font-bold text-white/50 tracking-widest uppercase mt-2">/ 02</span>
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-8 md:gap-x-10 md:gap-y-14 items-baseline">
              <span className="text-4xl md:text-6xl font-black text-white">React</span>
              <span className="text-2xl md:text-4xl font-black text-white/90">Node.js</span>
              <span className="text-xl md:text-2xl font-bold text-white/80">TypeScript</span>
              <span className="text-3xl md:text-5xl font-black text-white">AWS</span>
              <span className="text-2xl md:text-3xl font-bold text-white/85">Next.js</span>
              <span className="text-3xl md:text-5xl font-black outline-text">Python</span>
              <span className="text-xl md:text-2xl font-bold text-white/70">Docker</span>
              <span className="text-2xl md:text-4xl font-black text-white">Design Systems</span>
              <span className="text-xl md:text-2xl font-bold text-white/60">GraphQL</span>
              <span className="text-2xl md:text-3xl font-black text-white/90">Tailwind</span>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-20 md:py-32 border-t border-white/10" id="projects">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight flex items-center gap-4 text-white">
              Selected Work <span className="text-xs md:text-base font-bold text-white/50 tracking-widest uppercase mt-2">/ 03</span>
            </h2>
            {/* Arrows hidden on mobile, user naturally swipes */}
            <div className="hidden md:flex gap-4">
              <button className="p-4 md:p-5 border border-white/20 hover:border-white text-white transition-colors">
                <span className="material-symbols-outlined">west</span>
              </button>
              <button className="p-4 md:p-5 border border-white/20 hover:border-white text-white transition-colors">
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>
          
          {/* Scroll Container with Snap */}
          <div className="flex gap-6 md:gap-10 overflow-x-auto hide-scrollbar pb-12 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
            <ProjectCard 
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
            />
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-20 md:py-32 flex flex-col items-center" id="contact">
          <div className="w-full mb-20 md:mb-32">
            <h2 className="text-[15vw] md:text-[14vw] font-display font-black leading-none text-center whitespace-nowrap overflow-hidden select-none mb-12 md:mb-20 text-white">
              <span className="inline-block transition-transform hover:scale-105 duration-500">LET'S BUILD</span>
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32">
              <SocialLink 
                href="#" 
                label="GITHUB"
                iconPath={<path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>}
              />
              <SocialLink 
                href="#" 
                label="LINKEDIN"
                iconPath={<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>}
              />
              <SocialLink 
                href="#" 
                label="TWITTER"
                iconPath={<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>}
              />
            </div>
          </div>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center py-10 border-t border-white/20 text-white text-[10px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.4em] gap-6 md:gap-0">
            <p>© 2024 ADEDEJI ADEBAYO</p>
            <div className="flex gap-8 md:gap-12">
              <a className="hover:underline underline-offset-4 transition-all" href="#">PRIVACY</a>
              <a className="hover:underline underline-offset-4 transition-all" href="#">TERMS</a>
            </div>
            <p>CRAFTED IN NOIR</p>
          </div>
        </section>
      </main>
      
      {/* Scroll Indicator - Hidden on Mobile to save space */}
      <div className="hidden lg:block fixed bottom-8 right-8 mix-blend-difference z-50">
        <div className="flex flex-col items-center gap-6">
          <span className="[writing-mode:vertical-rl] text-[11px] font-black tracking-[0.6em] text-white uppercase">SCROLL TO EXPLORE</span>
          <div className="h-16 w-[2px] bg-white/20 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-full bg-white transition-all duration-100 ease-out" 
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NewPortfolio;