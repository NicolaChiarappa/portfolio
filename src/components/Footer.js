import React from "react";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='footer p-10 bg-neutral text-neutral-content absolute left-0 z-50'>
      <aside className=''>
        <p className='font-bold'>
          Nicola M. Chiarappa. <br></br>All Rights Reserved.
          <br />
        </p>
      </aside>
      <nav className='mt-0'>
        <div className='grid grid-flow-col gap-4 mt-0'>
          <LinkedInIcon fontSize='large' />
          <XIcon fontSize='large' />
          <TelegramIcon fontSize='large' />
        </div>
        <Link
          href='mailto:nicolachiarappa2001@gmail.com'
          className='flex text-neutral-content mt-4 gap-2 '
        >
          <EmailIcon />
          <p>nicolachiarappa@gmail.com</p>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
