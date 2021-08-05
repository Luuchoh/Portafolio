import React from "react";

export const AboutMe = () => {
  return (
    <div className="container-aboutme " id="aboutme">
      <div
        className="aboutme d-flex flex-row-reverse align-items-center row py-5 h-100"
        id="inicio"
      >
        <div className="col-lg-6 col-md-12 p-5">
          <img
            className="w-100 h-100 rounded"
            src="../assets/foto-prueba.png"
            alt="Foto de perfil"
          />
        </div>
        <div className="col-lg-6 col-md-12 ">
          <div className="py-2">
            <h1 className="h1">¡Hola a todos!</h1>
            <h2 className="h1">
              soy<strong> Luis Hernández</strong>
            </h2>
          </div>
          <div className="py-2 mb-5">
            <p className="h5">
              Desarrollador fullstack con enfasis en front-end que le encanta
              diseñar páginas unicas y raras que entretengan por mucho tiempo al
              cliente
            </p>
          </div>
          <div className="arrow pt-5">
            <i class="bi bi-arrow-bar-down w-25"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
