import { useEffect } from "react";

import { Box, Container } from "@mui/material";
import { getSortedPostsData } from "@/common/lib";
import { NewsWall } from "@/components/news";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function NoticiasPage({ setCrumbs, allPostsData }) {
    useEffect(() => {
        setCrumbs([
            { text: "Home", href: "/" },
            { text: "Notícias", href: "/noticias" },
        ]);
    }, [setCrumbs]);

    return (
        <Container>
            <Box component="section">
                <NewsWall posts={allPostsData} />
            </Box>
        </Container>
    );
}
