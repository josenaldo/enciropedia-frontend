import { createTheme } from "@mui/material/styles";
import { green, amber, grey } from "@mui/material/colors";

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
            lighter: grey["50"],
            light: grey["100"],
            main: grey["300"],
            dark: grey["500"],
            darker: grey["700"],
            contrastText: "#121212",
        },
        footer: {
            background: "rgba(255, 255, 255, 0.12)",
            contrastText: "#fff",
        },
        background: {
            default: "#121212",
            paper: "#1e1e1e",
            b900: grey["900"],
            b800: grey["800"],
            b700: grey["700"],
            b600: grey["600"],
            b500: grey["500"],
            b400: grey["400"],
            b300: grey["300"],
            b200: grey["200"],
            b100: grey["100"],
            b50: grey["50"],
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
