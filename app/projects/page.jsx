import React from "react";
import { projects } from "@/lib/projects";
import ProjectsPageContent from "@/components/ProjectsPageContent";

export const metadata = {
  title: "Adebayo ADEDEJI | Software Developer | Projects",
  description: "A collection of digital products, experiments, and open-source contributions focusing on modern web technologies.",
  openGraph: {
    title: "Projects | Adebayo ADEDEJI",
    description: "A collection of digital products, experiments, and open-source contributions focusing on modern web technologies.",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageContent projects={projects} />;
}
