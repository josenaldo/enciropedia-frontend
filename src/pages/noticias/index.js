import { useState } from "react";
import Head from "next/head";
import { Box, Container, Stack, Pagination } from "@mui/material";
import useSWR from "swr";

import { AppConfig } from "@/config";
import { ArticlesApi } from "@/common/api";
import { fetcher } from "@/common/lib";
import { NewsWall } from "@/components/news";

export async function getStaticProps() {
    const api = new ArticlesApi();
    const result = await api.findAll("noticias", 1);
    return {
        props: {
            result: result,
        },
    };
}

export default function NoticiasPage({ result }) {
    const api = new ArticlesApi();
    const [pageIndex, setPageIndex] = useState(1);
    const category = "noticias";
    const url = api.createFindAllUrl(category, pageIndex, 2) + "";

    const { data } = useSWR(url, fetcher, {
        fallbackData: result,
    });

    api.injectUrl(data, category);

    const handleChange = (event, value) => {
        setPageIndex(value);
    };

    return (
        <Container sx={{ my: "40px" }}>
            <Head>
                <title>Notícias - {AppConfig.name}</title>
            </Head>
            <Box component="section">
                <NewsWall articles={data.data} />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Stack spacing={2}>
                        <Pagination
                            count={data.meta.pagination.pageCount}
                            size="large"
                            siblingCount={0}
                            boundaryCount={2}
                            page={pageIndex}
                            onChange={handleChange}
                        />
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
}
