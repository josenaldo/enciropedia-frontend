import { Box } from "@mui/material";
import { Header, Footer } from "@/common/layouts";

export function DefaultTemplate({ children }) {
    return (
        <Box>
            <Header />

            <main>{children}</main>

            <Footer />
        </Box>
    );
}
