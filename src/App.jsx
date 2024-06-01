import React, { useEffect } from 'react'
import bgVideo from "./assets/earth1.mp4"
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HeroCard from './Components/HeroCard'
import Missions from './Components/Missions'
import Satellite from './Components/Satellite'
import Footer from './Components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  },[]);

  return (
    <div className=''>
      <div className=' h-[750px] relative '>
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[750px] w-full object-cover z-[-1]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <HeroCard />
      <Missions />
      <Satellite />
      <Footer />
    </div>
  )
}
