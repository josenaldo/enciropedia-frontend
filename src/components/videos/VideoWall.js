import { Container, Box } from "@mui/material";
import { VideoCard } from "@/components/videos";

const VideoWall = ({ videos }) => {
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
            {videos.map((video) => (
                <VideoCard key={video.id} video={video}></VideoCard>
            ))}
        </Box>
    );
};

export { VideoWall };
