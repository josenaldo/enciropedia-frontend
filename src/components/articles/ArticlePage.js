import Image from "next/image";

import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    IconButton,
} from "@mui/material";

import {
    Link,
    FormattedDate,
    MDXContent,
    Favorite,
    YoutubeVideo,
} from "@/components/elements";
import { useUser } from "@/contexts";

const ArticlePage = ({ article }) => {
    const { user, loading } = useUser();

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
                {article.imagem ? (
                    <CardMedia title={article.titulo}>
                        <Image
                            src={article.imagem.url}
                            height="400"
                            width="1160"
                            objectFit="cover"
                            alt={article.titulo}
                        />
                    </CardMedia>
                ) : (
                    <YoutubeVideo>{article.videoId}</YoutubeVideo>
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
                            variant="h1"
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
                            {article.titulo}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            py: "20px",
                            flexDirection: { xs: "column", sm: "row" },
                        }}
                    >
                        <Link
                            underline="none"
                            href={`${article.categoria.url}`}
                        >
                            <Chip
                                label={article.categoria.rotulo}
                                color="neutral"
                                size="small"
                                clickable={true}
                                sx={{ textDecoration: "none", my: "5px" }}
                            />
                        </Link>
                        <Typography
                            color="neutral.main"
                            variant="caption"
                            sx={{ mx: "10px" }}
                        >
                            <FormattedDate
                                dateString={article.data || article.publishedAt}
                            />
                        </Typography>
                        <Box>
                            {/* <Link
                                href={`${article.colaborador.url}`}
                                variant="caption"
                                color="neutral.main"
                                underline="none"
                                sx={{ mx: "10px" }}
                            > */}
                            {article.colaborador.nome}
                            {/* </Link> */}
                        </Box>
                        <Box sx={{ px: "5px" }}>
                            {user && <Favorite user={user} article={article} />}
                        </Box>
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
                            {article.descricao}
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

export { ArticlePage };
