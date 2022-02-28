import Link from "next/link";

import { Container } from "@mui/material";

import { NewsPage } from "@/components/news";
import { getAllPostIds, getPostData } from "@/common/lib";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = await getPostData(params.id);
    return {
        props: {
            post,
        },
    };
}

export default function Post({ post }) {
    return (
        <Container sx={{ my: "40px" }}>
            <NewsPage post={post} fullPage></NewsPage>
        </Container>
    );
}
