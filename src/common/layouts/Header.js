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

import { SearchInput, Link } from "@/components/elements";
import { Logo, NavMenu, OverflowMenu } from "@/components/navbar";
import { useUser } from "@/contexts";

export function Header(props) {
    const { user, loading } = useUser();

    return (
        <header>
            <AppBar position="sticky">
                <Container>
                    <Toolbar
                        disableGutters
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            px: "0",
                            mx: "0",
                        }}
                    >
                        {/* Logo Desktop */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <NavMenu />
                            <Logo />
                        </Box>
                        {/* Menu responsivo */}

                        <OverflowMenu user={user} loading={loading} />
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
}
