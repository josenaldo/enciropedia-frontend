import qs from "qs";

export async function fetcher(url, options = {}) {
    let response;
    if (!options) {
        response = await fetch(url);
    } else {
        response = await fetch(url, options);
    }
    const data = await response.json();
    return data;
}

export function createUrl(path, params) {
    const query = qs.stringify(params, {
        encodeValuesOnly: true,
    });

    let finalUrl = new URL(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}${path}?${query}`
    );

    return finalUrl;
}

export async function apiCall({ path, params, option }) {
    const url = createUrl(path, params);

    const data = await fetcher(url, option);

    return data;
}
