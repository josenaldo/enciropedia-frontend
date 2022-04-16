import { BiographyEventsApi } from "@/common/api";
import { ArticlesApi } from "@/common/api";
import { topPages, authenticatedPages, accountPages } from "@/constants";

export default async function handler(req, res) {
    const id = req.query.id;

    const biographyEventsApi = new BiographyEventsApi();
    const biographyEvents = await biographyEventsApi.findAllLinks();

    const articlesApi = new ArticlesApi();
    const articles = await articlesApi.findAllLinks();

    const allPages = [
        ...topPages,
        ...authenticatedPages,
        ...accountPages,
        ...biographyEvents,
        ...articles,
    ];

    const pages = allPages.reduce((previous, current) => {
        previous[current.id] = { url: current.url, text: current.text };
        return previous;
    }, {});

    const text = pages[id]
        ? pages[id]
        : { url: "/404", text: "Página não encontrada" };

    res.status(200).json(text);
}
