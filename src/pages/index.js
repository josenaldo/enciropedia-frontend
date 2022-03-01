import Image from "next/image";

import { Box, Container, Typography, Button } from "@mui/material";

import { getSortedPostsData } from "@/common/lib";
import { NewsWall } from "@/components/news";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData(3);
    return {
        props: {
            allPostsData,
        },
    };
}

export default function HomePage({ allPostsData }) {
    return (
        <>
            <Box
                component="section"
                sx={{
                    bgcolor: "background.default",
                }}
            >
                <Hero />
            </Box>

            <Box
                component="section"
                sx={{
                    bgcolor: "background.b500",
                }}
            >
                <NewsWall posts={allPostsData} />
            </Box>
        </>
    );
}

function Hero() {
    return (
        <Container
            sx={{
                bgcolor: "background.paper",
                my: 5,
                py: "40px",
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
                            color: "neutral.main",
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
                        color="primary"
                        sx={{ mx: "5px" }}
                    >
                        Conheça o PND
                    </Button>
                    <Button
                        href="/biografia"
                        size="large"
                        variant="contained"
                        color="secondary"
                        sx={{ m: "5px" }}
                    >
                        Conheça o Ciro
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
