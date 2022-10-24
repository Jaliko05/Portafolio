import "../App.css";
import iconJavi from "../assets/icon_J1.png";

window.addEventListener('scroll',()=>{
  console.log("scroll");
  let header = document.querySelector("header");
  header.classList.toggle("abajo",window.scrollY>0)
})

function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav__icon">
            <a href="#section-0">
              <img src={iconJavi} className = "icono" />
            </a>
          </div>
          <div className="nav__lista">
            <ul className="nav__lista-ul">
              <li className="nav__lista-ul-li">
                <a href="#section-1">ABOUT ME</a>
              </li>
              <li className="nav__lista-ul-li">
                <a href="#section-2">SKILLS</a>
              </li>
              <li className="nav__lista-ul-li">
                <a href="#section-3">EDUCATION</a>
              </li>
              <li className="nav__lista-ul-li">
                <a href="#section-4">PROJECTS</a>
              </li>
              <li className="nav__lista-ul-li">
                <a href="#section-5">CONTACT</a>
              </li>
            </ul> 
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
