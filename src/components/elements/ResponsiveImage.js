import Image from "next/image";

const ResponsiveImage = (props) => {
    return (
        <Image alt={props.alt} layout="responsive" loading="lazy" {...props} />
    );
};

export { ResponsiveImage };
