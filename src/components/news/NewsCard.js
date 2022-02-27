import * as React from "react";
import {
    Box,
    Container,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Button,
} from "@mui/material";

export function NewsCard({ post }) {
    return (
        <Card
            sx={{
                height: "100%",
                width: "100%",
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

            <CardContent>{post.title}</CardContent>
            <CardActions>
                {post.id} - {post.date}
            </CardActions>
        </Card>
    );
}
