"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TechIcon from "@/components/TechIcon";

export default function ProjectsPageContent({ projects }) {
  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground min-h-screen overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-20">
        <section className="flex flex-col justify-center mb-32" id="hero">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-outfit leading-[0.9] mb-10"
          >
            <span className="text-[17vw] md:text-[15vw] font-black tracking-tighter text-foreground/90 leading-none">
              PROJECTS
            </span>
          </motion.h1>
          <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between">
            <p className="font-sans text-xl lg:text-2xl text-foreground/80 max-w-2xl font-medium border-l-4 border-foreground pl-8">
              A collection of digital products, experiments, and open-source
              contributions focusing on modern web technologies.
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-2 bg-foreground"
            />
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative overflow-hidden aspect-[4/5] bg-card border border-border rounded-sm mb-6 transition-all hover:border-foreground/40">
                  <img
                    alt={project.projectname}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                    src={project.imgurl}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 pr-6">
                    <h3 className="text-2xl md:text-3xl font-black text-[#dedede] uppercase tracking-tighter leading-none mb-2">
                      {project.projectname}
                    </h3>
                    <div className="flex items-center gap-4">
                      <p className="text-[#dedede]/60 text-[10px] font-bold tracking-widest uppercase">
                        {project.type} — {project.year}
                      </p>
                      <div className="flex gap-2">
                        {project.tools.slice(0, 3).map((tool) => (
                          <TechIcon
                            key={tool}
                            name={tool}
                            className="w-3 h-3 text-foreground/40"
                          />
                        ))}
                        {project.tools.length > 3 && (
                          <span className="text-[8px] text-foreground/40 font-black">
                            +
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
