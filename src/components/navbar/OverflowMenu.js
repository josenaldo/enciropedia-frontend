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

import {
    AccountCircle as AccountCircleIcon,
    Password as PasswordIcon,
    Save as SaveIcon,
    Mail as MailIcon,
    Notifications as NotificationsIcon,
    MoreVert as MoreIcon,
    Logout as LogoutIcon,
    Favorite as FavoriteIcon,
} from "@mui/icons-material";

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
            <MenuLink
                href="/favoritos"
                text="Favoritos"
                onClick={handleMenuClose}
                Icon={<FavoriteIcon fontSize="small" />}
            />

            <MenuLink
                href="/perfil"
                text="Meu Perfil"
                onClick={handleMenuClose}
                Icon={<AccountCircleIcon fontSize="small" />}
            />

            <MenuLink
                href="/mudar-senha"
                text="Mudar Senha"
                onClick={handleMenuClose}
                Icon={<PasswordIcon fontSize="small" />}
            />

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

const MenuLink = ({ href, text, Icon, onClick }) => {
    return (
        <Link
            href={href}
            color="neutral"
            sx={{
                textDecoration: "none",
                display: "block",
            }}
        >
            <MenuItem onClick={onClick}>
                <ListItemIcon>{Icon}</ListItemIcon>
                {text}
            </MenuItem>
        </Link>
    );
};

export { OverflowMenu };
