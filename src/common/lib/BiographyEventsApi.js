import { apiCall } from "@/common/lib";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import imageSize from "rehype-img-size";
import externalLinks from "rehype-external-links";
import rehypePrism from "rehype-prism-plus";

export class BiographyEventsApi {
    static apiPath = "/eventos-biograficos";
    constructor() {}

    async findAll() {
        const result = await apiCall({ path: BiographyEventsApi.apiPath });

        const biographyEvents = result.data.map((biographyEvent) => {
            return {
                id: biographyEvent.id,
                url: `/biografia/${biographyEvent.attributes.slug}`,
                ...biographyEvent.attributes,
            };
        });

        return biographyEvents;
    }

    async findAllPaths() {
        const result = await apiCall({
            path: BiographyEventsApi.apiPath,
            params: { fields: "slug" },
        });

        const paths = result.data.map((biographyEvent) => {
            return {
                params: {
                    slug: biographyEvent.attributes.slug,
                },
            };
        });

        return paths;
    }

    async getData(path) {
        const result = await apiCall({
            path: BiographyEventsApi.apiPath,
            params: { "filters[slug][$eq]": path, populate: "*" },
        });

        const biographyEvent = result.data[0];

        const mdxSource = await serialize(biographyEvent.attributes.conteudo, {
            mdxOptions: {
                // use the image size plugin, you can also specify which folder to load images from
                // in my case images are in /public/images/, so I just prepend 'public'
                rehypePlugins: [
                    [imageSize, { dir: "public" }],
                    [
                        externalLinks,
                        {
                            target: "_blank",
                            rel: ["nofollow", "noopener", "noreferrer"],
                        },
                    ],
                    [rehypePrism],
                ],
            },
        });

        console.log(mdxSource);
        return {
            id: biographyEvent.id,
            url: `/biografia/${biographyEvent.attributes.slug}`,
            mdxSource,
            ...biographyEvent.attributes,
        };
    }
}
