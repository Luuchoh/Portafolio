import React from "react";

export const Navbar = () => {
  return (
    <div className="nav w-100">
      <nav className="navbar navbar-expand-lg navbar-dark w-100 p-3">
        <a className="logo mx-2 mr-5" href="#inicio">
          <img className="w-100" src="../assets/Luuchoh-logo3-gris.png" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto text-capitalize">
            <li className="nav-item ">
              <a className="nav-link" href="#aboutmeF">
                inicio 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                proyectos
              </a>
            </li>
            <li lassName="nav-item">
              <a className="nav-link" href="#service">
                servicios
              </a>
            </li>
            <li lassName="nav-item">
              <a className="nav-link" href="#testimonies">
                testimonios
              </a>
            </li>
            <li lassName="nav-item">
              <a className="nav-link" href="#contact-me">
                contacto
              </a>
            </li>

          </ul>
        </div> 
        <form className="d-none d-lg-inline-block form-inline my-2 my-lg-0 ">
            <button
              className="btn btn-outline-warning my-2 my-sm-0 text-uppercase"
              type="submit"
            >
              descargar curriculum
            </button>
          </form>
      </nav>
    </div>
  );
};
