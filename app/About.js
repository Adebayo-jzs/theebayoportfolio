"use client"
import { motion } from "framer-motion";

export default function About(){
    const fadeUp = {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
     };
    const fade2 = {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
     };
    const fade3 = {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 1.4 } },
     };
    return(
      <section id="about" className="max-w-5xl mx-auto  text-left pt-20">
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} >
        <h2 className="text-4xl md:text-5xl max-w-xl">About</h2>
        </motion.div> 
        <motion.div initial="hidden" whileInView="visible" variants={fade2} >
        <p className="text-base md:text-lg  mt-4 text-[#5a5a5a] max-w-xl">
          I am a passionate Software Engineering student at Babcock University with a focus on Full Stack Development. My journey in tech began with a curiosity about how websites work, which led me to explore the fascinating world of web development.
        </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={fade3} >
        <p className="text-base md:text-lg  mt-4 text-[#5a5a5a] max-w-xl">
          I specialize in both frontend and backend development, continuously exploring new technologies and methodologies to stay at the forefront of web development. My main goal is to become a proficient web developer by consistently exploring how technology can be applied to solve real-world problems in our daily lives.
        </p>
        </motion.div>
      </section>
    );
}