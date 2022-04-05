import Image from "next/image";

import { Container, Box } from "@mui/material";

import { MDXProvider } from "@mdx-js/react";

import { BiographyEventPage } from "@/components/biography";
import { Link, ResponsiveImage, Code } from "@/components/elements";
import { BiographyEventsApi } from "@/common/lib";

const components = {
    img: ResponsiveImage,
    a: Link,
    pre: Code,
};

export async function getStaticPaths() {
    const api = new BiographyEventsApi();
    const paths = await api.findAllPaths();

    // const paths = getAllBiographyEventSlugs();
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
            <MDXProvider components={components}>
                {/* <BiographyEventPage biographyEvent={post}></BiographyEventPage> */}
                <h1>{biographyEvent.titulo}</h1>
                <p>{biographyEvent.resumo}</p>
            </MDXProvider>
        </Container>
    );
}
