import { useState } from "react";

import {
    Box,
    Typography,
    IconButton,
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Favorite = ({ user, article }) => {
    const [favorite, setFavorite] = useState(false);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({ anotacao: "" });

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
        <>
            {favorite ? (
                <IconButton aria-label="favorite" onClick={toggleFavorite}>
                    <FavoriteIcon />
                </IconButton>
            ) : (
                <IconButton aria-label="unfavorite" onClick={handleClickOpen}>
                    <FavoriteBorderIcon />
                </IconButton>
            )}
            <Dialog open={open} onClose={handleClose}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    autoComplete="off"
                >
                    <DialogTitle>Adicionar favorito</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Deseja favoritar o artigo &lsquo;{article.titulo}
                            &rsquo;?
                        </DialogContentText>
                        <TextField
                            type="textarea"
                            name="anotacao"
                            id="anotacao"
                            label="Anotação"
                            variant="standard"
                            margin="dense"
                            fullWidth
                            autoFocus
                            onChange={handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button type="button" onClick={handleClose}>
                            Não
                        </Button>
                        <Button type="submit">Sim</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </>
    );
};

export { Favorite };
