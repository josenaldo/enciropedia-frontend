import { MDXProvider } from "@mdx-js/react";

import externalLinks from "rehype-external-links";
import rehypePrism from "rehype-prism-plus";

import ReactMarkdown from "react-markdown";
import { Link, ResponsiveImage, Code } from "@/components/elements";

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

    const components = {
        img: ResponsiveImage,
        a: Link,
        pre: Code,
    };

    return (
        <MDXProvider components={components}>
            <ReactMarkdown remarkPlugins={plugins}>{content}</ReactMarkdown>
        </MDXProvider>
    );
};

export { MDXContent };
