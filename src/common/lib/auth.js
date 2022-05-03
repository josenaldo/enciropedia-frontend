import Router from "next/router";
import Cookies from "js-cookie";
import { fetcher } from "@/common/lib";

export const setToken = (data, reload = true) => {
    console.log("data", data);
    if (typeof window === "undefined") {
        return;
    }
    Cookies.set("id", data.user.id);
    Cookies.set("username", data.user.username);
    Cookies.set("jwt", data.jwt);

    if (reload && Cookies.get("username")) {
        Router.reload("/");
    }
};

export const unsetToken = () => {
    if (typeof window === "undefined") {
        return;
    }
    Cookies.remove("id");
    Cookies.remove("jwt");
    Cookies.remove("username");

    Router.push("/");
};

export const getUserFromLocalCookie = () => {
    const jwt = getTokenFromLocalCookie();
    if (jwt) {
        return fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
        })
            .then((data) => {
                return data.username;
            })
            .catch((error) => console.error(error));
    } else {
        return;
    }
};

export const getIdFromLocalCookie = () => {
    const jwt = getTokenFromLocalCookie();
    if (jwt) {
        return fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
        }).then((data) => {
            return data.id;
        });
    } else {
        return;
    }
};

export const getTokenFromLocalCookie = () => {
    return Cookies.get("jwt");
};

const getCookieFromServer = (req, cookieName) => {
    if (!req.headers || !req.headers.cookie || "") {
        return undefined;
    }
    const cookie = req.headers.cookie
        .split(";")
        .find((c) => c.trim().startsWith(`${cookieName}=`));
    if (!cookie) {
        return undefined;
    }
    const value = cookie.split("=")[1];
    return value;
};

export const getUserFromServerCookie = (req) => {
    const username = getCookieFromServer(req, "username");
    return username;
};

export const getIdFromServerCookie = (req) => {
    const id = getCookieFromServer(req, "id");
    return id;
};

export const getTokenFromServerCookie = (req) => {
    const jwt = getCookieFromServer(req, "jwt");
    return jwt;
};
