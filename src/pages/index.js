import { Box, Container } from "@mui/material";

import { ArticlesApi } from "@/common/api";
import { NewsWall } from "@/components/news";
import { Hero } from "@/components/home";

export async function getStaticProps() {
    const api = new ArticlesApi();
    const result = await api.findAll("noticias", 1, 3);
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
                    bgcolor: "background.b500",
                    px: "0px",
                }}
            >
                <Container>
                    <Box sx={{ my: 5, py: 5 }}>
                        <NewsWall articles={articlesResult.data} />
                    </Box>
                </Container>
            </Box>
        </>
    );
}
