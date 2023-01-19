import React, { useEffect } from "react";
import "./section-1.css";
import imagenPortada from "../../img/imagen-portada.png";
import {
  motion,
  useAnimation,
  useCycle,
} from "framer-motion/dist/framer-motion";

function Section1() {
  return (
    <div className="portada-container">
      <section className="portada">
        <div className="columna1">
          <h1>Genera tu proyecto RPA en 5 minutos</h1>
          <p>
            Te ofrecemos la mejor propuesta de proyecto RPA para tu empresa y
            asciende de cargo con Dignita. Nosotros nos encargaremos de que
            ganes. Empieza ahora mismo y no pierdas esta oportunidad.
          </p>
          <div className="botones">
            <a href="#" className="comencemos">
              <button>Comencemos</button>
            </a>

            <a href="#">
              <button>Conócenos</button>
            </a>
          </div>
        </div>
        <div className="columna2">
          <img src={imagenPortada} alt="slides-dignita" />
        </div>
      </section>
    </div>
  );
}

export default Section1;
