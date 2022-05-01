import { Box, Stack, Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ onChange, page, count }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                pt: 5,
            }}
        >
            <Stack spacing={2}>
                <MuiPagination
                    count={count}
                    size="large"
                    siblingCount={0}
                    boundaryCount={2}
                    page={page}
                    onChange={onChange}
                />
            </Stack>
        </Box>
    );
};

export { Pagination };
