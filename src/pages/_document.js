import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />

                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />

                    {/* <!-- Favicons generated at http://realfavicongenerator.net/--> */}
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicon/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/favicon/safari-pinned-tab.svg"
                        color="#303030"
                    />
                    <link rel="shortcut icon" href="/favicon/favicon.ico" />
                    <meta name="msapplication-TileColor" content="#303030" />
                    <meta
                        name="msapplication-config"
                        content="/favicon/browserconfig.xml"
                    />
                    <meta name="theme-color" content="#303030" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
