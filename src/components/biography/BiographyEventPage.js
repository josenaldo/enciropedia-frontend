import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

import { Link } from "@/components/elements";
const BiographyEventPage = ({ biographyEvent }) => {
    console.log(biographyEvent);
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
                        <Typography variant="h1" textAlign="center">
                            {biographyEvent.titulo}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h2"
                            color="neutral.dark"

                            // sx={{ mx: "10px" }}
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
                    <Box
                        sx={{
                            mt: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent:
                                biographyEvent.anterior &&
                                biographyEvent.proximo
                                    ? "space-between"
                                    : "center",
                        }}
                    >
                        {biographyEvent.anterior && (
                            <Link
                                href={biographyEvent.anterior.url}
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                <ArrowLeftOutlinedIcon />
                                {biographyEvent.anterior.titulo}
                            </Link>
                        )}

                        {biographyEvent.proximo && (
                            <Link
                                href={biographyEvent.proximo.url}
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                {biographyEvent.proximo.titulo}
                                <ArrowRightOutlinedIcon />
                            </Link>
                        )}
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export { BiographyEventPage };
