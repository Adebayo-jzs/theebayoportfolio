"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin,Twitter } from "lucide-react";
import Link from "next/link";
// import { headers } from "next/headers";

const links = [
  {id:1,linkname:"Email",handle:"adedejiadebayo732@gmail.com",link:"mailto:adededejiadebayo732@gmail.com",icon:Mail},
  {id:2,linkname:"GitHub",handle:"@adebayo-jzs",link:"https://github.com/Adebayo-jzs",icon:Github},
  {id:3,linkname:"LinkedIn",handle:"/in/theebayo",link:"https://linkedin.com/in/theebayo",icon:Linkedin},
  {id:4,linkname:"X",handle:"@theebayo",link:"https://x.com/theebayo",icon:Twitter},
]
const Contact = () => {
  
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
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name:e.target.name.value,
      email:e.target.email.value, 
      message:e.target.message.value,
    }

     const res = fetch('https://api.formdrop.co/f/BIHBg1on', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
      })
      // .then(alert("Message sent successfully"))
    .then(res => res.json())
    .then(data => alert("Message sent successfully"))
    .catch(err => alert("Failed to send message"));
    e.target.reset();

    // });
  }
  return (
    <section id="contact" className="py-24 ">
      <section className=" mx-auto space-y-12">

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
            className="lightborder border-white "
          >
            <motion.form
            initial="hidden" whileInView="visible" variants={containerr} viewport={{ once: true }}
             onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <motion.div className="space-y-2" variants={fadeUp}>
                <label htmlFor="name" className="text-sm md:text-xl text-white font-bold font-sans tracking-widest">
                  NAME
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border-2 border-white mt-3  inputb px-3 py-2  "
                />
              </motion.div>

              {/* Email */}
              <motion.div className="space-y-2" variants={fadeUp}>
                <label htmlFor="email" className="text-sm md:text-xl text-white font-bold font-sans tracking-widest">
                  EMAIL
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full border-2 border-white mt-3 inputb px-3 py-2"
                />
              </motion.div>

              {/* Message */}
              <motion.div className="space-y-2" variants={fadeUp}>
                <label htmlFor="message" className="text-sm md:text-xl text-white font-bold font-sans tracking-widest">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full border-2 border-white mt-3 inputb px-3 py-2  "
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
              variants={fadeUp}
                type="submit"
                className="w-full bg-white  text-black py-3  border-2 border-white font-semibold hover:bg-transparent hover:text-white transition"
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
              className="py-6 px-4 social-links rounded-xl hover:shadow-lg transition-shadow"
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

      </section>
    </section>
  );
};

export default Contact;
