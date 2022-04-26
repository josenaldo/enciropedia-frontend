import { useState } from "react";
import { useRouter } from "next/router";
import {
    Box,
    Alert,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Switch,
    FormGroup,
    FormControlLabel,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import {
    AccountCircle as AccountCircleIcon,
    Email as EmailIcon,
    Person as PersonIcon,
    Phone as PhoneIcon,
    Map as MapIcon,
    WhatsApp as WhatsAppIcon,
    Save as SaveIcon,
} from "@mui/icons-material";

import { fetcher, getTokenFromLocalCookie } from "@/common/lib";
import { ProfileAvatar } from "@/components/account";
import { TextField } from "@/components/elements";

const ProfilePage = ({ userData }) => {
    const router = useRouter();
    const [userProfileData, setUserProfileData] = useState(userData);
    const [message, setMessage] = useState();
    const [loadingSave, setLoadingSave] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingSave(true);

        if (userData.password !== userData.confirmPassword) {
            setMessage({
                text: "Senha e Confirmar Senha não podem ser diferentes.",
                level: "error",
            });
            setLoadingSave(false);
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
                        username: userProfileData.username,
                        email: userProfileData.email,
                        fullname: userProfileData.fullname,
                        phone: userProfileData.phone,
                        cep: userProfileData.cep,
                        allowGroup: userProfileData.allowGroup,
                    }),
                }
            );
            setMessage({
                text: "Usuário salvo com sucesso.",
                level: "success",
            });
            setLoadingSave(false);

            router.push("/perfil");
        } catch (error) {
            console.error(error);
            setMessage({
                text: "Ocorreu um erro ao salvar. Tente novamente em alguns minutos.",
                level: "error",
            });
            setLoadingSave(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserProfileData({ ...userProfileData, [name]: value });
    };

    const handleChangSwitch = (e) => {
        const { name, checked } = e.target;
        setUserProfileData({ ...userProfileData, [name]: checked });
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
                <CardMedia
                    sx={{
                        bgcolor: "background.paper",
                        display: "flex",
                    }}
                >
                    <ProfileAvatar
                        avatar={userData.avatar}
                        userId={userData.id}
                    />
                </CardMedia>
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
                            Icon={<PersonIcon />}
                            type="text"
                            id="fullname"
                            name="fullname"
                            label="Nome completo"
                            value={userProfileData.fullname}
                            autoFocus
                            onChange={(e) => handleChange(e)}
                        />

                        <TextField
                            Icon={<AccountCircleIcon />}
                            type="text"
                            id="username"
                            name="username"
                            label="Nome de usuário"
                            value={userProfileData.username}
                            required
                            autoFocus
                            onChange={(e) => handleChange(e)}
                        />

                        <TextField
                            Icon={<EmailIcon />}
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                            value={userProfileData.email}
                            required
                            onChange={(e) => handleChange(e)}
                        />

                        <TextField
                            Icon={<PhoneIcon />}
                            type="text"
                            id="phone"
                            name="phone"
                            label="Telefone"
                            value={userProfileData.phone}
                            autoFocus
                            onChange={(e) => handleChange(e)}
                        />

                        <TextField
                            Icon={<MapIcon />}
                            type="text"
                            id="cep"
                            name="cep"
                            label="CEP"
                            value={userProfileData.cep}
                            autoFocus
                            onChange={(e) => handleChange(e)}
                        />

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-end",
                                flexDirection: "row",
                                mb: "16px",
                            }}
                        >
                            <Box
                                sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            >
                                <WhatsAppIcon />
                            </Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            name="allowGroup"
                                            checked={userProfileData.allowGroup}
                                            onChange={(e) =>
                                                handleChangSwitch(e)
                                            }
                                        />
                                    }
                                    label="Quero fazer parte do grupo da Aliança Rebelde"
                                />
                            </FormGroup>
                        </Box>
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
                        loading={loadingSave}
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                    >
                        Salvar
                    </LoadingButton>
                </CardActions>
            </Card>
        </Box>
    );
};

export { ProfilePage };
