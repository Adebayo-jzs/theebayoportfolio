"use client"
import { motion } from "framer-motion";
import Image from "next/image";
export default function Hero() {
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
    <section className="max-w-5xl mx-auto  mt-36 text-left">
      <motion.div initial="hidden" whileInView="visible" variants={fadeUp} >
        <Image 
          src="/avatar.jpg" 
          alt="Adedeji Adebayo portrait"
          width={100}
          height={100} 
          className="mb-9 rounded-full"
          />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={fade2} >

        <h1 className="text-4xl md:text-5xl  tracking-tight max-w-xl">Hi, I'm Adedeji Adebayo.</h1>
        <h2 className="text-4xl md:text-5xl  tracking-tight max-w-xl">Software Developer</h2>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" variants={fade3} >

        <p className="text-base md:text-lg  mt-4 text-[#5a5a5a] max-w-xl  ">
          Year 2 Software Engineering student  passionate about creating beautiful, functional websites and web applications with cutting-edge technology.
        </p>
        <button className="button1 mt-4">Get In Touch</button>
      </motion.div>
      </section>
    );
}