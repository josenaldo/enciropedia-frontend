import * as React from "react";
import {
    Container,
    Box,
    Typography,
    Button,
    Link,
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
    MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Image from "next/image";

import { SearchInput } from "@/components/elements";

const pages = [
    { name: "Home", url: "/" },
    { name: "Notícias", url: "/noticias" },
    { name: "Biografia", url: "/biografia" },
    { name: "PND", url: "/pnd" },
    { name: "Vídeos", url: "/videos" },
    { name: "Podcasts", url: "/podcast" },
    { name: "Movimentos de apoio", url: "/movimentos" },
    { name: "Colaboradores", url: "/colaboradores" },
];

export function Header(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    {/* Logo Desktop */}
                    <Box component="div" sx={{ mr: 2 }}>
                        <Image
                            src="/images/enciropedia-logo-navbar.svg"
                            alt="Logo a enciropedia"
                            width={131}
                            height={27}
                        />
                    </Box>

                    {/* Menu responsivo */}
                    <Box
                        sx={{
                            // flexGrow: 1,
                            display: { md: "flex", lg: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleToggleMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Drawer
                            open={menuOpen}
                            keepMounted
                            onClose={() => {
                                handleToggleMenu();
                            }}
                            sx={{
                                width: 250,
                                display: { xs: "block", md: "block" },
                            }}
                        >
                            <Box
                                sx={{
                                    width: 250,
                                }}
                            >
                                <List>
                                    <ListItem>
                                        <Image
                                            src="/images/enciropedia-logo-navbar.svg"
                                            alt="Logo a enciropedia"
                                            width={131}
                                            height={27}
                                        />
                                    </ListItem>
                                </List>

                                <Divider />

                                <List>
                                    {pages.map((page) => (
                                        <ListItem button key={page.name}>
                                            <ListItemButton
                                                component="a"
                                                href={page.url}
                                            >
                                                <ListItemText
                                                    primary={page.name}
                                                />
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

                    {/* Menu desktop */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "none", lg: "flex" },
                            mx: "5px",
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                href={page.url}
                                key={page.name}
                                sx={{ mx: "5px" }}
                                size="small"
                                color="neutral"
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                lg: "flex",
                            },
                            justifyContent: "flex-end",
                            flexGrow: 0,
                        }}
                    >
                        <SearchInput />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
