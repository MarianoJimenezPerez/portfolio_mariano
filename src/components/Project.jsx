import React from "react";

const Project = ({ project }) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item__image">
        <img src={project.image} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <div className="portfolio__item__cta">
        <a href={project.githubLink || "#"} className="btn" target="_blank" >
          Github
        </a>
        <a
          href={project.demoLink || "#"}
          className={`btn ${!project.done? "btn__disabled" : "btn__primary"}`}
          target="_blank"
        >
          Live Demo
        </a>
      </div>
      {!project.done ? <div className="portfolio__building">Building</div> : ""}
    </article>
  );
};

export default Project;
