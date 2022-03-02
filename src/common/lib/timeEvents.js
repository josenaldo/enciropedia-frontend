import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import imageSize from "rehype-img-size";
import externalLinks from "rehype-external-links";
import rehypePrism from "rehype-prism-plus";

const timeEventsDirectory = path.join(process.cwd(), "content/_biografia");
const timeEventsCategory = "biografia";

function extractTimeEventsId(filename) {
    return filename.replace(/\.md$/, "");
}

export function getAllTimeEventsData(numberOfTimeEvents) {
    // Get file names under /posts
    const filenames = fs.readdirSync(timeEventsDirectory);

    const allTimeEventsData = filenames.map((filename) => {
        // Remove ".md" from file name to get id
        const id = extractTimeEventsId(filename);

        // Read markdown file as string
        const fullPath = path.join(timeEventsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents);

        // Combine the data with the id
        return {
            date: data.date,
            title: data.title,
            excerpt: data.excerpt,
            url: `/${timeEventsCategory}/${id}`,
            order: data.order,
            // cardDetailedText: data.content,
            media: {
                type: "IMAGE",
                source: {
                    url: data.image.path,
                },
            },
        };
        // return {
        //     id,
        //     url: `/${timeEventsCategory}/${id}`,
        //     ...data,
        // };
    });

    // Sort timeEvents by order
    const timeEventsData = allTimeEventsData.sort(
        ({ order: a }, { order: b }) => {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        }
    );

    if (numberOfTimeEvents) {
        return timeEventsData.slice(0, numberOfTimeEvents);
    } else {
        return timeEventsData;
    }
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
export function getAllTimeEventsIds() {
    const filenames = fs.readdirSync(timeEventsDirectory);

    return filenames.map((filename) => {
        return {
            params: {
                id: extractTimeEventsId(filename),
            },
        };
    });
}

export async function getdTimeEventData(id) {
    const fullPath = path.join(timeEventsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

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

    // Combine the data with the id
    return {
        id,
        mdxSource,
        url: `/${timeEventsCategory}/${id}`,
        ...data,
    };
}
