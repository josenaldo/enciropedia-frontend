import { useState } from "react";
import Head from "next/head";
import { Box, Container, Stack } from "@mui/material";
import useSWR from "swr";

import { AppConfig } from "@/config";
import { ArticlesApi } from "@/common/api";
import { fetcher } from "@/common/lib";
import { NewsWall } from "@/components/news";
import { Title, Pagination } from "@/components/elements";

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
    const url = api.createFindAllUrl(category, pageIndex, 6) + "";

    const { data } = useSWR(url, fetcher, {
        fallbackData: result,
    });

    api.injectUrl(data, category);

    const handleChange = (event, value) => {
        setPageIndex(value);
    };

    return (
        <Container>
            <Head>
                <title>Notícias - {AppConfig.name}</title>
            </Head>
            <Box
                component="section"
                sx={{
                    my: 5,
                }}
            >
                <Title>Notícias</Title>

                <NewsWall articles={data.data} />

                <Pagination
                    count={data.meta.pagination.pageCount}
                    size="large"
                    siblingCount={0}
                    boundaryCount={2}
                    page={pageIndex}
                    onChange={handleChange}
                />
            </Box>
        </Container>
    );
}
