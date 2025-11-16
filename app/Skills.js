"use client"
import { motion } from "framer-motion";
const skills = {
  Frontend: ["HTML","CSS","React", "Javascript", "Next.js", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB",],
//   DevOps: ["Docker", "AWS", "CI/CD", "Kubernetes", "Vercel"],
  Tools: ["Git","Github", "VS Code", "Figma"]
};
const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.65,   // Delay between child animations
      }
    }
  };
  const fadeUp = {
      hidden: { opacity: 0, y: 40 },
      visible: { 
        opacity: 1, y: 0, transition: { duration: 0.6 } 
      },
  };

  return (
    <section id="skills" className="max-w-4xl mx-auto space-y-12 text-left my-20"> 
      <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp} className="text-4xl md:text-5xl  tracking-tight max-w-xl" >
          Skills & Technologies
      </motion.h2>

        <motion.div className="grid md:grid-cols-2 gap-6" initial="hidden" whileInView="visible" variants={container} viewport={{ once: true }} >
          {Object.entries(skills).map(([category, items]) => (
            
            <motion.div
              key={category}
              variants={fadeUp}
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
            </motion.div>
          ))}
        </motion.div>
    </section>
  );
};

export default Skills;
