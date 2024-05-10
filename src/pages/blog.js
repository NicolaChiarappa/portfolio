import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Head from "next/head";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import ThemeSwitcher from "@/components/ThemeSwitch";
import Navbar from "@/components/Navbar";
//import animationData from "animation.json";

const App = () => {
  return (
    <>
      <Head>
        <title>Nicola Chiarappa | Home</title>
      </Head>
      <Navbar></Navbar>
    </>
  );
};

export default App;
