// app/page.jsx
// import { Metadata } from "next";
// import { motion } from "framer-motion";
 
import HomePage from "./main";
export const metadata = {
  metadataBase: new URL("https://theebayo.name.ng"),
  title: "Adebayo ADEDEJI | Software Developer",
  description:
    "Software Developer specializing in modern full‑stack development with Next.js, React,Node.js and other prominent javascript technologies",
  keywords: [
    "Adedeji Adebayo",
    "Theebayo",
    "Theebayo dev",
    "frontend Developer",
    "Software Developer",
    "Adedeji Samod Adebayo",
    "Adedeji Samod",
    "Adebayodv",
    "Javascript",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Adedeji Adebayo" }],
  openGraph: {
    title: "Adebayo ADEDEJI | Software Developer",
    description:
      "Portfolio website for fullstack javascript Developer,Adedeji Adebayo",
    type: "website",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Adedeji Adebayo Portfolio" }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adebayo ADEDEJI | Software Developer",
    description: "Portfolio website for fullstack javascript Developer,Adedeji Adebayo",
    site: "@theebayo",
    creator: "@theebayo",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      {/* <script
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
            url: "https://theebayo.name.ng",
            sameAs: [
              "https://x.com/theebayo",
              "https://linkedin.com/in/theebayo",
              "https://github.com/adebayo-jzs",
            ],
          }),
        }}
      /> */}
      <main className="min-h-screen flex flex-col ">
        {/* <main className="min-h-screen bg-[#f0f4f9] text-black px-6 md:px-10 xl:px-60  flex flex-col "> */}
        {/* <Navbar/> */}
        <HomePage />
        {/* <NewPortfolio/> */}
        {/* <Hero/> */}
        {/* <About/> */}
        {/* <Skills/> */}
        {/* <Projects/> */}
        {/* <Contact/>   */}

        {/* <footer className="footer-container">
        <div className="big-text text-[17vw] md:text-[15vw]">LET'S BUILD</div>
      </footer> */}
      </main>
    </>
  );
}
