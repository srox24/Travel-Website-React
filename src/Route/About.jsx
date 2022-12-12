import React from "react";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";

const About = (props) => {
  return (
    <>
      <Hero
        cName="hero-about"
        heroImg="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
        title="About Us"
        url="/about"
        btnClass="hide"
      />
      <AboutUs/>
    </>
  );
};

export default About;
