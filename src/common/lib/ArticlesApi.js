import { apiCall, createApiUrl } from "@/common/api";

export class ArticlesApi {
    static apiPath = "/artigos";

    constructor() {}

    createUrl(path, category) {
        return `/${category}/${path}`;
    }

    injectUrl(result, category) {
        const articles = result.data.map((article) => {
            article.url = this.createUrl(article.slug, category);
            return article;
        });

        result.data = articles;
    }

    createFindAllParams(category, page = 1, pageSize = 5) {
        return {
            populate: "*",
            filters: {
                categoria: {
                    slug: {
                        $eq: category,
                    },
                },
            },
            pagination: {
                page: page,
                pageSize: pageSize,
            },
            sort: ["publishedAt:desc"],
        };
    }

    createFindAllUrl(category, page = 1, pageSize = 5) {
        const params = this.createFindAllParams(category, page, pageSize);
        const url = createApiUrl(ArticlesApi.apiPath, params);

        return url;
    }

    async findAll(category, page = 1, pageSize = 5) {
        const result = await apiCall({
            path: ArticlesApi.apiPath,
            params: this.createFindAllParams(category, page, pageSize),
        });

        // const articles = result.data.map((article) => {
        //     article.url = this.createUrl(article.slug, category);
        //     return article;
        // });

        this.injectUrl(result, category);

        return result;
    }

    async findAllPaths(category) {
        const params = {
            fields: "slug",
            filters: {
                categoria: {
                    slug: {
                        $eq: category,
                    },
                },
            },
        };

        const result = await apiCall({
            path: ArticlesApi.apiPath,
            params: params,
        });

        const paths = result.data.map((article) => {
            return {
                params: {
                    slug: article.slug,
                },
            };
        });

        return paths;
    }

    async findAllLinks(category) {
        const params = {
            fields: ["slug", "titulo"],
            filters: {
                categoria: {
                    slug: {
                        $eq: category,
                    },
                },
            },
        };

        const result = await apiCall({
            path: ArticlesApi.apiPath,
            params: params,
        });

        const paths = result.data.map((article) => {
            return {
                id: article.slug,
                url: this.createUrl(article.slug, category),
                text: article.titulo,
            };
        });

        return paths;
    }

    async getData(path, category) {
        const result = await apiCall({
            path: ArticlesApi.apiPath,
            params: {
                filters: {
                    slug: {
                        $eq: path,
                    },
                    categoria: {
                        slug: {
                            $eq: category,
                        },
                    },
                },
                populate: {
                    imagem: "*",
                    categoria: "*",
                    colaborador: "*",
                },
            },
        });

        const article = result.data[0];

        article.url = this.createUrl(article.slug, article.categoria.slug);
        article.categoria.url = `/${article.categoria.slug}`;
        return article;
    }
}
