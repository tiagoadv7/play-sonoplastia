import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Player Sonoplastia IASD - Simplifique sua rotina de sonoplastia."
        />
        <meta
          name="keywords"
          content="Sonoplastia, Player Sonoplastia, IASD, ferramentas para simplificar a sonoplastia"
        />
        <meta name="author" content="Tiago Lima" />
        <title>=::Player Sonoplastia::=</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content="=::Player Sonoplastia::=" />
        <meta
          property="og:description"
          content="Simplifique sua rotina de sonoplastia com os aplicativos!."
        />
        <meta
          property="og:image"
          content="https://player-sonoplastia.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.86446550.webp&w=3840&q=75"
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
