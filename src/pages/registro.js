import Head from "next/head";
import { AppConfig } from "@/config";

import { Box, Container } from "@mui/material";

import { RegisterPage } from "@/components/account";

export default function RegistroPage() {
    return (
        <Container sx={{ my: "40px" }}>
            <Head>
                <title>Registro - {AppConfig.name}</title>
            </Head>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                <RegisterPage />
            </Box>
        </Container>
    );
}
