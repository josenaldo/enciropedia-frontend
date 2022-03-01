import NextLink from "next/link";
import {
    Box,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Button,
    Chip,
    Link as MuiLink,
} from "@mui/material";

import { Link, FormattedDate } from "@/components/elements";

export function NewsCard({ post }) {
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
                <CardMedia
                    component="img"
                    height="210"
                    image={post.image.path}
                    alt={post.title}
                />
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
                        href={post.url}
                        variant="h5"
                        color="primary"
                        underline="none"
                        sx={{
                            display: "block",
                            mb: "20px",
                        }}
                    >
                        {post.title}
                    </Link>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <NextLink href={`/${post.category}`} passHref>
                        <MuiLink underline="none">
                            <Chip
                                label={post.category}
                                color="neutral"
                                size="small"
                                clickable={true}
                                sx={{ textDecaoration: "none" }}
                            />
                        </MuiLink>
                    </NextLink>
                    <Typography
                        color="neutral.main"
                        variant="caption"
                        ml="10px"
                    >
                        <FormattedDate dateString={post.date} />
                    </Typography>
                </Box>
                <Box pt="20px">
                    <Typography variant="body1" color="neutral.light">
                        {post.excerpt}
                    </Typography>
                </Box>
            </CardContent>

            <CardActions>
                <Link href={post.url} passHref>
                    <Button variant="text" color="primary">
                        Leia mais...
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}
