import { Box } from "@mui/material";
import { Header, Footer } from "@/common/layouts";

export function DefaultTemplate({ children }) {
    return (
        <Box>
            <Header />

            <Box>{children}</Box>

            <Footer />
        </Box>
    );
}