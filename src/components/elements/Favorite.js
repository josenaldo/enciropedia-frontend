import { useState, useEffect } from "react";

import {
    Box,
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

import { FavoritesApi } from "@/common/api";

const Favorite = ({ user, article }) => {
    const [loadingFavorite, setLoadingFavorite] = useState(true);
    const [favorite, setFavorite] = useState(null);
    const [open, setOpen] = useState(false);
    const [note, setNote] = useState("");

    const handleAddFavorite = () => {
        setOpen(true);
    };

    const handleDeleteFavorite = async () => {
        setLoadingFavorite(true);

        const api = new FavoritesApi();
        const result = await api.delete(favorite);
        setFavorite(null);
        setLoadingFavorite(false);
    };

    const handleCloseAddFavoriteDialog = () => {
        setOpen(false);
    };

    const handleSubmitFavorite = async (e) => {
        setLoadingFavorite(true);

        e.preventDefault();

        const api = new FavoritesApi();
        const result = await api.create(article, note);
        setFavorite(result.data);
        setLoadingFavorite(false);
        setOpen(false);
    };

    const handleChangeNote = (e) => {
        setNote(e.target.value);
    };

    useEffect(() => {
        const isFav = async () => {
            if (user) {
                const api = new FavoritesApi();
                const fav = await api.find({ user, article });
                setFavorite(fav);
                setLoadingFavorite(false);
            }
        };

        isFav();
    }, [user, article]);

    return (
        <>
            {favorite ? (
                <IconButton
                    aria-label="favorite"
                    onClick={handleDeleteFavorite}
                    disabled={loadingFavorite}
                >
                    <FavoriteIcon />
                </IconButton>
            ) : (
                <IconButton
                    aria-label="unfavorite"
                    onClick={handleAddFavorite}
                    disabled={loadingFavorite}
                >
                    <FavoriteBorderIcon />
                </IconButton>
            )}
            <Dialog open={open} onClose={handleCloseAddFavoriteDialog}>
                <Box
                    component="form"
                    onSubmit={handleSubmitFavorite}
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
                            name="note"
                            id="note"
                            label="Anotação"
                            variant="standard"
                            margin="dense"
                            fullWidth
                            autoFocus
                            onChange={handleChangeNote}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            type="button"
                            onClick={handleCloseAddFavoriteDialog}
                        >
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
