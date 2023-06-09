import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import Login from "./login";
import "./google-slide.css";
import { motion } from "framer-motion/dist/framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
const CLIENT_ID =
  "760068272484-0n6p67v1k5d9t1vi4tla6333f8c4o7h0.apps.googleusercontent.com";
const API_KEY = "AIzaSyD1zb-kx1wHtg7nPRkwumv7CRnat80oTEA";
const SCOPE = "https://www.googleapis.com/auth/drive";

function GoogleSlide({ setShow, id, nameSlide }) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  /* IMPORTANT */
  const templateID = id;
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPE,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
          ],
        })
        .then(() => {});
    });
  }, []);

  const createFile = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    if (auth2.isSignedIn.get()) {
      gapi.client.drive.files
        .copy({
          fileId: templateID,
          resource: { name: nameSlide },
        })
        .then((response) => {
          const presentationCopyId = response.result.id;
          window.open(
            "https://docs.google.com/presentation/d/" +
              presentationCopyId +
              "/edit",
            "_blank"
          );
        });
    } else {
      auth2.signIn();
    }
  };
  /* Accedere el link donde se encuentra alojado los templates */
  const link = `https://docs.google.com/presentation/d/${id}/edit`;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="inicio-sesión-container"
    >
      <section className="inicio-sesión">
        <section className="container-blobs">
          <span className="blob-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="389.54"
              height="261.78"
              viewBox="286.368 244.029 464.025 494.053"
            >
              <defs>
                <linearGradient id="b" gradientTransform="rotate(180 .5 .5)">
                  <stop offset="0%" stopColor="#FC9873" />
                  <stop offset="100%" stopColor="#fff" />
                </linearGradient>
                <clipPath id="a">
                  <path
                    fill="currentColor"
                    d="M599 679.5Q293 859 286.5 488.5t306-179.5Q905 500 599 679.5Z"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#a)">
                <path
                  fill="url(#b)"
                  d="M599 679.5Q293 859 286.5 488.5t306-179.5Q905 500 599 679.5Z"
                />
              </g>
            </svg>
          </span>
          <span className="blob-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="389.54"
              height="261.78"
              viewBox="286.368 244.029 464.025 494.053"
            >
              <defs>
                <linearGradient id="b" gradientTransform="rotate(180 .5 .5)">
                  <stop offset="0%" stopColor="#FC9873" />
                  <stop offset="100%" stopColor="#fff" />
                </linearGradient>
                <clipPath id="a">
                  <path
                    fill="currentColor"
                    d="M599 679.5Q293 859 286.5 488.5t306-179.5Q905 500 599 679.5Z"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#a)">
                <path
                  fill="url(#b)"
                  d="M599 679.5Q293 859 286.5 488.5t306-179.5Q905 500 599 679.5Z"
                />
              </g>
            </svg>
          </span>
          <span className="blob-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="389.54"
              height="261.78"
              viewBox="286.368 244.029 464.025 494.053"
            >
              <defs>
                <linearGradient id="b" gradientTransform="rotate(180 .5 .5)">
                  <stop offset="0%" stopColor="#FC9873" />
                  <stop offset="100%" stopColor="#fff" />
                </linearGradient>
                <clipPath id="a">
                  <path
                    fill="currentColor"
                    d="M599 679.5Q293 859 286.5 488.5t306-179.5Q905 500 599 679.5Z"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#a)">
                <path
                  fill="url(#b)"
                  d="M599 679.5Q293 859 286.5 488.5t306-179.5Q905 500 599 679.5Z"
                />
              </g>
            </svg>
          </span>
        </section>
        <div className="background-content"></div>
        <div className="contenido">
          <FontAwesomeIcon
            onClick={() => setShow(false)}
            className="icon"
            icon={faCircleXmark}
          />
          <section>
            <h3>¡Hola!</h3>
            {/* <p>Inicia Sesión En Tu Cuenta</p> */}
            <p>
              Hagamos esto realidad juntos{" "}
              <span role="img" aria-label="strong muscle and a heart">
                💪❤️
              </span>
            </p>
          </section>
          {/* <Login setIsSignedIn={setIsSignedIn} /> */}
          <a className="create-button" href={link} target="_blank">
            {/*<button

             onClick={() => {
              createFile();
              toast.success(
                "¡Tu presentación está lista!, espera un momento y se abrirá en una nueva pestaña",
                { position: "top-center", duration: 5000 }
              );
            }}
            disabled={!isSignedIn} 
            >*/}
            Abre tu presentación
            {/* </button> */}
          </a>

          {/* <a
            className="problemas-duplicando"
            rel="noopener noreferrer"
            href={link}
            target="_blank"
          >
            ¿Problemas al duplicar el slide? Hazlo tú mismo
          </a> */}
        </div>
      </section>
    </motion.div>
  );
}

export default GoogleSlide;
