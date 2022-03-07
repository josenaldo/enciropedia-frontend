import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import imageSize from "rehype-img-size";
import externalLinks from "rehype-external-links";
import rehypePrism from "rehype-prism-plus";

const videosDirectory = path.join(process.cwd(), "content/_videos");

function extractVideoId(filename) {
    return filename.replace(/\.md$/, "");
}

async function serializeContent(content) {
    const mdxSource = await serialize(content, {
        mdxOptions: {
            // use the image size plugin, you can also specify which folder to load images from
            // in my case images are in /public/images/, so I just prepend 'public'
            rehypePlugins: [
                [imageSize, { dir: "public" }],
                [
                    externalLinks,
                    {
                        target: "_blank",
                        rel: ["nofollow", "noopener", "noreferrer"],
                    },
                ],
                [rehypePrism],
            ],
        },
    });

    return mdxSource;
}

export function getSortedVideosData(numberOfVideos) {
    // Get file names under /videos
    const filenames = fs.readdirSync(videosDirectory);

    const allVideosData = filenames.map((filename) => {
        // Remove ".md" from file name to get id
        const id = extractVideoId(filename);

        // Read markdown file as string
        const fullPath = path.join(videosDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the video metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            url: `/videos/${id}`,
            ...matterResult.data,
        };
    });

    // Sort videos by date
    const videosData = allVideosData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });

    if (numberOfVideos) {
        return videosData.slice(0, numberOfVideos);
    } else {
        return videosData;
    }
}
