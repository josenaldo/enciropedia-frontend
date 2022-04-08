import Image from "next/image";
import {
    Box,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Chip,
    Link as MuiLink,
} from "@mui/material";

import { Link, FormattedDate } from "@/components/elements";

const NewsCard = ({ article }) => {
    console.log(article);
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
            {article.imagem && article.imagem.data ? (
                <CardMedia title={article.titulo}>
                    <Image
                        src={article.imagem.data.path}
                        height={article.imagem.data.height}
                        width={article.imagem.data.width}
                        objectFit="contain"
                        alt={article.titulo}
                    />
                </CardMedia>
            ) : (
                ""
            )}

            <CardContent
                sx={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <Box>
                    <Link
                        href={article.url}
                        variant="h5"
                        color="primary"
                        underline="none"
                        sx={{
                            display: "block",
                            mb: "20px",
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
                        <FormattedDate dateString={article.publishedAt} />
                    </Typography>
                </Box>
                <Box pt="20px">
                    <Typography variant="body1" color="neutral.light">
                        {article.resumo}
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
