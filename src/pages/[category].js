import { useState } from "react";
import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";
import useSWR from "swr";

import { AppConfig } from "@/config";
import { CategoriesApi, ArticlesApi } from "@/common/api";
import { fetcher } from "@/common/lib";
import { ArticlesWall } from "@/components/articles";
import { Title, Pagination } from "@/components/elements";

export async function getStaticPaths() {
    const api = new CategoriesApi();
    const paths = await api.findAllPaths();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const categoriesApi = new CategoriesApi();
    const articlesApi = new ArticlesApi();

    const category = await categoriesApi.getData(params.category);

    const result = await articlesApi.findAll(category.slug, 1);
    return {
        props: {
            category: category,
            result: result,
        },
    };
}

export default function NoticiasPage({ category, result }) {
    const api = new ArticlesApi();
    const [pageIndex, setPageIndex] = useState(1);
    const url = api.createFindAllUrl(category.slug, pageIndex, 6) + "";

    const { data: articles } = useSWR(url, fetcher, {
        fallbackData: result,
    });

    api.injectUrl(articles, category.slug);

    const handleChange = (event, value) => {
        setPageIndex(value);
    };

    return (
        <Container>
            <Head>
                <title>
                    {category.rotulo} - {AppConfig.name}
                </title>
            </Head>

            {articles.meta.pagination.pageCount > 0 ? (
                <Box
                    component="section"
                    sx={{
                        my: 5,
                    }}
                >
                    <Title>{category.rotulo}</Title>

                    <ArticlesWall articles={articles.data} />

                    <Pagination
                        count={articles.meta.pagination.pageCount}
                        size="large"
                        siblingCount={0}
                        boundaryCount={2}
                        page={pageIndex}
                        onChange={handleChange}
                    />
                </Box>
            ) : (
                <Box
                    sx={{
                        my: 5,
                    }}
                >
                    <h1>Não tem nada na categoria {category.rotulo}</h1>

                    <Typography>
                        Infelizmente, essa seção ainda não está pronta
                    </Typography>
                    <Typography variant="caption">
                        Se um nerd do site perguntar o que houve, diga qa ele
                        que alguém nesse site precisa trabalhar. Ele ficará
                        pressionado.
                    </Typography>
                </Box>
            )}
        </Container>
    );
}
