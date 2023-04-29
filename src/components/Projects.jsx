import React, { useEffect, useState } from "react";
import { db } from "./../firebase/config";
import { collection, query, onSnapshot, getDocs } from "firebase/firestore";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      setProjects(querySnapshot.docs.map((project) => project.data()));
    };

    const unsubscribe = onSnapshot(collection(db, "projects"), () => {
      getProjects();
    });

    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <section id="projects" className="projects">
      <h5>My projects</h5>
      <h3>Portfolio</h3>
      <div className="container projects__container">
        {projects &&
          projects.map((project, index) => 
            (
              <Project project={project} key={index}/>
            )
          )}
      </div>
    </section>
  );
};

export default Projects;
