import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";

export function Link({ href, children, color, sx, ...restProps }) {
    const linkStyle = {
        color: `${color}.main`,
        "&:hover": {
            color: `${color}.dark`,
        },
        "&:focus": {
            color: `${color}.light`,
        },
    };

    return (
        <NextLink href={href} passHref>
            <MuiLink {...restProps} sx={{ ...sx, ...linkStyle }}>
                {children}
            </MuiLink>
        </NextLink>
    );
}

// Set default props
Link.defaultProps = {
    color: "primary",
};
