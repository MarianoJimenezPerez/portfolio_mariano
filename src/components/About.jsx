import React from "react";
import { FaAward, BsBook, FaRegHandshake } from "react-icons/all";
import ME from "./../assets/mariano-jimenez-perez.png";

const About = () => {
  return (
    <section id="about" className="about">
      <h5>Get to know</h5>
      <h3>About Me</h3>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="Mariano Jiménez Pérez" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Choosing the right thing in the project</small>
            </article>
            <article className="about__card">
              <BsBook className="about__icon" />
              <h5>Skills</h5>
              <small>Trending technologies in the world</small>
            </article>
            <article className="about__card">
              <FaRegHandshake className="about__icon" />
              <h5>Humanity</h5>
              <small>Human quality in the process</small>
            </article>
          </div>
          <p>
            I'm a passionate full stack developer with a specialization in
            frontend development. I enjoy spending time with my pets, swimming,
            and exploring the outdoors. My love for technology is evident in my
            enthusiasm for staying up-to-date with the latest trends and
            advancements in the field. My attention to detail and
            problem-solving skills make me an asset in any project I undertake.
            I value a balanced lifestyle that includes both work and leisure
            activities, which allows me to pursue my interests while maintaining
            a high level of productivity in my professional life.
          </p>
          <a href="#contact" className="btn btn__primary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
