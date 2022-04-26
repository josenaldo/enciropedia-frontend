import Head from "next/head";

import { Box, Container } from "@mui/material";

import { AppConfig } from "@/config";

import { ChangePasswordPage } from "@/components/account";
import { setToken, fetcher, getTokenFromServerCookie } from "@/common/lib";

const getServerSideProps = async ({ req }) => {
    const jwt = getTokenFromServerCookie(req);

    if (!jwt) {
        return {
            redirect: { destination: "/" },
        };
    } else {
        const responseData = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        );

        responseData.avatar = responseData.avatar
            ? responseData.avatar
            : "default_avatar";

        return {
            props: {
                userData: responseData,
            },
        };
    }
};

const MudarSenhaPage = ({ userData }) => {
    return (
        <Container sx={{ my: "40px" }}>
            <Head>
                <title>Mudar Senha - {AppConfig.name}</title>
            </Head>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                <ChangePasswordPage userData={userData} />
            </Box>
        </Container>
    );
};

export default MudarSenhaPage;

export { getServerSideProps };
