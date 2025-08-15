import React from "react";
import "./practica.css";

import logo from "./img/logo.png";
import contacto from "./img/contacto.png";

import Recetas from "./pages/Recetas";
import Receta from "./pages/Receta";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Header logo={logo} />
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Home />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/recetas/:id" element={<Receta />} />
        </Routes>
      </main>
      <Footer phoneIcon={contacto} />
    </BrowserRouter>
  );
}

export default App;
