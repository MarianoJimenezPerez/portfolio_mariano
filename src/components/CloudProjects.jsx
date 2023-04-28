import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const CloudProjects = () => {
  return (
    <section id="cloud-projects" className="cloud__projects">
      <h5>My projects in the cloud</h5>
      <h3>See that brands</h3>

      <Swiper
        className="container cloud__projects__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        loop
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="cloud__project">
          <div className="cloud__project__logo">
            <img src="" alt="" />
          </div>
          <h5 className="cloud__project__name">Lorem ipsum</h5>
          <small className="cloud__project__detail">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut vero
            quo dolorum a autem eos rerum corporis? Magni nostrum obcaecati,
            impedit dignissimos nobis libero error necessitatibus cupiditate
            vitae quos excepturi!
          </small>
        </SwiperSlide>
        <SwiperSlide className="cloud__project">
          <div className="cloud__project__logo">
            <img src="" alt="" />
          </div>
          <h5 className="cloud__project__name">Lorem ipsum</h5>
          <small className="cloud__project__detail">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut vero
            quo dolorum a autem eos rerum corporis? Magni nostrum obcaecati,
            impedit dignissimos nobis libero error necessitatibus cupiditate
            vitae quos excepturi!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CloudProjects;
