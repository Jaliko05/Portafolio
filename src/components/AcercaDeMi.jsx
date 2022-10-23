import "../App.css";
import retrato from "../assets/retrato.jpeg";

function AcercaDeMi() {
  return (
    <>
      <section className="acerca_de_mi" id="section-1">
        <div className="div_acerca_de_mi">
          <div className="acerca_de_mi_description">
            <div className="acerca_de_mi_titulo">
              <h2 className="titulo_acerca_de_mi">1. ACERCA DE MI</h2>
            </div>
            <div className="acerca_de_mi_p">
              <p>
                Soy ingeniero electrónico de la UPTC, especialista en Bases de
                Datos me caracterizo por ser un joven responsable, creativo con
                iniciativa y puntualidad. Asumo con responsabilidad los retos y
                metas que se planteen; adaptabilidad al cambio y facilidad para
                trabajar en equipo con una excelente lógica de programación.
              </p>
            </div>
          </div>
          <div className="acerca_de_mi_img">
            <img src={retrato} />
          </div>
        </div>
      </section>
    </>
  );
}

export default AcercaDeMi;
