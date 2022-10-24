import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Redes from "./components/Redes";
import Correo from "./components/Correo";
import Bienvenida  from "./components/Bienvenida";
import AcercaDeMi from "./components/AcercaDeMi";
import Skills from "./components/SkillsSoftSkills";
import Educacion from "./components/Educacion";
import Proyecto from "./components/Proyecto";
import Contacto from "./components/Contacto";
import "./reset.css"
import "./App.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header/>
    <Redes/>
    <Correo/>
    <Bienvenida/>
    <AcercaDeMi/>
    <Skills/>
    <Educacion/>
    <Proyecto/>
    <Contacto/>
  </React.StrictMode>
);

