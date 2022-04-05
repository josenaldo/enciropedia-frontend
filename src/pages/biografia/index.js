import { Box, Container } from "@mui/material";
import { TimeLine } from "@/components/biography";
import { BiographyEventsApi } from "@/common/lib";

export async function getStaticProps() {
    const api = new BiographyEventsApi();
    const biographyEvents = await api.findAll();
    return {
        props: {
            biographyEvents: biographyEvents,
        },
    };
}

export default function BiografiaPage({ biographyEvents }) {
    return (
        <Container sx={{ px: { lg: 0 } }}>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                <TimeLine biographyEvents={biographyEvents} />
            </Box>
        </Container>
    );
}
