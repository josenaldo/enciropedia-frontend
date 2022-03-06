import { getPostsLinks } from "@/common/lib";

export default function handler(req, res) {
    // posts = getPostsLinks();
    pages = [
        { url: "/", text: "Home" },
        { url: "/pnd", text: "PND" },
        { url: "/noticias", text: "Notícias" },
        { url: "/biografia", text: "Biografia" },
        { url: "/videos", text: "Vídeos" },
        { url: "/podcasts", text: "Podcast" },
        { url: "/movimentos", text: "Movimentos" },
        { url: "/colaboradores", text: "Colaboradores" },
        // ...posts,
    ];

    res.status(200).json(pages);
}
