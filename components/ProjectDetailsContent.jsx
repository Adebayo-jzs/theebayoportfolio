"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { West, Launch, GitHub, CheckCircleOutline, LightbulbOutlined, WarningAmberOutlined, AutoAwesome } from "@mui/icons-material";
import TechIcon from "@/components/TechIcon";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProjectDetailsContent({ project, nextProject }) {
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-background text-foreground">
        <h1 className="text-4xl font-black mb-6 uppercase tracking-widest">Project Not Found</h1>
        <Link href="/projects" className="underline uppercase tracking-widest font-bold text-primary hover:text-foreground transition-colors">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 flex justify-center items-center opacity-30">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-foreground/5 rounded-full blur-3xl filter"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-3xl filter"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 pt-24 md:pt-32">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-16 uppercase text-xs font-black tracking-widest group"
        >
          <West fontSize="small" className="transition-transform group-hover:-translate-x-1" /> Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="mb-24 lg:mb-32">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-end">
            <div className="w-full lg:w-2/3">
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
                <span className="text-xs font-bold tracking-[0.4em] text-primary uppercase">
                  Project / {project.id < 10 ? `0${project.id}` : project.id}
                </span>
                <div className="h-px flex-grow bg-border/40"></div>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[7.5rem] font-black tracking-tighter uppercase leading-[0.85] mb-8 text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/90 to-foreground/40">
                {project.projectname}
              </motion.h1>

              {project.tagline && (
                <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-foreground/80 font-serif italic border-l-2 border-primary pl-6 mb-8 max-w-3xl">
                  "{project.tagline}"
                </motion.p>
              )}

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
                <span className="px-5 py-2.5 bg-foreground/5 border border-border/20 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                  {project.type}
                </span>
                <span className="px-5 py-2.5 bg-foreground/5 border border-border/20 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                  {project.year}
                </span>
                {project.role && (
                  <span className="px-5 py-2.5 bg-foreground/5 border border-border/20 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm text-primary">
                    Role: {project.role}
                  </span>
                )}
              </motion.div>
            </div>
            
            <motion.div variants={fadeInUp} className="w-full lg:w-1/3 flex flex-col gap-8 lg:pb-4">
              <div className="flex flex-wrap gap-4">
                {project.preview && (
                  <a href={project.preview} target="_blank" rel="noopener noreferrer" className="group flex-1 flex justify-center items-center gap-3 bg-foreground text-background py-5 px-6 font-black uppercase tracking-widest transition-all hover:bg-primary hover:text-primary-foreground rounded-sm">
                    Live <Launch fontSize="small" className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
                {project.code && (
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="group flex-1 flex justify-center items-center gap-3 border border-border/40 py-5 px-6 font-black uppercase tracking-widest transition-all hover:bg-foreground/10 rounded-sm">
                    Code <GitHub fontSize="small" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Image */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative aspect-video lg:aspect-[21/9] w-full overflow-hidden rounded-xl border border-border/30 shadow-2xl shadow-black/40 mb-24 lg:mb-40 group"
        >
          <img src={project.imgurl} alt={project.projectname} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 lg:mb-48">
          
          {/* Left Column: Tech Stack & Overview */}
          <div className="lg:col-span-4 flex flex-col gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-xs font-black tracking-[0.3em] uppercase text-foreground/40 mb-8 border-b border-border/20 pb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span key={tool} className="flex items-center gap-2 text-sm font-bold bg-foreground/5 hover:bg-foreground/10 transition-colors py-2.5 px-4 rounded-md border border-border/10 cursor-default">
                    <TechIcon name={tool} className="w-4 h-4 text-foreground/70" />
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-8 flex flex-col gap-24">
            
            {/* Overview */}
            {(project.overview || project.desc) && (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h2 className="text-sm font-black tracking-[0.3em] uppercase text-primary mb-6 flex items-center gap-3">
                  <AutoAwesome fontSize="small" /> Overview
                </h2>
                <p className="text-xl md:text-3xl text-foreground/90 leading-[1.6] font-light">
                  {project.overview || project.desc}
                </p>
              </motion.div>
            )}

            {/* Problem & Solution */}
            {(project.problem || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-foreground/5 p-8 md:p-12 rounded-2xl border border-border/10">
                {project.problem && (
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                    <h3 className="text-xs font-black tracking-[0.3em] uppercase text-foreground/40 mb-6 flex items-center gap-2">
                      <WarningAmberOutlined fontSize="small" /> The Problem
                    </h3>
                    <p className="text-lg text-foreground/70 leading-relaxed font-serif">
                      {project.problem}
                    </p>
                  </motion.div>
                )}
                {project.solution && (
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                    <h3 className="text-xs font-black tracking-[0.3em] uppercase text-primary mb-6 flex items-center gap-2">
                      <LightbulbOutlined fontSize="small" /> The Solution
                    </h3>
                    <p className="text-lg text-foreground/90 leading-relaxed font-serif">
                      {project.solution}
                    </p>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        {project.features && project.features.length > 0 && (
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="mb-32 lg:mb-48"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center">
              Key Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  className="bg-foreground/5 border border-border/10 hover:border-primary/50 transition-colors p-8 rounded-2xl group cursor-default"
                >
                  <CheckCircleOutline className="text-primary/50 group-hover:text-primary transition-colors mb-6 w-8 h-8" />
                  <p className="text-lg font-medium text-foreground/90 leading-snug">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Challenges & Learnings */}
        {(project.challenges || project.learnings) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 lg:mb-48 border-t border-border/10 pt-24">
            {project.challenges && (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
                  Challenges Faced
                </h3>
                <p className="text-xl text-foreground/70 leading-relaxed font-light">
                  {project.challenges}
                </p>
              </motion.div>
            )}
            {project.learnings && (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 text-primary">
                  Key Learnings
                </h3>
                <p className="text-xl text-foreground/90 leading-relaxed font-light border-l-4 border-primary pl-6">
                  {project.learnings}
                </p>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Footer-like Navigation to Other Projects */}
      <div className="mt-32 border-t border-border/20 py-12 px-6 md:px-12 lg:px-24 bg-foreground/5">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          {nextProject ? (
            <div className="text-center md:text-left">
              <h4 className="text-xs font-bold tracking-[0.4em] uppercase text-foreground/40 mb-2">
                Next
              </h4>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-primary transition-colors inline-block"
              >
                {nextProject.projectname} →
              </Link>
            </div>
          ) : (
            <div></div>
          )}
          <Link
            href="/projects"
            className="border-2 border-foreground py-4 px-10 font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
          >
            All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
