import Head from "next/head";
import { AppConfig } from "@/config";

import { Box, Container, Typography } from "@mui/material";

export default function UnauthorizedErrorPage() {
    return (
        <Container sx={{ my: "40px" }}>
            <Head>
                <title>Acesso não autorizado - {AppConfig.name}</title>
            </Head>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                <h1>Acesso não autorizado</h1>

                <Typography>
                    Você não tem permissão pra executar essa operação. Já
                    experimentou fazer login?
                </Typography>
                <Typography>
                    Se um nerd perguntar o que houve, diga que ocorreu um erro
                    401. Ele ficará impressionado.{" "}
                </Typography>
            </Box>
        </Container>
    );
}
