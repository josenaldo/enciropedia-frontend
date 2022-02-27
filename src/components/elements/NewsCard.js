import * as React from "react";
import {
    Box,
    Container,
    Card,
    CardContent,
    CardActions,
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
            <CardContent>{post.title}</CardContent>
            <CardActions>
                {post.id} - {post.date}
            </CardActions>
        </Card>
    );
}
