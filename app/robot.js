// Updated robots.js configuration for Rahma Landing Page
// This file exports a function that returns robots settings used by Next.js
// See https://nextjs.org/docs/app/api-reference/next-config-js/robots for details

export default function robots() {
  return {
    // Allow all user agents (search engine bots) to crawl every path on the site.
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Add disallow rules here if there are pages you want to hide from search engines.
        // Example: disallow: '/admin'
      },
    ],
    // Provide the absolute URL to your XML sitemap so crawlers can find it easily.
    sitemap: 'https://rahmalandingpage.vercel.app/sitemap.xml',
    // Specify the canonical host name of your site.
    host: 'https://rahmalandingpage.vercel.app',
  };
}
