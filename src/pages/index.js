import { Box, Button, Container } from "@mui/material";

import { ChevronRight as ChevronRightIcon } from "@mui/icons-material";

import { ArticlesApi } from "@/common/api";
import { NewsCarousel } from "@/components/news";
import { Hero } from "@/components/home";
import { Title } from "@/components/elements";

export async function getStaticProps() {
    const api = new ArticlesApi();
    const result = await api.findAll("noticias", 1, 5);
    return {
        props: {
            articlesResult: result,
        },
    };
}

export default function Home({ articlesResult }) {
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
                    bgcolor: "background.b800",
                    px: "0px",
                }}
            >
                <Container>
                    <Box
                        sx={{
                            my: 5,
                            py: 5,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Title color="neutral.main">Notícias</Title>
                        <Box>
                            <NewsCarousel articles={articlesResult.data} />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 5,
                            }}
                        >
                            <Button
                                variant="outlined"
                                color="primary"
                                href="/noticias"
                                endIcon={<ChevronRightIcon />}
                            >
                                Ver mais notícias
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
