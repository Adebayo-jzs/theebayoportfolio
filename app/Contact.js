"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin,Twitter } from "lucide-react";
import Link from "next/link";

const links = [
  {id:1,linkname:"Email",handle:"adedejiadebayo732@gmail.com",link:"mailto:adededejiadebayo732@gmail.com",icon:Mail},
  {id:2,linkname:"GitHub",handle:"@adebayo-jzs",link:"https://github.com/Adebayo-jzs",icon:Github},
  {id:3,linkname:"LinkedIn",handle:"/in/theebayo",link:"https://linkedin.com/in/theebayo",icon:Linkedin},
  {id:4,linkname:"X",handle:"@theebayo",link:"https://x.com/theebayo",icon:Twitter},
]
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.65,   // Delay between child animations
      }
    }
  };
  const containerr = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,   // Delay between child animations
      }
    }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  
  return (
    <section id="contact" className="py-24 px-3">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Title Section */}
        <motion.div 
          className="text-center space-y-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg  mt-4 text-[#5a5a5a] max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something extraordinary.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* FORM */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            variants={fadeUp}
            className="p-8 lightborder rounded-xl "
          >
            <motion.form
            initial="hidden" whileInView="visible" variants={containerr} viewport={{ once: true }}
             onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <motion.div className="space-y-2" variants={fadeUp}>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-md  inputb px-3 py-2  "
                />
              </motion.div>

              {/* Email */}
              <motion.div className="space-y-2" variants={fadeUp}>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-md inputb px-3 py-2"
                />
              </motion.div>

              {/* Message */}
              <motion.div className="space-y-2" variants={fadeUp}>
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full rounded-md inputb px-3 py-2  "
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
              variants={fadeUp}
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>

          {/* CONTACT CARDS */}
          <motion.div className="space-y-6" initial="hidden" whileInView="visible" variants={container} viewport={{ once: true }} >
            {links.map((social) => {
              const Icon = social.icon;
              return (
              <motion.div 
              variants={fadeUp}
              key={social.id}
              className="p-6 social-links rounded-xl hover:shadow-lg transition-shadow"
            >
              <Link href={social.link}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-200 rounded-full">
                  <Icon className="h-6 w-6" />
                  {/* {social.icon} */}
                </div>
                <div>
                  <h3 className="font-semibold">{social.linkname}</h3>
                  <p className="text-gray-500">{social.handle}</p>
                </div>
              </div>
              </Link>
            </motion.div>
            );
            })}
           
           

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
