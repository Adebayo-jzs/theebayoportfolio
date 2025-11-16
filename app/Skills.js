const skills = {
  Frontend: ["HTML","CSS","React", "Javascript", "Next.js", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB",],
//   DevOps: ["Docker", "AWS", "CI/CD", "Kubernetes", "Vercel"],
  Tools: ["Git","Github", "VS Code", "Figma"]
};
const Skills = () => {
  return (
    <section className="max-w-5xl mx-auto space-y-12 text-left mt-20"> 
        <h2 className="text-4xl md:text-5xl  tracking-tight max-w-xl">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="skill-card hover:shadow-lg transition-shadow"
            >
              <h2 className="text-3xl mb-4">{category}</h2>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Skills;
