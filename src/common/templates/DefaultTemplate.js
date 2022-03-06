import React from "react";
import { Box } from "@mui/material";
import { Header, Footer, Breadcrumbs } from "@/common/layouts";
import { topPages } from "@/constants";
import { AppConfig } from "@/config";

export function DefaultTemplate({ children }) {
    const getDefaultTextGenerator = React.useCallback((subpath) => {
        const pages = topPages.reduce((previous, current) => {
            previous[current.id] = { url: current.url, text: current.text };
            return previous;
        }, {});

        return pages[subpath]?.text || subpath.toUpperCase();
    }, []);

    const getTextGenerator = React.useCallback(async (param, query) => {
        const baseUrl = AppConfig.baseurl || "http://localhost:3000";
        const urlPageById = `${baseUrl}/api/page-by-id?id=${query}`;

        const page = await fetch(urlPageById)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data;
            });

        return page.text;
    }, []);

    return (
        <Box>
            <Header />

            <Breadcrumbs
                getDefaultTextGenerator={getDefaultTextGenerator}
                getTextGenerator={getTextGenerator}
            />

            <main>{children}</main>

            <Footer />
        </Box>
    );
}
