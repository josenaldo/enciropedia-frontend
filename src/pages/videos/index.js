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

import { MDXRemote } from "next-mdx-remote";

import { FormattedDate, Link } from "@/components/elements";
import { getSortedVideosData } from "@/common/lib";

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
            <Box
                component="section"
                sx={{
                    px: "0",
                    // py: "40px",
                    display: "grid",
                    gap: 2,
                    alignItems: "center",
                    alignContent: "stretch",
                    gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                    },
                }}
            >
                {allVideosData.map((video) => (
                    <Card
                        key={video.id}
                        elevation={1}
                        sx={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            itemsAlign: "flex-start",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="210"
                            image={`https://img.youtube.com/vi/${video.video_id}/0.jpg`}
                            alt={video.summary}
                        ></CardMedia>
                        <CardContent
                            sx={{
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <Box>
                                <Link
                                    href={video.url}
                                    variant="h5"
                                    color="primary"
                                    underline="none"
                                    sx={{
                                        display: "block",
                                        mb: "20px",
                                    }}
                                >
                                    {video.title}
                                </Link>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Link href={`/videos`} underline="none">
                                    <Chip
                                        label="Vídeo"
                                        color="neutral"
                                        size="small"
                                        clickable={true}
                                        sx={{ textDecaoration: "none" }}
                                    />
                                </Link>
                                <Typography
                                    color="neutral.main"
                                    variant="caption"
                                    ml="10px"
                                >
                                    <FormattedDate dateString={video.date} />
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    color: "neutral.main",
                                }}
                            >
                                {video.excerpt}
                            </Box>
                        </CardContent>

                        <CardActions sx={{ p: "16px" }}>
                            <Link href={video.url} underline="none">
                                Leia mais...
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Container>
    );
}
