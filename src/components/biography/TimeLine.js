import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Link } from "@/components/elements";
import { useWidth } from "@/common/hooks";
import styles from "./TimeLine.module.css";

const TimeLine = ({ biographyEvents }) => {
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
        <VerticalTimeline lineColor={palette.primary.dark}>
            {biographyEvents.map((biographyEvent) => (
                <VerticalTimelineElement
                    key={biographyEvent.id}
                    date={biographyEvent.ano}
                    dateClassName={styles.timeEventDate}
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
                        {biographyEvent.titulo}
                    </Typography>
                    <Typography variant="body1" color="neutral.dark">
                        {biographyEvent.resumo}
                    </Typography>

                    <Box sx={{ displapy: "block", mt: "20px" }}>
                        <Link
                            href={biographyEvent.url}
                            // variant="caption"
                            color="neutral.main"
                            underline="none"
                        >
                            Ver mais
                        </Link>
                    </Box>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};

export { TimeLine };
