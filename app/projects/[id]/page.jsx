import React from "react";
import { projects } from "@/lib/projects";
import ProjectDetailsContent from "@/components/ProjectDetailsContent";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return {};

  return {
    title: project.projectname,
    description: project.desc,
    openGraph: {
      title: `${project.projectname} | Adebayo ADEDEJI`,
      description: project.desc,
      images: [{ url: project.imgurl }],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const projectIndex = projects.findIndex((p) => p.id === parseInt(id));
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return <ProjectDetailsContent project={project} nextProject={nextProject} />;
}
