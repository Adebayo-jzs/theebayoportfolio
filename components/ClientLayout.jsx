"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Contact from "@/app/Contact";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { North } from "@mui/icons-material";
import CursorWrapper from "@/components/CursorWrapper";

export default function ClientLayout({ children }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll || 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <CursorWrapper>
        <Navbar />
        {children}
        <Contact />
        <Footer />
        <Analytics />

        <div className="block fixed bottom-8 right-3 mix-blend-difference z-50">
          <div className="flex flex-col items-center gap-6">
            <span className="[writing-mode:vertical-rl] text-[11px] font-black tracking-[0.6em] text-white uppercase">
              SCROLL TO EXPLORE
            </span>
            <div className="h-16 w-[2px] bg-white/20 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full bg-white transition-all duration-100 ease-out"
                style={{ height: `${scrollProgress * 100}%` }}
              ></div>
            </div>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="border border-white/20 rounded-full p-2 mt-3 text-white hover:bg-white hover:text-black transition-colors"
          >
            <North />
          </button>
        </div>
      </CursorWrapper>
    </ThemeProvider>
  );
}
