import React from 'react'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
const Contact = () => {
  return (
    <>
      <Hero
        cName="hero-about"
        heroImg="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80"
        title="Contact Us"
        url="/about"
        btnClass="hide"
      />
      <ContactForm/>
    </>
  )
}

export default Contact
