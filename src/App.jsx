import SideBar from "./Components/SideBar"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Cryptocurrencies from "./Pages/Cryptocurrencies"
import Cryptonews from "./Pages/Cryptonews"
import CryptoDetails from "./Pages/CryptoDetails"


// importing css
import './index.css'


export default function App() {

  return (
    <main className="app-container">
      <SideBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/cryptonews" element={<Cryptonews />} />
        <Route path="/cryptocurrencies/:uuid" element={<CryptoDetails />} />
      </Routes>
    </main>
  )
}