import React from "react";
import { useRouter } from "next/router";
import {
    Container,
    Box,
    Breadcrumbs as MuiBreadcrumbs,
    Typography,
} from "@mui/material";
import { Link } from "@/components/elements";

export function Breadcrumbs({ crumbs }) {
    const isHome = crumbs.length === 1;

    return (
        <>
            {isHome ? (
                ""
            ) : (
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        py: "5px",
                    }}
                >
                    <Container>
                        <MuiBreadcrumbs aria-label="breadcrumb">
                            {/*
                                Iterate through the crumbs, and render each individually.
                                We "mark" the last crumb to not have a link.
                            */}

                            {crumbs.map((crumb, idx) => (
                                <Crumb
                                    {...crumb}
                                    key={idx}
                                    last={idx === crumbs.length - 1}
                                />
                            ))}
                        </MuiBreadcrumbs>
                    </Container>
                </Box>
            )}
        </>
    );
}

// Each individual "crumb" in the breadcrumbs list
function Crumb({ text: defaultText, textGenerator, href, last = false }) {
    const [text, setText] = React.useState(defaultText);

    // The last crumb is rendered as normal text since we are already on the page
    if (last) {
        return <Typography color="primary.main">{text}</Typography>;
    }

    // All other crumbs will be rendered as links that can be visited
    return (
        <Link underline="hover" color="inherit" href={href}>
            {text}
        </Link>
    );
}
