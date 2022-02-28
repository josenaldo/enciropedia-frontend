import {
    Box,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Button,
    Chip,
} from "@mui/material";

import { Link } from "@/components/elements";

export function NewsCard({ post }) {
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
                    <Chip label={post.category} color="neutral" size="small" />
                    <Typography
                        color="neutral.main"
                        variant="caption"
                        ml="10px"
                    >
                        {post.date}
                    </Typography>
                </Box>
                <Box pt="20px">
                    <Typography variant="body1" color="neutral.light">
                        {post.summary}
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
