// import { getPostsLinks } from "@/common/lib";
import { BiographyEventsApi } from "@/common/lib";
import { topPages } from "@/constants";

export default async function handler(req, res) {
    const id = req.query.id;

    // const posts = getPostsLinks();
    const biographyEventsApi = new BiographyEventsApi();
    const biographyEvents = await biographyEventsApi.findAllLinks();
    console.log(biographyEvents);
    const allPages = [...topPages, ...biographyEvents];

    const pages = allPages.reduce((previous, current) => {
        previous[current.id] = { url: current.url, text: current.text };
        return previous;
    }, {});

    res.status(200).json(pages[id]);
}
