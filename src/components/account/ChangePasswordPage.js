import { useState } from "react";
import { useRouter } from "next/router";
import {
    Box,
    Alert,
    Card,
    CardContent,
    CardActions,
    Snackbar,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import {
    Password as PasswordIcon,
    Save as SaveIcon,
} from "@mui/icons-material";

import { TextField } from "@/components/elements";

import { fetcher, getTokenFromLocalCookie } from "@/common/lib";

const ChangePasswordPage = ({ userData }) => {
    const router = useRouter();
    const defaultUSerProfileData = {
        password: "",
        confirmPassword: "",
    };
    const [userProfileData, setUserProfileData] = useState(
        defaultUSerProfileData
    );
    const [message, setMessage] = useState();
    const [volatileMessage, setVolatileMessage] = useState();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setVolatileMessage(null);
        setMessage(null);

        if (userProfileData.password !== userProfileData.confirmPassword) {
            setMessage({
                text: "Senha e Confirmar Senha não podem ser diferentes.",
                level: "error",
            });
            setLoading(false);
            return;
        }

        if (!userProfileData.password || !userProfileData.confirmPassword) {
            setMessage({
                text: "Senha e Confirmar Senha são obrigatórios.",
                level: "error",
            });
            setLoading(false);
            return;
        }

        try {
            const jwt = getTokenFromLocalCookie();
            const responseData = await fetcher(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userData.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                    },
                    body: JSON.stringify({
                        password: userProfileData.password,
                    }),
                }
            );
            setVolatileMessage({
                text: "Senha alterada com sucesso.",
                level: "success",
            });
            setLoading(false);
            setUserProfileData(defaultUSerProfileData);
            router.push("/mudar-senha");
        } catch (error) {
            console.error(error);
            setMessage({
                text: "Ocorreu um erro ao salvar. Tente novamente em alguns minutos.",
                level: "error",
            });
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserProfileData({ ...userProfileData, [name]: value });
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            sx={{ display: "flex", justifyContent: "center" }}
        >
            <Card
                elevation={1}
                sx={{
                    height: "100%",
                    width: { xs: "100%", sm: "75%", md: "50%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    itemsAlign: "flex-start",
                }}
            >
                <CardContent
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {message && (
                        <Alert
                            severity={message.level}
                            onClose={() => {
                                setMessage(null);
                            }}
                        >
                            {message.text}
                        </Alert>
                    )}
                    <Box
                        sx={{
                            color: "neutral.main",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <TextField
                            Icon={<PasswordIcon />}
                            type="password"
                            id="password"
                            name="password"
                            label="Senha nova"
                            value={userProfileData.password}
                            required
                            onChange={(e) => handleChange(e)}
                        />

                        <TextField
                            Icon={<PasswordIcon />}
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirmar senha"
                            value={userProfileData.confirmPassword}
                            required
                            onChange={(e) => handleChange(e)}
                        />
                    </Box>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                    }}
                >
                    <LoadingButton
                        type="submit"
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                    >
                        Salvar
                    </LoadingButton>
                </CardActions>
            </Card>
            {volatileMessage && (
                <Snackbar
                    open={volatileMessage}
                    autoHideDuration={10000}
                    onClose={() => {
                        setVolatileMessage(null);
                    }}
                >
                    <Alert
                        onClose={() => {
                            setVolatileMessage(null);
                        }}
                        severity={volatileMessage.level}
                        sx={{ width: "100%" }}
                    >
                        {volatileMessage.text}
                    </Alert>
                </Snackbar>
            )}
        </Box>
    );
};
export { ChangePasswordPage };
