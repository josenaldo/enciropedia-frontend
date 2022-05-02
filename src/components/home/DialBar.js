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
    const iconFontSize = "6rem";
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
                    gap: 5,
                    alignItems: "center",
                    alignContent: "stretch",
                    gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
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
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            my: 3,
                                        }}
                                    >
                                        {page.icon}
                                    </CardMedia>
                                    <CardContent
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="h2"
                                            textAlign="center"
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
