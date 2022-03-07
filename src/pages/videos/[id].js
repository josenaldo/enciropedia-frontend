import Image from "next/image";

import { Container, Box } from "@mui/material";

import { MDXProvider } from "@mdx-js/react";

import { VideoPage } from "@/components/videos";
import { Link, ResponsiveImage, Code } from "@/components/elements";
import { getAllVideosIds, getVideoData } from "@/common/lib";

const components = {
    img: ResponsiveImage,
    a: Link,
    pre: Code,
};

export async function getStaticPaths() {
    const paths = getAllVideosIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const video = await getVideoData(params.id);
    return {
        props: {
            video,
        },
    };
}

export default function Video({ video }) {
    return (
        <Container sx={{ my: "40px" }}>
            <MDXProvider components={components}>
                <VideoPage video={video} fullPage></VideoPage>
            </MDXProvider>
        </Container>
    );
}
