import Image from "next/image";
import Head from "next/head";

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
            <Head>
                <title>
                    {video.title} - {AppConfig.name}
                </title>
            </Head>
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
                            {video.title}
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
                            <FormattedDate dateString={video.date} />
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
                            {video.summary}
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
