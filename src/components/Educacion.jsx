import React from "react";
import imgElectro from "../assets/electronica.png";
import logoUptc from "../assets/uptc.png";
import logoAlura from "../assets/alura.png";
import "../App.css"

function Educacion() {
  return (
    <>
      <section className="educacion" id="section-3">
        <div className="contenedor_educacion">
          <div className="contenedor_educacion_titulo">
            <h2 className="titulo_educacion"> Formacion Academica</h2>
          </div>
          <div className="contenedor_educacion_tarjetas">
            <div className="tarjetas_educacion">
              <div className="div_imagen">
                <img className="tajeta_educacion_imagen_electro" src={imgElectro}></img>
              </div>
              <div className="tarjeta_educacion_nombre">
                  <h4 >
                    Ingeniero Electronico
                  </h4>
              </div>
            </div>
            <div className="tarjetas_educacion">
              <div className="div_imagen">
                <img className="tajeta_educacion_imagen_uptc" src={logoUptc}></img>
              </div>
              <div className="tarjeta_educacion_nombre">
                  <h4 >
                    Posgrado Bases de datos
                  </h4>
              </div>
            </div>
            <div className="tarjetas_educacion">
              <div className="div_imagen">
                <img className="tajeta_educacion_imagen" src={logoAlura}></img>
              </div>
              <div className="tarjeta_educacion_nombre">
                  <h4 >Full-Stack Developer</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Educacion;
