import React from 'react'
import Navbar from './navbar';
import About from './aboutus';
import Hero from './hero';
import EventsComponent from './events';
import Socials from './Socials';
import Footer from './Footer';
import OurTeam from './ourTeam';
import '../App.css'
const home = () => {
  return (
  <>
      <div className="App">
    <Navbar />
    
    <Hero />
    <About />
    <OurTeam />
    <EventsComponent />
    <Socials />
    <Footer />
  </div>
  </>

  )
}

export default home
