import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Joinus from "./components/Joinus";
import About from "./components/About";
import Faq from "./components/Faq";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/joinus" element={<Joinus />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
      </Routes>
    </div>
  )
}

export default App