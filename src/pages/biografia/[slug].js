import Head from "next/head";

import { Container, Box } from "@mui/material";

import { MDXProvider } from "@mdx-js/react";

import { AppConfig } from "@/config";
import { Link, ResponsiveImage, Code } from "@/components/elements";
import { BiographyEventsApi } from "@/common/lib";
import { BiographyEventPage } from "@/components/biography";

const components = {
    img: ResponsiveImage,
    a: Link,
    pre: Code,
};

export async function getStaticPaths() {
    const api = new BiographyEventsApi();
    const paths = await api.findAllPaths();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const api = new BiographyEventsApi();

    const biographyEvent = await api.getData(params.slug);
    return {
        props: {
            biographyEvent,
        },
    };
}

export default function Post({ biographyEvent }) {
    return (
        <Container sx={{ my: "40px" }}>
            <Head>
                <title>
                    {biographyEvent.titulo} - {AppConfig.name}
                </title>
            </Head>
            <MDXProvider components={components}>
                <BiographyEventPage biographyEvent={biographyEvent} />
            </MDXProvider>
        </Container>
    );
}
