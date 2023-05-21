import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Producto from './pages/Producto';
import Colecciones from './pages/Colecciones';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Prueba from './pages/Prueba';
import Craft from './pages/Craft.js';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='product' element={<Producto/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='coleccion' element={<Colecciones/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='craft' element={<Craft/>}/>
        <Route path='prueba' element={<Prueba/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
