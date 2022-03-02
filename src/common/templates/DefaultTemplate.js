import { Box } from "@mui/material";
import { Header, Footer, Breadcrumbs } from "@/common/layouts";
import React from "react";

export function DefaultTemplate(props) {
    const [crumbs, setCrumbs] = React.useState([{ text: "Home", href: "/" }]);

    return (
        <Box>
            <Header />

            <Breadcrumbs crumbs={crumbs} />

            <main>
                {React.cloneElement(props.children, {
                    crumbs,
                    setCrumbs,
                })}
            </main>

            <Footer />
        </Box>
    );
}
