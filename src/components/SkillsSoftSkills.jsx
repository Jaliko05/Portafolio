import React from "react";
import iconHtml from "../assets/html-5.png";
import iconCss from "../assets/css-3.png";
import iconJava from "../assets/java.png";
import iconRact from "../assets/react.png";
import iconGit from "../assets/git.png";
import iconSql from "../assets/sql-server.png";
import iconResp from "../assets/responsibility.png";
import iconLid from "../assets/liderazgo.png";
import iconOrg from "../assets/gestion-del-tiempo.png";
import iconCreat from "../assets/creatividad.png";
import iconEquipo from "../assets/apoyar.png";
import iconLogica from "../assets/diagrama-de-flujo.png";
import "../App.css"


function SkillsSoftSkills() {
  return (
    <>
      <section className="skills_softSKill" id="section-2">
        <div className="skills_softSKill_contenedor">
          <div className="skills_contenerdor">
            <h2 className="titulo_skills">Skills</h2>
            <div className="skills">
                <div className="skills_etiqueta">
                    <img className="skills_etiqueta_imagen" src={iconHtml}></img>
                    <h3 className="skills_etiqueta_titulo">Html 5</h3>
                </div>
                <div className="skills_etiqueta">
                    <img className="skills_etiqueta_imagen" src={iconCss}></img>
                    <h3 className="skills_etiqueta_titulo">Css 3</h3>
                </div>
                <div className="skills_etiqueta">
                    <img className="skills_etiqueta_imagen" src={iconJava}></img>
                    <h3 className="skills_etiqueta_titulo">JavaScript</h3>
                </div>
                <div className="skills_etiqueta">
                    <img className="skills_etiqueta_imagen" src={iconRact}></img>
                    <h3 className="skills_etiqueta_titulo">React</h3>
                </div>
                <div className="skills_etiqueta">
                    <img className="skills_etiqueta_imagen" src={iconGit}></img>
                    <h3 className="skills_etiqueta_titulo">Git Github</h3>
                </div>
                <div className="skills_etiqueta">
                    <img className="skills_etiqueta_imagen" src={iconSql}></img>
                    <h3 className="skills_etiqueta_titulo">Sql Pl/sql</h3>
                </div>
            </div>
          </div>
          <div className="softSkills_contenedor">
            <h2 className="titulo_skills">Soft Skills</h2>
            <div className="softSkills">
                <div className="softSkills_etiqueta">
                    <img className="softSkills_etiqueta_icono" src={iconResp}></img>
                    <h3 className="softSkills_etiqueta_titulo">Responsable</h3>
                </div>
                <div className="softSkills_etiqueta">
                    <img className="softSkills_etiqueta_icono" src={iconLid}></img>
                    <h3 className="softSkills_etiqueta_titulo">Lider</h3>
                </div>
                <div className="softSkills_etiqueta">
                    <img className="softSkills_etiqueta_icono" src={iconOrg}></img>
                    <h3 className="softSkills_etiqueta_titulo">Organizado</h3>
                </div>
                <div className="softSkills_etiqueta">
                    <img className="softSkills_etiqueta_icono" src={iconCreat}></img>
                    <h3 className="softSkills_etiqueta_titulo">Creativo</h3>
                </div>
                <div className="softSkills_etiqueta">
                    <img className="softSkills_etiqueta_icono" src={iconEquipo}></img>
                    <h3 className="softSkills_etiqueta_titulo" >Trabajo en equipo</h3>
                </div>
                <div className="softSkills_etiqueta">
                    <img className="softSkills_etiqueta_icono" src={iconLogica}></img>
                    <h3 className="softSkills_etiqueta_titulo">logica</h3>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsSoftSkills;
