export async function fetcher(url, params = {}, option = {}) {
    let response;

    let finalUrl = new URL(url);
    for (let key in params) {
        finalUrl.searchParams.append(key, params[key]);
    }

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
