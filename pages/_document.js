import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head />
      <body className='bg-gray-900'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Sonoplastia IASD" />
        <meta name="keywords" content="Sonoplastia IASD, Player Sonoplastia, para, facilitar no seu dia a dia" />
        <meta name="author" content="Tiago Lima" />

        
        <title>=::Player Sonoplastia::=</title>

       
        <link rel="icon" href="/favicon.svg" />
        
       
        <meta property="og:title" content="=::Player Sonoplastia::=" />
        <meta property="og:description" content="Site para facilitar a sonoplastia." />
        <meta property="og:image" content="https://github.com/tiagoadv7/play-sonoplastia/blob/main/public/static/logo/logo.webp" />
        <meta property="og:url" content="https://player-sonoplastia.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mailgo - Template" />
        <meta name="twitter:description" content="Descrição do site no Twitter." />
        <meta name="twitter:image" content="/path/to/twitter-image.jpg" /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
