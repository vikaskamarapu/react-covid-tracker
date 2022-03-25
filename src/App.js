import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App