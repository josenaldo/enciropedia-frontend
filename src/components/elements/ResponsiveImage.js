import Image from "next/image";
import { Box } from "@mui/material";

export function ResponsiveImage(props) {
    return (
        <Image alt={props.alt} layout="responsive" loading="lazy" {...props} />
    );
}
