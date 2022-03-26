import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Joinus from "./components/Joinus"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/joinus" element={<Joinus />}></Route>
      </Routes>
    </div>
  )
}

export default App