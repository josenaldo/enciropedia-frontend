const topPages = [
    { id: "pnd", url: "/pnd", text: "PND" },
    { id: "noticias", url: "/noticias", text: "Notícias" },
    { id: "biografia", url: "/biografia", text: "Biografia" },
    { id: "videos", url: "/videos", text: "Vídeos" },
    { id: "podcasts", url: "/podcasts", text: "Podcast" },
    { id: "movimentos", url: "/movimentos", text: "Movimentos" },
    { id: "colaboradores", url: "/colaboradores", text: "Colaboradores" },
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
