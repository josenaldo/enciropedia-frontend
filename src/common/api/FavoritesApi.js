import {
    apiCall,
    getTokenFromLocalCookie,
    getUserFromLocalCookie,
    getIdFromLocalCookie,
} from "@/common/lib";

import { ArticlesApi } from "@/common/api";

export class FavoritesApi {
    static apiPath = "/favoritos";

    constructor() {}

    createUrl(path) {
        return `/biografia/${path}`;
    }

    async findAll() {
        const user = await getUserFromLocalCookie();
        const jwt = getTokenFromLocalCookie();

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

    async find({ user, article }) {
        const jwt = getTokenFromLocalCookie();

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
                artigo: {
                    id: {
                        $eq: article.id,
                    },
                },
            },
        };

        const result = await apiCall({
            path: FavoritesApi.apiPath,
            params: params,
            option: option,
        });

        return result.data && result.data.length > 0 ? result.data[0] : null;
    }

    async create(article, note) {
        const userId = await getIdFromLocalCookie();
        const jwt = getTokenFromLocalCookie();

        const option = {
            method: "POST",
            body: JSON.stringify({
                data: {
                    artigo: article.id,
                    anotacao: note,
                    user: userId,
                },
            }),
        };

        if (jwt) {
            option.headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            };
        }

        const result = await apiCall({
            path: FavoritesApi.apiPath,
            option: option,
        });
        return result;
    }

    async delete(favorite) {
        const jwt = getTokenFromLocalCookie();

        const option = {
            method: "DELETE",
        };

        if (jwt) {
            option.headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            };
        }

        const result = await apiCall({
            path: `${FavoritesApi.apiPath}/${favorite.id}`,
            option: option,
        });
        return result;
    }
}
