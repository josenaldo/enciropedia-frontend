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
                    component="img"
                    height="210"
                    image={`https://img.youtube.com/vi/${video.videoId}/0.jpg`}
                    alt={video.titulo}
                />
            )}

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
                    <Typography variant="body1" color="neutral.light">
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
