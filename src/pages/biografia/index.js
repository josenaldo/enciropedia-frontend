import { Box, Container, Typography, Button } from "@mui/material";
import { getAllTimeEventsData } from "@/common/lib";

export async function getStaticProps() {
    const timeEvents = getAllTimeEventsData();
    console.log(`Eventos encontrados: ${timeEvents.length}`);
    return {
        props: {
            timeEvents,
        },
    };
}

export default function BiografiaPage({ timeEvents }) {
    console.log(`Eventos recebidos: ${timeEvents.length}`);

    return (
        <Container sx={{ px: { lg: 0 }, py: "40px" }}>
            <Box>
                <ul>
                    {timeEvents.map((timeEvent) => (
                        <li key={timeEvent.id}>evento:{timeEvent.title}</li>
                    ))}
                </ul>
            </Box>
        </Container>
    );
}
