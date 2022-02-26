import Head from "next/head";
import Image from "next/image";

import { Box, Container, Typography, IconButton, Button } from "@mui/material";

import { theme } from "@/styles";

const palette = theme.palette;

export default function Home() {
    return (
        <>
            <Box
                component="section"
                sx={{
                    bgcolor: palette.background.default,
                }}
            >
                <Hero />
            </Box>
        </>
    );
}

function Hero() {
    return (
        <Container
            sx={{
                bgcolor: palette.background.alternative,
                my: 5,
                py: 10,
                borderRadius: "0.3rem",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItens: "center",
                    justifyContent: "flex-end",
                    textAlign: "center",
                }}
            >
                <Box>
                    <Image
                        src="/images/enciropedia-logo-icon-branca.svg"
                        alt="Logo da Enciropedia na Home"
                        width={222}
                        height={188}
                    ></Image>
                </Box>

                <Box>
                    <Typography
                        component="h1"
                        textAlign="center"
                        sx={{
                            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },

                            fontWeight: "700",
                            mb: "20px",
                        }}
                    >
                        Projeto Nacional de Desenvolvimento
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: {
                                xs: "1rem",
                                sm: "1.2rem",
                                md: "1.3rem",
                            },
                            display: "flex",
                            textAlign: "center",
                            width: "50%",
                            color: palette.neutral.main,
                        }}
                    >
                        Cansou de procurar informações sobre o PND? Cansou de
                        buscar dados sobre a vida do Ciro Gomes? Está buscando
                        novas entrevistas do Ciro pra assistir? A Enciropedia é
                        a sua solução!
                    </Typography>
                </Box>
                <Box mt="20px">
                    <Button
                        href="/pnd"
                        size="large"
                        variant="contained"
                        color="success"
                        sx={{ mx: "5px" }}
                    >
                        Conheça o PND
                    </Button>
                    <Button
                        href="/biografia"
                        size="large"
                        variant="contained"
                        color="primary"
                        sx={{ m: "5px" }}
                    >
                        Conheça o Ciro
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
