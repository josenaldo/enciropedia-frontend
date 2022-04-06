import qs from "qs";

export async function fetcher(url, params = {}, option = {}) {
    let response;

    const query = qs.stringify(params, {
        encodeValuesOnly: true,
    });

    let finalUrl = new URL(`${url}?${query}`);

    if (!option) {
        response = await fetch(finalUrl);
    } else {
        response = await fetch(finalUrl, option);
    }

    const data = await response.json();

    return data;
}

export async function apiCall({ path, params, option }) {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}${path}`;

    const data = await fetcher(url, params, option);

    return data;
}
