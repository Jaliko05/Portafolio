import React from "react";
import encriptador from "../assets/encriptador.png";
import ahorcado from "../assets/ahorcado.png";
import calculadora from "../assets/calculadora.png";

function Proyecto() {
  return (
    <>
      <section className="proyectos" id="section-4">
        <div className="tarjeta_proyecto">
          <div className="div_texto_tarjeta">
            <div className="div_texto_tarjeta_2">
              <h2>Encriptador de Texto</h2>
              <p>
                Proyecto que encripta un texto, lo desencripta, tambien posee un
                boton para copiar el resultado encriptado
              </p>
              <a
                href="https://jaliko05.github.io/Encriptador_texto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Visitar Proyecto</button>
              </a>
            </div>
          </div>
          <div className="div_imagen_tarjeta_1">
            <img src={encriptador}></img>
          </div>
        </div>
        <div className="tarjeta_proyecto">
          <div className="div_imagen_tarjeta_2">
            <img src={ahorcado}></img>
          </div>
          <div className="div_texto_tarjeta">
            <div className="div_texto_tarjeta_2">
              <h2>Juego del ahorcado</h2>
              <p>
                Proyecto que recibe una letra del teclado para adivinar la
                palabra
              </p>
              <a
                href="https://jaliko05.github.io/Juego_ahorcado/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Visitar Proyexto</button>
              </a>
            </div>
          </div>
        </div>
        <div className="tarjeta_proyecto">
          <div className="div_texto_tarjeta">
            <div className="div_texto_tarjeta_2">
                <h2>Calculadora</h2>
                <p>Proyecto de una calculadora de operaciones basicas donde puedes reiniciar o eliminar digitos ingresados ,creado con React</p>
                <a
                  href="https://jaliko05.github.io/Calculadora/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Visitar Proyexto</button>
                </a>
            </div>
          </div>
          <div className="div_imagen_tarjeta_1">
            <img src={calculadora}></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default Proyecto;
