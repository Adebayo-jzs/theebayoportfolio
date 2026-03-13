"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/lib/projects";
import { West, Launch, GitHub } from "@mui/icons-material";
import TechIcon from "@/components/TechIcon";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-black mb-6">PROJECT NOT FOUND</h1>
        <Link href="/projects" className="underline uppercase tracking-widest font-bold">Back to projects</Link>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 pt-24 md:pt-32">
        
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-12 uppercase text-xs font-black tracking-widest"
        >
          <West fontSize="small" /> Back to Projects
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Left Column: Project Info */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-bold tracking-[0.4em] text-foreground/50 uppercase">Project / {project.id < 10 ? `0${project.id}` : project.id}</span>
                <div className="h-px flex-grow bg-border/20"></div>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                {project.projectname}
              </h1>

              <div className="flex flex-wrap gap-4 mb-12">
                <span className="px-4 py-2 border border-border/40 rounded-full text-xs font-bold uppercase tracking-widest">{project.type}</span>
                <span className="px-4 py-2 border border-border/40 rounded-full text-xs font-bold uppercase tracking-widest">{project.year}</span>
              </div>

              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium mb-12">
                {project.desc}
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-foreground/40 mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool) => (
                      <span key={tool} className="flex items-center gap-2 text-sm font-bold bg-foreground/5 py-2 px-4 rounded-sm border border-border/10">
                        <TechIcon name={tool} className="w-4 h-4 text-foreground/70" />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-6">
                  {project.preview && (
                    <a 
                      href={project.preview} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 bg-foreground text-background py-4 px-8 font-black uppercase tracking-widest transition-all hover:gap-5"
                    >
                      Live Preview <Launch fontSize="small" />
                    </a>
                  )}
                  {project.code && (
                    <a 
                      href={project.code} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 border-2 border-foreground py-4 px-8 font-black uppercase tracking-widest transition-all hover:bg-foreground hover:text-background"
                    >
                      View Code <GitHub fontSize="small" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Project Image */}
          <div className="w-full lg:w-[55%] order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video lg:aspect-[4/3] overflow-hidden rounded-sm border border-border shadow-2xl shadow-black/20"
            >
              <img 
                src={project.imgurl} 
                alt={project.projectname} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer-like Navigation to Other Projects */}
      <div className="mt-32 border-t border-border/20 py-12 px-6 md:px-12 lg:px-24 bg-foreground/5">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h4 className="text-xs font-bold tracking-[0.4em] uppercase text-foreground/40 mb-2">Next</h4>
            <Link 
              href={`/projects/${project.id === projects.length ? 1 : project.id + 1}`}
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-primary transition-colors inline-block"
            >
              {projects[project.id % projects.length].projectname} →
            </Link>
          </div>
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
