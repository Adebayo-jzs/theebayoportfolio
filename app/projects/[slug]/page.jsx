import React from "react";
import { projects } from "@/lib/projects";
import ProjectDetailsContent from "@/components/ProjectDetailsContent";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.projectname,
    description: project.desc,
    url: `https://theebayo.name.ng/projects/${project.slug}`,
    openGraph: {
      title: `${project.projectname} | Adebayo ADEDEJI`,
      description: project.desc,
      images: [
        {
          url: project.imgurl,
          width: 1200,
          height: 630,
          alt: project.projectname,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.projectname,
      description: project.desc,
      images: [
        {
          url: project.imgurl,
          width: 1200,
          height: 630,
          alt: project.projectname,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return <ProjectDetailsContent project={project} nextProject={nextProject} />;
}
