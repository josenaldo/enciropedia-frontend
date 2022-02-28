import * as React from "react";
import {
    Box,
    Container,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    CardActionArea,
    Typography,
    Button,
    Chip,
} from "@mui/material";

export function NewsCard({ post }) {
    console.log(post);
    return (
        <Card
            elevation={1}
            sx={{
                height: "100%",
                width: "100%",
            }}
        >
            <CardActionArea
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
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="primary"
                    >
                        {post.title}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Chip
                            label={post.category}
                            color="neutral"
                            size="small"
                        />
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
                    <Button variant="text" color="primary" href={post.url}>
                        Leia mais...
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
