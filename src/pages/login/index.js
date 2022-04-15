import Head from "next/head";

import { Box, Container } from "@mui/material";

import { AppConfig } from "@/config";

export default function LoginPage() {
    return (
        <Container sx={{ px: { lg: 0 } }}>
            <Head>
                <title>Login - {AppConfig.name}</title>
            </Head>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                <h1>Login</h1>
            </Box>
        </Container>
    );
}
