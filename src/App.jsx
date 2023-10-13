import ReactPlayer from 'react-player/youtube';
import Header from "./components/Header";
import facebookURL from "./assets/facebook.png";
import youtubeURL from "./assets/youtube.png";
import CarlosSamarínURL from "./assets/CarlosSamarín.jpg";
import EduardoFranquizURL from "./assets/EduardoFranquiz.jpg";
import FelipeSiverioURL from "./assets/FelipeSiverio.jpg";
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
                  <a href="https://www.facebook.com/profile.php?id=61552083251767&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true" className="social_link">
                    <img src={facebookURL} width={'50%'} alt="instagram" />
                  </a>
                </li>
                <li className="social_item">
                  <a href="https://www.youtube.com/@CAMA2023" className="social_link">
                    <img src={youtubeURL} width={'50%'} alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-7">
              <ul className="links">
                <li className="nav_item">
                  <a href="#sobre_cama_2023" className="nav_link">
                    SOBRE CAMA
                  </a>
                </li>
                <li className="nav_item mx-3">
                  <a href="#programa_cama_2023" className="nav_link">
                    PROGRAMA 2023
                  </a>
                </li>
                <li className="nav_item mx-3">
                  <a href="#ponentes_cama_2023" className="nav_link">
                    PONENTES
                  </a>
                </li>
                <li className="nav_item mx-3">
                  <a href="#streaming_cama_2023" className="nav_link">
                    VISUALIZA ONLINE
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#redes_sociales_cama_2023" className="nav_link">
                    CONTACTOS
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-2">
              <div className="nav_btn d-block">
                <a href="" className="streamingBtn text-decoration-none">
                  Inscribete
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
              <ReactPlayer url='https://www.youtube.com/watch?v=dqBki7g-qzU' className="d-block mx-auto img-fluid sobrecama_img" controls />
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
            <div id='2_nov_programa_mobile' className="col-12 col-md-4 time_line_col">
              <p className="fw-bold my-5 text-center">2 de noviembre</p>
              <div className="time_line_program">
                <button>9:30</button>
                <p className="fw-bold">Inauguración</p>
              </div>
              <div className="time_line_program">
                <button>10:00</button>
                <p className="fw-bold">Evaluación de la salud del suelo en Palmerales de la Isla de Fuerteventura</p>
                <p className="fst-italic">Francisco Javier Díaz Peña</p>
              </div>
              <div className="time_line_program">
                <button>10:30</button>
                <p className="fw-bold">Resultados del diagnosis de los Palmerales Naturales de Fuerteventura</p>
                <p className="fst-italic">Eduardo Franquiz Alemán</p>
              </div>
              <div className="time_line_program">
                <button>11:00</button>
                <p className="fw-bold">Descanso</p>
              </div>
              <div className="time_line_program">
                <button>11:30</button>
                <p className="fw-bold text-lowercase">CONTROL DE BIODIVERSIDAD DESDE PLATAFORMAS AEREAS TRIPULADAS REMOTAMENTE. CENTRO ISSEBC FUERTEVENTURA</p>
                <p className="fst-italic">Eduardo Pereira Gonzalez </p>
              </div>
              <div className="time_line_program">
                <button>12:00</button>
                <p className="fw-bold">Una economía circular por y para Canarias</p>
                <p className="fst-italic">Néstor Santiago Ávila</p>
              </div>
              <div className="time_line_program">
                <button>12:30</button>
                <p className="fw-bold">Ronda de preguntas y debate</p>
              </div>
              <div className="time_line_program">
                <button>13:15</button>
                <p className="fw-bold">cierre sesión</p>
              </div>
              <div className="time_line_program">
                <button>16:30</button>
                <p className="fw-bold">YAYI??</p>
              </div>
              <div className="time_line_program">
                <button>17:00</button>
                <p className="fw-bold">Programa de Educación Ambiental Conocer para Proteger</p>
                <p className="fst-italic">Mónica Barrera</p>
              </div>
              <div className="time_line_program">
                <button>17:30</button>
                <p className="fw-bold">Descanso</p>
              </div>
              <div className="time_line_program">
                <button>18:00</button>
                <p className="fw-bold">ALEXIS RIVERA???</p>
              </div>
              <div className="time_line_program">
                <button>18:30</button>
                <p className="fw-bold">Ronda de preguntas y debate</p>
              </div>
              <div className="time_line_program">
                <button>19:15</button>
                <p className="fw-bold">Cierre clausura</p>
              </div>
            </div>
            <div id='3_nov_programa_mobile' className="col-12 col-md-4 time_line_col">
              <p className="fw-bold my-5 text-center">3 de noviembre</p>
              <div className="time_line_program">
                <button>9:30</button>
                <p className="fw-bold">Inauguración</p>
              </div>
              <div className="time_line_program">
                <button>10:00</button>
                <p className="fw-bold">Estado de la conservación del ecosistema de Jandía: descubrimiento de una nueva especie</p>
                <p className="fst-italic">Marco Diaz-Bertrana Sanchez</p>
              </div>
              <div className="time_line_program">
                <button>10:30</button>
                <p className="fw-bold">Situación de la flora endémica de Fuerteventura: nuevos descubrimientos</p>
                <p className="fst-italic">Stephan Scholz</p>
              </div>
              <div className="time_line_program">
                <button>11:00</button>
                <p className="fw-bold">Descanso</p>
              </div>
              <div className="time_line_program">
                <button>11:30</button>
                <p className="fw-bold text-lowercase">Proyecto Experimental de restauración de hábitats de las cumbres de Famara Lanzarote</p>
                <p className="fst-italic">Sofia Rodriguez Nuñes</p>
              </div>
              <div className="time_line_program">
                <button>12:00</button>
                <p className="fw-bold">Huerto de productores en el IES Teguise, una experiencia diversa</p>
                <p className="fst-italic">Teno Osorio Castañeda</p>
              </div>
              <div className="time_line_program">
                <button>12:30</button>
                <p className="fw-bold">Ronda de preguntas y debate</p>
              </div>
              <div className="time_line_program">
                <button>13:15</button>
                <p className="fw-bold">cierre sesión</p>
              </div>
              <div className="time_line_program">
                <button>16:30</button>
                <p className="fw-bold">PN GARAJONAY conservación y ocio ???</p>
              </div>
              <div className="time_line_program">
                <button>17:00</button>
                <p className="fw-bold">Conservando el patrimonio del pasado geológico de Fuerteventura</p>
                <p className="fst-italic">Esther Martín González</p>
              </div>
              <div className="time_line_program">
                <button>17:30</button>
                <p className="fw-bold">Descanso</p>
              </div>
              <div className="time_line_program">
                <button>18:00</button>
                <p className="fw-bold">Red Canaria de Alerta Temprana de ESpecies Exóticas Invasoras</p>
                <p className="fst-italic">Ramón Gallo Barneto</p>
              </div>
              <div className="time_line_program">
                <button>18:30</button>
                <p className="fw-bold">Ronda de preguntas y debate</p>
              </div>
              <div className="time_line_program">
                <button>19:15</button>
                <p className="fw-bold">Cierre clausura</p>
              </div>
            </div>
            <div id='4_nov_programa_mobile' className="col-12 col-md-4 time_line_col">
              <p className="fw-bold my-5 text-center">4 de noviembre</p>
              <div className="time_line_program">
                <p className="fw-bold">
                JORNADA DE CAMPO Morro Velosa/Pal meral de Buen Paso/palm eral Madre del Agua
                </p>
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
                    <button>9:30</button>
                    <p className="fw-bold">inauguración</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>9:30</button>
                    <p className="fw-bold">inauguración</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <p className="fw-bold">JORNADA DE CAMPO Morro Velosa/Pal meral de Buen Paso/palm eral Madre del Agua</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>10:00</button>
                    <p className="fw-bold">Evaluación de la salud del suelo en Palmerales de la Isla de Fuerteventura</p>
                    <p className="fst-italic">Francisco Javier Díaz Peña</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                  <button>10:00</button>
                    <p className="fw-bold">Estado de la conservación del ecosistema de Jandía: descubrimiento de una nueva especie</p>
                    <p className="fst-italic">Marco Diaz-Bertrana Sanchez</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>10:30</button>
                    <p className="fw-bold">Resultados del diagnosis de los Palmerales Naturales de Fuerteventura</p>
                    <p className="fst-italic">Eduardo Franquiz Alemán </p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>10:30</button>
                    <p className="fw-bold">Situación de la flora endémica de Fuerteventura: nuevos descubrimientos</p>
                    <p className="fst-italic">Stephan Scholz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>11:00</button>
                    <p className="fw-bold">Descanso</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                  <button>11:00</button>
                  <p className="fw-bold">Descanso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>11:30</button>
                    <p className="fw-bold">CONTROL DE BIODIVERSIDAD DESDE PLATAFORMAS AEREAS TRIPULADAS REMOTAMENTE. CENTRO ISSEBC FUERTEVENTURA</p>
                    <p className="fst-italic">Eduardo Pereira Gonzalez</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <button>11:30</button>
                    <p className="fw-bold">Proyecto Experimental de restauración de hábitats de las cumbres de Famara, Lanzarote</p>
                    <p className="fst-italic">Sofia Rodriguez Nuñes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <button>12:00</button>
                    <p className="fw-bold">Una economía circular por y para Canarias</p>
                    <p className="fst-italic">Néstor Santiago Ávila</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>12:00</button>
                    <p className="fw-bold">Huerto de productores en el IES Teguise, una experiencia diversa</p>
                    <p className="fst-italic">Teno Osorio Castañeda</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>12:30</button>
                    <p className="fw-bold">Rondas de preguntas y debate</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>12:30</button>
                    <p className="fw-bold">Rondas de preguntas y debate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>13:15</button>
                    <p className="fw-bold">Cierre sesión</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                  <button>13:15</button>
                  <p className="fw-bold">Cierre sesión</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>16:30</button>
                    <p className="fw-bold">YAYI??</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>16:30</button>
                    <p className="fw-bold">PN GARAJONAY conservación y ocio ???</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>17:00</button>
                    <p className="fw-bold">Programa de Educación Ambiental Conocer para Proteger</p>
                    <p className="fst-italic">Mónica Barrera</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>17:00</button>
                    <p className="fw-bold">Conservando el patrimonio del pasado geológico de Fuerteventura</p>
                    <p className="fst-italic">Esther Martín González</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>17:30</button>
                    <p className="fw-bold">Descanso</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>17:30</button>
                    <p className="fw-bold">Descanso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <button>18:00</button>
                    <p className="fw-bold">ALEXIS RIVERA???</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>18:00</button>
                    <p className="fw-bold">Red Canaria de Alerta Temprana de ESpecies Exóticas Invasoras</p>
                    <p className="fst-italic">Ramón Gallo Barneto </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <button>18:30</button>
                    <p className="fw-bold">Rondas de preguntas y debate</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>18:30</button>
                    <p className="fw-bold">Rondas de preguntas y debate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <button>19:15</button>
                    <p className="fw-bold">Cierre clausura</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>19:15</button>
                    <p className="fw-bold">Cierre clausura</p>
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
            <div className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
                <div className="ponente_cama_image d-block mx-auto">
                  <img src={CarlosSamarínURL} alt={'ponente cama 2023'} className="ponente_url" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">CARLOS SAMARÍN</p>
                  <p className="fw-bold">Técnico medioambiental</p>
                  <p className="small fw-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dignissimos culpa sint tempora numquam vitae non! Dolorem repellendus error praesentium aspernatur eligendi, tempore molestias laudantium iste. Ex aliquid maxime adipisci.</p>
              </div>  
            </div>
            <div className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
                <div className="ponente_cama_image d-block mx-auto">
                  <img src={EduardoFranquizURL} alt={'ponente cama 2023'} className="ponente_url" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">EDUARDO FRANQUIZ</p>
                  <p className="fw-bold">Técnico medioambiental</p>
                  <p className="small fw-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dignissimos culpa sint tempora numquam vitae non! Dolorem repellendus error praesentium aspernatur eligendi, tempore molestias laudantium iste. Ex aliquid maxime adipisci.</p>
              </div>  
            </div>
            <div className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
                <div className="ponente_cama_image d-block mx-auto">
                  <img src={FelipeSiverioURL} alt={'ponente cama 2023'} className="ponente_url" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">FELIPE SIVERIO</p>
                  <p className="fw-bold">Técnico medioambiental</p>
                  <p className="small fw-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dignissimos culpa sint tempora numquam vitae non! Dolorem repellendus error praesentium aspernatur eligendi, tempore molestias laudantium iste. Ex aliquid maxime adipisci.</p>
              </div>  
            </div>
            <div className="col-12 col-md-3 mb-5">
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
              <ReactPlayer url='https://www.youtube.com/watch?v=Q1iR2k6ndYc' className="d-block mx-auto img-fluid sobrecama_img" controls />
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
                  <a href="https://www.facebook.com/profile.php?id=61552083251767&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true">
                    <img src={facebookURL} alt="instagram" />
                  </a>
                </div>
                <div className="circle_socials mx-5">
                  <a href="https://www.youtube.com/@CAMA2023">
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
