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
            <Box component="section">
                <VideoWall videos={allVideosData} />
            </Box>
        </Container>
    );
}
