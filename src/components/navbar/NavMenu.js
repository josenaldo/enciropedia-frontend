import * as React from "react";

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
    ListItemText,
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "@/components/navbar";
import { SearchInput, Link } from "@/components/elements";

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
                        <ListItem button>
                            <ListItemButton component="a" href="/">
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>

                        {topPages.map((page) => (
                            <ListItem button key={page.text}>
                                <ListItemButton component="a" href={page.url}>
                                    <ListItemText primary={page.text} />
                                </ListItemButton>
                            </ListItem>
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
