import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Player Sonoplastia IASD - Simplifique sua rotina de sonoplastia com nossa plataforma eficiente e acessível."
        />
        <meta
          name="keywords"
          content="Sonoplastia, Player Sonoplastia, IASD, ferramentas para simplificar a sonoplastia"
        />
        <meta name="author" content="Tiago Lima" />
        <title>=::Player Sonoplastia::=</title>
        <link rel="icon" href="/favicon.svg" />

        {/* Open Graph */}
        <meta property="og:title" content="=::Player Sonoplastia::=" />
        <meta
          property="og:description"
          content="Simplifique sua rotina de sonoplastia com nossa plataforma eficiente e acessível."
        />
        <meta
          property="og:image"
          content="https://github.com/tiagoadv7/play-sonoplastia/blob/main/public/static/images/seo/logo.png"
        />
        <meta property="og:url" content="https://player-sonoplastia.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Additional meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className="bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
