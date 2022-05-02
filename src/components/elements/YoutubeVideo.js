import { Box } from "@mui/material";

const YoutubeVideo = ({ children }) => {
    return (
        <Box
            sx={{
                position: "relative",
                pb: "56.25%",
                pt: "25px",
                height: "0",
            }}
        >
            <Box
                component="iframe"
                className="ratio ratio-16x9 media"
                frameBorder="0"
                src={`https://www.youtube.com/embed/${children}?rel=0`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sx={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                }}
            ></Box>
        </Box>
    );
};

export { YoutubeVideo };
