import { Box, TextField as MuiTextField } from "@mui/material";

import { Input as InputIcon } from "@mui/icons-material";

const TextField = ({
    Icon = <InputIcon />,
    type,
    id,
    name,
    label,
    value,
    required = false,
    autofocus = false,
    onChange,
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "row",
                mb: "16px",
            }}
        >
            <Box sx={{ color: "action.active", mr: 1, my: 0.5 }}>{Icon}</Box>
            <MuiTextField
                type={type}
                id={id}
                name={name}
                label={label}
                variant="standard"
                margin="dense"
                value={value}
                fullWidth
                required={required ? required : false}
                autoFocus={autofocus ? autofocus : false}
                onChange={onChange}
            />
        </Box>
    );
};

export { TextField };
