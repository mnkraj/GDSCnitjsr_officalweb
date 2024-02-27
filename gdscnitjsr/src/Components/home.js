import React from 'react'
import Navbar from './Navbar.js';
import About from './aboutus.js';
import Hero from './hero.js';
import EventsComponent from './events.jsx';
import Socials from './Socials.js';
import Footer from './Footer.js';
import OurTeam from './ourTeam.jsx';
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
