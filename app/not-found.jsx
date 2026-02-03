"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownward, ArrowLeft, Home  } from "@mui/icons-material";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden ">
            {/* Background Elements */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none" /> */}

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center px-4 md:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative"
                >
                    <h1 className="font-outfit leading-[0.9]  ">
                    <span className="text-[12rem] md:text-[20rem] font-black tracking-tighter outline-text select-none">
                        404
                    </span>
                    </h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center"
                    >
                        <span className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            404
                        </span>
                    </motion.div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-base md:text-lg  mt-4 text-white/80 max-w-md text-center mb-12 font-light"
                >
                    The page you're looking for seems to unavailable.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-4"
                >
                    <Link
                        href="/"
                        className="group relative px-6 py-3 border-2 border-white bg-white text-sm font-semibold text-black hover:bg-transparent hover:text-white transition-all   flex items-center gap-2"
                    >
                        <Home className="w-4 h-4" />
                        <span className="tracking-widest">Return Home</span>
                         
                    </Link>
                    <Link
                        href="#contact"
                        className="group relative px-6 py-3 border-2 border-white bg-white text-sm font-semibold text-black hover:bg-transparent hover:text-white transition-all   flex items-center gap-2"
                    >
                        <ArrowDownward className="w-4 h-4" />
                        <span className="tracking-widest">Contact</span>
                         
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
