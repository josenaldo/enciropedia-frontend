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

import { Link } from "@/components/elements";

export function NewsPage({ post }) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
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
                            {post.title}
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
                        <Link
                            href={post.authorUrl}
                            variant="caption"
                            color="neutral.main"
                            underline="none"
                            sx={{ mx: "10px" }}
                        >
                            {post.author}
                        </Link>
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
                            {post.summary}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            color: "neutral.main",
                        }}
                    >
                        <MDXRemote
                            {...post.mdxSource}
                            // components={{ Button, SyntaxHighlighter }}
                        />
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}
