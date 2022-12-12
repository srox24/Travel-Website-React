import React from 'react';
import Hero from '../components/Hero';
import Trips from '../components/Trips';

const Services = () => {
  return (
    <>
    <Hero
      cName="hero-services"
      heroImg="https://images.unsplash.com/photo-1543269865-0a740d43b90c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      title="Our Services"
      url="/services"
      btnClass="hide"
    />
    <Trips />
  </>
  )
}

export default Services