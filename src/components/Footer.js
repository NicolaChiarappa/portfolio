import React from "react";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer p-10 bg-neutral text-neutral-content'>
      <aside>
        <p>
          Nicola Chiarappa
          <br />
        </p>
      </aside>
      <nav>
        <h6 className='footer-title'>Social</h6>
        <div className='grid grid-flow-col gap-4'>
          <IoLogoYoutube size={30}></IoLogoYoutube>
          <FaTelegramPlane size={30}></FaTelegramPlane>
          <IoLogoInstagram size={30}></IoLogoInstagram>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
