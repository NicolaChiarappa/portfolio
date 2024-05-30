import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Head from "next/head";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import ThemeSwitcher from "@/components/ThemeSwitch";
import Navbar from "@/components/Navbar";
import Link from "next/link";
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
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className='min-h-[100vh]'>
      <Head>
        <title>Nicola Chiarappa | Blog</title>
      </Head>

      <div className='lg:mx-60 px-5 mt-10 lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-y-24 gap-x-24 max-lg:space-y-14 '>
        {data["data"].map((article) => (
          <ArticleCard key={article["id"]} data={article["attributes"]} />
        ))}
      </div>
    </div>
  );
};

const ArticleCard = ({ data }) => {
  const { Cover, Titolo, slug } = data;

  return (
    <Link
      href={"/blog/" + slug}
      className='card w-full bg-base-100  hover:shadow-xl text-neutral-content rounded-xl min-h-64 justify-end '
    >
      <figure>
        <div className='bg-black absolute top-0 z-[11] opacity-65 w-full h-full rounded-xl'></div>
        <Image
          className='object-cover opacity-100 z-10 rounded-xl'
          fill
          src={
            Cover.data != null
              ? "https://panel.nicolach.com" +
                Cover.data.attributes.formats.small.url
              : "https://placehold.co/600x400?text=IN+ARRIVO..."
          }
          alt=''
        />
      </figure>
      <div className='card-body  h-fit z-[12] absolute '>
        <div className='flex h-fit '>
          <h4 className='card-title text-2xl w-fit'>{Titolo}</h4>
        </div>
      </div>
    </Link>
  );
};

// src={"https://panel.nicolach.com" +Cover.data.attributes.formats.small.url}

export default App;
