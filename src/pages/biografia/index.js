import { Box, Container, Typography, Button } from "@mui/material";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { getAllTimeEventsData } from "@/common/lib";
// import { theme } from "@/styles";
import biografiaStyles from "./biografia.module.css";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
        keys.reduce((output, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));
            return !output && matches ? key : output;
        }, null) || "xs"
    );
}

export async function getStaticProps() {
    const timeEvents = getAllTimeEventsData();
    return {
        props: {
            timeEvents,
        },
    };
}

export default function BiografiaPage({ timeEvents }) {
    const theme = useTheme();
    const width = useWidth();

    const palette = theme.palette;
    const arrowStyle = {
        xs: {
            borderRight: `30px solid  ${palette.background.b800}`,
            top: "2px",
        },
        sm: {
            borderRight: `30px solid  ${palette.background.b800}`,
            top: "2px",
        },
        md: {
            borderRight: `30px solid  ${palette.background.b800}`,
            top: "2px",
        },
        lg: {
            borderRight: `30px solid  ${palette.background.b800}`,
            top: "12px",
        },
        xl: {
            borderRight: `30px solid  ${palette.background.b800}`,
            top: "12px",
        },
    };

    return (
        <Container sx={{ px: { lg: 0 } }}>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                <VerticalTimeline lineColor={palette.primary.dark}>
                    {timeEvents.map((timeEvent) => (
                        <VerticalTimelineElement
                            key={timeEvent.url}
                            date={timeEvent.date}
                            dateClassName={biografiaStyles.timeEventDate}
                            className="timeEventElement"
                            iconStyle={{
                                background: palette.primary.main,
                                color: palette.primary.contrastText,
                                boxShadow: "none",
                                border: `10px solid ${palette.primary.dark}`,
                            }}
                            contentStyle={{
                                background: palette.background.b900,
                                color: palette.neutral.main,
                                border: `12px solid ${palette.background.b800}`,
                                boxShadow: "none",
                            }}
                            contentArrowStyle={arrowStyle[width]}
                        >
                            <Typography variant="h5" color="neutral.main">
                                {timeEvent.title}
                            </Typography>
                            <Typography variant="body1" color="neutral.dark">
                                {timeEvent.excerpt}
                            </Typography>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </Box>
        </Container>
    );
}
