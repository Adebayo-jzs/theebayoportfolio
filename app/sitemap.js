import { supabase } from "@/utils/supabase";

export default async function sitemap() {
    const { data: posts } = await supabase
        .from("posts")
        .select("slug, updated_at, created_at")
        .eq("published", true);

    const blogEntries = posts?.map((post) => ({
        url: `https://theebayo.name.ng/${post.slug}`,
        lastModified: new Date(post.updated_at || post.created_at),
        changeFrequency: 'weekly',
        priority: 0.8,
    })) || [];

    return [
        {
            url: 'https://theebayo.name.ng',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://theebayo.name.ng/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...blogEntries,
    ]
}
