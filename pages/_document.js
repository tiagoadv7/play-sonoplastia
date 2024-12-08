import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head />
      <body className='bg-gray-900'>
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
        
       
        <meta property="og:title" content="=::Player Sonoplastia::=" />
        <meta property="og:description" content="Site para facilitar a sonoplastia." />
        <meta
          property="og:image"
          content="https://player-sonoplastia.vercel.app/favicon.svg"
        />
        <meta property="og:url" content="https://player-sonoplastia.vercel.app" />
        <meta property="og:type" content="website" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
