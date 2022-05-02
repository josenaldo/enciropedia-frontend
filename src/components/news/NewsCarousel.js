import { Container, Box } from "@mui/material";
import { NewsCard } from "@/components/news";

import { Carousel } from "@/components/elements";

const NewsCarousel = ({ articles }) => {
    return (
        <Box
            sx={{
                px: "0",
                gap: 2,
                alignItems: "center",
                alignContent: "stretch",
            }}
        >
            <Carousel>
                {articles.map((article) => (
                    <Box
                        key={article.id}
                        sx={{
                            px: {
                                xs: "4px",
                                sm: "6px",
                                md: "8px",
                                lg: "10px",
                                xl: "16px",
                            },
                            py: "40px",
                        }}
                        className="newsBox"
                    >
                        <NewsCard article={article}></NewsCard>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export { NewsCarousel };
