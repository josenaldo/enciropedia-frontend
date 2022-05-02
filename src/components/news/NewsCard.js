import Image from "next/image";
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

const NewsCard = ({ article }) => {
    return (
        <Card
            elevation={1}
            sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                itemsAlign: "flex-start",
            }}
        >
            {article.imagem && article.imagem ? (
                <CardMedia
                    title={article.titulo}
                    sx={{
                        display: "flex",
                        height: {
                            xs: "150px",
                            sm: "170px",
                            md: "190px",
                            lg: "210px",
                            xl: "230px",
                        },
                        overflow: "hidden",
                    }}
                >
                    <Image
                        src={article.imagem.formats.small.url}
                        height={article.imagem.formats.small.height}
                        width={article.imagem.formats.small.width}
                        objectFit="cover"
                        alt={article.titulo}
                    />
                </CardMedia>
            ) : (
                ""
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
                        href={`${article.url}`}
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
                        {article.titulo}
                    </Link>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Link href={`/${article.categoria.slug}`} underline="none">
                        <Chip
                            label={article.categoria.rotulo}
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
                            dateString={article.data || article.publishedAt}
                        />
                    </Typography>
                </Box>
                <Box pt="20px" component="div">
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
                        {article.descricao}
                    </Typography>
                </Box>
            </CardContent>

            <CardActions sx={{ p: "16px" }}>
                <Link href={article.url} underline="none">
                    Leia mais...
                </Link>
            </CardActions>
        </Card>
    );
};

export { NewsCard };
