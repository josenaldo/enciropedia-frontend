import { Container, Box } from "@mui/material";
import { NewsCard } from "@/components/news";

const NewsWall = ({ articles }) => {
    return (
        <Box
            sx={{
                px: "0",
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
            {articles.map((article) => (
                <NewsCard key={article.id} article={article}></NewsCard>
            ))}
        </Box>
    );
};

export { NewsWall };
