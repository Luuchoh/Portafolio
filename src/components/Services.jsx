import React from "react";

export const Services = () => {
  return (
    <div className="container-service" id="service">
      <div className="service">
        <h2 className ="text-capitalize font-weight-bold">servicios</h2>

        <div className="row">
          <div className="col-4">
              <h4>Diseño</h4>
              <ul>
                  <li>Experiencia de usuario</li>
                  <li>Interfaz de usuario</li>
                  <li>Aplicaciones WEB</li>
                  <li>prueba de concepto</li>
              </ul>
              <a href="/">
                    Ver servicios de marca
                    <i class="bi bi-caret-right-fill"></i>
                </a>
          </div>
          <div className="col-4">
            <h4>Desarollo</h4>
              <ul>
                  <li>Aplicaciones moviles</li>
                  <li>Sitios WEB</li>
                  <li>Aplicaciones WEB progresivas</li>
              </ul>
              <a href="/">
                    Ver servicios de marca
                    <i class="bi bi-caret-right-fill"></i>
                </a>
          </div>
          <div className="col-4">
            <h4>Marca</h4>
              <ul>
                  <li>identidad de la marca</li>
                  <li>Estategia de marca</li>
              </ul>
                <a href="/">
                    Ver servicios de marca
                    <i class="bi bi-caret-right-fill"></i>
                </a>
          </div>
        </div>
      </div>
    </div>
  );
};
