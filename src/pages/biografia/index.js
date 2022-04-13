import Head from "next/head";

import { Box, Container } from "@mui/material";

import { AppConfig } from "@/config";
import { BiographyEventsApi } from "@/common/lib";
import { TimeLine } from "@/components/biography";

export async function getStaticProps() {
    const api = new BiographyEventsApi();
    const result = await api.findAll();
    return {
        props: {
            result: result,
        },
    };
}

export default function BiografiaPage({ result }) {
    return (
        <Container sx={{ px: { lg: 0 } }}>
            <Head>
                <title>Biografia - {AppConfig.name}</title>
            </Head>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                <TimeLine biographyEvents={result.data} />
            </Box>
        </Container>
    );
}
