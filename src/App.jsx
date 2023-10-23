import ReactPlayer from 'react-player/youtube';
import Header from "./components/Header";
import facebookURL from "./assets/facebook.png";
import youtubeURL from "./assets/youtube.png";
import camaLogoURL from "./assets/logoCAMA2023_white.png";
import cabildoURL from "./assets/cabildo.png";
import elittoralURL from "./assets/elittoral.png";
import medioambienteURL from "./assets/medioambiente.jpg";
import SofiaURL from "./assets/SofíaRodríguezNúñez.jpg";
import MarcoDiazURL from "./assets/MarcoDiaz.png";
import NestorURL from "./assets/Nestor.png";
import TenoURL from "./assets/Teno2.png";
import MariaURL from "./assets/Maria.png";
import FranciscoJavierURL from "./assets/FranciscoJavier.png";
import EduardoURL from "./assets/Eduardo.png";
import FranquizURL from "./assets/Franquiz.png";
import AlexisURL from "./assets/Alexis.png";
import ArechavaletaURL from "./assets/Arechavaleta.png";
import MonicaBarreraURL from "./assets/MonicaBarrera.png";
import RamonGalloURL from "./assets/RamonGallo.png";
import SuarezURL from "./assets/Suarez.jpeg"; 
import StephanURL from "./assets/Stephan.jpg";
import YayiURL from "./assets/Yayi.png";

function App() {
  return (
    <>
      <Header />
      <nav className='d-none d-md-block'>
        <div className="container-fluid h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-md-3">
              <ul className="socials my-auto">
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
              <ul className="links my-auto">
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
                <li className="nav_item mx-3">
                  <a href="#redes_sociales_cama_2023" className="nav_link">
                    CONTACTOS
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-2">
              <div className="d-flex justify-content-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJKHJrBMbQeLx08NlP570pWr4T3an9LZI4JSpH8njFuwCPiw/viewform" className="streamingBtn text-decoration-none">
                  Inscríbete
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
              <ReactPlayer url='https://www.youtube.com/watch?v=tQU9lbSnCgM' className="d-block mx-auto img-fluid sobrecama_img" controls />
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 my-3 text-center">
                <p>¡Bienvenidos a CAMA (Conferencia Atlántica del Medio Ambiente) 2023, el evento medioambiental organizado por la Consejería de Medio Ambiente y Caza del Cabildo de Fuerteventura para promover la conciencia y la acción en pro del medio ambiente y ofrecer una plataforma única para la discusión, el aprendizaje y la colaboración en este ámbito.</p>
                <p>Durante tres días, CAMA 2023 reunirá a expertos de temas medioambientales: desde la conservación de la biodiversidad hasta la gestión de residuos, desde el cambio climático hasta la educación ambiental, los ponentes ofrecerán conocimientos valiosos y perspectivas enriquecedoras sobre los desafíos que enfrentamos.</p>
                <p>CAMA 2023 se llevará a cabo en el Parque Tecnológico de Fuerteventura. El acceso al evento es mediante previa inscripción. Además, para aquellos que no puedan asistir físicamente, ofrecemos la posibilidad de visualizar las charlas en línea a través de nuestra página web o YouTube.</p>
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
          <div id='programa_mobile' className="row my-5 d-block d-md-none">
            <div id='2_nov_programa_mobile' className="col-12 col-md-4 time_line_col">
              <p className="fw-bold my-5 text-center">2 de noviembre</p>
              <div className="time_line_program">
                <button>9:30</button>
                <p className="fw-bold">Inauguración</p>
              </div>
              <div className="time_line_program">
                <button>10:00</button>
                <p className="fw-bold">La gestión del suelo y la conservación de los palmerales: un binomio indisoluble</p>
                <p className="fst-italic">Francisco Javier Díaz Peña</p>
              </div>
              <div className="time_line_program">
                <button>10:30</button>
                <p className="fw-bold">Resultados del diagnosis de los palmerales naturales de Fuerteventura</p>
                <p className="fst-italic">Eduardo Franquiz Alemán</p>
              </div>
              <div className="time_line_program">
                <button>11:00</button>
                <p className="fw-bold">Descanso</p>
              </div>
              <div className="time_line_program">
                <button>11:30</button>
                <p className="fw-bold">Control de biodiversidad desde plataformas aereas tripuladas remotamente. Centro ISSEBC Fuerteventura</p>
                <p className="fst-italic">Eduardo Pereira González </p>
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
                <p className="fw-bold">La educación ambiental como herramienta para la conservación de los ecosistemas naturales: Conocer para Proteger</p>
                <p className="fst-italic">Mónica Barrera Barrios</p>
              </div>
              <div className="time_line_program">
                <button>17:00</button>
                <p className="fw-bold">Trayectoria labor de la oficina de voluntariado ambiental de Tenerife</p>
                <p className="fst-italic">Yayi Martín Díaz</p>
              </div>
              <div className="time_line_program">
                <button>17:30</button>
                <p className="fw-bold">Descanso</p>
              </div>
              <div className="time_line_program">
                <button>18:00</button>
                <p className="fw-bold">25 años de voluntariado en la conservación del espacio natural con más figuras de protección de Canarias</p>
                <p className="fst-italic">Alexis Rivera Medina</p>
              </div>
              <div className="time_line_program">
                <button>18:30</button>
                <p className="fw-bold">Ronda de preguntas y debate</p>
              </div>
              <div className="time_line_program">
                <button>19:15</button>
                <p className="fw-bold">Cierre sesión</p>
              </div>
            </div>
            <div id='3_nov_programa_mobile' className="col-12 col-md-4 time_line_col">
              <p className="fw-bold my-5 text-center">3 de noviembre</p>
              <div className="time_line_program">
                <button>9:30</button>
                <p className="fw-bold">Especies vegetales amenazadas del Macizo de Jandía, nuevas especies y su estado de conservación</p>
                <p className="fst-italic">Marco Díaz-Bertrana Sánchez</p>
              </div>
              <div className="time_line_program">
                <button>10:00</button>
                <p className="fw-bold">Situación de la flora autóctona de Fuerteventura</p>
                <p className="fst-italic">Stephan Scholz</p>
              </div>
              <div className="time_line_program">
                <button>10:30</button>
                <p className="fw-bold">Seguimiento de hábitats y especies. Proyecto Ojeadores</p>
                <p className="fst-italic">Manuel Arechavaleta Hernández</p>
              </div>
              <div className="time_line_program">
                <button>11:00</button>
                <p className="fw-bold">Descanso</p>
              </div>
              <div className="time_line_program">
                <button>11:30</button>
                <p className="fw-bold">Proyecto Experimental de restauración de hábitats de las cumbres de Famara, Lanzarote</p>
                <p className="fst-italic">Sofía Rodríguez Núñes</p>
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
                <p className="fw-bold">Diseño metodológico de un sistema automatizado para la delimitación de palmerales en la isla de la Gomera (Proyecto Guarapo)</p>
                <p className="fst-italic">David Suárez Perera</p>
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
                <p className="fw-bold">Red Canaria de Alerta Temprana de Especies Exóticas Invasoras</p>
                <p className="fst-italic">Ramón Gallo Barneto</p>
              </div>
              <div className="time_line_program">
                <button>18:30</button>
                <p className="fw-bold">Ronda de preguntas y debate</p>
              </div>
              <div className="time_line_program">
                <button>19:15</button>
                <p className="fw-bold">Cierre sesión</p>
              </div>
            </div>
            <div id='4_nov_programa_mobile' className="col-12 col-md-4 time_line_col">
              <p className="fw-bold my-5 text-center">4 de noviembre</p>
              <div className="time_line_program">
                <button>8:00 - 13:30</button>
                <p className="fw-bold">
                JORNADA DE CAMPO <br /> Visita al palmeral de Madre del Agua
                </p>
              </div>
            </div>
          </div>
          <div id='programa_desktop' className="row my-5 d-none d-md-block">
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
                  <div className="time_line_program h-100">
                    <button>9:30</button>
                    <p className="fw-bold">Inauguración</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>9:30</button>
                    <p className="fw-bold">Especies vegetales amenazadas del Macizo de Jandía, nuevas especies y su estado de conservación</p>
                    <p className="fst-italic">Marco Díaz-Bertrana Sánchez</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <button>8:00 - 13:30</button>
                    <p className="fw-bold">JORNADA DE CAMPO <br /> Visita al palmeral de Madre del Agua</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>10:00</button>
                    <p className="fw-bold">La gestión del suelo y la conservación de los palmerales: un binomio indisoluble</p>
                    <p className="fst-italic">Francisco Javier Díaz Peña</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100">
                  <button>10:00</button>
                    <p className="fw-bold">Situación de la flora autóctona de Fuerteventura</p>
                    <p className="fst-italic">Stephan Scholz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program">
                    <button>10:30</button>
                    <p className="fw-bold">Resultados del diagnosis de los palmerales naturales de Fuerteventura</p>
                    <p className="fst-italic">Eduardo Franquiz Alemán </p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <button>10:30</button>
                    <p className="fw-bold">Seguimiento de hábitats y especies. Proyecto Ojeadores</p>
                    <p className="fst-italic">Manuel Arechavaleta Hernández</p>
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
                    <p className="fw-bold">Control de biodiversidad desde plataformas aereas tripuladas remotamente. Centro ISSEBC Fuerteventura</p>
                    <p className="fst-italic">Eduardo Pereira González</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <button>11:30</button>
                    <p className="fw-bold">Proyecto Experimental de restauración de hábitats de las cumbres de Famara, Lanzarote</p>
                    <p className="fst-italic">Sofía Rodríguez Núñes</p>
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
                    <p className="fw-bold">La educación ambiental como herramienta para la conservación de los ecosistemas naturales: Conocer para Proteger</p>
                    <p className="fst-italic">Mónica Barrera Barrios</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <button>16:30</button>
                    <p className="fw-bold">Diseño metodológico de un sistema automatizado para la delimitación de palmerales en la isla de la Gomera (Proyecto Guarapo)</p>
                    <p className="fst-italic">David Suárez Perera</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <button>17:00</button>
                    <p className="fw-bold">Trayectoria labor de la oficina de voluntariado ambiental de Tenerife</p>
                    <p className="fst-italic">Yayi Martín Díaz</p>
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
                    <p className="fw-bold">25 años de voluntariado en la conservación del espacio natural con más figuras de protección de Canarias</p>
                    <p className="fst-italic">Alexis Rivera Medina</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <button>18:00</button>
                    <p className="fw-bold">Red Canaria de Alerta Temprana de Especies Exóticas Invasoras</p>
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
                    <p className="fw-bold">Cierre sesión</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program">
                    <button>19:15</button>
                    <p className="fw-bold">Cierre sesión</p>
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
            <div id='Arechavaleta' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={ArechavaletaURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Manuel Arechavaleta Hernández</p>
                <p className="small text-white-50">Técnico del Servicio de Biodiversidad, Consejería de Transición Ecológica y Energía, Gobierno de Canarias</p>
              </div> 
            </div>
            <div id='Avila' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={NestorURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Néstor Santiago Ávila</p>
                <p className="small text-white-50">Emprendedor 
                Fibras Naturales Canarias</p>
              </div>  
            </div>
            <div id='Barrera' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={MonicaBarreraURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Mónica Barrera Barrios</p>
                <p className="small text-white-50">Técnica de Educación Ambiental del Servicio de Medio Ambiente del Cabildo de Fuerteventura</p>
              </div>
            </div>
            <div id='Diaz' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="card bg-transparent border-0 text-white">
                <div className="ponente_cama_image">
                  <img src={MarcoDiazURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Marco Díaz-Bertrana Sánchez</p>
                <p className="small text-white-50">Técnico de Medio Ambiente</p>
              </div> 
              </div>  
            </div>
            <div id='DiazPena' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={FranciscoJavierURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Francisco Javier Díaz Peña</p>
                <p className="small text-white-50">Profesor de Edafología y Química Agrícola en la Universidad de La Laguna</p>
              </div>  
            </div>
            <div id='Franquiz' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={FranquizURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Eduardo Franquiz Alemán</p>
                <p className="small text-white-50">Técnico de Medio Ambiente, agricultura y ecosistemas verdes urbanos</p>
              </div>  
            </div>
            <div id='Gallo' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={RamonGalloURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Ramón Gallo Barneto</p>
                <p className="small text-white-50">Coordinador de RedEXOS en Gesplan</p>
              </div>
            </div>
            <div id='Yayi' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={YayiURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Yayi Martín Diaz</p>
                <p className="small text-white-50">Biologa de la ULL. Coordinadora de la Oficina de Participación y el Voluntariado Ambiental del Área del Medio Natural, Sostenibilidad, Seguridad y Emergencias del Cabildo de Tenerife</p>
              </div>  
            </div>
            <div id='Martin' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={MariaURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Esther Martín González</p>
                <p className="small text-white-50">Paleontóloga en Museo de la Naturaleza y el Hombre Tenerife</p>
              </div>  
            </div>
            <div id='Osorio' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={TenoURL} className="ponente_url" alt="" />
              </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Teno Osorio Castañeda</p>
                <p className="small text-white-50">Profesor y Jefe del departamento de Agrarias del IES Teguise</p>
              </div>  
            </div>
            <div id='Pereira' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={EduardoURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Eduardo Pereira Gonzalez</p>
                <p className="small text-white-50">Gerente del Parque Tecnológico de Fuerteventura, Ingeniero Aeronáutico de la Universidad Politécnica de Madrid</p>
              </div>  
            </div>
            <div id='Riviera' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={AlexisURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Alexis Rivera Medina</p>
                <p className="small text-white-50">Biólogo,  Conservación del Parque Natural del Archipiélago Chinijo para WWF en Canarias</p>
              </div>  
            </div>
            <div id='Rodri' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
                <div className="ponente_cama_image">
                  <img src={SofiaURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Sofía Rodríguez Núñez</p>
                <p className="small text-white-50">Técnica del Servicio de Biodiversidad del Gobierno de Canarias</p>
              </div>  
            </div>
            <div id='David' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
                <div className="ponente_cama_image">
                  <img src={SuarezURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">David Suárez Perera</p>
                <p className="small text-white-50">Consultor Senior en Ingeniería en Datos Geográficos elittoral S.L.N.E</p>
              </div>  
            </div>
            <div id='Stephen' className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
                <div className="ponente_cama_image">
                  <img src={StephanURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Stephan Scholz</p>
                <p className="small text-white-50">Biólogo doctorado en Botánica por la ULL, Director Jardín Botánico en Oasis Park Fuerteventura</p>
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
              <ReactPlayer url='https://www.youtube.com/watch?v=VIQhoW1Gq3w' className="d-block mx-auto img-fluid sobrecama_img" controls />
            </div>
          </div>
        </article>
      </section>
      <section id="redes_sociales_cama_2023">
        <div className="container my-5 py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 mb-3 text-center">
              <p className="h1">
              SÍGUENOS EN REDES SOCIALES Y COMPARTE TUS FOTOS Y VÍDEOS
              </p>
            </div>
            <div className="col-12 col-md-8 mb-3 text-center">
              <div className="d-flex justify-content-around">
                <div className="circle_socials">
                  <a href="https://www.facebook.com/profile.php?id=61552083251767&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true">
                    <img src={facebookURL} alt="instagram" />
                  </a>
                </div>
                <div className="circle_socials">
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
          <div className="row mb-4 align-items-center">
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
            <p className="patrocinado">@ 2023 Patrocinado por: </p>
            <img src={elittoralURL} alt="" width={'70%'} className="d-block mx-auto" />
            </div>
          </div>
          <hr />
          <div className="row mb-4">
            <div className="col-12 text-center">
              <span className="patrocinado">Clausula informativa proteccion de datos personales<button type="button" className="border-0 bg-transparent text-secondary" data-bs-toggle="modal" data-bs-target="#privatePolicyModal">
                Política de privacidad
              </button>
              </span>
            </div>
          </div>
        </div>
      </footer>


      <div className="modal fade" id="privatePolicyModal" tabIndex="-1" aria-labelledby="privatePolicyModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content privacy_policy shadow">
            <div className="modal-body">
              <div className="d-flex justify-content-between align-items-center">
                <p className="modal-title fs-5 fw-bold" id="exampleModalLabel">Política de privacidad</p>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="mt-4">
                <p className="fw-bold">MODELO DE DECLARACION RESPONSABLE DE ENCARGADO DE TRATAMIENTO DE DATOS PERSONALES EN EL CONTRATO MENOR DE ASISTENCIA RELATIVO A LA GESTIÓN DE UNAS JORNADAS SOBRE MEDIO AMBIENTE. Dña Rosa Ana Álvarez Vázquez con DNI no36123319W en representación de la entidad Elittoral, estudios de ingeniería costera y oceanográfica, SLNE, con NIF no B35961051 como adjudicatario del contrato menor de servicio de ASISTENCIA RELATIVO A LA GESTIÓN DE UNAS JORNADAS SOBRE MEDIO AMBIENTE. DECLARA BAJO MI RESPONSABILIDAD</p>
                <p>1.- Que cumple con la normativa de protección de datos personales, en particular, con el
Reglamento (UE) 2016/679 relativo a la protección de las personas físicas en lo que respecta al
tratamiento de datos personales (en adelante RGPD) y la Ley Orgánica 3/2018, de 5 de
diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).</p>
<p>2.- Que, como Encargado del tratamiento, ofrezco suficiente garantías para aplicar las medidas
técnicas y organizativas apropiadas conforme a lo establecido en el capítulo IV del RGPD y
concordantes de la LOPDGDD.</p>
<p>3.- A utilizar los datos personales objeto de tratamiento solo para la finalidad objeto del contrato
adjudicado.</p>
<p>4.- Que mantendrá absoluta confidencialidad y reserva sobre cualquier dato o información a la
que pueda tener acceso con ocasión de la ejecución del contrato adjudicado.</p>
<p>5.- Que devolverá los datos de carácter personal, información y demás documentos de cada uno
de los alumnos al finalizar el contrato. Una vez entregada la documentación, se presentará un
certificado del borrado total de los datos e información tratada. No obstante, puede conservar
una copia, con los datos debidamente bloqueados mientras puedan derivarse responsabilidades,
en cuyo caso, la destrucción definitiva será al final de dicho plazo. En cualquier caso, se
comunicará por escrito el proceder y presentar en su momento el correspondiente certificado de
destrucción definitiva.</p>
<p>6.- Que todo el personal adscrito a la ejecución al servicio ha suscrito los correspondientes
compromisos de confidencialidad, que subsistirá aún después de finalizar la relación contractual
con el Cabildo y que garantiza la formación necesaria en materia de protección de datos
personales de las personas autorizadas para tratar datos personales</p>
<p>8.- Que el tratamiento de los datos no realizará fuera del Espacio Económico Europeo.</p>
<p>9.- Que el/ los servidor/es que utiliza/n para la ejecución del contrato está/n ubicados en Parque
Científico Tecnológico-Edificio Polivalente II, Primera planta-oficinas, 35017 Las Palmas de Gran
Canaria, Las Palmas país España, siendo un servidor propio.</p>
<p>10.- Lugar donde se prestan los servicios asociados a los servidores:
-En caso de que los servicios asociados a los servidores se presten por personal propio
de la empresa, el servicio se prestará en el Parque Científico Tecnológico-Edificio
Polivalente II, Primera planta-oficinas, 35017 Las Palmas de Gran Canaria, Las Palmas
país España (indiquen el lugar y país )</p>
<p>11.- Que comunicará cualquier cambio que se produzca a lo largo de la vida del contrato de la
información facilitada a que se refiere los apartados 9 y 10 anteriores.</p>
<p>12.- En caso de que exista subcontratación y ésta implique tratamiento de datos personales,
declaro que los subcontratistas quedarán obligados únicamente ante mi como contratista
principal y asumo, por tanto, la total responsabilidad sobre el sometimiento de éstos a la
normativa de protección de datos nacional y europea.</p>
<p>13.- Que se compromete a acreditar la posesión y validez de los documentos a que se hace
referencia en esta declaración en cualquier momento en que sea requerido para ello.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
