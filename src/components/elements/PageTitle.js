const { Box, Typography } = require("@mui/material");

const PageTitle = ({ children }) => {
    return (
        <Box>
            <Typography variant="h1" sx={{ mb: 3, textAlign: "center" }}>
                {children}
            </Typography>
        </Box>
    );
};

export { PageTitle };
