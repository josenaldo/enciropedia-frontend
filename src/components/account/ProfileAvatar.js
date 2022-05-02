import { useState } from "react";

import { useRouter } from "next/router";

import Image from "next/image";

import {
    Box,
    Avatar,
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
    Badge,
} from "@mui/material";

import {
    AddAPhoto as AddAPhotoIcon,
    AccountCircle as AccountCircleIcon,
    Edit as EditIcon,
    Email as EmailIcon,
    Password as PasswordIcon,
    Person as PersonIcon,
    Phone as PhoneIcon,
    Map as MapIcon,
    Whatsapp as WhatsappIcon,
} from "@mui/icons-material";

import { fetcher } from "@/common/lib";

const ProfileAvatar = ({ avatar, userId }) => {
    const [userAvatar, setUserAvatar] = useState(avatar);
    const [image, setImage] = useState();
    const [oldUserAvatar, setOldUserAvatar] = useState(null);

    const handleChangeAvatar = (e) => {
        setOldUserAvatar(avatar);
        setUserAvatar("default_avatar");
        setImage(null);
    };

    const uploadAvatarToClient = (e) => {
        if (e.target.files && e.target.files[0]) {
            const tempImage = e.target.files[0];
            setImage(tempImage);
        }
    };

    const uploadAvatarToServer = async () => {
        const formData = new FormData();
        const file = image;

        formData.append("inputFile", file);
        formData.append("user_id", userId);
        if (oldUserAvatar) {
            formData.append("old_avatar", oldUserAvatar);
        }

        try {
            const responseData = await fetcher("/api/upload", {
                method: "POST",
                body: formData,
            });

            console.log("RESPOSTA", responseData);

            if (responseData.message === "success") {
                setOldUserAvatar(null);
                setUserAvatar(responseData.avatar);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            {userAvatar === "default_avatar" && (
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        py: "20px",
                    }}
                >
                    <label htmlFor="upload-photo">
                        <Input
                            accept="image/*"
                            id="upload-photo"
                            name="upload-photo"
                            type="file"
                            sx={{ display: "none" }}
                            onChange={uploadAvatarToClient}
                        />
                        <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                            size="large"
                        >
                            {/* {image ? (
                                <Avatar alt="Remy Sharp" src={image} />
                            ) : ( */}
                            <AddAPhotoIcon
                                sx={{
                                    fontSize: "100px",
                                    mx: "10px",
                                    my: "10px",
                                }}
                            />
                            {/* )} */}
                        </IconButton>
                    </label>
                    <Button disabled={!image} onClick={uploadAvatarToServer}>
                        Salvar imagem
                    </Button>
                </Box>
            )}

            {/* eslint-disable @next/next/no-img-element */}
            {userAvatar && userAvatar !== "default_avatar" && (
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        py: "20px",
                    }}
                >
                    <Badge
                        overlap="circular"
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        badgeContent={
                            <IconButton
                                color="secondary"
                                aria-label="mudar foto"
                                onClick={handleChangeAvatar}
                            >
                                <AddAPhotoIcon />
                            </IconButton>
                        }
                    >
                        <Avatar sx={{ height: "200px", width: "200px" }}>
                            <Image
                                src={`https://res.cloudinary.com/enciropedia/image/upload/f_auto,q_auto,w_200,h_200,g_face,c_thumb/${userAvatar}`}
                                alt="Profile"
                                width={200}
                                height={200}
                            />
                        </Avatar>
                    </Badge>
                </Box>
            )}
        </Box>
    );
};

export { ProfileAvatar };
