export const revalidate = 86400;
import { supabase } from "@/utils/supabase";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from '@mui/icons-material';
import MarkdownIt from "markdown-it";
import { ArrowOutward } from "@mui/icons-material";
import SharePost from "./share";

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
});

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const { data: post } = await supabase
        .from("posts")
        .select("title, excerpt, slug, created_at, updated_at")
        .eq("slug", slug)
        .eq("published", true)
        .single();

    if (!post) {
        notFound();
    }

    return {
        title: post.title,
        description: post.excerpt,
        keywords: [post.category, "Web Development", "JavaScript", "Frontend", "Tech Blog"].filter(Boolean),
        alternates: {
            canonical: `https://theebayo.name.ng/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://theebayo.name.ng/${post.slug}`,
            type: "article",
            publishedTime: post.created_at,
            modifiedTime: post.updated_at,
            authors: ["Adebayo Adedeji"],
            images: [
                {
                    url: `https://theebayo.name.ng/${post.slug}/opengraph-image`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [`https://theebayo.name.ng/${post.slug}/opengraph-image`],
        },
    };
}

const formatDate = (string) => {
    return new Date(string).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

export async function generateStaticParams() {
    const { data: posts } = await supabase
        .from("posts")
        .select("slug")
        .eq("published", true);

    if (!posts) return [];

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;

    const { data: post } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

    if (!post) notFound();
    
    const htmlContent = md.render(post.content);
    
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.created_at,
        dateModified: post.updated_at,
        author: {
            "@type": "Person",
            name: "Adebayo Adedeji",
            url: "https://theebayo.name.ng",
            sameAs: [
                "https://twitter.com/theebayo",
                "https://github.com/Adebayo-jzs",
                "https://linkedin.com/in/theebayo",
            ],
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="bg-[#050505] grid-bg-static text-white selection:bg-white selection:text-black min-h-screen overflow-x-hidden relative">
                 {/* <div className="fixed inset-0 z-50 pointer-events-none noise-overlay opacity-20"></div> */}
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 pt-20 md:pt-32">
                    
                    {/* Header / Nav Area */}
                    <div className="pt-10 mb-12 md:mb-20 flex justify-between items-center relative z-10">
                        <Link 
                            href="/blog" 
                            className="group flex items-center gap-2 text-sm font-bold tracking-widest text-white/50 uppercase hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to Insights
                        </Link>
                        <SharePost shareLink={`https://theebayo.name.ng/${post.slug}`} title={post.title} />
                    </div>

                    <article className="max-w-3xl mx-auto relative z-10">
                        {/* Article Header */}
                        <header className="mb-16 border-b border-white/10 pb-10">
                            <div className="flex flex-col gap-6 mb-8">
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm font-bold tracking-widest text-white/50 uppercase font-mono">
                                    <span>{formatDate(post.created_at)}</span>
                                    <span className="text-white/20">/</span>
                                    <span className="text-[#00e6ff]">{post.category}</span>
                                    <span className="text-white/20">/</span>
                                    <span>{post.read_time}</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase font-outfit leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">
                                    {post.title}
                                </h1>
                            </div>
                            <p className="font-serif text-lg md:text-2xl text-white/80 italic pl-6 border-l-2 border-[#00e6ff] max-w-2xl leading-relaxed">
                                {post.excerpt}
                            </p>
                        </header>

                        {/* Article Content */}
                        <div 
                            className="prose prose-invert prose-lg max-w-none
                            prose-headings:font-outfit prose-headings:font-black prose-headings:tracking-tight prose-headings:uppercase prose-headings:text-white/90
                            prose-p:font-serif prose-p:text-white/70 prose-p:leading-loose prose-p:font-light
                            prose-a:text-[#00e6ff] prose-a:no-underline hover:prose-a:underline hover:prose-a:underline-offset-4
                            prose-strong:text-white prose-strong:font-bold
                            prose-code:text-[#00e6ff] prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-sm
                            prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
                            prose-blockquote:border-l-2 prose-blockquote:border-[#00e6ff] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-white/60
                            prose-img:rounded-xl prose-img:border prose-img:border-white/10 prose-img:w-full prose-img:shadow-2xl
                            prose-hr:border-white/10 prose-hr:my-12
                            prose-ul:marker:text-[#00e6ff] prose-ol:marker:text-[#00e6ff]
                            mb-18 md:mb-32 selection:bg-[#00e6ff] selection:text-black"
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />
                    </article>

                    {/* Footer / More Posts Link */}
                    <div className="border-t border-white/10 py-20 relative z-10 flex justify-center">
                        <Link href="/blog" className="group inline-flex items-center gap-3 text-2xl md:text-4xl font-black tracking-tighter uppercase text-white/40 hover:text-white transition-colors duration-300">
                            <span>Read more insights</span>
                            <ArrowOutward className="w-8 h-8 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 text-[#00e6ff]" />
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}