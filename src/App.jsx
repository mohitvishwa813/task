import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import QualityFeatures from './components/QualityFeatures'
import CoreFeatures from './components/CoreFeatures'
import HowItWork from './components/HowItWork'
import Pricingpanel from './components/Pricingpanel'
import Accordion from './components/Accordion1'
import FreeTutorial from './components/FreeTutorial'
import Accordion2 from './components/Accordion2'
import ReadyToLearn from './components/ReadyToLearn'
import Footer from './components/Footer'



function App() {


  return (
    <>
  <div > 
<Navbar/>
<HeroSection/>
<QualityFeatures/>
<CoreFeatures/>
<Accordion/>
<HowItWork/>
<Pricingpanel/>
<FreeTutorial/>
<Accordion2/>
<ReadyToLearn/>
<Footer/>
  </div>
       
    </>
  )
}

export default App
