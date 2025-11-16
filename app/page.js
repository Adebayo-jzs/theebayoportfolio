// app/page.jsx
// import { Metadata } from "next";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import { Computer } from "lucide-react";
import Image from "next/image";
export const metadata = {
  title: "Adedeji Adebayo | Software Developer",
  description:
    "Software Developer specializing in modern full‑stack development with Next.js, React,Node.js and other prominent javascript technologies",
  keywords: [
    "Adedeji Adebayo",
    "Adedeji Samod Adebayo",
    "Adedeji Samod",
    "Theebayo",
    "Theebayo dev",
    "Adebayodv",
    "Software Developer",
    "Javascript",
    "Full Stack Developer",
    "frontend Developer",
    "Next.js",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Adedeji Adebayo" }],
  openGraph: {
    title: "Adedeji Adebayo | Software Developer",
    description:
      "Portfolio website for fullstack javascript Developer,Adedeji Adebayo",
    type: "website",
  },
  twitter: {
  card: "summary_large_image",
  title: "Adedeji Adebayo | Software Developer",
  description: "Portfolio website for fullstack javascript Developer,Adedeji Adebayo",
  site: "@theebayo",
  creator: "@theebayo"
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-6 md:px-10 lg:px-20 py-20flex flex-col gap-32 ">
      <Hero/>
      <About/>
      
       

      {/* SKILLS */}
       {/* <Skills/> */}

      {/* PROJECTS */}
      {/* <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-6">
          <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-sm transition bg-white">
            <h3 className="text-xl font-semibold">CampusBooks</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              A student‑focused platform for uploading and browsing book listings, built
              with MongoDB and a clean custom HTML/CSS front‑end.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-sm transition bg-white">
            <h3 className="text-xl font-semibold">AI Study Assistant</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              An AI‑powered learning tool with summarization, flashcards, quiz
              generation, and a chat‑based tutor using the ChatGPT API.
            </p>
          </div>
        </div>
      </section> */}

      {/* CONTACT */}
      {/* <section className="max-w-4xl mx-auto text-center pb-20">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700 text-lg">Email: adedeji@example.com</p>
      </section> */}
    </main>
  );
}
