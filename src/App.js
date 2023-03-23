import './App.css';
import React from 'react';
import Nav from './components/Nav'
import Home from './components/Home'
import Aulas from './components/Aulas'
import Sobre from './components/Sobre'
import Aula from './components/Aula';
import Assistir from './components/Assistir'

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
            <Route exact path="/aulas/:id" element={<Aula />}/>
            <Route exact path="/sobre" element={<Sobre />} />
            <Route exact path="/assistir" element={<Assistir />}/>
            <Route exact path="*" render={()=><h1 style={{color:"red",width:"50px"}}>404 - Página não encontrada</h1>}/>
          </Routes>
      
        </div>
      </Router>
    </>

    
  );
}

export default App;
