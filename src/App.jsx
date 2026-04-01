import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Navbar } from './Navbar'
import Banner from './Banner'
import Stats from './Stats'
import DigitalTools from './DigitalTools'
import Models from './models'

function App() {
  return (
    <>
      <Navbar />
      <hr className="border-t border-gray-200" />
      <Banner />
      <Stats />
      <DigitalTools />
      <Models />   {/* ← ONLY THIS */}
    </>
  )
}

export default App