import Head from "next/head";
import { Container } from "@mui/material";
import { AppConfig } from "@/config";
import { ArticlesApi } from "@/common/api";
import { VideoPage } from "@/components/videos";

const category = "videos";

export async function getStaticPaths() {
    const api = new ArticlesApi();
    const paths = await api.findAllPaths(category);

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const api = new ArticlesApi();

    const video = await api.getData(params.slug, category);
    return {
        props: {
            video,
        },
    };
}

export default function Video({ video }) {
    return (
        <Container sx={{ my: "40px" }}>
            <Head>
                <title>
                    {video.titulo} - {AppConfig.name}
                </title>
            </Head>
            <VideoPage video={video}></VideoPage>
        </Container>
    );
}
