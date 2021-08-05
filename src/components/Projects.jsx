import React from "react";

export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="w-100">
        <div className="row">
          <div className="col-12 col-lg-6 pr-5">
            <h2 className="h1-lg font-weight-bold pr-5">
              Parece magia, funciona con código.
            </h2>
          </div>
          <div className="col-12 col-lg-4 pr-5 d-flex align-items-center">
            <p className="">
              A lo largo de mi carrera como Frontend, he tenido el privilegio de
              trabajar en proyectos retadores e increíbles.
            </p>
          </div>
        </div>

        <div className="proj-principal d-flex align-items-center">
          <div className="row">
            <div className="container-card col-10 col-lg-6 rounded p-4 pt-5">
              <h3 className="h4 mt-3 mb-2">Todo aviador | Perú</h3>
              <p className="mb-5">
                Todo aviador es un e-commerce en cual venden articulos pensados
                para las personas que trabajan en el área de la aviación
              </p>

              <div className="pt-4">
                <a className="btn btn-warning mr-3" href="">
                  Ver proyecto completo
                </a>
                <a className="btn btn-outline-warning" href="">
                  Ver código
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="proj-secondary d-flex flex-wrap justify-content-between">
          <div className="secondary s1 d-flex align-items-center">
            <div className="row w-100">
              <div className="container-card col-11 col-lg-9 rounded p-4 pt-5">
                <h3 className="h4 mt-3 mb-2">Todo aviador | Perú</h3>
                <p className="mb-5">
                  Todo aviador es un e-commerce en cual venden articulos
                  pensados para las personas que trabajan en el área de la
                  aviación
                </p>

                <div className="pt-4">
                  <a className="btn btn-warning mr-3" href="">
                    Ver proyecto completo
                  </a>
                  <a className="btn btn-outline-warning" href="">
                    Ver código
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="secondary s2 d-flex align-items-center">
            <div className="row w-100">
              <div className="container-card col-11 col-lg-9 rounded p-4 pt-5">
                <h3 className="h4 mt-3 mb-2">Todo aviador | Perú</h3>
                <p className="mb-5">
                  Todo aviador es un e-commerce en cual venden articulos
                  pensados para las personas que trabajan en el área de la
                  aviación
                </p>

                <div className="pt-4">
                  <a className="btn btn-warning mr-3" href="">
                    Ver proyecto completo
                  </a>
                  <a className="btn btn-outline-warning" href="">
                    Ver código
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
