// import * as React from "react";
import { useState } from "react";

import {
    Alert,
    Box,
    TextField,
    Button,
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";

import { Login as LoginIcon } from "@mui/icons-material";

import LoadingButton from "@mui/lab/LoadingButton";

import { setToken, fetcher } from "@/common/lib";

const LoginDialog = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({ identifier: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!data.identifier || !data.password) {
            setMessage({
                text: "Email e senha são obrigatórios.",
                level: "error",
            });
            return;
        }

        setLoading(true);

        const responseData = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    identifier: data.identifier,
                    password: data.password,
                }),
            }
        );

        if (responseData.error) {
            if (responseData.error.name === "ValidationError") {
                setMessage({
                    text: "Usuário e/ou senha incorretos.",
                    level: "error",
                });
            } else {
                setMessage({
                    text: "Ocorreu um erro ao executar o login. Tente novamente mais tarde.",
                    level: "error",
                });
            }
        } else {
            setToken(responseData);
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <Box>
            <IconButton
                size="large"
                edge="end"
                aria-label="login"
                aria-haspopup="true"
                onClick={handleClickOpen}
                color="inherit"
            >
                <LoginIcon />
            </IconButton>

            <Dialog open={open} onClose={handleClose}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    autoComplete="off"
                >
                    <DialogTitle textAlign="center">Login</DialogTitle>
                    <DialogContent>
                        {message && (
                            <Alert
                                severity={message.level}
                                onClose={() => {
                                    setMessage(null);
                                }}
                            >
                                {message.text}
                            </Alert>
                        )}
                        <TextField
                            type="email"
                            name="identifier"
                            id="identifier"
                            label="Email"
                            variant="standard"
                            margin="dense"
                            fullWidth
                            required
                            autoFocus
                            onChange={handleChange}
                        />
                        <TextField
                            type="password"
                            name="password"
                            id="password"
                            label="Senha"
                            variant="standard"
                            margin="dense"
                            fullWidth
                            required
                            onChange={handleChange}
                        />
                    </DialogContent>
                    <DialogActions
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Button
                            href="/registro"
                            variant="contained"
                            color="secondary"
                        >
                            Criar conta
                        </Button>
                        <LoadingButton
                            type="submit"
                            loading={loading}
                            loadingPosition="start"
                            startIcon={<LoginIcon />}
                            variant="contained"
                        >
                            Entrar
                        </LoadingButton>
                    </DialogActions>
                </Box>
            </Dialog>
        </Box>
    );
};

export { LoginDialog };
