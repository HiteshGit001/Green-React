import React from "react"
import {BrowserRouter, Routes,Route,Link} from "react-router-dom"
import "./App.css"
import Green from "./components/Green"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"



function App() {
  return (
  <BrowserRouter>
  <>
      <nav>
      <Link className="brand-logo" to="/">Green</Link>
      <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="Services">Services</Link>
            </li>
            <li>
                <Link to="Portfolio">Portfolio</Link>
            </li>
           
            <li>
                <Link to="Contact">Contact</Link>
            </li>
            <li>
                <Link className="nav-btn" to="">Get Started</Link>
            </li>
        </ul>
      </nav>
  
  </>
  <Routes>
    <Route path="/" element={<Green/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Services" element={<Services/>}/>
    <Route path="Portfolio" element={<Portfolio/>}/>
    <Route path="Contact" element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
