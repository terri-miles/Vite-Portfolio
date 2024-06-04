import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contacts from "./Contacts";
import Footer from "./Footer";

function MainPage() {
  return (
    <div>
      <NavBar />
      <Home />
      <Projects />
      <AboutMe />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}

export default MainPage;
