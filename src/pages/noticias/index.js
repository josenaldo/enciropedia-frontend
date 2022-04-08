import Head from "next/head";

import { Box, Container } from "@mui/material";

import { AppConfig } from "@/config";
import { ArticlesApi } from "@/common/lib";
import { NewsWall } from "@/components/news";

export async function getStaticProps() {
    const api = new ArticlesApi();
    const articles = await api.findAll("noticias");
    return {
        props: {
            articles: articles,
        },
    };
}

export default function NoticiasPage({ articles }) {
    // console.log(articles);
    return (
        <Container>
            <Head>
                <title>Notícias - {AppConfig.name}</title>
            </Head>
            <Box component="section">
                <NewsWall articles={articles} />
            </Box>
        </Container>
    );
}
