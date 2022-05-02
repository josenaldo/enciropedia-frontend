import Image from "next/image";

import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    Link as MuiLink,
} from "@mui/material";

import { AppConfig } from "@/config";

import { Link, FormattedDate, MDXContent } from "@/components/elements";

const VideoPage = ({ video }) => {
    return (
        <>
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
                <CardMedia
                    component="iframe"
                    className="ratio ratio-16x9 media"
                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    sx={{
                        border: "none",
                        height: {
                            xs: "210px",
                            sm: "250",
                            md: "300px",
                            lg: "400px",
                            xl: "500px",
                        },
                    }}
                />

                <CardContent
                    sx={{
                        width: "100%",
                        height: "100%",
                        px: {
                            sx: "5px",
                            sm: "10px",
                            md: "20px",
                            lg: "40px",
                        },
                    }}
                >
                    <Box>
                        <Typography
                            gutterBottom
                            variant="h2"
                            component="div"
                            color="white"
                            textAlign="center"
                            fontWeight="bold"
                            sx={{
                                fontSize: {
                                    xs: "2.00rem",
                                    sm: "2.50rem",
                                    md: "3.00rem",
                                    lg: "3.50rem",
                                },
                            }}
                        >
                            {video.titulo}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            py: "20px",
                        }}
                    >
                        <Typography
                            color="neutral.main"
                            variant="caption"
                            sx={{ mx: "10px" }}
                        >
                            <FormattedDate
                                dateString={video.data || video.publishedAt}
                            />
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            p: "20px",
                            bgcolor: "background.b800",
                            color: "neutral.darker",
                            textAlign: "center",
                            fontStyle: "italic",
                            borderRadius: "0.2rem",
                        }}
                    >
                        <Typography variant="body1" color="neutral.light">
                            {video.descricao}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            color: "neutral.main",
                        }}
                    >
                        <MDXContent content={video.conteudo} />
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export { VideoPage };
