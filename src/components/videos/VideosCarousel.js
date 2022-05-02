import { Box } from "@mui/material";
import { VideoCard } from "@/components/videos";

import { Carousel } from "@/components/elements";

const VideosCarousel = ({ videos }) => {
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
                {videos.map((video) => (
                    <Box key={video.id} sx={{ px: "10px", py: "40px" }}>
                        <VideoCard video={video}></VideoCard>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export { VideosCarousel };
