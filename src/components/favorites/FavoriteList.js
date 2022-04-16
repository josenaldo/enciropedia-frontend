import * as React from "react";
import {
    ListItem,
    ListItemAvatar,
    ListItemText,
    IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import LinkIcon from "@mui/icons-material/Link";

import { Link } from "@/components/elements";
import { FavoritesApi } from "@/common/api";

const FavoriteList = ({ favoritos, refreshList }) => {
    const handleDelete = async (favorito) => {
        const api = new FavoritesApi();
        const result = await api.delete(favorito);
        refreshList();
    };

    return (
        <>
            {favoritos.map((favorito) => {
                return (
                    <ListItem
                        key={favorito.id}
                        secondaryAction={
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={(e) => {
                                    handleDelete(favorito);
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Link href="">
                                <IconButton
                                    edge="end"
                                    aria-label="link"
                                    href={favorito.artigo.url}
                                >
                                    <LinkIcon />
                                </IconButton>
                            </Link>
                        </ListItemAvatar>
                        <ListItemText
                            primary={favorito.artigo.titulo}
                            secondary={favorito.artigo.descricao}
                        />
                    </ListItem>
                );
            })}
        </>
    );
};
export { FavoriteList };
