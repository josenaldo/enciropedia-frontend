import { Container, Box } from "@mui/material";
import { ArticleCard } from "@/components/articles";

import { Carousel } from "@/components/elements";

const ArticlesCarousel = ({ articles }) => {
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
                        <ArticleCard article={article}></ArticleCard>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export { ArticlesCarousel };
