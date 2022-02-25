import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { themeLight } from "@/styles";

export function DefaultTemplate({ children }) {
    return (
        <ThemeProvider theme={themeLight}>
            <CssBaseline />
            <Box>{children}</Box>
        </ThemeProvider>
    );
}
