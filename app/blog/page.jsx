import { ArrowOutward } from "@mui/icons-material";
import Link from "next/link";

export const metadata = {
    metadataBase: new URL("https://theebayo.name.ng/blog"),
    title: "Adebayo ADEDEJI (theebayo) | Software Developer | Blog",
    description:
        "Sharing insights on Next.js, Software Development and life updates.",
     
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
        "Tech Blog",
    ],
    authors: [{ name: "Adedeji Adebayo", url: "https://theebayo.name.ng" }],
    openGraph: {
        title: "Theebayo | Blog - Insights on Software Development",
        description:
            "Sharing insights on Next.js, software development, and life updates.",
        type: "website",
        url: "https://theebayo.name.ng/blog",
        siteName: "Theebayo",
        images: [
            { url: "/og-image.jpg", width: 1200, height: 630, alt: "Adedeji Adebayo Portfolio" }
        ],
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        title: "Theebayo | Blog - Insights on Software Development",
        description: "Sharing insights on Next.js, software development, and life updates.",
        site: "@theebayo",
        creator: "@theebayo",
        images: ["/og-image.jpg"],
    },
};

const insights = [
    {date:"Jan 20, 2026",title:"Building Textcognito",excerpt:"Built out of curiousity",type:"engineering",link:"/building-textcognito"},
    {date:"Jan 24, 2026",title:"Integrating Gemini SDK in Textcognito",excerpt:"Gemini SDK in Textcognito",type:"ai",link:"/building-textcognito"},
    {date:"Jan 26, 2026",title:"Frontend Engineering in 2026",excerpt:"Building scalable frontends in 2026",type:"architecture",link:"/building-textcognito"},
    // {date:"Jan 20, 2026",title:"Building Textcognito",excerpt:"Built out of curiousity",type:"engineering",link:"/building-textcognito"},
    // {date:"Jan 20, 2026",title:"Building Textcognito",excerpt:"Built out of curiousity",type:"engineering",link:"/building-textcognito"},
]
export default function Blog() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Theebayo Blog",
        "description": "Sharing insights on Next.js, Software Development and life updates.",
        "url": "https://theebayo.name.ng/blog",
        "author": {
            "@type": "Person",
            "name": "Adedeji Adebayo",
            "url": "https://theebayo.name.ng"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="bg-[#050505] text-white selection:bg-white selection:text-black min-h-screen overflow-x-hidden">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 ">
                    <section className="md:min-h-screen flex flex-col justify-center  pt-30 lg:pt-0" id="hero">
                        <h1 className="font-outfit leading-[0.9]  mb-10">
                            <span className="text-[17vw] md:text-[15vw] font-black tracking-tighter text-white">INSIGHTS</span>
                        </h1>
                        {/* <p>eew</p> */}
                        <p className="font-serif text-2xl lg:text-3xl text-white/80 max-w-2xl italic border-l-4 border-white pl-8">Thoughts on software architecture,engineering,<br />philosophy of physical designs and life update.</p>

                    </section>
                    <section className="min-h-scree mb-15 flex flex-col justify-center  pt-20 lg:pt-0" id="hero">
                        {insights.map((item,index) => (
                            <Link href={item.link} className="blog-item group grid grid-cols-1 md:grid-cols-12 gap-5 py-16 border-b border-white/10 items-center hover:bg-white/5 transition-all duration-300 cursor-pointer" key={index}>
                                <div className="md:col-span-3 flex flex-col gap-1">
                                    <span className="text-sm font-bold tracking-widest text-white/50 uppercase">{item.date}</span>
                                    <span className="text-xs font-black tracking-widest text-white uppercase">/ {item.type}</span>
                                </div>
                                <div className="md:col-span-6">
                                    <h2 className="">
                                        <span className="text-4xl md:text-5xl font-black tracking-tighter uppercase">{item.title}</span>
                                    </h2>
                                </div>
                                <div className="md:col-span-3 flex justify-between items-center pr-4">
                                    <p className="text-sm text-white/60  truncat">{item.excerpt}</p>
                                    <span className="transform group-hover:translate-x-2 transition-transform"><ArrowOutward/></span>
                                </div>
                            </Link>
                        ))}
                    </section>
                </div>
            </div>
        </>
    );
}