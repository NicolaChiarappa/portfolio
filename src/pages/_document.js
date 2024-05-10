import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en' data-theme='forest'>
      <Head>
        <link
          rel='icon'
          href='/AI.png' // Assicurati che il percorso al file favicon sia corretto
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap'
        />
      </Head>

      <body className='font-lato '>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
