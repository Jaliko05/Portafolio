import React from "react";
import "../App.css";
const $form = document.querySelector("form");

if ($form) {
  $form.addEventListener("submit", handleSubmit);
  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      this.reset();
      alert("Gracias por contactarmer, te escribiré pronto :)");
    }
  }
}
function Contacto() {
  return (
    <>
      <section className="contacto" id="section-5">
        <div className="contenedor_contacto">
          <form action="https://formspree.io/f/xpznyang" method="POST">
            <div className="form_mesaje">
              <h1>Contacto</h1>
              <p>
                Si te intereso mi portafolio y quieres ponerte en contacto llena
                el siguiente formulario, pronto estaremos hablando
              </p>
            </div>
            <div className="form_input">
              <label htmlFor="nombre">Nombre</label>
              <input
                name="nombre"
                type="text"
                id="nombreApellido"
                className="input_contacto"
                required
                placeholder="Nombre"
              />
            </div>
            <div className="form_input">
              <label htmlFor="correoElectronico">Correo Electronico</label>
              <input
                name="correoElectronico"
                type="email"
                id="correoElectronico"
                className="input_contacto"
                required
                placeholder="email@dominio.com"
              />
            </div>
            <div className="form_input">
              <label htmlFor="asunto">Asunto</label>
              <input
                name="asunto"
                type="text"
                id="nombreApellido"
                className="input_contacto"
                required
                placeholder="Asunto"
              />
            </div>

            <div className="form_input_mensaje">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                name="mensaje"
                id="mensaje"
                className="input_contacto"
                required
                placeholder="Mensaje"
              />
            </div>
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contacto;
