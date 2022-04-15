import Image from "next/image";
import { Link } from "@/components/elements";

const Logo = () => {
    return (
        <Link href="/">
            <Image
                src="/images/enciropedia-logo-navbar.svg"
                alt="Logo a enciropedia"
                width={140}
                height={32}
            />
        </Link>
    );
};

export { Logo };
