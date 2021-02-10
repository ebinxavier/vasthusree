import React from "react";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
