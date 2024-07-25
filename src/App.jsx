import React from 'react'
import { Navbar, LandingPage, Marquee, About, Eyes, Team, Cards, Footer } from './components'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Team />
      <Cards />
      <Footer />
    </div>
  )
}

export default App