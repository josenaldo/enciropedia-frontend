import {
    apiCall,
    getTokenFromLocalCookie,
    getTokenFromServerCookie,
} from "@/common/lib";

import { ArticlesApi } from "@/common/api";

export class FavoritesApi {
    static apiPath = "/favoritos";

    constructor() {}

    createUrl(path) {
        return `/biografia/${path}`;
    }

    async findAll({ user, req, page = 1, pageSize = 10 }) {
        const jwt =
            typeof window !== "undefined"
                ? getTokenFromLocalCookie()
                : getTokenFromServerCookie(req);

        const option = jwt
            ? { headers: { Authorization: `Bearer ${jwt}` } }
            : "";

        const params = {
            populate: {
                artigo: {
                    fields: ["titulo", "slug", "descricao"],
                    populate: { categoria: "*" },
                },
            },
            filters: {
                user: {
                    username: {
                        $eq: user,
                    },
                },
            },
            pagination: {
                page: page,
                pageSize: pageSize,
            },
            sort: ["createdAt:desc"],
        };

        const result = await apiCall({
            path: FavoritesApi.apiPath,
            params: params,
            option: option,
        });

        if (result.data) {
            const articlesApi = new ArticlesApi();
            result.data = result.data.map((favorito) => {
                favorito.artigo.url = articlesApi.createUrl(
                    favorito.artigo.slug,
                    favorito.artigo.categoria.slug
                );
                return favorito;
            });
        }

        return result;
    }

    async create() {}

    async isFavorito(user, article) {}
}
