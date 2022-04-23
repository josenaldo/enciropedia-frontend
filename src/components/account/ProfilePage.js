import { useState } from "react";
import { useRouter } from "next/router";
import {
    Box,
    Alert,
    AlertTitle,
    Button,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    TextField,
    Input,
    IconButton,
    Switch,
    FormGroup,
    FormControlLabel,
    CircularProgress,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import {
    AddAPhoto as AddAPhotoIcon,
    AccountCircle as AccountCircleIcon,
    Edit as EditIcon,
    Email as EmailIcon,
    Password as PasswordIcon,
    Person as PersonIcon,
    Phone as PhoneIcon,
    Map as MapIcon,
    WhatsApp as WhatsAppIcon,
    Save as SaveIcon,
} from "@mui/icons-material";

import { useFetchUser } from "@/contexts";
import { setToken, fetcher, getTokenFromLocalCookie } from "@/common/lib";
import { ProfileAvatar } from "@/components/account";

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
                        password: userProfileData.password,

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
                        <FormInput
                            Icon={<PersonIcon />}
                            type="text"
                            id="fullname"
                            name="fullname"
                            label="Nome completo"
                            value={userProfileData.fullname}
                            autoFocus
                            onChange={(e) => handleChange(e)}
                        />

                        <FormInput
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

                        <FormInput
                            Icon={<EmailIcon />}
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                            value={userProfileData.email}
                            required
                            onChange={(e) => handleChange(e)}
                        />

                        <FormInput
                            Icon={<PhoneIcon />}
                            type="text"
                            id="phone"
                            name="phone"
                            label="Telefone"
                            value={userProfileData.phone}
                            autoFocus
                            onChange={(e) => handleChange(e)}
                        />

                        <FormInput
                            Icon={<MapIcon />}
                            type="text"
                            id="cep"
                            name="cep"
                            label="CEP"
                            value={userProfileData.cep}
                            autoFocus
                            onChange={(e) => handleChange(e)}
                        />

                        <FormInput
                            Icon={<PasswordIcon />}
                            type="password"
                            id="oldPassword"
                            name="oldPassword"
                            label="Senha antiga"
                            required
                            onChange={(e) => handleChange(e)}
                        />

                        <FormInput
                            Icon={<PasswordIcon />}
                            type="password"
                            id="password"
                            name="password"
                            label="Senha nova"
                            required
                            onChange={(e) => handleChange(e)}
                        />

                        <FormInput
                            Icon={<PasswordIcon />}
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirmar senha"
                            required
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
                                    label="Quero fazer parte do grupo da Aliança
                                    Rebelde"
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
                    {/* {loadingSave && <CircularProgress color="primary" />} */}
                    <LoadingButton
                        type="submit"
                        loading={loadingSave}
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                    >
                        Salvar
                    </LoadingButton>
                    {/* <Button type="submit">Salvar</Button> */}
                </CardActions>
            </Card>
        </Box>
    );
};
export { ProfilePage };

const FormInput = ({
    Icon,
    type,
    id,
    name,
    label,
    value,
    required,
    autofocus,
    onChange,
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "row",
                mb: "16px",
            }}
        >
            <Box sx={{ color: "action.active", mr: 1, my: 0.5 }}>{Icon}</Box>
            <TextField
                type={type}
                id={id}
                name={name}
                label={label}
                variant="standard"
                margin="dense"
                value={value}
                fullWidth
                required={required ? required : false}
                autoFocus={autofocus ? autofocus : false}
                onChange={onChange}
            />
        </Box>
    );
};
