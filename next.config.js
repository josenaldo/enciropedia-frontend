/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    },
};

module.exports = nextConfig;

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    commonmark: true,
    gfm: true,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        providerImportSource: "@mdx-js/react",
    },
});
module.exports = withMDX({
    // Append the default value with md extensions
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
