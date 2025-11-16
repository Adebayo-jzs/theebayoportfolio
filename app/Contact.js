"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">

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
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
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
            variants={fadeUp}
            className="p-8 border-2 rounded-xl shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-black/20"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-black/20"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-black/20"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* CONTACT CARDS */}
          <motion.div className="space-y-6">

            {/* Email Card */}
            <motion.div 
              variants={fadeUp}
              className="p-6 border-2 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-200 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-500">hello@developer.com</p>
                </div>
              </div>
            </motion.div>

            {/* GitHub Card */}
            <motion.div 
              variants={fadeUp}
              className="p-6 border-2 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-200 rounded-full">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-gray-500">@yourusername</p>
                </div>
              </div>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div 
              variants={fadeUp}
              className="p-6 border-2 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-200 rounded-full">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-gray-500">/in/yourprofile</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
