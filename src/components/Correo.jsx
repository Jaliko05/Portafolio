import "../App.css";
window.addEventListener('scroll',()=>{
  let header = document.getElementById("id_correo");
  header.classList.toggle("correo_abajo",window.scrollY>0)
})

function Correo() {
  return (
    <>
      <div className="correo" id="id_correo">
        <a href="#"> javier.puentes01@gmail.com</a>
      </div>
    </>
  );
}

export default Correo;
