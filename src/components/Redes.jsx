import iconGithub from "../assets/iconGithub.png";
import iconLinkedin from "../assets/iconLinkedin.png";
import iconInsta from "../assets/iconInsta.png";
import "../App.css";

window.addEventListener('scroll',()=>{
  let header = document.getElementById("id_redes_sociles");
  header.classList.toggle("redes_abajo",window.scrollY>0)
})

function Redes() {
  return (
    <>
      <div className="redes_sociles" id="id_redes_sociles">
        <a
          href="https://github.com/Jaliko05"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={iconGithub} alt="icono Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/javier-puentes-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={iconLinkedin} alt="icono Linkedin" />
        </a>
        <a
          href="https://www.instagram.com/javierdavid52/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={iconInsta} alt="icono Instagram" />
        </a>
      </div>
    </>
  );
}

export default Redes;
