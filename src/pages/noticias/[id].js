import Head from "next/head";
import Image from "next/image";

import { Container, Box } from "@mui/material";

import { MDXProvider } from "@mdx-js/react";

import { AppConfig } from "@/config";
import { getAllPostIds, getPostData } from "@/common/lib";
import { NewsPage } from "@/components/news";
import { Link, ResponsiveImage, Code } from "@/components/elements";

const components = {
    img: ResponsiveImage,
    a: Link,
    pre: Code,
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
            <Head>
                <title>
                    {post.titulo} - {AppConfig.name}
                </title>
            </Head>
            <MDXProvider components={components}>
                <NewsPage post={post} fullPage></NewsPage>
            </MDXProvider>
        </Container>
    );
}
