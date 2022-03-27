import React from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Joinus from "./components/Joinus";
import About from "./components/About";
import Support from "./components/Faq";
import Signup from "./components/Signup";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/joinus" element={<Joinus />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  )
}

export default App