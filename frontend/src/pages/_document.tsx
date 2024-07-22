import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <title>Super Mega Basic Twitter</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Salvo Bisconti" />
        <meta httpEquiv="content-language" content="IT" />
        <meta
          name="description"
          content="Un tweeter semplificato ma non per questo meno utile ..."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3aa0f4" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
