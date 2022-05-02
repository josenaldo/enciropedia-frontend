import { Box } from "@mui/material";
import { VideoCard } from "@/components/videos";

import { Carousel } from "@/components/elements";

const VideosCarousel = ({ videos }) => {
    return (
        <Box
            sx={{
                px: "0",
                // gap: { xs: 1, sm: 2 },
                alignItems: "center",
                alignContent: "stretch",
            }}
        >
            <Carousel>
                {videos.map((video) => (
                    <Box
                        key={video.id}
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
                    >
                        <VideoCard video={video}></VideoCard>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export { VideosCarousel };
