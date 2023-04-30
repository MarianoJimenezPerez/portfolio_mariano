import React, { useState, useEffect } from "react";
import { db } from "./../firebase/config";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { AiFillStar } from "react-icons/ai";

const Skills = () => {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    const getSkills = async () => {
      const querySnapshot = await getDocs(collection(db, "skills"));
      setSkills(querySnapshot.docs.map((skill) => skill.data()));
    };

    const unsubscribe = onSnapshot(collection(db, "skills"), () => {
      getSkills();
    });

    return () => {
      unsubscribe;
    };
  }, []);

  const frontSkills = skills?.filter((skill) => skill.type === "frontend");
  const backSkills = skills?.filter((skill) => skill.type === "backend");

  return (
    <section id="skills" className="skills">
      <h5>What skills I have</h5>
      <h3>My experience</h3>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend</h3>
          <div className="skills__content">
            {frontSkills &&
              frontSkills.map((skill, index) => (
                <article className="skills__details" key={index}>
                  <AiFillStar className="skills__details__icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text__light">{skill.level}</small>
                  </div>
                </article>
              ))}
          </div>
        </div>
        <div className="skills__backend">
          <h3>Backend</h3>
          <div className="skills__content">
          {backSkills &&
              backSkills.map((skill, index) => (
                <article className="skills__details" key={index}>
                  <AiFillStar className="skills__details__icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text__light">{skill.level}</small>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
