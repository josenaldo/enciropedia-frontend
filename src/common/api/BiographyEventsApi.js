import { apiCall } from "@/common/lib";

export class BiographyEventsApi {
    static apiPath = "/eventos-biograficos";

    constructor() {}

    createUrl(path) {
        return `/biografia/${path}`;
    }

    async findAll() {
        const result = await apiCall({ path: BiographyEventsApi.apiPath });

        const biographyEvents = result.data.map((biographyEvent) => {
            biographyEvent.url = this.createUrl(biographyEvent.slug);
            return biographyEvent;
        });

        return { data: biographyEvents, meta: result.meta };
    }

    async findAllPaths() {
        const params = { fields: "slug" };
        const result = await apiCall({
            path: BiographyEventsApi.apiPath,
            params: params,
        });

        const paths = result.data.map((biographyEvent) => {
            return {
                params: {
                    slug: biographyEvent.slug,
                },
            };
        });

        return paths;
    }

    async findAllLinks() {
        const params = { fields: ["slug", "titulo"] };
        const result = await apiCall({
            path: BiographyEventsApi.apiPath,
            params: params,
        });

        const paths = result.data.map((biographyEvent) => {
            return {
                id: biographyEvent.slug,
                url: this.createUrl(biographyEvent.slug),
                text: biographyEvent.titulo,
            };
        });

        return paths;
    }

    async getData(path) {
        const params = {
            filters: {
                slug: {
                    $eq: path,
                },
            },
            populate: {
                imagem: "*",
                anterior: {
                    fields: ["slug", "titulo"],
                },
                proximo: {
                    fields: ["slug", "titulo"],
                },
            },
        };
        const result = await apiCall({
            path: BiographyEventsApi.apiPath,
            params: params,
        });

        const biographyEvent = result.data[0];

        biographyEvent.url = this.createUrl(biographyEvent.slug);
        if (biographyEvent.anterior) {
            biographyEvent.anterior.url = this.createUrl(
                biographyEvent.anterior.slug
            );
        }
        if (biographyEvent.proximo) {
            biographyEvent.proximo.url = this.createUrl(
                biographyEvent.proximo.slug
            );
        }

        return biographyEvent;
    }
}
