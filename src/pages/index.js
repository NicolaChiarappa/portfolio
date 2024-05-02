import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
//import animationData from "animation.json";

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 lg:px-40 text-deepblue'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 h-fit py-2 '
          >
            <li className='mb-1'>
              <a>Portfolio</a>
            </li>
            <li className='mb-1'>
              <a>About me</a>
            </li>
            <li className='mb-1'>
              <a>Projects</a>
            </li>
            <li className='mb-1'>
              <a className='text-red-600 font-bold '>Youtube</a>
            </li>
            <li className=''>
              <button className='text-blue-600 font-bold'>Telegram</button>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost text-xl'>Nicola Chiarappa</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a href=''>About me</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end hidden lg:flex justify-end space-x-5'>
        <a className='btn text-red-600'>Youtube</a>
        <a className='btn text-blue-500'>Telegram</a>
      </div>
    </div>
  );
};

const GradientText = () => {
  const text = "ma solo ciò che conta";
  const textArray = text.split("");

  return (
    <div className='flex justify-center my-3 '>
      <div className='relative w-9 h-9'>
        <Image alt='' fill className='absolute' src='/icons/AI.png'></Image>
      </div>
      <h1 className='text-3xl font-black py-4'>
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
    <div className='hero min-h-screen  text-cream px-2'>
      <div className='hero-content text-center'>
        <div className='max-w-xl'>
          <h1 className='text-5xl font-bold'>👋 Nicola qui</h1>
          <br></br>
          <h1 className='text-3xl font-bold opacity-85'>
            {"sto sviluppando qualcosa"}
          </h1>
          <GradientText />
        </div>
      </div>
    </div>
  );
};

const VideoCard = ({ url, title }) => {
  return (
    <div className='card card-compact lg:w-96 w-72  bg-base-100 shadow-xl carousel-item  text-deepblue'>
      <figure>
        <img src={url} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Come ho ricreato Pacman con ChatGPT</h2>

        <div className='card-actions justify-end'>
          <button className='btn bg-blue-400 text-cream'>Leggi ora</button>
          <button className='btn bg-red-600 text-cream'>Guarda ora</button>
        </div>
      </div>
    </div>
  );
};

const RecentYoutube = () => {
  return (
    <div className='flex flex-col items-center '>
      <h2 className='text-4xl font-bold'>I miei ultimi video</h2>
      <div className='carousel carousel-center space-x-5 rounded-box py-9 max-w-full px-4'>
        <VideoCard
          url={
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8MHwwfHx8Mg%3D%3D"
          }
        ></VideoCard>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <RecentYoutube />
      <div className='h-28'></div>
    </div>
  );
};

export default App;
