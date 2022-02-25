import Head from "next/head";
import { DefaultTemplate } from "@/common/templates";
import { AppConfig } from "@/config";

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
                <title>{AppConfig.name}</title>
            </Head>

            <DefaultTemplate>
                <Component {...pageProps} />
            </DefaultTemplate>
        </>
    );
}

export default App;
