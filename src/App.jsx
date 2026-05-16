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
import { ToastContainer } from 'react-toastify'
import ToolTabs from './ToolTab'
import CartTab from './CartTab'
import GetStarted from './GetStarted'
import Pricing from './Pricing'

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar />
      <hr className="border-t border-gray-200" />
      <Banner />
      <Stats />
      <DigitalTools />
      <ToolTabs
        cart={cart}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === "products" && (
        <Models cart={cart} setCart={setCart} />
      )}

      {activeTab === "cart" && (
        <CartTab cart={cart} setCart={setCart} />
      )}
      <GetStarted />
      <Pricing />
      <ToastContainer position="top-right" />
    </>
  )
}

export default App