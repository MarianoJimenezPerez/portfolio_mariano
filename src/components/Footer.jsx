import React from "react";

const Footer = () => {
  const date = new Date;

  return (
    <footer className="footer">
      <a href="#" className="footer__logo">
        MARIANO
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
        <a href="#">F</a>
        <a href="#">I</a>
        <a href="#">W</a>
      </div>

      <div className="footer__copyright">
        <small>&copy;{date.getFullYear()} Mariano Jiménez Pérez. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
