import React from 'react';
import {FaAward} from "react-icons/fa";
import ME from "./../assets/mariano-jimenez-perez.png";


const About = () => {
  return (
    <section id="about" className='about'>
      <h5>Get to know</h5>
      <h3>About Me</h3>
      <div className='container about__container'>
        <div className="about__me">
          <div className='about__me__image'>
            <img src={ME} alt="Mariano Jiménez Pérez" />
          </div>
        </div>
        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years working</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years working</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years working</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis omnis cumque enim suscipit pariatur quam facere quos exercitationem ullam soluta error impedit iusto quae aliquam, libero voluptatem animi iure earum nesciunt similique illum. Enim, doloremque eaque! Quas maxime ut nesciunt, natus laudantium maiores, neque debitis et consectetur, magni doloribus eveniet.</p>
          <a href="#contact" className='btn btn__primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About