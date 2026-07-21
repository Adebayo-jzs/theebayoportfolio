export async function GET() {
  const data = {
    name: "Samod Adedeji",
    username: "theebayo",
    role: "Software Developer",
    skills: ["React","Javascript", "Next.js", "Node.js", "MongoDB", "Tailwind"],
    projects: [
      {
        name: "PageForge", 
        description: "Transform your product ideas into high-conversion landing pages in seconds using Gemini AI. No coding required.",
        link: "https://pageforge-nu.vercel.app",
         
      },
      {
        name: "Focus Mode", 
        description: "Chrome Extension for blocking distracting sites on demand. Stay in the zone.", 
        link: "https://github.com/Adebayo-jzs/focus-mode", 
      },
    ],
    social: {
      twitter: "https://x.com/bytebybayo",
      github: "https://github.com/Adebayo-jzs",
      linkedin: "https://linkedin.com/in/theebayo",
    }
  };

  return Response.json(data);
}
