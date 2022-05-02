import { Box, Button, Container } from "@mui/material";

import { ChevronRight as ChevronRightIcon } from "@mui/icons-material";

import { ArticlesApi } from "@/common/api";
import { NewsCarousel } from "@/components/news";
import { VideosCarousel } from "@/components/videos";
import { Hero } from "@/components/home";
import { Title } from "@/components/elements";

export async function getStaticProps() {
    const api = new ArticlesApi();
    const articles = await api.findAll("noticias", 1, 5);
    const videos = await api.findAll("videos", 1, 5);
    return {
        props: {
            articles: articles,
            videos: videos,
        },
    };
}

export default function Home({ articles, videos }) {
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
                            // my: 5,
                            py: 5,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Title color="neutral.main">Últimas Notícias</Title>
                        <Box>
                            <NewsCarousel articles={articles.data} />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                // mt: 5,
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

            <Box
                component="section"
                sx={{
                    bgcolor: "background.paper",
                    px: "0px",
                }}
            >
                <Container>
                    <Box
                        sx={{
                            // my: 5,
                            py: 5,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Title color="neutral.main">Últimos Vídeos</Title>
                        <Box>
                            <VideosCarousel videos={videos.data} />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                // mt: 5,
                            }}
                        >
                            <Button
                                variant="outlined"
                                color="primary"
                                href="/videos"
                                endIcon={<ChevronRightIcon />}
                            >
                                Ver mais vídeos
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
