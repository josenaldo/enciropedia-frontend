import {
    Explore as ExploreIcon,
    History as HistoryIcon,
    Newspaper as NewspaperIcon,
    OndemandVideo as OndemandVideoIcon,
    Groups as GroupsIcon,
    Engineering as EngineeringIcon,
} from "@mui/icons-material";

const topPages = [
    { id: "pnd", url: "/pnd", text: "PND", icon: <ExploreIcon /> },
    {
        id: "biografia",
        url: "/biografia",
        text: "Biografia",
        icon: <HistoryIcon />,
    },
    {
        id: "noticias",
        url: "/noticias",
        text: "Notícias",
        icon: <NewspaperIcon />,
    },
    {
        id: "videos",
        url: "/videos",
        text: "Vídeos",
        icon: <OndemandVideoIcon />,
    },
    {
        id: "turma-boa",
        url: "/turma-boa",
        text: "Turma Boa",
        icon: <GroupsIcon />,
    },
    {
        id: "colaboradores",
        url: "/colaboradores",
        text: "Colaboradores",
        icon: <EngineeringIcon />,
    },
];

const authenticatedPages = [
    { id: "favoritos", url: "/favoritos", text: "Favoritos" },
];

const accountPages = [
    { id: "login", url: "/login", text: "Login" },
    { id: "registro", url: "/registro", text: "Registro" },
    { id: "perfil", url: "/perfil", text: "Perfil" },
    { id: "mudar-senha", url: "/mudar-senha", text: "Mudar Senha" },
];

const errorPages = [
    { id: "404", url: "/404", text: "Página não encontrada" },
    { id: "401", url: "/401", text: "Acesso não autorizado" },
];

export { topPages, authenticatedPages, accountPages, errorPages };
