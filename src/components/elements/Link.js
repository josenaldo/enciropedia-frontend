import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";

export function Link({
    href,
    children,
    variant,
    color,
    underline,
    sx,
    ...restProps
}) {
    // const { href, children, variant, color, underline, sx, ...restProps } =
    //     props;

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
            <MuiLink
                variant={variant}
                underline={underline}
                {...restProps}
                sx={{ ...sx, ...linkStyle }}
            >
                {children}
            </MuiLink>
        </NextLink>
    );
}

// Set default props
Link.defaultProps = {
    variant: "body1",
    color: "primary",
    underline: "none",
};
