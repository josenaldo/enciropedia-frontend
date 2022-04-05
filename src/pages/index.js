import { Box } from "@mui/material";

import { getSortedPostsData } from "@/common/lib";
import { NewsWall } from "@/components/news";
import { Hero } from "@/components/home";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData(3);
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <>
            <Box
                component="section"
                sx={{
                    bgcolor: "background.default",
                }}
            >
                <Hero />
            </Box>

            <Box
                component="section"
                sx={{
                    bgcolor: "background.b500",
                }}
            >
                <NewsWall posts={allPostsData} />
            </Box>
        </>
    );
}
