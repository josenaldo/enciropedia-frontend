import qs from "qs";
import { fetcher } from "@/common/api";

const createApiUrl = (path, params) => {
    const query = qs.stringify(params, {
        encodeValuesOnly: true,
    });

    let finalUrl = new URL(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}${path}?${query}`
    );

    return finalUrl;
};

const apiCall = async ({ path, params, option }) => {
    const url = createApiUrl(path, params);

    const data = await fetcher(url, option);

    return data;
};

export { apiCall, createApiUrl };
