import Head from "next/head";
import { AppConfig } from "@/config";

import { Box, Container, Typography } from "@mui/material";

export default function UnauthorizedErrorPage() {
    return (
        <Container>
            <Head>
                <title>Acesso não autorizado - {AppConfig.name}</title>
            </Head>
            <Box
                sx={{
                    my: 5,
                }}
            >
                <h1>Acesso não autorizado</h1>

                <Typography>
                    Você não tem permissão pra executar essa operação. Já
                    experimentou fazer login?
                </Typography>
                <Typography variant="caption">
                    Se um nerd perguntar o que houve, diga que ocorreu um erro
                    401. Ele ficará impressionado.{" "}
                </Typography>
            </Box>
        </Container>
    );
}
