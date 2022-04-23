import { IncomingForm } from "formidable";
import cloudinary from "cloudinary";
import { getTokenFromServerCookie } from "@/common/lib";
import { v4 as uuidv4 } from "uuid";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function upload(req, res) {
    if (req.method === "POST") {
        const data = await new Promise((resolve, reject) => {
            const form = new IncomingForm();

            form.parse(req, (err, fields, files) => {
                if (err) return reject(err);
                resolve({ fields, files });
            });
        });
        const file = data?.files?.inputFile.filepath;
        const { user_id, old_avatar } = data.fields;

        try {
            if (old_avatar) {
                const responseDelete = await cloudinary.v2.uploader.destroy(
                    old_avatar,
                    {
                        invalidate: "true",
                    }
                );
            }

            const requestConfig = {
                public_id: `avatars/${user_id}/${uuidv4()}`,
                invalidate: "true",
                overwrite: "true",
            };

            const response = await cloudinary.v2.uploader.upload(
                file,
                requestConfig
            );
            console.log("RESPOSTA CLOUDINARY", response);
            const { public_id } = response;
            const jwt = getTokenFromServerCookie(req);
            const userResponse = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${user_id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                    },
                    body: JSON.stringify({
                        avatar: public_id,
                    }),
                }
            );
            const data = await userResponse.json();
            console.log(data);
            return res.json({ message: "success", avatar: public_id });
        } catch (error) {
            console.error(JSON.stringify(error));
        }
    } else {
        return res.status(403).send("Forbidden");
    }
}
