import { useState } from "react";
import Head from "next/head";
import { Box, Container, Stack, Pagination } from "@mui/material";
import useSWR from "swr";

import { AppConfig } from "@/config";
import { ArticlesApi } from "@/common/api";
import { fetcher } from "@/common/lib";
import { VideoWall } from "@/components/videos";

const articleCategory = "videos";

export async function getStaticProps() {
    const api = new ArticlesApi();
    const result = await api.findAll(articleCategory, 1);
    return {
        props: {
            result: result,
        },
    };
}

export default function VideosPage({ result }) {
    const api = new ArticlesApi();
    const [pageIndex, setPageIndex] = useState(1);
    const url = api.createFindAllUrl(articleCategory, pageIndex, 10) + "";

    const { data: videos } = useSWR(url, fetcher, {
        fallbackData: result,
    });

    api.injectUrl(videos, articleCategory);

    const handleChange = (event, value) => {
        setPageIndex(value);
    };

    return (
        <Container sx={{ my: "40px" }}>
            <Head>
                <title>Vídeos - {AppConfig.name}</title>
            </Head>
            {videos.meta.pagination.pageCount > 0 ? (
                <Box component="section">
                    <VideoWall videos={videos.data} />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Stack spacing={2}>
                            <Pagination
                                count={videos.meta.pagination.pageCount}
                                size="large"
                                siblingCount={0}
                                boundaryCount={2}
                                page={pageIndex}
                                onChange={handleChange}
                            />
                        </Stack>
                    </Box>
                </Box>
            ) : (
                <Box>Vídeos não encontrados</Box>
            )}
        </Container>
    );
}
