import Image from "next/image";
import Head from "next/head";

import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
} from "@mui/material";

import { AppConfig } from "@/config";

import { Link, FormattedDate, MDXContent } from "@/components/elements";

const NewsPage = ({ article }) => {
    return (
        <>
            <Head>
                <title>
                    {article.title} - {AppConfig.name}
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
                {article.image ? (
                    <CardMedia title={article.title}>
                        <Image
                            src={article.image.path}
                            height={article.image.height}
                            width={article.image.width}
                            objectFit="contain"
                            alt={article.title}
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
                            {article.title}
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
                        <Link
                            underline="none"
                            href={`/${article.category.url}`}
                        >
                            <Chip
                                label={article.category.rotulo}
                                color="neutral"
                                size="small"
                                clickable={true}
                                sx={{ textDecoration: "none" }}
                            />
                        </Link>
                        <Typography
                            color="neutral.main"
                            variant="caption"
                            sx={{ mx: "10px" }}
                        >
                            <FormattedDate dateString={article.publishedAt} />
                        </Typography>
                        {/* <Link
                            href={`${article.colaborador.url}`}
                            variant="caption"
                            color="neutral.main"
                            underline="none"
                            sx={{ mx: "10px" }}
                        > */}
                        {article.author}
                        {/* </Link> */}
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
                            {article.summary}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            color: "neutral.main",
                        }}
                    >
                        <MDXContent content={article.conteudo} />
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export { NewsPage };
