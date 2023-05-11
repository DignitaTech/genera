import React from "react";
import "./section-1.css";

function Section1({ handleTranslate }) {
  return (
    <div className="portada-container">
      <section className="portada">
        <div className="columna1">
          <h1>
            Genera tu proyecto RPA<span style={{ color: "#d60718" }}>+</span>IA:{" "}
            <span className="container-title">
              <span className="title-blink-1">
                <h3 className="first-title">
                  Maximiza el rendimiento de todo tu equipo
                </h3>
              </span>
            </span>
          </h1>
          <p>
            Te ofrecemos la mejor propuesta de RPA para tu empresa y asciende de
            cargo con Dignita. Nosotros te guiaremos en cada paso hacia el
            éxito. <strong>¡Comencemos juntos esta aventura!.</strong>
          </p>
          <div className="botones">
            <button className="comencemos" onClick={() => handleTranslate(1)}>
              Comencemos
            </button>
            <a
              target="_blank"
              href="https://dignita.tech/nosotros/"
              rel="noopener noreferrer"
            >
              <button className="conocenos">Conócenos</button>
            </a>
          </div>
        </div>
        <div className="columna2">
          <div className="contenedor-video">
          <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/0kYSnfaZYGs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;
