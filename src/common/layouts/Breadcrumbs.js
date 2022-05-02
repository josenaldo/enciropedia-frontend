import React from "react";
import { useRouter } from "next/router";
import {
    Container,
    Box,
    Breadcrumbs as MuiBreadcrumbs,
    Typography,
} from "@mui/material";
import { Link } from "@/components/elements";

const _defaultGetTextGenerator = (param, query) => null;
const _defaultGetDefaultTextGenerator = (path) => path;

// Pulled out the path part breakdown because its
// going to be used by both `asPath` and `pathname`
const generatePathParts = (pathStr) => {
    const pathWithoutQuery = pathStr.split("?")[0];
    return pathWithoutQuery.split("/").filter((v) => v.length > 0);
};

export function Breadcrumbs({
    getTextGenerator = _defaultGetTextGenerator,
    getDefaultTextGenerator = _defaultGetDefaultTextGenerator,
}) {
    const router = useRouter();

    const breadcrumbs = React.useMemo(
        function generateBreadcrumbs() {
            const asPathNestedRoutes = generatePathParts(router.asPath);
            const pathnameNestedRoutes = generatePathParts(router.pathname);

            const crumblist = asPathNestedRoutes.map((subpath, idx) => {
                // Pull out and convert "[post_id]" into "post_id"
                let param = "id";
                // if (pathnameNestedRoutes[idx].includes("[")) {
                //     param = pathnameNestedRoutes[idx]
                //         .replace("[", "")
                //         .replace("]", "");
                // }

                const href =
                    "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
                return {
                    href,
                    textGenerator: getTextGenerator,
                    textGeneratorParam: param,
                    textGeneratorQuery: subpath,
                    text: getDefaultTextGenerator(subpath, href),
                };
            });

            return [{ href: "/", text: "Home" }, ...crumblist];
        },
        [
            router.asPath,
            router.pathname,
            // router.query,
            getTextGenerator,
            getDefaultTextGenerator,
        ]
    );

    return (
        <>
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

                        {breadcrumbs.map((crumb, idx) => (
                            <Crumb
                                {...crumb}
                                key={idx}
                                last={idx === breadcrumbs.length - 1}
                            />
                        ))}
                    </MuiBreadcrumbs>
                </Container>
            </Box>
        </>
    );
}

function Crumb({
    text: defaultText,
    textGenerator,
    textGeneratorParam,
    textGeneratorQuery,
    href,
    last = false,
}) {
    const [text, setText] = React.useState();

    React.useEffect(() => {
        async function fetchData() {
            setText(defaultText);
            // If `getTextGenerator` is nonexistent, then don't do anything
            if (!Boolean(textGenerator)) {
                return;
            }
            // Run the text generator and set the text again
            const finalText = await textGenerator(
                textGeneratorParam,
                textGeneratorQuery
            );
            setText(finalText);
        }
        fetchData();
    }, [textGenerator, textGeneratorParam, textGeneratorQuery]);

    return (
        <>
            {last ? (
                <Typography color="text.primary">{text}</Typography>
            ) : (
                <Link underline="hover" color="inherit" href={href}>
                    {text}
                </Link>
            )}
        </>
    );
}
