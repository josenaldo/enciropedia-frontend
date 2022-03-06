import React from "react";
import { Box, Container, Typography, IconButton, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { theme } from "@/styles";

const socials = [
    { url: "mailto:josenaldo@gmail.com", icon: EmailIcon },
    { url: "https://github.com/josenaldo", icon: GitHubIcon },
    { url: "https://www.twitter.com/vudureverso", icon: TwitterIcon },
    { url: "https://www.linkedin.com/in/josenaldo/", icon: LinkedInIcon },
    { url: "https://www.facebook.com/josenaldo.matos", icon: FacebookIcon },
    { url: "https://www.instagram.com/vudureverso", icon: InstagramIcon },
];

export function Footer(props) {
    const palette = theme.palette;

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: palette.footer.background,
                color: palette.footer.color,
            }}
        >
            <Container sx={{ py: "20px" }}>
                <Box
                    sx={{
                        display: { xs: "flex", md: "grid" },
                        alignItens: "flex-start",
                        justifyContent: "space-between",
                        width: "100%",
                        flexDirection: { xs: "column", md: "row" },

                        gridTemplateColumns: {
                            xs: "none",
                            md: "repeat(3, 1fr)",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            flexDirection: "column",
                            justifyContent: "center",
                            my: "20px",
                        }}
                    >
                        <Typography variant="h6" textAlign="center">
                            Encontre esse projeto no Github
                        </Typography>
                        <Box sx={{ textAlign: "center" }}>
                            <IconButton
                                sx={{ color: palette.neutral.main }}
                                href="https://github.com/josenaldo/enciropedia/"
                                target="_new"
                            >
                                <GitHubIcon sx={{ fontSize: 100 }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "grid",
                            flexDirection: "column",
                            justifyContent: "center",
                            my: "20px",
                        }}
                    >
                        <Typography variant="h6" textAlign="center">
                            Quer ajudar esse projeto?
                        </Typography>
                        <Button
                            href="/quero-ajudar/"
                            target="_new"
                            size="large"
                            sx={{
                                color: palette.neutral.main,
                            }}
                        >
                            <Typography variant="h5" textAlign="center">
                                Colabore!
                            </Typography>
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: "grid",
                            flexDirection: "column",
                            justifyContent: "center",
                            my: "20px",
                        }}
                    >
                        <Typography variant="h6" textAlign="center">
                            Quer falar comigo?
                        </Typography>
                        <Box
                            component="ul"
                            sx={{
                                listStyleType: "none",
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            {socials.map((social) => (
                                <Box
                                    component="li"
                                    key={social.url}
                                    sx={{
                                        display: "inline",
                                        magin: "0 5px",
                                    }}
                                >
                                    <IconButton
                                        href={social.url}
                                        target="_new"
                                        sx={{
                                            color: palette.neutral.main,
                                        }}
                                    >
                                        <social.icon />
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ my: "10px", textAlign: "center" }}>
                    Copyright © 2022 - Josenaldo de Oliveira Matos Filho
                </Box>
            </Container>
        </Box>
    );
}
