const { Box, Typography } = require("@mui/material");

const Title = ({ children, variant = "h1", color = "neutral.main" }) => {
    return (
        <Typography
            variant={variant}
            color={color}
            sx={{ mb: 3, textAlign: "center" }}
        >
            {children}
        </Typography>
    );
};

export { Title };
