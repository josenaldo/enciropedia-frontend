import Link from "next/link";
import {
    Box,
    Button,
    Stack,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
    Typography,
} from "@mui/material";
import {
    Explore as ExploreIcon,
    History as HistoryIcon,
    Newspaper as NewspaperIcon,
    OndemandVideo as OndemandVideoIcon,
    Groups as GroupsIcon,
    Engineering as EngineeringIcon,
} from "@mui/icons-material";

const DialBar = (props) => {
    const iconFontSize = {
        xs: "3.00rem",
        sm: "3.75rem",
        md: "4.50rem",
        lg: "5.25rem",
        xl: "6.00rem",
    };

    const pages = [
        {
            url: "/pnd",
            label: "PND",
            icon: <ExploreIcon sx={{ fontSize: iconFontSize }} />,
            description: "Programa Nacional de Desenvolvimento",
        },
        {
            url: "/biografia",
            label: "Biografia",
            icon: <HistoryIcon sx={{ fontSize: iconFontSize }} />,
            description: "Vida e obra do professor",
        },
        {
            url: "/noticias",
            label: "Notícias",
            icon: <NewspaperIcon sx={{ fontSize: iconFontSize }} />,
            description: "Notícias do mundo político",
        },
        {
            url: "/videos",
            label: "Vídeos",
            icon: <OndemandVideoIcon sx={{ fontSize: iconFontSize }} />,
            description: "Vídeos do Cirão",
        },
        {
            url: "/turma-boa",
            label: "Turma Boa",
            icon: <GroupsIcon sx={{ fontSize: iconFontSize }} />,
            description: "Movimentos de apoio",
        },
        {
            url: "/colaboradores",
            label: "Colaboradores",
            icon: <EngineeringIcon sx={{ fontSize: iconFontSize }} />,
            description: "Quem faz essa budega funcionar",
        },
    ];

    return (
        <Box>
            <Box
                sx={{
                    px: "0",
                    display: "grid",
                    gap: 2,
                    alignItems: "stretch",
                    alignContent: "stretch",
                    gridTemplateColumns: {
                        xs: "repeat(2, 1fr)",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                        lg: "repeat(6, 1fr)",
                    },
                }}
            >
                {pages.map((page) => {
                    return (
                        <Link href={page.url} passHref key={page.url}>
                            <Card
                                component="a"
                                sx={{
                                    textDecoration: "none",
                                    color: "neutral.main",
                                    borderRadius: 2,
                                }}
                            >
                                <CardActionArea>
                                    <CardContent
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            padding: 1,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                my: 1,
                                            }}
                                        >
                                            {page.icon}
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            textAlign="center"
                                            my={1}
                                            fontWeight="bold"
                                            sx={{
                                                fontSize: {
                                                    xs: "1.00rem",
                                                    sm: "1.12rem",
                                                    md: "1.25rem",
                                                    lg: "1.37rem",
                                                    xl: "1.50rem",
                                                },
                                            }}
                                        >
                                            {page.label}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            textAlign="center"
                                        >
                                            {page.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    );
                })}
            </Box>
        </Box>
    );
};

export { DialBar };
