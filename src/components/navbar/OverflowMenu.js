import * as React from "react";
import {
    Badge,
    Box,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { LoginDialog } from "@/components/account";
import { unsetToken } from "@/common/lib";
import { Link } from "@/components/elements";

const OverflowMenu = ({ user, loading }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        unsetToken();
        handleMenuClose();
    };
    const menuId = "account-menu";
    const menu = (
        <Menu
            anchorEl={anchorEl}
            id={menuId}
            keepMounted
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Link
                href="/favoritos"
                color="neutral"
                sx={{
                    textDecoration: "none",
                    display: "block",
                }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <FavoriteIcon fontSize="small" />
                    </ListItemIcon>
                    Favoritos
                </MenuItem>
            </Link>

            <Divider />
            <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Sair
            </MenuItem>
        </Menu>
    );

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                {!loading && user ? (
                    <>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </>
                ) : (
                    <LoginDialog />
                )}
            </Box>

            {menu}
        </Box>
    );
};

export { OverflowMenu };
