import Image from "next/image";
import { Box } from "@mui/material";

export function Code(props) {
    console.log(props);
    return (
        <Box
            className="remark-highlight"
            sx={{
                display: "block",
                overflowX: "auto",
                textWrap: "none",
                bgcolor: "background.paper",
                padding: "10px",
            }}
        >
            <pre>{props.children}</pre>
        </Box>
    );
}
