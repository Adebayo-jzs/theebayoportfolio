const skills = {
  Frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
  Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
  DevOps: ["Docker", "AWS", "CI/CD", "Kubernetes", "Vercel"],
  Tools: ["Git", "VS Code", "Figma", "Postman", "Jest"]
};
const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl  tracking-tight max-w-xl">
          Skills & Technologies
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-6 border-2 rounded-xl bg-white hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4">{category}</h3>

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
      </div>
    </section>
  );
};

export default Skills;
