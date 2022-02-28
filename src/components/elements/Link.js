import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";

export function Link(props) {
    const { href, children, variant, color, underline, ...restProps } = props;
    console.log(props);
    return (
        <NextLink href={href} passHref>
            <MuiLink
                variant={variant}
                color={color}
                underline={underline}
                {...restProps}
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
