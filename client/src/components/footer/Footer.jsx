import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-red-900 text-white h-12 px-4 md:px-12 text-center flex flex-row items-center justify-between">
          <p className="text-xs md:text-sm">123, Crop Street, Agri City, 456789</p>
          <p className="text-xs md:text-sm">Phone: +91 98765 43210</p>
          <p className="text-xs md:text-sm">Email: agrobridge@gmail.com</p>
          
      </footer>
    </>
  );
};

export default Footer;
