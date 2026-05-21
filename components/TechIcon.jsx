// import React, { useState } from "react";

// const TechIcon = ({ name, className = "w-5 h-5" }) => {
//   const [error, setError] = useState(false);
  
//   const mapping = {
//     "NextJS": "nextjs",
//     "Next.js": "nextjs",
//     "Tailwind": "tailwind",
//     "Vanilla CSS": "css",
//     "Gemini API": "gemini",
//     "CSS": "css",
//     "Supabase": "supabase",
//     "Supabse": "supabase",
//     "Node.js": "nodejs",
//     "React": "react",
//     "Javascript": "js",
//     "Typescript": "ts",
//     "HTML": "html",
//     "PostgreSQL": "postgres",
//     "Postgres": "postgres",
//     "Framer":"framer",
//     "MongoDB": "mongodb",
//     "Git": "git",
//     "Github": "github",
//     "Bootstrap": "bootstrap",
//   };

//   const slug = mapping[name] || name.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const iconUrl = `https://skillicons.dev/icons?i=${slug}`;

//   if (error) {
//     return (
//       <div className={`rounded-full bg-foreground/10 ${className} flex items-center justify-center text-[8px] font-black uppercase tracking-tighter`}>
//         {name.substring(0, 2)}
//       </div>
//     );
//   }

//   return (
//     <img 
//       src={iconUrl} 
//       alt={name} 
//       className={`${className} object-contain`}
//       onError={() => setError(true)}
//     />
//   );
// };

// export default TechIcon;
import React, { useState } from "react";

const TechIcon = ({ name, className = "w-5 h-5" }) => {
  const [errorCount, setErrorCount] = useState(0);

  // Each entry: array of URLs tried in order (fallback chain)
  const iconMap = {
    "NextJS":      [
      "https://cdn.simpleicons.org/nextdotjs/fff",
    ],
    "Next.js":     [
      "https://cdn.simpleicons.org/nextdotjs/fff",
    ],
    "Tailwind":    [
      "https://cdn.simpleicons.org/tailwindcss",
    ],
    "Vanilla CSS": [
      "https://cdn.simpleicons.org/css/1572B6",
    ],
    "CSS":         [
      "https://cdn.simpleicons.org/css/1572B6",
    ],
    "Gemini API":  [
      "https://cdn.simpleicons.org/googlegemini",
    ],
    "Supabase":    [
      "https://cdn.simpleicons.org/supabase",
    ],
    "Supabse":     [
      "https://cdn.simpleicons.org/supabase",
    ],
    "Node.js":     [
      "https://cdn.simpleicons.org/nodedotjs",
    ],
    "React":       [
      "https://cdn.simpleicons.org/react",
    ],
    "Javascript":  [
      "https://cdn.simpleicons.org/javascript",
    ],
    "Typescript":  [
      "https://cdn.simpleicons.org/typescript",
    ],
    "HTML":        [
      "https://cdn.simpleicons.org/html5/E34F26",
    ],
    "PostgreSQL":  [
      "https://cdn.simpleicons.org/postgresql",
    ],
    "Postgres":    [
      "https://cdn.simpleicons.org/postgresql",
    ],
    "Framer":      [
      "https://cdn.simpleicons.org/framer",
    ],
    "MongoDB":     [
      "https://cdn.simpleicons.org/mongodb",
    ],
    "Git":         [
      "https://cdn.simpleicons.org/git",
    ],
    "Github":      [
      "https://cdn.simpleicons.org/github/fff",
    ],
    "Bootstrap":   [
      "https://cdn.simpleicons.org/bootstrap",
    ],
    "Figma":       [
      "https://cdn.simpleicons.org/figma",
    ],
    "Vercel":      [
      "https://cdn.simpleicons.org/vercel",
    ],
    "Vite":        [
      "https://cdn.simpleicons.org/vite",
    ],
    "Express":     [
      "https://cdn.simpleicons.org/express",
    ],
    "Drizzle":     [
      "https://cdn.simpleicons.org/drizzle",
    ],
    "Prisma":      [
      "https://cdn.simpleicons.org/prisma",
    ],
    "Python":      [
      "https://cdn.simpleicons.org/python",
    ],
    "PHP":         [
      "https://cdn.simpleicons.org/php",
    ],
    "MySQL":       [
      "https://cdn.simpleicons.org/mysql",
    ],
    "Redis":       [
      "https://cdn.simpleicons.org/redis",
    ],
    "Docker":      [
      "https://cdn.simpleicons.org/docker",
    ],
    "Solana":      [
      "https://cdn.simpleicons.org/solana",
    ],
    "OpenAI":      [
      "https://cdn.simpleicons.org/openai",
    ],
    "Stripe":      [
      "https://cdn.simpleicons.org/stripe",
    ],
    "Paystack":    [
      "https://cdn.simpleicons.org/paystack",
    ],
  };

  const urls = iconMap[name] ?? [
    `https://cdn.simpleicons.org/${name.toLowerCase().replace(/[^a-z0-9]/g, "")}`,
  ];

  const currentUrl = urls[errorCount];
  const failed = errorCount >= urls.length || !currentUrl;

  if (failed) {
    return (
      <div
        className={`rounded-full bg-foreground/10 ${className} flex items-center justify-center text-[8px] font-black uppercase tracking-tighter`}
      >
        {name.substring(0, 2)}
      </div>
    );
  }

  return (
    <img
      src={currentUrl}
      alt={name}
      className={`${className} object-contain`}
      onError={() => setErrorCount((c) => c + 1)}
    />
  );
};

export default TechIcon;