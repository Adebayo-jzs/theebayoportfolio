import { ArrowOutward } from "@mui/icons-material";
import Link from "next/link";
import { supabase } from "@/utils/supabase";

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

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

export default async function Blog() {
    const { data: posts } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

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
            <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground min-h-screen overflow-x-hidden">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 ">
                    <section className="md:min-h-screen flex flex-col justify-center  pt-30 lg:pt-0" id="hero">
                        <h1 className="font-outfit leading-[0.9] mb-10">
                            <span className="text-[17vw] md:text-[15vw] font-black tracking-tighter text-foreground/90">INSIGHTS</span>
                        </h1>
                        <p className="font-serif text-2xl lg:text-3xl text-foreground/80 max-w-2xl italic border-l-4 border-foreground pl-8">Thoughts on software architecture,engineering,<br />philosophy of physical designs and life update.</p>

                    </section>
                    <section className="min-h-scree mb-15 flex flex-col justify-center  pt-20 lg:pt-0" id="posts">
                        {/* {!posts || posts.length === 0 ? ( */}
                        {!posts || posts.length > 0 ? (
                            <p className="text-center text-foreground/50 py-20 text-lg">No posts yet. Check back soon!</p>
                        ) : (
                            posts.map((post) => (
                                <Link href={`/${post.slug}`} className="blog-item group grid grid-cols-1 lg:grid-cols-12 gap-5 py-16 border-b border-border/10 items-center hover:bg-foreground/5 transition-all duration-300 cursor-pointer" key={post.id}>
                                    <div className="lg:col-span-3 flex flex-col gap-1">
                                        <span className="text-sm font-bold tracking-widest text-foreground/50 uppercase">{formatDate(post.created_at)}</span>
                                        <span className="text-xs font-black tracking-widest text-foreground uppercase">/ {post.category}</span>
                                    </div>
                                    <div className="lg:col-span-6">
                                        <h2 className="">
                                            <span className="text-4xl lg:text-5xl font-black tracking-tighter uppercase">
                                                {post.title.length > 50 ? post.title.slice(0, 50) + "..." : post.title}
                                            </span>
                                        </h2>
                                    </div>
                                    <div className="lg:col-span-3 flex justify-between items-center pr-4">
                                        <p className="text-sm text-foreground/60  truncat">{post.excerpt}</p>
                                        <span className="transform group-hover:translate-x-2 transition-transform text-foreground"><ArrowOutward/></span>
                                    </div>
                                </Link>
                            ))
                        )}
                    </section>
                </div>
            </div>
        </>
    );
}