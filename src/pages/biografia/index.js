import Head from "next/head";

import { Box, Container } from "@mui/material";

import { AppConfig } from "@/config";
import { BiographyEventsApi } from "@/common/api";
import { TimeLine } from "@/components/biography";
import { Title } from "@/components/elements";

const getStaticProps = async () => {
    const api = new BiographyEventsApi();
    const result = await api.findAll();
    return {
        props: {
            result: result,
        },
    };
};

const BiografiaPage = ({ result }) => {
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
                    my: 5,
                }}
            >
                <Title>Biografia</Title>
                <TimeLine biographyEvents={result.data} />
            </Box>
        </Container>
    );
};

export { getStaticProps };
export default BiografiaPage;
