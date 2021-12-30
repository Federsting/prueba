import '../src/estilos/App.css';
import '../src/estilos/Catalogocss.css';
import { Routes, Route } from "react-router-dom";
import { Login } from './components/Login';
import Home from './components/Home';
import React from 'react';
import Olvidastelacontra from './components/Olvidastelacontra';
import Registro from './components/Registro';
import Gap from './components/Gap'
import Dancefit from './components/Dancefit';
import Funcional from './components/Funcional';
import Spinning from './components/Spinning';
import Catalogo from './components/Catalogo';

function App() {
  return (
    <Routes>
      <Route path="/terceraentrega" element={<Login />} />
      <Route path="/terceraentrega/Home" element={<Home />} />
      <Route path="/terceraentrega/Olvidastelacontra" element={<Olvidastelacontra />} />
      <Route path="/terceraentrega/Registro" element={<Registro />} />
      <Route path="/Gap" element={<Gap />} />
      <Route path="/Dancefit" element={<Dancefit />} />
      <Route path="/Funcional" element={<Funcional />} />
      <Route path="/Spinning" element={<Spinning />} />
      <Route path="/Catalogo" element={<Catalogo />} />
    </Routes>
  );
}


export default App;