import React, { useState, useRef, useEffect } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  BsCodeSlash,
  AiOutlineFundProjectionScreen,
  AiOutlineCloudUpload,
  AiOutlineMail,
} from "react-icons/all";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const navLinks = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      if (scrollPosition === 0) {
        // Si el usuario está en la parte superior de la página, activar la primera sección en la barra de navegación
        setActiveNav("#home");
      } else if (
        scrollPosition < sections[0].offsetTop ||
        scrollPosition >=
          sections[sections.length - 1].offsetTop +
            sections[sections.length - 1].offsetHeight
      ) {
        // Si el usuario está por encima de la primera sección o en la sección de contacto, desactivar todos los botones
        setActiveNav("#");
      } else {
        sections.forEach((currentSection) => {
          const sectionTop = currentSection.offsetTop - 150;
          const sectionHeight = currentSection.offsetHeight;
          const sectionId = currentSection.getAttribute("id");
          const menuButton = document.querySelector(`[href="#${sectionId}"]`);

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            // Si el usuario está viendo esta sección, activar el botón correspondiente en la barra de navegación
            setActiveNav(`#${sectionId}`);
            menuButton.classList.add("active");
          } else {
            // Si el usuario no está viendo esta sección, desactivar el botón correspondiente en la barra de navegación
            menuButton.classList.remove("active");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className="nav">
        <a
          href="#home"
          ref={(el) => (navLinks.current[0] = el)}
          onClick={() => setActiveNav("#home")}
          className={activeNav === "#home" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          ref={(el) => (navLinks.current[1] = el)}
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#skills"
          ref={(el) => (navLinks.current[2] = el)}
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
        >
          <BsCodeSlash />
        </a>
        <a
          href="#projects"
          ref={(el) => (navLinks.current[3] = el)}
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? "active" : ""}
        >
          <AiOutlineFundProjectionScreen />
        </a>
        <a
          href="#cloud-projects"
          ref={(el) => (navLinks.current[4] = el)}
          onClick={() => setActiveNav("#cloud-projects")}
          className={activeNav === "#cloud-projects" ? "active" : ""}
        >
          <AiOutlineCloudUpload />
        </a>
        <a
          href="#contact"
          ref={(el) => (navLinks.current[5] = el)}
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <AiOutlineMail />
        </a>
      </nav>
    </header>
  );
};

export default Header;
