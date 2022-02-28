import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getSortedPostsData(numberOfPosts) {
    const postsDirectory = path.join(process.cwd(), "content/_posts");
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.slice(11).replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            url: `/${matterResult.data.category}/${id}`,
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
