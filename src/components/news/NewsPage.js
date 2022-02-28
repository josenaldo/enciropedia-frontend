import Image from "next/image";
import Link from "next/link";

import {
    Box,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    CardActionArea,
    Typography,
    Button,
    Chip,
    Link as MuiLink,
} from "@mui/material";

export function NewsPage({ post }) {
    console.log(post);
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
            {post.image ? (
                <CardMedia title={post.title}>
                    <Image
                        src={post.image.path}
                        height={post.image.height}
                        width={post.image.width}
                        objectFit="contain"
                        alt={post.title}
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
                    <Typography
                        gutterBottom
                        variant="h2"
                        component="div"
                        color="white"
                        textAlign="center"
                        fontWeight="bold"
                    >
                        {post.title}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Chip
                        label={post.category}
                        color="neutral"
                        size="small"
                        sx={{ mx: "10px" }}
                    />
                    <Typography
                        color="neutral.main"
                        variant="caption"
                        sx={{ mx: "10px" }}
                    >
                        {post.date}
                    </Typography>

                    <Link href={post.authorUrl} passHref>
                        <MuiLink
                            variant="caption"
                            // component="div"
                            color="neutral.main"
                            underline="none"
                            gutterBottom
                            sx={{ mx: "10px" }}
                        >
                            {post.author}
                        </MuiLink>
                    </Link>
                </Box>

                <Box
                    sx={{
                        m: "20px",
                        p: "20px",
                        bgcolor: "background.b800",
                        color: "neutral.darker",
                        textAlign: "center",
                        fontStyle: "italic",
                        borderRadius: "0.2rem",
                    }}
                >
                    <Typography variant="body1" color="neutral.light">
                        {post.summary}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        mx: "40px",
                        color: "neutral.main",
                    }}
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                ></Box>
            </CardContent>
        </Card>
    );
}
