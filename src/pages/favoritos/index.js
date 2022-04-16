import Head from "next/head";
import { useEffect, useState } from "react";

import { Box, Container } from "@mui/material";

import { AppConfig } from "@/config";

import { FavoritesApi } from "@/common/api";

import { useUser } from "@/contexts";
import { FavoriteList } from "@/components/favorites";

export default function FavoritosPage() {
    const { user, loading } = useUser();
    const [pageIndex, setPageIndex] = useState(1);

    const [result, setResult] = useState();

    useEffect(() => {
        const getFav = async () => {
            const api = new FavoritesApi();
            if (user) {
                const result = await api.findAll();
                setResult(result);
            }
        };

        getFav();
    }, [user]);

    const refreshList = async () => {
        const api = new FavoritesApi();
        if (user) {
            const result = await api.findAll();
            setResult(result);
        }
    };

    return (
        <Container sx={{ my: "40px" }}>
            <Head>
                <title>Favoritos - {AppConfig.name}</title>
            </Head>
            <Box component="section">
                {result && result.data ? (
                    <FavoriteList
                        favoritos={result.data}
                        refreshList={refreshList}
                    />
                ) : (
                    "Favoritos não encontrados"
                )}
            </Box>
        </Container>
    );
}
