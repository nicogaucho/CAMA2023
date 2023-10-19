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
import TenoURL from "./assets/Teno.jpg";
import MariaURL from "./assets/Maria.png";
import FranciscoJavierURL from "./assets/FranciscoJavier.png";
import EduardoURL from "./assets/Eduardo.png";
import FranquizURL from "./assets/Franquiz.png";
import AlexisURL from "./assets/Alexis.png";

function App() {
  return (
    <>
      <Header />
      <nav className='d-none d-md-block'>
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
              <ReactPlayer url='https://www.youtube.com/watch?v=dqBki7g-qzU' className="d-block mx-auto img-fluid sobrecama_img" controls />
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 my-3 text-center">
                <p>¡Bienvenidos a CAMA (Conferencia Atlántica del Medio Ambiente) 2023, el evento medioambiental organizado por el Departamento de Medio Ambiente del Cabildo de Fuerteventura para promover la conciencia y la acción en pro del medio ambiente y ofrecer una plataforma única para la discusión, el aprendizaje y la colaboración en este ámbito.</p>
                <p>Durante tres días, CAMA 2023 reunirá a expertos de temas medioambientales: desde la conservación de la biodiversidad hasta la gestión de residuos, desde el cambio climático hasta la educación ambiental, nuestros ponentes ofrecerán conocimientos valiosos y perspectivas enriquecedoras sobre los desafíos que enfrentamos.</p>
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
                <p className="fw-bold">Resultados del diagnosis de los Palmerales Naturales de Fuerteventura</p>
                <p className="fst-italic">Eduardo Franquiz Alemán</p>
              </div>
              <div className="time_line_program">
                <button>11:00</button>
                <p className="fw-bold">Descanso</p>
              </div>
              <div className="time_line_program">
                <button>11:30</button>
                <p className="fw-bold">Control de biodiversidad desde plataformas aereas tripuladas remotamente. Centro ISSEBC fuerteventura</p>
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
                <p className="fw-bold">La educación ambiental como herramienta para la conservación de los ecosistemas naturales: Conocer para Proteger</p>
                <p className="fst-italic">Mónica Barrera</p>
              </div>
              <div className="time_line_program">
                <button>17:00</button>
                <p className="fst-italic">Yayi Martín</p>
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
                <p className="fw-bold">Cierre clausura</p>
              </div>
            </div>
            <div id='3_nov_programa_mobile' className="col-12 col-md-4 time_line_col">
              <p className="fw-bold my-5 text-center">3 de noviembre</p>
              <div className="time_line_program">
                <button>9:30</button>
                <p className="fw-bold">Especies vegetales amenazadas del Macizo de Jandía, nuevas especies y su estado de conservación</p>
                <p className="fst-italic">Marco Diaz-Bertrana Sanchez</p>
              </div>
              <div className="time_line_program">
                <button>10:00</button>
                <p className="fw-bold">Situación de la flora endémica de Fuerteventura: nuevos descubrimientos</p>
                <p className="fst-italic">Stephan Scholz</p>
              </div>
              <div className="time_line_program">
                <button>10:30</button>
                <p className="fw-bold">Proyecto Ojeadores</p>
                <p className="fst-italic">Manuel Arechavaleta Hernández</p>
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
                <p className="fw-bold">Pendiente confirmación</p>
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
                JORNADA DE CAMPO <br /> Morro Velosa/Palmeral de Buen Paso/Palmeral Madre del Agua
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
                    <p className="fst-italic">Marco Diaz-Bertrana Sanchez</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <p className="fw-bold">JORNADA DE CAMPO <br /> Morro Velosa/Palmeral de Buen Paso/Palmeral Madre del Agua</p>
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
                  <div className="time_line_program">
                  <button>10:00</button>
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
                    <button>10:30</button>
                    <p className="fw-bold">Resultados del diagnosis de los Palmerales Naturales de Fuerteventura</p>
                    <p className="fst-italic">Eduardo Franquiz Alemán </p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <button>10:30</button>
                    <p className="fw-bold">Proyecto Ojeadores</p>
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
                    <p className="fw-bold">Control de biodiversidad desde plataformas aereas tripuladas remotamente. Centro ISSEBC fuerteventura</p>
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
                    <p className="fw-bold">La educación ambiental como herramienta para la conservación de los ecosistemas naturales: Conocer para Proteger</p>
                    <p className="fst-italic">Mónica Barrera</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <button>16:30</button>
                    <p className="fw-bold">Pendiente confirmación</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="time_line_program h-100">
                    <button>17:00</button>
                    <p className="fst-italic">Yayi Martín</p>
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
                <div className="ponente_cama_image">
                  <img src={SofiaURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Sofía Rodríguez Núñez</p>
                  <p className="small text-white-50">Técnica del Servicio de Biodiversidad</p>
              </div>  
            </div>
            <div className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="card bg-transparent border-0 text-white">
                <div className="ponente_cama_image">
                  <img src={MarcoDiazURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Marco Díaz-Bertrana Sánchez</p>
                  <p className="small text-white-50">Técnico asesor y validador de Red de Alerta</p>
              </div> 
              </div>  
            </div>
            <div className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={NestorURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Néstor Santiago Ávila</p>
                <p className="small text-white-50">Ingeniero Industrial, emprendedor</p>
              </div>  
            </div>
            <div className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={TenoURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Teno Osorio Castañeda</p>
                <p className="small text-white-50">Ingeniero Técnico Agrícola</p>
              </div>  
            </div>
            <div className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={MariaURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Maria Esther Martín González</p>
                <p className="small text-white-50">Doctora en Biología por la Universidad de La Laguna</p>
              </div>  
            </div>
            <div className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={FranciscoJavierURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Francisco Javier Díaz Peña</p>
                <p className="small text-white-50">Doctor en Ciencias Biológicas y Profesor de Edafología y Química Agrícola en la Universidad de La Laguna</p>
              </div>  
            </div>
            <div className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={EduardoURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Eduardo Pereira Gonzalez</p>
                <p className="small text-white-50">Ingeniero Aeronáutico de la Universidad Politécnica de Madrid</p>
              </div>  
            </div>
            <div className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={FranquizURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Eduardo Franquiz Alemán</p>
                <p className="small text-white-50">Consultor medioambiental. Técnico en medioambiente, agricultura y Ecosistemas verdes urbanos.</p>
              </div>  
            </div>
            <div className="col-12 col-md-3 mb-5">
              <div className="card bg-transparent border-0 text-white">
              <div className="ponente_cama_image">
                  <img src={AlexisURL} className="ponente_url" alt="" />
                </div>
                <p className="fw-bold fs-4 mt-2 mb-0 p-0">Juan Alexis Rivera Medina</p>
                <p className="small text-white-50">Licenciado en Biología. Máster en Espacios Naturales Protegidos</p>
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
              <ReactPlayer url='https://www.youtube.com/watch?v=dqBki7g-qzU' className="d-block mx-auto img-fluid sobrecama_img" controls />
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
          <div className="row">
            <div className="col-12 text-center text-secondary">
              <p className='small'>© 2023 Digital Consulting Aguita SL CIF B44711299 Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App;
