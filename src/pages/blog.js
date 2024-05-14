import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Head from "next/head";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import ThemeSwitcher from "@/components/ThemeSwitch";
import Navbar from "@/components/Navbar";
//import animationData from "animation.json";

export async function getServerSideProps() {
  try {
    const Token = process.env.API_TOKEN;
    const res = await fetch(
      "https://panel.nicolach.com/api/articolos?populate=*",
      {
        method: "GET",
        headers: {
          "Authorization": Token,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data, status: ${res.status}`);
    }

    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.error(error.message);
    return {
      props: {
        error: error.message,
      },
    };
  }
}

const App = ({ data }) => {
  return (
    <>
      <Head>
        <title>Nicola Chiarappa | Blog</title>
      </Head>
      <Navbar></Navbar>
      <div className='lg:mx-60 px-5 mt-10 lg:grid grid-cols-2 gap-y-24 max-lg:space-y-14 '>
        {data["data"].map((article) => (
          <ArticleCard key={article["id"]} data={article["attributes"]} />
        ))}
      </div>
    </>
  );
};

const ArticleCard = ({ data }) => {
  const { Cover, Titolo, slug } = data;

  return (
    <div className='card max-lg:w-full w-96 bg-base-100 shadow-xl image-full'>
      <figure>
        <Image
          width={600}
          height={600}
          src={
            "https://panel.nicolach.com" +
            Cover.data.attributes.formats.small.url
          }
          alt='Shoes'
        />
      </figure>
      <div className='card-body self-end   '>
        <div className='flex items-end '>
          <h2 className='card-title   w-fit'>{Titolo}</h2>
          <a className='btn btn-primary btn-sm text-xl' href={"/blog/" + slug}>
            Leggi
          </a>
        </div>
      </div>
    </div>
  );
};

// src={"https://panel.nicolach.com" +Cover.data.attributes.formats.small.url}

export default App;
