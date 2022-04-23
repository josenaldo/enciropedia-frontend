/** @type {import('next').NextConfig} */

// const withMDX = require("@next/mdx")({
//     extension: /\.mdx?$/,
//     commonmark: true,
//     gfm: true,
//     options: {
//         remarkPlugins: [],
//         rehypePlugins: [],
//         providerImportSource: "@mdx-js/react",
//     },
// });
// module.exports = withMDX({
//     // Append the default value with md extensions
//     pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
// });

module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            "img.youtube.com",
            "i3.ytimg.com",
            "cdn-site.cirogomes.com.br",
            "s3.amazonaws.com",
            "res.cloudinary.com",
        ],
    },
    env: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
        NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
        STRAPI_URL: process.env.STRAPI_URL,
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    },
};
