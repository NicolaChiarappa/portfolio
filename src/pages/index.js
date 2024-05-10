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

const App = () => {
  return (
    <div className=''>
      <Head>
        <title>Nicola Chiarappa | Home</title>
      </Head>
      <Navbar />
      <Hero />
      <Below />
      <Footer />
    </div>
  );
};

const Testo = () => {
  const text = "ma solo ciò che conta";
  const textArray = text.split("");

  return (
    <div className='flex justify-center my-3 space-x-4'>
      <div className='relative w-9 h-9'>
        <Image alt='' fill className='absolute' src='/icons/AI.png'></Image>
      </div>
      <h1 className='lg:text-4xl text-3xl font-medium py-4'>
        {textArray.map((char, index) => (
          <span
            key={index}
            style={{
              color: `rgba(242, 239, 234, ${Math.max(
                0.2,
                1 - index / (textArray.length - 1)
              )})`,
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

const Hero = () => {
  return (
    <div className='hero min-h-screen bg-base-200   '>
      <div className='hero-content text-center flex-col h-full  '>
        <div className=' '>
          <h1 className='lg:text-7xl text-5xl font-bold'>👋🏻 Nicola qui</h1>
          <h3 className='mt-6 lg:text-5xl text-3xl font-medium'>
            Sto sviluppando qualcosa
          </h3>
          <Testo />
        </div>
        <div className='flex justify-start flex-col items-center justify-self-end lg:mt-48 mt-36'>
          <p className='font-medium lg:text-2xl text-xl'>in che senso?</p>
          <IoChevronDown color='white' size={60} className=''></IoChevronDown>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className='card card-compact w-full bg-base-100 shadow-xl'>
      <figure>
        <img
          className='opacity-60'
          src='https://images.pexels.com/photos/7724328/pexels-photo-7724328.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Ho realizzato Pacman con ChatGPT</h2>

        <div className='card-actions justify-end'>
          <button className='btn btn-primary btn-md'>
            Esplora
            <IoArrowForward size={25}></IoArrowForward>
          </button>
        </div>
      </div>
    </div>
  );
};

const Below = () => {
  return (
    <div className='flex min-h-screen flex-col lg:px-60 px-12 bg-base-200 justify-around space-y-20 items-center '>
      <div className='flex flex-col space-y-6 items-center w-full'>
        <div>
          <h3 className='lg:text-3xl text-2xl font-bold mb-4'>
            {"L'AI può sostituire il lavoro degli sviluppatori?"}
          </h3>
          <p className='lg:text-2xl text-xl '>
            Voglio fare con voi questo viaggio, per condividere le scoperte che
            questo mondo riserva. <br></br>Lo faremo attraverso la creazione di
            progetti reali.
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
      </div>
      <div className='flex flex-col space-y-6 w-full '>
        <h3 className='lg:text-3xl text-2xl font-bold mb-4'>Ultimi progetti</h3>
        <div className='flex max-lg:flex-col lg:space-x-20 max-lg:space-y-10'>
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
