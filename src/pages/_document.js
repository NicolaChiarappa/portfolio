import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en' data-theme='forest'>
      <Head>
        <link
          rel='icon'
          href='/AI.png' // Assicurati che il percorso al file favicon sia corretto
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <body className='font-lato '>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
