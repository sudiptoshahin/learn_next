
import Document, { Head, Main, NextScript } from "next/document";

export default function MyDocument() {

    return (
        <html>
            <Head>
                <title>NextJS title</title>
                <link rel="stylesheet" href="/_next/static/styles.css" />
            </Head>

            <body>
                <Main />

                <NextScript />
            </body>
        </html>
    );
}