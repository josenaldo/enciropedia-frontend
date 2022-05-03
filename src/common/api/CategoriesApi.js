import { apiCall, createApiUrl } from "@/common/lib";

export class CategoriesApi {
    static apiPath = "/categorias";

    constructor() {}

    createUrl(path) {
        return `/${path}`;
    }

    injectUrl(result, category) {
        const categories = result.data.map((category) => {
            category.url = this.createUrl(category.slug);
            return category;
        });

        result.data = categories;
    }

    createFindAllParams(page = 1, pageSize = 10) {
        return {
            populate: "*",
            pagination: {
                page: page,
                pageSize: pageSize,
            },
        };
    }

    createFindAllUrl(page = 1, pageSize = 10) {
        const params = this.createFindAllParams(page, pageSize);
        const url = createApiUrl(CategoriesApi.apiPath, params);

        return url;
    }

    async findAll(page = 1, pageSize = 10) {
        const result = await apiCall({
            path: CategoriesApi.apiPath,
            params: this.createFindAllParams(page, pageSize),
        });

        this.injectUrl(result, category);

        return result;
    }

    async findAllPaths() {
        const params = {
            fields: "slug",
        };

        const result = await apiCall({
            path: CategoriesApi.apiPath,
            params: params,
        });

        const paths = result.data.map((category) => {
            return {
                params: {
                    category: category.slug,
                },
            };
        });

        return paths;
    }

    async findAllLinks() {
        const params = {
            fields: ["slug", "rotulo"],
        };

        const result = await apiCall({
            path: CategoriesApi.apiPath,
            params: params,
        });

        const paths = result.data.map((category) => {
            return {
                id: category.slug,
                url: this.createUrl(category.slug),
                text: category.rotulo,
            };
        });

        return paths;
    }

    async getData(path) {
        const result = await apiCall({
            path: CategoriesApi.apiPath,
            params: {
                filters: {
                    slug: {
                        $eq: path,
                    },
                },
            },
        });

        const category = result.data[0];

        category.url = this.createUrl(category.slug);
        return category;
    }
}
