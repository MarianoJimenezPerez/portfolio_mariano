import React, {useRef, useEffect} from "react";
import Typed from 'typed.js';

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import ME from "./../assets/mariano-jimenez-perez.png";
import CV from "./../assets/CV.pdf";

const Hero = () => {
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<h5 style="display:inline;">Front end developer</h5>', '<h5 style="display:inline;">Great person</h5>'],
      typeSpeed: 70,
      backSpeed: 30,
      loop: true
    });
  
    return () => {
      typed.destroy();
    }
  }, [])
  
  return (
    <div className="hero">
      <div className="container hero__container">
        <h5>Hello I'm</h5>
        <h1>Mariano Jiménez Pérez</h1>
        <span ref={el} className="text__secondary">
          Front end
        </span>
        <div className="cta">
          <a href={CV} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn__primary">
            Let's talk
          </a>
        </div>
        <div className="hero__socials">
          <a
            href="https://www.linkedin.com/in/marianojimenezperez-latamly/"
            target="_blank"
          >
            {" "}
            <BsLinkedin />
          </a>
          <a href="https://github.com/MarianoJimenezPerez" target="_blank">
            <FaGithub />
          </a>
          <a href="mailto:marianojimenezperez1@gmail.com" >
            <AiOutlineMail />
          </a>
        </div>
        <div className="me">
          <img src={ME} alt="Mariano Jiménez Pérez" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </div>
  );
};

export default Hero;
