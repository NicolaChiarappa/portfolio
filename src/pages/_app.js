import Navbar from "@/components/Navbar";
import "../styles/globals.css";

import { useRouter } from "next/router";
import Router from "next/router";
import { useEffect } from "react";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
