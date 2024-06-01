import React from "react";

import Link from "next/link";

import { IoLogoYoutube } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='navbar bg-base-100 lg:px-60 sticky top-0 z-50 '>
      <Link className='btn btn-ghost text-xl btn-sm max-lg:hidden' href={"/"}>
        Nicola Chiarappa
      </Link>
      <Link className='btn btn-ghost text-xl btn-sm lg:hidden' href={"/"}>
        NC
      </Link>
      <div className='flex flex-row w-full justify-end lg:space-x-5 '>
        <Link className='btn btn-ghost btn-sm' href='/portfolio'>
          Portfolio
        </Link>
        <Link className='btn btn-ghost btn-sm' href='/blog'>
          Blog
        </Link>
        <Link
          className='btn btn-sm lg:hover:border lg:hover:border-white bg-red-600'
          href={"https://yt.be"}
        >
          YouTube
          <IoLogoYoutube></IoLogoYoutube>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
