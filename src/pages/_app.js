import "../styles/globals.css";

import { useRouter } from "next/router";
import Router from "next/router";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
