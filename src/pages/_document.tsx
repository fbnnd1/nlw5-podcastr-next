import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconcert" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css?family=Inter&family=Lexend:wght500;600;display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}