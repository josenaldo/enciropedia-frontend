import { useState } from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import useSWR from "swr";

import { AppConfig } from "@/config";
import { ArticlesApi } from "@/common/api";
import { fetcher } from "@/common/lib";
import { NewsWall } from "@/components/news";
import { Title, Pagination } from "@/components/elements";

const category = "noticias";

export async function getStaticProps() {
    const api = new ArticlesApi();
    const result = await api.findAll(category, 1);
    return {
        props: {
            result: result,
        },
    };
}

export default function NoticiasPage({ result }) {
    const api = new ArticlesApi();
    const [pageIndex, setPageIndex] = useState(1);
    const url = api.createFindAllUrl(category, pageIndex, 6) + "";

    const { data: news } = useSWR(url, fetcher, {
        fallbackData: result,
    });

    api.injectUrl(news, category);

    const handleChange = (event, value) => {
        setPageIndex(value);
    };

    return (
        <Container>
            <Head>
                <title>Notícias - {AppConfig.name}</title>
            </Head>

            {news.meta.pagination.pageCount > 0 ? (
                <Box
                    component="section"
                    sx={{
                        my: 5,
                    }}
                >
                    <Title>Notícias</Title>

                    <NewsWall articles={news.data} />

                    <Pagination
                        count={news.meta.pagination.pageCount}
                        size="large"
                        siblingCount={0}
                        boundaryCount={2}
                        page={pageIndex}
                        onChange={handleChange}
                    />
                </Box>
            ) : (
                <Box>Notícias não encontrados</Box>
            )}
        </Container>
    );
}
