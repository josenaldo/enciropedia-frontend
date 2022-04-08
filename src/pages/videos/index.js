import Head from "next/head";

import {
    Container,
    Box,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Chip,
} from "@mui/material";

import { AppConfig } from "@/config";
import { FormattedDate, Link } from "@/components/elements";
import { getSortedVideosData } from "@/common/lib";
import { VideoWall } from "@/components/videos";

export async function getStaticProps() {
    const allVideosData = getSortedVideosData();
    return {
        props: {
            allVideosData,
        },
    };
}

export default function VideosPage({ allVideosData }) {
    return (
        <Container>
            <Head>
                <title>Vídeos - {AppConfig.name}</title>
            </Head>
            <Box component="section">
                <VideoWall videos={allVideosData} />
            </Box>
        </Container>
    );
}
