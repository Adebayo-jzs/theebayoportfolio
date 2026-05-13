export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            allow: '/api/llm',
            allow: '/projects',
            allow: '/projects/*',
            allow: '/blog',
        },
        sitemap: 'https://theebayo.name.ng/sitemap.xml',
    }
}
