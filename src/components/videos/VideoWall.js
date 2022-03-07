import { Container, Box } from "@mui/material";
import { VideoCard } from "@/components/videos";

export function VideoWall({ videos }) {
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
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video}></VideoCard>
                ))}
            </Box>
        </Container>
    );
}
