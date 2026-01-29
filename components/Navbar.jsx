import Link from 'next/link';
import React, { useState, useEffect } from 'react'; 
import { Cancel, Close } from '@mui/icons-material';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Adds a subtle border/shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <header className="fixed top-4 z-50 left-0 right-0  max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24  ">

    <nav className={`    py-5 transition-all  duration-300 ease-in-out
      ${scrolled ? 'bg-black/60 backdrop-blur-md border border-white/10 shadow-lg px-5' : 'bg-transparent border border-transparent'}
      ${open ? "bg-transparent border-none   backdrop-blur-none px-5" : ""}
      `}>
      <div className="flex items-center justify-between">
        {/* Logo / Brand */}
        {/* <div class="fixed top-8 left-8 z-50"> */}
        <Link href="/" className="w-12 h-12 border-2 border-white flex items-center justify-center font-display font-black text-2xl tracking-tighter bg-black">
            A
        </Link>
        {/* </div> */}

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 uppercase font-bold">
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#projects">Projects</NavLink>
          <NavLink href="/#experience">Education</NavLink>
          <NavLink href="/blog">Insights</NavLink>
          {/* <NavLink href="#tools">Tools</NavLink> */}
        </div>

        {/* CTA Button */}
        <a 
          href="/#contact" 
          className="hidden md:block border-2 border-white  bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-transparent hover:text-white"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Icon (Placeholder) */}
        <button className="text-white md:hidden" onClick={() => setOpen(!open)}>
            {open?<Close/>:
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            }
        </button>
      </div>
    </nav>
    </header>
     

    <div
         className={`
          fixed inset-0 z-40 bg-[#1a1a1a]/80 backdrop-blur-md text-white
          flex flex-col items-center justify-center gap-10 m-4 rounded 
          origin-top-right transform transition-transform duration-500 ease-in-out
          ${open ? "scale-100" : "scale-0"}
          md:hidden
        `}
      >
        <NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink href="#projects" onClick={() => setOpen(false)}>Projects</NavLink>
        <NavLink href="#experience" onClick={() => setOpen(false)}>Education</NavLink>
        <NavLink href="/blog" onClick={() => setOpen(false)}>Insights</NavLink>
      </div>
    </>
  );
};

// Helper component for links
const NavLink = ({ href, children }) => (
  <Link 
    href={href} 
    className="text-sm  text-gray-300 font-bold tracking-widest transition hover:text-white transition"
  >
    {children}
  </Link>
);

export default Navbar;