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
                <title>{AppConfig.name}</title>
                <meta name="description" content={AppConfig.description}></meta>
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
