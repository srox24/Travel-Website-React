import React from 'react'
import Destination from '../components/Destination'
import Hero from '../components/Hero'
import Trips from '../components/Trips'

const Home = () => {
  return (
    <>
    <Hero
    cName="hero"
    heroImg ="https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    title ="Your Journey, Your Story"
    text = "Choose Your Favourite Destination"
    btnText = "Travel Plan"
    url ="/"
    btnClass = "show"
    />
    <Destination/>
    <Trips />
    </>
    
  )
}

export default Home