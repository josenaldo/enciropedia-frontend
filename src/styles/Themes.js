import { createTheme } from "@mui/material/styles";
import { deepPurple, teal, grey, blueGrey } from "@mui/material/colors";

const themeDark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            light: deepPurple[100],
            main: deepPurple[300],
            dark: deepPurple[500],
        },
        secondary: {
            light: teal[100],
            main: teal[300],
            dark: teal[500],
            contrastText: "#000000",
        },
        background: {
            default: "#212121",
            paper: "#303030",
        },

        chat: {
            background: blueGrey[800],
            chatBubble: {
                user: teal[900],
                deleteButtonUser: teal[700],
                other: blueGrey[900],
                deleteButtonOther: blueGrey[700],
                contrastText: "#ffffff",
            },
            sender: {
                username: blueGrey[100],
            },
            sendDate: blueGrey[600],
            sticker: {
                button: {
                    closed: blueGrey[100],
                    open: blueGrey[100],
                },
                box: {
                    background: blueGrey[700],
                },
                title: blueGrey[200],
                imageList: {
                    hover: blueGrey[800],
                    focus: blueGrey[500],
                    active: blueGrey[600],
                },
            },
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

const themeLight = createTheme({
    palette: {
        mode: "light",
        primary: {
            light: deepPurple[100],
            main: deepPurple[300],
            dark: deepPurple[500],
        },
        secondary: {
            light: teal[300],
            main: teal[500],
            dark: teal[700],
        },
        background: {
            default: "#eeeeee",
            paper: "#f5f5f5",
        },
        chat: {
            background: blueGrey[50],
            chatBubble: {
                user: teal[300],
                deleteButtonUser: teal[500],
                other: blueGrey[300],
                deleteButtonOther: blueGrey[500],
                contrastText: grey[800],
            },
            sender: {
                username: blueGrey[900],
            },
            sendDate: blueGrey[200],
            sticker: {
                button: {
                    closed: blueGrey[100],
                    open: blueGrey[100],
                },
                box: {
                    background: blueGrey[50],
                },
                title: blueGrey[700],
                imageList: {
                    hover: blueGrey[200],
                    focus: blueGrey[300],
                    active: blueGrey[100],
                },
            },
        },
    },
    scroll: {
        "&::-webkit-scrollbar": {
            width: "8px",
        },

        "&::-webkit-scrollbar-track": {
            bgcolor: `${grey[300]}`,
            borderRadius: "10px",
        },

        "&::-webkit-scrollbar-thumb": {
            bgcolor: `${grey[400]}`,
            borderRadius: "10px",
        },

        "&::-webkit-scrollbar-thumb:hover": {
            bgcolor: `${grey[500]}`,
        },
    }
});

export { themeLight, themeDark };
