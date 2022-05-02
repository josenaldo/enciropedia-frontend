import {
    Box,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Chip,
} from "@mui/material";

import { Link, FormattedDate } from "@/components/elements";

const VideoCard = ({ video }) => {
    return (
        <Card
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
            {video.videoId && (
                <CardMedia
                    component="iframe"
                    className="ratio ratio-16x9 media"
                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    sx={{
                        border: "none",
                        bgcolor: "background.paper",
                    }}
                />
            )}

            <CardContent
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexGrow: 1,
                    noWrap: true,
                }}
            >
                <Box
                    sx={{
                        height: {
                            xs: "3.0rem",
                            sm: "3.2rem",
                            md: "3.4rem",
                            lg: "3.6rem",
                            xl: "3.8rem",
                        },
                    }}
                >
                    <Link
                        href={video.url}
                        variant="h5"
                        color="primary"
                        underline="none"
                        sx={{
                            display: "block",
                            mb: "20px",
                            fontSize: {
                                xs: "1.0rem",
                                sm: "1.1rem",
                                md: "1.2rem",
                                lg: "1.3rem",
                                xl: "1.4rem",
                            },
                        }}
                    >
                        {video.titulo}
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
                        <FormattedDate
                            dateString={video.data || video.publishedAt}
                        />
                    </Typography>
                </Box>
                <Box pt="20px">
                    <Typography
                        variant="body1"
                        color="neutral.light"
                        sx={{
                            display: "-webkit-box",
                            "-webkit-line-clamp": "3",
                            "-webkit-box-orient": "vertical",
                            overflow: "hidden",
                            height: "4.2rem",
                        }}
                    >
                        {video.descricao}
                    </Typography>
                </Box>
            </CardContent>

            <CardActions sx={{ p: "16px" }}>
                <Link href={video.url} underline="none">
                    Leia mais...
                </Link>
            </CardActions>
        </Card>
    );
};

export { VideoCard };
