import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import imageSize from "rehype-img-size";
import externalLinks from "rehype-external-links";
import rehypePrism from "rehype-prism-plus";

const postsDirectory = path.join(process.cwd(), "content/_posts");

function extractPostId(filename) {
    return filename.slice(11).replace(/\.md$/, "");
}

function extractPostDatePrexix(filename) {
    return filename.slice(0, 11);
}

function getPostDatePrefix(id) {
    const postsIds = getAllPostIds();

    const found = postsIds.find((data) => data.params.id === id);

    if (found) {
        return found.params.datePrefix;
    } else {
        return null;
    }
}

export function getSortedPostsData(numberOfPosts) {
    // Get file names under /posts
    const filenames = fs.readdirSync(postsDirectory);

    const allPostsData = filenames.map((filename) => {
        // Remove ".md" from file name to get id
        const id = extractPostId(filename);
        const datePrefix = extractPostDatePrexix(filename);

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            datePrefix,
            url: `/${matterResult.data.category}/${id}`,
            authorUrl: `/colaboradores}/${matterResult.data.author}`,
            ...matterResult.data,
        };
    });

    // Sort posts by date
    const postsData = allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });

    if (numberOfPosts) {
        return postsData.slice(0, numberOfPosts);
    } else {
        return postsData;
    }
}

export function getPostsLinks() {
    // Get file names under /posts
    const filenames = fs.readdirSync(postsDirectory);

    const allPostsData = filenames.map((filename) => {
        // Remove ".md" from file name to get id
        const id = extractPostId(filename);
        const datePrefix = extractPostDatePrexix(filename);

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            url: `/${matterResult.data.category}/${id}`,
            text: matterResult.data.title,
        };
    });

    return allPostsData;
}

/**
 * Returns an array that looks like this:
 *
 * @example
 * [
 *     {
 *         params: {
 *             id: 'ssg-ssr'
 *         }
 *     },
 *     {
 *         params: {
 *             id: 'pre-rendering'
 *         }
 *     }
 * ]
 */
export function getAllPostIds() {
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => {
        return {
            params: {
                id: extractPostId(filename),
                datePrefix: extractPostDatePrexix(filename),
            },
        };
    });
}

export async function getPostData(id) {
    const datePrefix = getPostDatePrefix(id);

    const fullPath = path.join(postsDirectory, `${datePrefix}${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const mdxSource = await serialize(matterResult.content, {
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

    // Combine the data with the id
    return {
        id,
        datePrefix,
        mdxSource,
        url: `/${matterResult.data.category}/${id}`,
        authorUrl: `/colaboradores}/${matterResult.data.author}`,
        ...matterResult.data,
    };
}
