import { Box, Container, Typography, Button } from "@mui/material";
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

export default function Noticias({ allPostsData }) {
    return (
        <Container>
            <Box component="section">
                <NewsWall posts={allPostsData} />
            </Box>
        </Container>
    );
}
