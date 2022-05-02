import { createContext, useContext, useEffect, useState } from "react";
import { getUserFromLocalCookie } from "@/common/lib";

let userState;

const User = createContext({ user: null, loading: false });

const UserProvider = ({ value, children }) => {
    const { user } = value;

    useEffect(() => {
        if (!userState && user) {
            userState = user;
        }
    }, [user]);

    return <User.Provider value={value}>{children}</User.Provider>;
};

const useUser = () => useContext(User);

const useFetchUser = () => {
    const [data, setUser] = useState({
        user: userState || null,
        loading: userState === undefined,
    });

    useEffect(() => {
        if (userState !== undefined) {
            return;
        }

        let isMounted = true;
        const resolveUser = async () => {
            const user = await getUserFromLocalCookie();
            if (isMounted) {
                setUser({ user, loading: false });
            }
        };
        resolveUser();

        return () => {
            isMounted = false;
        };
    }, []);

    return data;
};

export { UserProvider, useUser, useFetchUser };
