import * as React from "react";
import Link from "next/link";
import Image from "next/image";

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
import { SearchInput } from "@/components/elements";

import { topPages } from "@/constants";

export function Header(props) {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* Logo Desktop */}
                        <Box component="div" sx={{ mr: 2 }}>
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/images/enciropedia-logo-navbar.svg"
                                        alt="Logo a enciropedia"
                                        width={131}
                                        height={27}
                                    />
                                </a>
                            </Link>
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
                                            <Link href="/">
                                                <a>
                                                    <Image
                                                        src="/images/enciropedia-logo-navbar.svg"
                                                        alt="Logo a enciropedia"
                                                        width={131}
                                                        height={27}
                                                    />
                                                </a>
                                            </Link>
                                        </ListItem>
                                    </List>
                                    <Divider />
                                    <List>
                                        <ListItem button>
                                            <ListItemButton
                                                component="a"
                                                href="/"
                                            >
                                                <ListItemText primary="Home" />
                                            </ListItemButton>
                                        </ListItem>
                                        {topPages.map((page) => (
                                            <ListItem button key={page.text}>
                                                <ListItemButton
                                                    component="a"
                                                    href={page.url}
                                                >
                                                    <ListItemText
                                                        primary={page.text}
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
                            <Link href="/" passHref>
                                <Button
                                    sx={{ mx: "5px" }}
                                    size="small"
                                    color="neutral"
                                >
                                    Home
                                </Button>
                            </Link>
                            {topPages.map((page) => (
                                <Link key={page.text} href={page.url} passHref>
                                    <Button
                                        sx={{ mx: "5px" }}
                                        size="small"
                                        color="neutral"
                                    >
                                        {page.text}
                                    </Button>
                                </Link>
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
        </header>
    );
}
