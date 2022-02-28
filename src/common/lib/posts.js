import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

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

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
        id,
        datePrefix,
        contentHtml,
        url: `/${matterResult.data.category}/${id}`,
        authorUrl: `/colaboradores}/${matterResult.data.author}`,
        ...matterResult.data,
    };
}
