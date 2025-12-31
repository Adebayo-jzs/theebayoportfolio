"use client"
import { ExternalLink, Code } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
const projects = [
  {
    id: 1,
    projectname: "Basic Weather App",
    desc:"A basic weather app built with Open Weather API for checking 24 hours weather forecast for various locations ",
    tools: ["HTML", "CSS", "Javascript"],
    preview: "https://adebayo-jzs.github.io/weatherapp",
    code: "https://github.com/adebayo-jzs/examhelp",
    imgurl:"/weatherapp.jpg",
  },
  {
    id: 2,
    projectname: "Admin Dashboard",
    desc:"Overview and analytics dashboard for an industrial visit planning and booking system for a school project",
    tools: ["NextJS", "Tailwind","Vanilla CSS","Supabase","Node.js"],
    preview: "https://tourtech.name.ng/admin",
    code: "https://github.com/adebayo-jzs/tourtech",
    imgurl:"/admindash.jpg",
  },
  {
    id: 3,
    projectname: "Simple Quiz App",
    desc:"Built using vanilla JavaScript with dynamic question loading and DOM updates for real-time scoring and feedback.",
    tools: ["HTML", "CSS", "Javascript"],
    preview: "https://adebayo-jzs.github.io/examhelp",
    code: "https://github.com/adebayo-jzs/examhelp",
    imgurl:"/quizapp.jpg",
  },
  {
    id: 4,
    projectname: "Personal Blog",
    desc:"Personal Developer blog fully optimisized for Search Engines ",
    tools: ["React", "Tailwind", "Typescript","Supabse"],
    preview: "https://blog.theebayo.name.ng",
    code: "https://github.com/adebayo-jzs/examhelp",
    imgurl:"/blog.jpg",
  },
];

const Projects = () => {
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
        opacity: 1, y: 0, transition: { duration: 0.9 } 
      },
  };
  return (
    <section id="projects" className="max-w-4xl mx-auto space-y-12 text-left pt-20 mb-20">
      {/* <div className="max-w-6xl mx-auto space-y-12"> */}
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp} className="text-4xl md:text-5xl  tracking-tight max-w-xl" >
          Projects
        </motion.h2>
        <motion.div className="grid md:grid-cols-2 w-full gap-6" initial="hidden" whileInView="visible" variants={container} viewport={{ once: true }} >
          {projects.map((project) => (
            
            <motion.div
              key={project.id}
              variants={fadeUp}
              className="skill-card hover:shadow-lg hover:-translate-y-1 transition-all duration-750"
              >
              <div className="">
                <Image src={project.imgurl} alt={project.projectname} className="project-image w-full rounded hover:scale-103 transition duration-750" width={800}
            height={0}/>
              </div>
              <div>
                
              <h3 className="text-2xl font-semibold mt-5  mb-4">{project.projectname}</h3>
              <p className="   text-[#737373]  my-5   max-w-xl ">{project.desc}</p>

              <div className="flex flex-wrap gap-2 " >
                {project.tools.map((tool) => (
                  <span
                  key={tool}
                  className="project-tools px-3 py-1  rounded "
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex gap-7 mt-6" >
                  {/* <a
                    href={project.code}
                    target="_blank"
                    className="px-4 py-2 project-button rounded-lg text-sm flex items-center gap-2 hover:bg-gray-100 transition"
                  >
                    <Code className="h-4 w-4" />
                    Code
                  </a> */}

                  <a
                    href={project.preview}
                    target="_blank"
                    className="px-4 py-2 project-button rounded-lg text-sm flex items-center gap-2 hover:bg-gray-100 transition"
                    >
                    <ExternalLink className="h-4 w-4" />
                    Preview
                  </a>
              </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 border-2 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 bg-white group"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors">
                  {project.projectname}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-white border text-xs font-medium rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={project.code}
                    target="_blank"
                    className="px-4 py-2 border rounded-lg text-sm flex items-center gap-2 hover:bg-gray-100 transition"
                  >
                    <Code className="h-4 w-4" />
                    Code
                  </a>

                  <a
                    href={project.preview}
                    target="_blank"
                    className="px-4 py-2 border rounded-lg text-sm flex items-center gap-2 hover:bg-gray-100 transition"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> */}

      {/* </div> */}
    </section>
  );
};

export default Projects;
