import Head from "next/head";
import { Container } from "@mui/material";
import { AppConfig } from "@/config";
import { BiographyEventsApi } from "@/common/api";
import { BiographyEventPage } from "@/components/biography";

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
            {/* <MDXProvider components={components}> */}
            <BiographyEventPage biographyEvent={biographyEvent} />
            {/* </MDXProvider> */}
        </Container>
    );
}
