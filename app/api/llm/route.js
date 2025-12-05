export async function GET() {
  const data = {
    name: "Adebayo Adedeji",
    username: "theebayo",
    role: "Software Developer",
    skills: ["React","Javascript", "Next.js", "Node.js", "MongoDB", "Tailwind"],
    projects: [
      {
        name: "Simple Quiz App",
        description: "A basic JavaScript quiz application.",
        link: "https://adebayo-jzs.github.io/examhelp"
      },
      { 
        name: "Industrial Visit Planning and booking System",
        description:"Overview and analytics dashboard for an industrial visit planning and booking system for a school project",
        tools: ["NextJS", "Tailwind","Vanilla CSS","Supabase","Node.js"],
        link: "https://tourtech.name.ng/admin", 
  },
    ],
    social: {
      github: "https://github.com/adebayo-jzs",
      linkedin: "https://linkedin.com/in/theebayo",
      twitter: "https://x.com/theebayo"
    }
  };

  return Response.json(data);
}
