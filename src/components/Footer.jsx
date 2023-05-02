import React from "react";
import { FaFacebookF, FiInstagram, AiOutlineWhatsApp } from "react-icons/all";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="footer">
      <a href="#" className="footer__logo">
        ME
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#cloud-projects">Cloud Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__social">
        <a href="https://www.facebook.com/mariano.jimenezperez.3/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/mariaanojp/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5493513181399" target="_blank">
          <AiOutlineWhatsApp />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy;{date.getFullYear()} Mariano Jiménez Pérez. All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
