import Head from "next/head";
import { Container } from "@mui/material";
import { AppConfig } from "@/config";
import { ArticlesApi } from "@/common/api";
import { ArticlePage } from "@/components/articles";

// const articleCategory = "noticias";

export async function getStaticPaths() {
    const api = new ArticlesApi();
    const paths = await api.findAllPaths();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const api = new ArticlesApi();

    const article = await api.getData(params.slug, params.category);
    return {
        props: {
            article,
        },
    };
}

export default function Post({ article }) {
    return (
        <Container sx={{ my: "40px" }}>
            <Head>
                <title>
                    {article.titulo} - {AppConfig.name}
                </title>
            </Head>
            <ArticlePage article={article}></ArticlePage>
        </Container>
    );
}
