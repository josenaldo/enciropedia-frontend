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
    return (
        <Container>
            <Box component="section">
                <NewsWall posts={allPostsData} />
            </Box>
        </Container>
    );
}
