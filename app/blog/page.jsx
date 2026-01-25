
export const metadata = {
    metadataBase: new URL("https://theebayo.name.ng"),
    title: "Theebayo | Blog",
    description:
        "Sharing insights on Next.js, Software Development and life updates.",
    alternates: {
        canonical: "/blog",
    },
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
                    <section className="min-h-screen flex flex-col justify-center  pt-20 lg:pt-0" id="hero">
                        <h1 className="font-outfit leading-[0.9]  mb-10">
                            <span className="text-[17vw] md:text-[15vw] font-black tracking-tighter text-white">INSIGHTS</span>
                        </h1>
                        {/* <p>eew</p> */}
                        <p className="font-serif text-2xl lg:text-3xl text-white/80 max-w-2xl italic border-l-4 border-white pl-8">Thoughts on software architecture,engineering,<br />philosophy of physical designs and life update.</p>

                    </section>
                </div>
            </div>
        </>
    );
}