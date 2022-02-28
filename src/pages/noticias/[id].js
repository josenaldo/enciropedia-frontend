import Image from "next/image";

import { Container, Box } from "@mui/material";

import { MDXProvider } from "@mdx-js/react";

import { NewsPage } from "@/components/news";
import { ResponsiveImage } from "@/components/elements";
import { Link } from "@/components/elements";
import { getAllPostIds, getPostData } from "@/common/lib";

const components = {
    img: ResponsiveImage,
    a: Link,
};

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = await getPostData(params.id);
    return {
        props: {
            post,
        },
    };
}

export default function Post({ post }) {
    return (
        <Container sx={{ my: "40px" }}>
            <MDXProvider components={components}>
                <NewsPage post={post} fullPage></NewsPage>
            </MDXProvider>
        </Container>
    );
}