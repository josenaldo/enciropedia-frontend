import Head from "next/head";
import { AppConfig } from "@/config";

import { Box, Container, Typography } from "@mui/material";

export default function PageNotFoundErrorPage() {
    return (
        <Container sx={{ my: "40px" }}>
            <Head>
                <title>Página não encontrada - {AppConfig.name}</title>
            </Head>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                <h1>Página não encontrada</h1>

                <Typography>
                    A página que você procura não foi encontrada.
                </Typography>
                <Typography>
                    Se um nerd perguntar o que houve, diga que ocorreu um erro
                    404. Ele ficará impressionado.{" "}
                </Typography>
            </Box>
        </Container>
    );
}
