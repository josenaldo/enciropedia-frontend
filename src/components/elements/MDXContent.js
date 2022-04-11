import externalLinks from "rehype-external-links";
import rehypePrism from "rehype-prism-plus";

import ReactMarkdown from "react-markdown";

const MDXContent = ({ content }) => {
    const plugins = [
        [
            externalLinks,
            {
                target: "_blank",
                rel: ["nofollow", "noopener", "noreferrer"],
            },
        ],
        [rehypePrism],
    ];

    return <ReactMarkdown remarkPlugins={plugins}>{content}</ReactMarkdown>;
};

export { MDXContent };
