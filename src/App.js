import './App.css';
import React from 'react';
import Nav from './components/Nav'
import Home from './components/Home'
import Aulas from './components/Aulas'
import Sobre from './components/Sobre'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <>
      <Router>
        <div className="App">

          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/aulas" element={<Aulas />} />
            <Route exact path="/sobre" element={<Sobre />} />
          </Routes>

        </div>
      </Router>
    </>


  );
}

export default App;
