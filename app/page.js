// app/page.jsx
// import { Metadata } from "next";
// import { motion } from "framer-motion";
 
import HomePage from "./main";
export const metadata = {
  metadataBase: new URL("https://theebayo.name.ng"),
  title: "Samod ADEDEJI | Software Developer",
  description:
    "Software Developer specializing in modern full‑stack development with Next.js, React,Node.js and other prominent javascript technologies",
  keywords: [
    "Adedeji Samod",
    "Samod Adedeji",
    "Theebayo dev",
    "Theebayo",
    "bytebybayo",
    "Theebayo dev",
    "frontend Developer",
    "Framer Developer",
    "Framer Website",
    "Wordpress Developer",
    "Wordpress Engineer",
    "Software Developer",
    "Adedeji Samod Adebayo",
    "Adedeji Samod",
    "Javascript",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Adedeji Samod" }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Samod ADEDEJI | Software Developer",
    description:
      "Portfolio website for fullstack software developer,Adedeji Samod",
    type: "website",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Adedeji Samod Portfolio" }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samod ADEDEJI | Software Developer",
    description: "Portfolio website for fullstack software developer,Adedeji Samod",
    site: "@theebayo",
    creator: "@bytebybayo",
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
              "Adedeji Samod",
              "Theebayo",
              "Theebayo dev",
              "Samoddv"
            ],
            jobTitle:[ 
              "Software Developer",
              "Frontend Developer",
              "Fullstack Developer",
              "Web Developer"
            ],
            url: "https://theebayo.name.ng",
            sameAs: [
              "https://x.com/bytebybayo",
              "https://linkedin.com/in/theebayo",
              "https://github.com/Adebayo-jzs",
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
