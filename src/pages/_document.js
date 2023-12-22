import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap'
        />
      </Head>

      <body className='font-lato px-32'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
