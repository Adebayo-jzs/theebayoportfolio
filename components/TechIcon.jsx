import React, { useState } from "react";

const TechIcon = ({ name, className = "w-5 h-5" }) => {
  const [error, setError] = useState(false);
  
  const mapping = {
    "NextJS": "nextjs",
    "Next.js": "nextjs",
    "Tailwind": "tailwind",
    "Vanilla CSS": "css",
    "CSS": "css",
    "Supabase": "supabase",
    "Supabse": "supabase",
    "Node.js": "nodejs",
    "React": "react",
    "Javascript": "js",
    "Typescript": "ts",
    "HTML": "html",
    "PostgreSQL": "postgres",
    "Postgres": "postgres",
    "MongoDB": "mongodb",
    "Git": "git",
    "Github": "github",
    "Bootstrap": "bootstrap",
  };

  const slug = mapping[name] || name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const iconUrl = `https://skillicons.dev/icons?i=${slug}`;

  if (error) {
    return (
      <div className={`rounded-full bg-foreground/10 ${className} flex items-center justify-center text-[8px] font-black uppercase tracking-tighter`}>
        {name.substring(0, 2)}
      </div>
    );
  }

  return (
    <img 
      src={iconUrl} 
      alt={name} 
      className={`${className} object-contain`}
      onError={() => setError(true)}
    />
  );
};

export default TechIcon;
