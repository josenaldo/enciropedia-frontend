import Image from "next/image";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";

import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
} from "@mui/material";

import { Link, FormattedDate } from "@/components/elements";

const BiographyEventPage = ({ biographyEvent }) => {
    console.log(biographyEvent);
    return (
        <>
            <Head>
                <title>{biographyEvent.titulo}</title>
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
                {biographyEvent.imagem.data ? (
                    <CardMedia title={biographyEvent.titulo}>
                        <Image
                            src={biographyEvent.imagem.data.path}
                            height={biographyEvent.imagem.data.height}
                            width={biographyEvent.imagem.data.width}
                            objectFit="contain"
                            alt={biographyEvent.titulo}
                        />
                    </CardMedia>
                ) : (
                    ""
                )}
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
                            {biographyEvent.titulo}
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
                            {biographyEvent.ano}
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
                            {biographyEvent.resumo}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            color: "neutral.main",
                        }}
                    >
                        <MDXRemote
                            {...biographyEvent.mdxSource}
                            // components={{ Button, SyntaxHighlighter }}
                        />
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export { BiographyEventPage };
