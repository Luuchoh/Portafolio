import React from "react";

export const Contact = () => {
  return (
    <div className="container-contact">
      <div className="contact col-11 col-md-8 col-lg-5 p-5">
        <h2 className="text-capitalize">contactame</h2>
        <p>
          Si está interesado en trabajar conmigo en su próximo proyecto, no dude
          en ponerse en contacto.
        </p>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">
              Nombre completo
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="nameHelp"
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">
              Correo electronnico
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
                Nunca compartiremos tu correo electrónico con nadie más.
            </div>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">
              Mensaje
            </label>
            <textarea
              class="form-control"
              id="message"
              placeholder="Cuentame que puedo hacer por ti"
            />
          </div>
          
          <button type="submit" class="btn btn-warning w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
