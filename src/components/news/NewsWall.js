import { Container, Box } from "@mui/material";
import { NewsCard } from "@/components/news";

const NewsWall = ({ posts }) => {
    return (
        <Container sx={{ px: { lg: 0 }, py: "40px" }}>
            <Box
                sx={{
                    px: "0",
                    // py: "40px",
                    display: "grid",
                    gap: 2,
                    alignItems: "center",
                    alignContent: "stretch",
                    gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                    },
                }}
            >
                {posts.map((post) => (
                    <NewsCard key={post.id} post={post}></NewsCard>
                ))}
            </Box>
        </Container>
    );
};

export { NewsWall };
