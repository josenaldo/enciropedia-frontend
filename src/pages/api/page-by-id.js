import { getPostsLinks } from "@/common/lib";
import { topPages } from "@/constants";

export default function handler(req, res) {
    const id = req.query.id;

    const posts = getPostsLinks();
    const allPages = [...topPages, ...posts];

    const pages = allPages.reduce((previous, current) => {
        previous[current.id] = { url: current.url, text: current.text };
        return previous;
    }, {});

    res.status(200).json(pages[id]);
}
