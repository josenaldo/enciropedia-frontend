import Head from "next/head";
import { AppConfig } from "@/config";

import { Box, Container, Typography } from "@mui/material";

export default function PageNotFoundErrorPage() {
    return (
        <Container>
            <Head>
                <title>Página não encontrada - {AppConfig.name}</title>
            </Head>
            <Box
                sx={{
                    my: 5,
                }}
            >
                <h1>Página não encontrada</h1>

                <Typography>
                    A página que você procura não foi encontrada.
                </Typography>
                <Typography variant="caption">
                    Se um nerd perguntar o que houve, diga que ocorreu um erro
                    404. Ele ficará impressionado.{" "}
                </Typography>
            </Box>
        </Container>
    );
}
