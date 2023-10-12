import Header from "./components/Header";
import instaURL from "./assets/instagram.png";
import facebookURL from "./assets/facebook.png";
import youtubeURL from "./assets/youtube.png";
import sobrecamaURL from "./assets/sobrecama.png";
import CarlosSamarínURL from "./assets/CarlosSamarín.jpg";
import EduardoFranquizURL from "./assets/EduardoFranquiz.jpg";
import FelipeSiverioURL from "./assets/FelipeSiverio.jpg";
import streamingURL from "./assets/streaming.jpg";
import camaLogoURL from "./assets/logoCAMA2023_white.png";
import cabildoURL from "./assets/cabildo.png";
import elittoralURL from "./assets/elittoral.png";
import medioambienteURL from "./assets/medioambiente.jpg";

function App() {
  return (
    <>
      <Header />
      <nav>
        <div className="container-fluid h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-md-3">
              <ul className="socials">
                <li className="social_item">
                  <a href="" className="social_link">
                    <img src={instaURL} width={'50%'} alt="instagram" />
                  </a>
                </li>
                <li className="social_item">
                  <a href="" className="social_link">
                    <img src={facebookURL} width={'50%'} alt="instagram" />
                  </a>
                </li>
                <li className="social_item">
                  <a href="" className="social_link">
                    <img src={youtubeURL} width={'50%'} alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-7">
              <ul className="links">
                <li className="nav_item">
                  <a href="" className="nav_link">
                    SOBRE CAMA
                  </a>
                </li>
                <li className="nav_item mx-3">
                  <a href="" className="nav_link">
                    PROGRAMA 2023
                  </a>
                </li>
                <li className="nav_item mx-3">
                  <a href="" className="nav_link">
                    PONENTES
                  </a>
                </li>
                <li className="nav_item mx-3">
                  <a href="" className="nav_link">
                    VISUALIZA ONLINE
                  </a>
                </li>
                <li className="nav_item">
                  <a href="" className="nav_link">
                    CONTACTOS
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-2">
              <div className="nav_btn d-block">
                <a href="" className="btn_reserve streamingBtn text-decoration-none">
                  Tickets
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section id="sobre_cama_2023">
        <article className="container my-5 py-5">
          <div className="row">
            <div className="col-12 my-3 text-center">
              <h2>Sobre CAMA 2023</h2>
            </div>
            <div className="col-12 my-3">
              <img src={sobrecamaURL} className="d-block mx-auto img-fluid sobrecama_img" alt={'sobre_cama_img'} />
            </div>
            <div className="row justify-content-center">
              <div className="col-8 my-3 text-center">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti voluptatum aliquam libero optio aliquid excepturi sapiente consequatur deleniti eos culpa, cum esse magnam fugiat cupiditate possimus dolorem blanditiis debitis suscipit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sit ex, ipsam veniam repellat consectetur consequatur blanditiis non fugiat asperiores odit nesciunt laborum pariatur earum, esse eum sapiente! Sed, illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla beatae libero natus, repudiandae ullam repellendus eveniet quisquam similique fugit explicabo aperiam eaque est. Veritatis, reprehenderit quaerat unde porro voluptatum debitis.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perspiciatis laudantium eum quis, excepturi labore deserunt, sit inventore odio reiciendis adipisci. Natus, at delectus! Enim illo molestiae a odio sint!</p>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section id="programa_cama_2023">
        <div className="container my-5 py-5">
          <div className="row my-3">
            <div className="col-12 text-center">
              <p className="h2">Programa 2023</p>
            </div>
          </div>
          <div className="row my-5 d-block d-md-none">
            <div className="col-12 col-md-4 time_line_col">
              <p className="fw-bold my-5 text-center">2 de noviembre</p>
              <div className="time_line_program">
                <button>8:30</button>
                <p className="fw-bold">Acceso al evento</p>
              </div>
              <div className="time_line_program">
                <button>9:30</button>
                <p className="fw-bold">Diagnosis de los Palmerales <br /> Naturales de Fuerteventura</p>
                <p className="fst-italic">Eduardo Franquiz <br /> Agricultor y consultor <br />medioambiental</p>
              </div>
              <div className="time_line_program">
                <button>11:00</button>
                <p className="fw-bold">Sesión ruegos y preguntas</p>
              </div>
              <div className="time_line_program">
                <button>11:30</button>
                <p className="fw-bold">Diagnosis de los Palmerales <br /> Naturales de Fuerteventura</p>
                <p className="fst-italic">Carlos Pérez <br /> Técnico de medio ambiente</p>
              </div>
              <div className="time_line_program">
                <button>13:00</button>
                <p className="fw-bold">Sesión ruegos y preguntas</p>
              </div>
              <div className="time_line_program">
                <button>13:30</button>
                <p className="fw-bold">Pausa</p>
              </div>
              <div className="time_line_program">
                <button>15:30</button>
                <p className="fw-bold">Acceso al evento</p>
              </div>
              <div className="time_line_program">
                <button>16:00</button>
                <p className="fw-bold">Evaluación de la salud del suelo en <br /> Palmerales de la Isla de Fuerteventura</p>
                <p className="fst-italic">Francisco Javier Díaz Peña <br /> Profesor Contratado Universidad de La Laguna</p>
              </div>
              <div className="time_line_program">
                <button>17:00</button>
                <p className="fw-bold">Sesión ruegos y preguntas</p>
              </div>
              <div className="time_line_program">
                <button>17:30</button>
                <p className="fw-bold">Proyecto Experimental de <br /> restauración de hábitats de <br /> las cumbres de Famara</p>
                <p className="fst-italic">Carlos Samarín <br /> Técnico medioambiental</p>
              </div>
              <div className="time_line_program">
                <button>18:30</button>
                <p className="fw-bold">Sesión ruegos y preguntas</p>
              </div>
            </div>
            <div className="col-12 col-md-4 time_line_col">
              <p className="fw-bold my-5 text-center">3 de noviembre</p>
              <div className="time_line_program">
                <button>8:30</button>
                <p className="fw-bold">Acceso al evento</p>
              </div>
              <div className="time_line_program">
                <button>11:00</button>
                <p className="fw-bold">Sesión ruegos y preguntas</p>
              </div>
              <div className="time_line_program">
                <button>13:00</button>
                <p className="fw-bold">Sesión ruegos y preguntas</p>
              </div>
              <div className="time_line_program">
                <button>13:30</button>
                <p className="fw-bold">Pausa</p>
              </div>
              <div className="time_line_program">
                <button>15:30</button>
                <p className="fw-bold">Acceso al evento</p>
              </div>
              <div className="time_line_program">
                <button>17:00</button>
                <p className="fw-bold">Sesión ruegos y preguntas</p>
              </div>
              <div className="time_line_program">
                <button>18:30</button>
                <p className="fw-bold">Sesión ruegos y preguntas</p>
              </div>
            </div>
            <div className="col-12 col-md-4 time_line_col">
              <p className="fw-bold my-5 text-center">4 de noviembre</p>
              <div className="time_line_program">
                <button>8:30</button>
                <p className="fw-bold">Acceso al evento</p>
              </div>
              <div className="time_line_program">
                <button>11:00</button>
                <p className="fw-bold">Sesión ruegos y preguntas</p>
              </div>
              <div className="time_line_program">
                <button>13:00</button>
                <p className="fw-bold">Sesión ruegos y preguntas</p>
              </div>
              <div className="time_line_program">
                <button>13:30</button>
                <p className="fw-bold">Pausa</p>
              </div>
              <div className="time_line_program">
                <button>15:30</button>
                <p className="fw-bold">Acceso al evento</p>
              </div>
              <div className="time_line_program">
                <button>17:00</button>
                <p className="fw-bold">Sesión ruegos y preguntas</p>
              </div>
              <div className="time_line_program">
                <button>18:30</button>
                <p className="fw-bold">Sesión ruegos y preguntas</p>
              </div>
            </div>
          </div>
          <div className="row my-5 d-none d-md-block">
            <div className="col-12">
              <div className="row">
                <div className="col-4 text-center">
                  <p className="fw-bold">2 de noviembre</p>
                </div>
                <div className="col-4 text-center">
                  <p className="fw-bold">3 de noviembre</p>
                </div>
                <div className="col-4 text-center">
                  <p className="fw-bold">4 de noviembre</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>8:30</button>
                    <p className="fw-bold">Acceso al evento</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>8:30</button>
                    <p className="fw-bold">Acceso al evento</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>8:30</button>
                    <p className="fw-bold">Acceso al evento</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>9:30</button>
                    <p className="fw-bold">Diagnosis de los Palmerales <br /> Naturales de Fuerteventura</p>
                    <p className="fst-italic">Eduardo Franquiz <br /> Agricultor y consultor <br />medioambiental</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100"></div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100"></div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>11:00</button>
                    <p className="fw-bold">Sesión ruegos y preguntas</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>11:00</button>
                    <p className="fw-bold">Sesión ruegos y preguntas</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>11:00</button>
                    <p className="fw-bold">Sesión ruegos y preguntas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>11:30</button>
                    <p className="fw-bold">Diagnosis de los Palmerales <br /> Naturales de Fuerteventura</p>
                    <p className="fst-italic">Carlos Pérez <br /> Técnico de medio ambiente</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100"></div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100"></div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>13:00</button>
                    <p className="fw-bold">Sesión ruegos y preguntas</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>13:00</button>
                    <p className="fw-bold">Sesión ruegos y preguntas</p>
                  </div>
                </div>
                  <div className="col-4">
                    <div className="time_line_program">
                    <button>13:00</button>
                    <p className="fw-bold">Sesión ruegos y preguntas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>13:30</button>
                    <p className="fw-bold">Pausa</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>13:30</button>
                    <p className="fw-bold">Pausa</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>13:30</button>
                    <p className="fw-bold">Pausa</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>15:30</button>
                    <p className="fw-bold">Acceso al evento</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>15:30</button>
                    <p className="fw-bold">Acceso al evento</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>15:30</button>
                    <p className="fw-bold">Acceso al evento</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>16:00</button>
                    <p className="fw-bold">Evaluación de la salud del suelo en <br /> Palmerales de la Isla de Fuerteventura</p>
                    <p className="fst-italic">Francisco Javier Díaz Peña <br /> Profesor Contratado Universidad de La Laguna</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100"></div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100"></div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>17:00</button>
                    <p className="fw-bold">Sesión ruegos y preguntas</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>17:00</button>
                    <p className="fw-bold">Sesión ruegos y preguntas</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>17:00</button>
                    <p className="fw-bold">Sesión ruegos y preguntas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>17:30</button>
                    <p className="fw-bold">Proyecto Experimental de <br /> restauración de hábitats de <br /> las cumbres de Famara</p>
                    <p className="fst-italic">Carlos Samarín <br /> Técnico medioambiental</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100"></div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100"></div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>18:30</button>
                    <p className="fw-bold">Sesión ruegos y preguntas</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>18:30</button>
                    <p className="fw-bold">Sesión ruegos y preguntas</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>18:30</button>
                    <p className="fw-bold">Sesión ruegos y preguntas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ponentes_cama_2023">
        <div className="container">
          <div className="row my-3 py-3">
            <div className="col-12 text-center">
              <p className="h2">Ponentes 2023</p>
            </div>
          </div>
          <div className="row my-3 py-3">
            <div className="col-12 col-md-4 mb-5">
              <div className="card bg-transparent border-0 text-white">
                <div className="ponente_cama_image d-block mx-auto">
                  <img src={CarlosSamarínURL} alt={'ponente cama 2023'} className="ponente_url" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">CARLOS SAMARÍN</p>
                  <p className="fw-bold">Técnico medioambiental</p>
                  <p className="small fw-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dignissimos culpa sint tempora numquam vitae non! Dolorem repellendus error praesentium aspernatur eligendi, tempore molestias laudantium iste. Ex aliquid maxime adipisci.</p>
              </div>  
            </div>
            <div className="col-12 col-md-4 mb-5">
              <div className="card bg-transparent border-0 text-white">
                <div className="ponente_cama_image d-block mx-auto">
                  <img src={EduardoFranquizURL} alt={'ponente cama 2023'} className="ponente_url" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">EDUARDO FRANQUIZ</p>
                  <p className="fw-bold">Técnico medioambiental</p>
                  <p className="small fw-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dignissimos culpa sint tempora numquam vitae non! Dolorem repellendus error praesentium aspernatur eligendi, tempore molestias laudantium iste. Ex aliquid maxime adipisci.</p>
              </div>  
            </div>
            <div className="col-12 col-md-4 mb-5">
              <div className="card bg-transparent border-0 text-white">
                <div className="ponente_cama_image d-block mx-auto">
                  <img src={FelipeSiverioURL} alt={'ponente cama 2023'} className="ponente_url" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">FELIPE SIVERIO</p>
                  <p className="fw-bold">Técnico medioambiental</p>
                  <p className="small fw-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dignissimos culpa sint tempora numquam vitae non! Dolorem repellendus error praesentium aspernatur eligendi, tempore molestias laudantium iste. Ex aliquid maxime adipisci.</p>
              </div>  
            </div>
            <div className="col-12 col-md-4 mb-5">
              <div className="card bg-transparent border-0 text-white">
                <div className="ponente_cama_image d-block mx-auto">
                  <img src={FelipeSiverioURL} alt={'ponente cama 2023'} className="ponente_url" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">CARLOS SAMARÍN</p>
                  <p className="fw-bold">Técnico medioambiental</p>
                  <p className="small fw-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dignissimos culpa sint tempora numquam vitae non! Dolorem repellendus error praesentium aspernatur eligendi, tempore molestias laudantium iste. Ex aliquid maxime adipisci.</p>
              </div>  
            </div>
            <div className="col-12 col-md-4 mb-5">
              <div className="card bg-transparent border-0 text-white">
                <div className="ponente_cama_image d-block mx-auto">
                  <img src={FelipeSiverioURL} alt={'ponente cama 2023'} className="ponente_url" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">CARLOS SAMARÍN</p>
                  <p className="fw-bold">Técnico medioambiental</p>
                  <p className="small fw-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dignissimos culpa sint tempora numquam vitae non! Dolorem repellendus error praesentium aspernatur eligendi, tempore molestias laudantium iste. Ex aliquid maxime adipisci.</p>
              </div>  
            </div>
            <div className="col-12 col-md-4 mb-5">
              <div className="card bg-transparent border-0 text-white">
                <div className="ponente_cama_image d-block mx-auto">
                  <img src={FelipeSiverioURL} alt={'ponente cama 2023'} className="ponente_url" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">CARLOS SAMARÍN</p>
                  <p className="fw-bold">Técnico medioambiental</p>
                  <p className="small fw-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dignissimos culpa sint tempora numquam vitae non! Dolorem repellendus error praesentium aspernatur eligendi, tempore molestias laudantium iste. Ex aliquid maxime adipisci.</p>
              </div>  
            </div>
          </div>
        </div>
      </section>
      <section id="streaming_cama_2023">
        <article className="container my-5 py-5">
          <div className="row">
            <div className="col-12 my-3 text-center">
              <h2>Visualiza CAMA 2023 Online</h2>
            </div>
            <div className="col-12 my-3">
              <img src={streamingURL} className="d-block mx-auto img-fluid sobrecama_img" alt={'sobre_cama_img'} />
            </div>
          </div>
        </article>
      </section>
      <section id="redes_sociales_cama_2023">
        <div className="container my-5 py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 mb-3 text-center">
              <p className="h1">
              SIGUENOS EN REDES SOCIALES Y COMPARTE TUS FOTOS Y VÍDEOS
              </p>
            </div>
            <div className="col-12 col-md-8 mb-3 text-center">
              <div className="d-flex justify-content-center">
                <div className="circle_socials mx-5">
                  <a href="">
                    <img src={facebookURL} alt="instagram" />
                  </a>
                </div>
                <div className="circle_socials mx-5">
                  <a href="">
                    <img src={youtubeURL} alt="instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer_cama_2023">
        <div className="container my-5 py-5">
          <div className="row align-items-center">
            <div className="col-6 col-md-3 mb-5">
              <img src={camaLogoURL} alt="" width={'80%'} className="d-block mx-auto" />
            </div>
            <div className="col-6 col-md-3 mb-5">
            <img src={cabildoURL} alt="" width={'80%'} className="d-block mx-auto" />
            </div>
            <div className="col-6 col-md-3 mb-5">
            <img src={medioambienteURL} alt="" width={'50%'} className="d-block mx-auto" />
            </div>
            <div className="col-6 col-md-3 mb-5">
            <img src={elittoralURL} alt="" width={'70%'} className="d-block mx-auto" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App;
