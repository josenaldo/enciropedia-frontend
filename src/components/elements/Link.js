import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";

export function Link({ href, children, variant, color, underline, sx }) {
    variant = variant || "body1";
    color = color || "primary";
    underline = underline || "none";

    return (
        <NextLink href={href} passHref>
            <MuiLink
                variant={variant}
                color={color}
                underline={underline}
                sx={sx}
                gutterBottom
            >
                {children}
            </MuiLink>
        </NextLink>
    );
}
