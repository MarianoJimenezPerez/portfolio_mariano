import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import CloudProjects from "../components/CloudProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Hero />
      <Header />
      <About />
      <Skills />
      <Projects />
      <CloudProjects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
