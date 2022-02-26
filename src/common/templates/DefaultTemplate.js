import { Box, Container } from "@mui/material";
import { Header, Footer } from "@/common/layouts";

export function DefaultTemplate({ children }) {
    return (
        <Box>
            <Header />

            <main>
                <Container>{children}</Container>
            </main>

            <Footer />
        </Box>
    );
}
