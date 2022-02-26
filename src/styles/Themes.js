import { createTheme } from "@mui/material/styles";
import { green, amber, grey, blueGrey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: green["200"],
        },
        secondary: {
            main: amber["200"],
        },
        neutral: {
            main: grey["500"],
            contrastText: "#fff",
        },
        footer: {
            background: "rgba(255, 255, 255, 0.12)",
            contrastText: "#fff",
        },

        background: {
            default: "#121212",
            paper: "",
            dp01: "rgba(255, 255, 255, 0.05)",
            dp02: "rgba(255, 255, 255, 0.07)",
            dp03: "rgba(255, 255, 255, 0.08)",
            dp04: "rgba(255, 255, 255, 0.09)",
            dp06: "rgba(255, 255, 255, 0.11)",
            dp08: "rgba(255, 255, 255, 0.12)",
            dp12: "rgba(255, 255, 255, 0.14)",
            dp16: "rgba(255, 255, 255, 0.16)",
            dp24: "rgba(255, 255, 255, 0.24)",
            dp32: "rgba(255, 255, 255, 0.32)",
            dp40: "rgba(255, 255, 255, 0.40)",
        },
    },
    scroll: {
        "&::-webkit-scrollbar": {
            width: "8px",
        },

        "&::-webkit-scrollbar-track": {
            bgcolor: `${grey[800]}`,
            borderRadius: "10px",
        },

        "&::-webkit-scrollbar-thumb": {
            bgcolor: `${grey[700]}`,
            borderRadius: "10px",
        },

        "&::-webkit-scrollbar-thumb:hover": {
            bgcolor: `${grey[500]}`,
        },
    },
});

export { theme };
