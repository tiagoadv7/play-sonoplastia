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
        <meta name="author" content="Seu Nome" />

        
        <title>=::Player Sonoplastia::=</title>

       
        <link rel="icon" href="/favicon.svg" />
        
       
        <meta property="og:title" content="=::Player Sonoplastia::=" />
        <meta property="og:description" content="Descrição do site para redes sociais." />
        <meta property="og:image" content="/path/to/social-image.jpg" />
        <meta property="og:url" content="https://mailgo-rho.vercel.app/" />
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
