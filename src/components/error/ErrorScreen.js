import { useState } from "react";
import { useRouter } from "next/router";
import {
    Box,
    Alert,
    AlertTitle,
    Button,
    Card,
    CardContent,
    CardActions,
    Typography,
    TextField,
} from "@mui/material";
import { setToken, fetcher } from "@/common/lib";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const ErrorScreen = ({ error }) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                <CardContent
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <Box>
                        <Typography variant="h1" textAlign="center">
                            Erro 401
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            color: "neutral.main",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{ textAlign: "center" }}>
                            <SentimentVeryDissatisfiedIcon
                                sx={{ fontSize: 200 }}
                            />
                        </Box>
                        <Typography variant="h2" textAlign="center">
                            Acesso não autorizado
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions
                    sx={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Button href="/">Home</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export { ErrorScreen };
