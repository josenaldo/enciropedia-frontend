import { createTheme } from "@mui/material/styles";
import { deepPurple, teal, grey, blueGrey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: "dark",
        neutral: {
            main: "#bdbdbd",
            contrastText: "#fff",
        },
        footer: {
            background: "rgba(255, 255, 255, 0.12)",
            contrastText: "#fff",
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
