import iconGithub from "../assets/iconGithub.svg";
import iconLinkedin from "../assets/iconLinkedin.svg";
import iconInsta from "../assets/iconInsta.svg";
import "../App.css";

function Redes() {
  return (
    <>
      <div className="redes_sociles">
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
