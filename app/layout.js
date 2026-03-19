import { Geist, Geist_Mono } from "next/font/google"; 
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://theebayo.name.ng"),
  title: {
    default: "Adebayo ADEDEJI | Software Developer",
    template: "%s | Adebayo ADEDEJI",
  },
  description: "Fullstack Javascript developer skilled in Next.js, React, Node.js and modern javascript technologies",
  keywords: ["Adebayo ADEDEJI", "Theebayo", "Software Developer", "Next.js", "React", "Node.js"],
  authors: [{ name: "Adebayo ADEDEJI" }],
  creator: "Adebayo ADEDEJI",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theebayo.name.ng",
    title: "Adebayo ADEDEJI | Software Developer",
    description: "Fullstack Javascript developer skilled in Next.js, React, Node.js and modern javascript technologies",
    siteName: "Adebayo ADEDEJI Portfolio",
     images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Adedeji Adebayo Portfolio" }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adebayo ADEDEJI | Software Developer",
    description: "Fullstack Javascript developer skilled in Next.js, React, Node.js and modern javascript technologies",
    creator: "@theebayo",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Adebayo ADEDEJI",
              image: "https://theebayo.name.ng/avatar.jpg",
              "alternateName": ["Theebayo", "Adedeji Adebayo", "Adebayodv"],
              "jobTitle": "FullStack JavaScript Developer",
              "description":"Fullstack Javascript developer skilled in Next.Js,React,Node.js and modern javascript technologies",
              "url": "https://theebayo.name.ng",
              "image": "https://theebayo.name.ng/avatar.jpg",
              "sameAs": [
                "https://x.com/theebayo",
                "https://linkedin.com/in/theebayo",
                "https://github.com/adebayo-jzs"
              ],
              "socialLinks": [
                "https://x.com/theebayo",
                "https://linkedin.com/in/theebayo",
                "https://github.com/adebayo-jzs"
              ],
              "knowsAbout": [
                "Next.js",
                "React",
                "Javascript",
                "Node.js",
                "Tailwind CSS",
                "Frontend Development",
                "Backend Development",
                "Web Applications"
              ],
              "skills": [
                "Next.js",
                "Javascript",
                "React",
                "Node.js",
                "Tailwind CSS",
                "Frontend Development",
                "Backend Development",
                "Web Applications"
              ]
            }),
          }}
        />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
