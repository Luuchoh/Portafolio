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
            <div className="text1 d-flex flex-wrap mx-auto mb-4 m-lg-0">
              <p className="m-0">Hecho con </p>
              <i className="bi bi-suit-heart-fill px-2 text-danger"></i>
              <p className="m-0"> por Luuchoh </p>
            </div>
            <div className="text2 w-sm-100 w-lg-0 m-auto mb-4 m-lg-0">
              <p className="m-0 px-2 ">
                Copyright 2021 - Todos los derechos reservados.
              </p>
            </div>
          </div>

          <div className="container-social col-12 col-lg-2 d-flex align-items-center">
            <div className="social m-auto mt-3 m-lg-0 ">
              <a className="social-icon github fs-4 px-2 " href="">
                <i className="bi bi-github"></i>
              </a>
              <a className="social-icon twitch fs-4 px-2" href="">
                <i className="bi bi-twitch"></i>
              </a>
              <a className="social-icon twitter fs-4 px-2" href="">
                <i className="bi bi-twitter"></i>
              </a>
              <a className="social-icon instagram fs-4 px-2" href="">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
