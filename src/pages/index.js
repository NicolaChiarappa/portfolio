import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Head from "next/head";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import ThemeSwitcher from "@/components/ThemeSwitch";
import Navbar from "@/components/Navbar";
import { IoArrowForward, IoChevronDown, IoPeople } from "react-icons/io5";
import Link from "next/link";
import Footer from "@/components/Footer";
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
    <div className='lg:px-60 px-5'>
      <Head>
        <title>Nicola Chiarappa | Home</title>
      </Head>

      <Hero />
      <Below data={data} />
    </div>
  );
};

const Hero = () => {
  return (
    <div className='hero lg:min-h-screen  min-h-[80vh] '>
      <div className='hero-content text-center flex-col    '>
        <h1 className='lg:text-7xl text-5xl font-black '>
          <span className='element inline-block'>👋🏻</span> Qui Nicola
        </h1>

        <h2 className='mt-10 lg:text-5xl text-3xl font-bold '>
          Uso il codice<br></br>per dare <span className='italic'>vita</span>{" "}
          alle idee
        </h2>
        <div className='flex max-lg:flex-col items-center lg:gap-8'>
          <Link href='/blog' className='btn btn-primary btn-lg mt-10 text-xl'>
            Scopri il mio blog
          </Link>
        </div>
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

const Below = ({ data }) => {
  return (
    <div className='flex min-h-screen flex-col justify-start space-y-20 items-center '>
      {/* <div className='flex flex-col space-y-6 items-center w-full'>
        <div>
          <h3 className='lg:text-3xl text-2xl font-bold mb-4'>
            {"L'AI può "}
            <span className='highlight-container'>
              <span className='highlight'>sostituire </span>
            </span>
            il lavoro dei programmtori?
          </h3>
          <h3 className='lg:text-3xl text-2xl font-bold mb-4'>
            {"Come li supporta?"}
          </h3>
          <p className='lg:text-2xl text-xl '>
            Voglio rispondere a queste domande insieme a voi e condividere le
            scoperte che questo mondo riserva. <br></br>Lo faremo attraverso la
            creazione di progetti reali.
          </p>
          <p className='lg:text-2xl text-xl '>{""}</p>
        </div>
        <Link
          className='btn btn-primary btn-md text-3xl lg:w-1/3 w-full'
          href={"blog"}
        >
          <IoPeople></IoPeople>
          Unisciti
        </Link>
      </div> */}
      <div className='flex flex-col space-y-6 w-full '>
        <h3 className='lg:text-3xl text-2xl font-bold mb-4'>Ultimi progetti</h3>
        <div className=' grid max-lg:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 '>
          {data["data"].map((article) => (
            <ArticleCard key={article["id"]} data={article["attributes"]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
