import * as React from "react";
import Link from "next/link";
import {
    Container,
    Box,
    Button,
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@mui/material";
import { Menu as MenuIcon, Home as HomeIcon } from "@mui/icons-material";
import { Logo } from "@/components/navbar";
import { SearchInput } from "@/components/elements";

import { topPages } from "@/constants";

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Box
            sx={{
                display: "flex",
            }}
        >
            <IconButton
                size="large"
                edge="start"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                open={menuOpen}
                keepMounted
                onClose={() => {
                    toggleMenu();
                }}
                sx={{
                    width: 250,
                    display: "block",
                }}
            >
                <Box
                    sx={{
                        width: 250,
                    }}
                >
                    <List>
                        <ListItem>
                            <Logo />
                        </ListItem>
                    </List>

                    <Divider />

                    <List>
                        <Link
                            href="/"
                            color="neutral"
                            sx={{
                                textDecoration: "none",
                            }}
                        >
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/">
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        {topPages.map((page) => (
                            <Link
                                key={page.text}
                                href={page.url}
                                color="neutral"
                                sx={{
                                    textDecoration: "none",
                                }}
                            >
                                <ListItem disablePadding>
                                    <ListItemButton component="div">
                                        <ListItemIcon>{page.icon}</ListItemIcon>
                                        <ListItemText primary={page.text} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>

                    <Divider />

                    <List>
                        <ListItem>
                            <Box
                                sx={{
                                    display: {
                                        md: "flex",
                                        lg: "none",
                                    },
                                }}
                            >
                                <SearchInput />
                            </Box>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

export { NavMenu };
