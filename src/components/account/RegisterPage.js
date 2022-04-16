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
    Typography,
    TextField,
} from "@mui/material";
import { setToken, fetcher } from "@/common/lib";

const RegisterPage = () => {
    const router = useRouter();
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errorMessage, setErrorMessage] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userData.password !== userData.confirmPassword) {
            setErrorMessage(
                "Senha e Confirmar Senha não podem ser diferentes."
            );
            return;
        }
        try {
            const responseData = await fetcher(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: userData.username,
                        email: userData.email,
                        password: userData.password,
                    }),
                    method: "POST",
                }
            );
            setToken(responseData, false);
            router.push("/perfil");
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
        >
            <Card
                elevation={1}
                sx={{
                    height: "100%",
                    width: "100%",
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
                    <Box>
                        <Typography variant="h1" textAlign="center">
                            Registro
                        </Typography>
                    </Box>

                    {errorMessage && (
                        <Alert
                            severity="error"
                            onClose={() => {
                                setErrorMessage(null);
                            }}
                        >
                            <AlertTitle>Erro</AlertTitle>
                            {errorMessage}
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
                            type="text"
                            id="username"
                            name="username"
                            label="Nome de usuário"
                            variant="standard"
                            margin="dense"
                            fullWidth
                            required
                            autoFocus
                            onChange={(e) => handleChange(e)}
                        />

                        <TextField
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                            variant="standard"
                            margin="dense"
                            fullWidth
                            required
                            autoFocus
                            onChange={(e) => handleChange(e)}
                        />

                        <TextField
                            type="password"
                            id="password"
                            name="password"
                            label="Senha"
                            variant="standard"
                            margin="dense"
                            fullWidth
                            required
                            autoFocus
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirmar Senha"
                            variant="standard"
                            margin="dense"
                            fullWidth
                            required
                            autoFocus
                            onChange={(e) => handleChange(e)}
                        />
                    </Box>
                </CardContent>
                <CardActions>
                    <Button type="submit">Registrar</Button>
                </CardActions>
            </Card>
        </Box>
    );
};
export { RegisterPage };
