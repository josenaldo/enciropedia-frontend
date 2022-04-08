import { apiCall } from "@/common/lib";
import { serialize } from "next-mdx-remote/serialize";
import imageSize from "rehype-img-size";
import externalLinks from "rehype-external-links";
import rehypePrism from "rehype-prism-plus";

export class ArticlesApi {
    static apiPath = "/artigos";

    constructor() {}

    createUrl(path, category) {
        return `/${category}/${path}`;
    }

    async findAll(category) {
        const result = await apiCall({
            path: ArticlesApi.apiPath,
            params: {
                populate: "*",
                filters: {
                    categoria: {
                        slug: {
                            $eq: category,
                        },
                    },
                },
            },
        });

        const articles = result.data.map((article) => {
            return {
                id: article.id,
                url: this.createUrl(article.attributes.slug),
                ...article.attributes,
                categoria: {
                    id: article.categoria.data.id,
                    ...article.categoria.data.attributes,
                },
                colaborador: {
                    id: article.colaborador.data.id,
                    ...article.colaborador.data.attributes,
                },
            };
        });

        return articles;
    }

    async findAllPaths() {
        const result = await apiCall({
            path: ArticlesApi.apiPath,
            params: {
                fields: "slug",
                filters: {
                    categoria: {
                        $eq: category,
                    },
                },
            },
        });

        const paths = result.data.map((article) => {
            return {
                params: {
                    slug: article.attributes.slug,
                },
            };
        });

        return paths;
    }

    async findAllLinks() {
        const result = await apiCall({
            path: ArticlesApi.apiPath,
            params: {
                fields: ["slug", "titulo"],
                filters: {
                    categoria: {
                        $eq: category,
                    },
                },
            },
        });

        const paths = result.data.map((article) => {
            return {
                id: article.attributes.slug,
                url: this.createUrl(article.attributes.slug),
                text: article.attributes.titulo,
            };
        });

        return paths;
    }

    async getData(path) {
        const result = await apiCall({
            path: ArticlesApi.apiPath,
            params: {
                filters: {
                    slug: {
                        $eq: path,
                    },
                    categoria: {
                        $eq: category,
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
            },
        });

        const article = result.data[0];

        const mdxSource = await serialize(article.attributes.conteudo, {
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

        let anterior = article.attributes.anterior;

        if (anterior && anterior.data) {
            anterior.data.attributes.url = this.createUrl(
                anterior.data.attributes.slug
            );
            anterior = anterior.data.attributes;
        } else {
            anterior = null;
        }

        let proximo = article.attributes.proximo;
        if (proximo && proximo.data) {
            proximo.data.attributes.url = this.createUrl(
                proximo.data.attributes.slug
            );
            proximo = proximo.data.attributes;
        } else {
            proximo = null;
        }

        return {
            id: article.id,
            url: this.createUrl(article.attributes.slug),
            mdxSource: mdxSource,
            ...article.attributes,
            anterior: anterior,
            proximo: proximo,
        };
    }
}
