import React, { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { db } from "./../firebase/config";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const CloudProjects = () => {
  const [cloudProjects, setCloudProjects] = useState([]);

  useEffect(() => {
    const getCloudProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "cloudProjects"));
      setCloudProjects(querySnapshot.docs.map((project) => project.data()));
    };

    const unsubscribe = onSnapshot(collection(db, "cloudProjects"), () => {
      getCloudProjects();
    });

    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <section id="cloud-projects" className="cloud__projects">
      <h5>My projects in the cloud</h5>
      <h3>See some deploys</h3>

      <Swiper
        className="container cloud__projects__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        loop
        pagination={{ clickable: true }}
      >
        {cloudProjects.map((cloudProject, index) => (
          <SwiperSlide className="cloud__project" key={index}>
            <div className="cloud__project__logo">
              <img src={cloudProject.logo} alt={cloudProject.title} />
            </div>
            <small className="cloud__project__detail">
              {cloudProject.description}
              <span>
                <a href={cloudProject.websiteURL} target="_blank">
                  {" "}
                  See more...
                </a>
              </span>
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CloudProjects;
