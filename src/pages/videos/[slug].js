import Head from "next/head";
import { Container } from "@mui/material";
import { AppConfig } from "@/config";
import { ArticlesApi } from "@/common/api";
import { VideoPage } from "@/components/videos";

const articleCategory = "videos";

export async function getStaticPaths() {
    const api = new ArticlesApi();
    const paths = await api.findAllPaths(articleCategory);

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const api = new ArticlesApi();

    const article = await api.getData(params.slug, articleCategory);
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
            <VideoPage article={article}></VideoPage>
        </Container>
    );
}
