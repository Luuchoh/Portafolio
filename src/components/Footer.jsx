import React from "react";

export const Footer = () => {
  return (
    <div className="container-footer py-5">
      <div className="footer">
        <div className="h-100 row d-flex align-items-center text-center">
          <div className="col-12 col-lg-3 mb-4 m-lg-0">
            <a className="footer-logo h-100 w-100" href="#aboutme">
              <img
                className="w-75 w-md-50"
                src="../assets/Luuchoh-logo3-gris.png"
                alt="Logo"
              />
            </a>
          </div>

          <div className="col-12 col-lg-7 d-flex flex-wrap m-auto">
            <div className="text1 d-flex flex-wrap m-auto mb-4 m-lg-0">
              <p className="m-0">Hecho con </p>
              <i class="bi bi-suit-heart-fill"></i>
              <p className="m-0"> por Luuchoh </p>
            </div>
            <div className="text2 w-sm-100 w-lg-0">
              <p className="m-0 px-2 mb-4 m-md-0">
                Copyright 2021 - Todos los derechos reservados.
              </p>
            </div>
          </div>

          <div className="container-social col-12 col-lg-2 ">
            <div className="social d-flex align-items-center m-auto ">
              <a className="social-icon fs-4 px-2 " href="">
                <i class="bi bi-github"></i>
              </a>
              <a className="social-icon fs-4 px-2" href="">
                <i class="bi bi-twitch"></i>
              </a>
              <a className="social-icon fs-4 px-2" href="">
                <i class="bi bi-twitter"></i>
              </a>
              <a className="social-icon fs-4 px-2" href="">
                <i class="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
