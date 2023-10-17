import camaLogoURL from "../assets/logoCAMA2023_white.png";

function Header() {
  return (
    <header className="container-fluid header_bg">
    <div className="row h-100 p-3 p-md-5">
      <div className="col-12 text-center">
        <img src={camaLogoURL} alt="" className="header_cama_logo" />
        <p className="text-white mt-4 fw-bold">2 - 3 - 4 DE NOVIEMBRE 2023 | FUERTEVENTURA</p>
      </div>
      <div className="col-12 text-center">
        <h1 className="text-white header_title">JORNADAS <br /> <span className="fw-bold">MEDIOAMBIENTALES</span></h1>
        <p className="text-white header_spacing_content">CAMA - CONFERENCIA ATLANTICA DEL MEDIO AMBIENTE</p>
      </div>
      <div className="col-12 d-none d-md-block">
        <div className="row w-75 mx-auto">
          <div className="col-6 col-md-3 mb-3">
            <div className="card text-center bg-transparent border-0">
              <p className="text-white display-4 fw-bold">3</p>
              <p className="small text-white">Jornadas dedicadas <br />al medioambiente</p>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <div className="card text-center bg-transparent border-0">
              <p className="text-white display-4 fw-bold">12</p>
              <p className="small text-white">Expertos de temas de <br /> medioambiente</p>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <div className="card text-center bg-transparent border-0">
              <p className="text-white display-4 fw-bold">+20</p>
              <p className="small text-white">Horas de charlas y <br /> participación</p>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <div className="card text-center bg-transparent border-0">
              <p className="text-white display-4 fw-bold">1</p>
              <p className="small text-white">Canal de video <br /> streaming</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 text-center">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJKHJrBMbQeLx08NlP570pWr4T3an9LZI4JSpH8njFuwCPiw/viewform" className="subsScribeBtn mx-4 mb-3 text-decoration-none d-inline-block">INSCRÍBETE</a>
        <a href="#streaming_cama_2023" className="streamingBtn mx-4 mb-3 text-decoration-none d-inline-block">VISUALIZA ONLINE</a>
      </div>
    </div>
  </header>
  )
}
export default Header; 