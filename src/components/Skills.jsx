import React from "react";
import { AiFillStar } from "react-icons/ai";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h5>What skills I have</h5>
      <h3>My experience</h3>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend</h3>
          <div className="skills__content">
            <article className="skills__details">
              <AiFillStar className="skills__details__icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <AiFillStar className="skills__details__icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <AiFillStar className="skills__details__icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <AiFillStar className="skills__details__icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__backend">
          <h3>Backend</h3>
          <div className="skills__content">
            <article className="skills__details">
              <AiFillStar className="skills__details__icon"/>
              <div>
                <h4>Node JS</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
