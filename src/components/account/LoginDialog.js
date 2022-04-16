import * as React from "react";
import {
    Box,
    TextField,
    Button,
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

import { setToken, fetcher } from "@/common/lib";

const LoginDialog = () => {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState({ identifier: "", password: "" });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
        setToken(responseData);
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
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent>
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
                    <DialogActions>
                        <Button href="/registro">Criar conta</Button>
                        <Button type="submit">Entrar</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </Box>
    );
};

export { LoginDialog };
