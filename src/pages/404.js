import Head from "next/head";
import { AppConfig } from "@/config";

import { Box, Container } from "@mui/material";

export default function PageNotFoundErrorPage() {
    return (
        <Container sx={{ my: "40px" }}>
            <Head>
                <title>404 - {AppConfig.name}</title>
            </Head>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                <h1>Página não encontrada</h1>
            </Box>
        </Container>
    );
}
