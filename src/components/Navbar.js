import React from "react";
import ThemeSwitcher from "./ThemeSwitch";
import Link from "next/link";
import { RxCaretDown } from "react-icons/rx";
import { IoLogoYoutube } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 lg:px-60 sticky top-0 z-50'>
      <a className='btn btn-ghost text-xl btn-sm max-lg:hidden' href={"/"}>
        Nicola Chiarappa
      </a>
      <a className='btn btn-ghost text-xl btn-sm lg:hidden' href={"/"}>
        NC
      </a>
      <div className='flex flex-row w-full justify-end lg:space-x-5 '>
        <a className='btn btn-ghost btn-sm' href='portfolio'>
          Portfolio
        </a>
        <a className='btn btn-ghost btn-sm' href='blog'>
          Blog
        </a>
        <a className='btn btn-sm lg:hover:border lg:hover:border-white bg-red-600'>
          Youtube
          <IoLogoYoutube></IoLogoYoutube>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
