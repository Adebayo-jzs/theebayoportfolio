// app/page.jsx
// import { Metadata } from "next";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
// import { Computer } from "lucide-react";
// import Image from "next/image";
export const metadata = {
  metadataBase: new URL("https://adebayodv.com.ng"),
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
     images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Adedeji Adebayo Portfolio" }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adedeji Adebayo | Software Developer",
    description: "Portfolio website for fullstack javascript Developer,Adedeji Adebayo",
    site: "@theebayo",
    creator: "@theebayo",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: [
              "Adedeji Adebayo",
              "Theebayo",
              "Theebayo dev",
              "Adebayodv"
            ],
            jobTitle:[ 
              "Software Developer",
              "Frontend Developer",
              "Fullstack Developer",
              "Web Developer"
            ],
            url: "https://adebayodv.com.ng/",
            sameAs: [
              "https://x.com/theebayo",
              "https://linkedin.com/in/theebayo",
              "https://github.com/adebayo-jzs",
            ],
          }),
        }}
      />
    <main className="min-h-screen bg-white text-black px-6 md:px-10 lg:px-20 py-20flex flex-col gap-32 ">
      <Hero/>
      <About/>
      <Skills/>
    </main>
    </>
  );
}
