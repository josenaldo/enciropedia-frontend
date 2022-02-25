import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { DefaultTemplate } from "@/common/templates";
import { theme } from "@/styles";
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
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <DefaultTemplate>
                    <Component {...pageProps} />
                </DefaultTemplate>
            </ThemeProvider>
        </>
    );
}

export default App;
