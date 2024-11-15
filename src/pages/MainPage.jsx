import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Domains from "../components/Domains";
import FAQ from "../components/Faq";
import Home from "../components/Home"; // Assuming you have a Home component
import Sponsors from "../components/Sponsors";
import Teams from "../components/Teams";
import Timeline from "../components/Timeline";

function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Domains />
      <Timeline />
      <Teams />
      <Sponsors />
      <FAQ />
      <Contact />
    </>
  );
}

export default MainPage;
