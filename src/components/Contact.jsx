import React from "react";
import emailjs from 'emailjs-com';

export const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_e175k4m', 'template_vvbdjnq', e.target, 'user_lw8NNKW7Lc8w3k2Xy6blB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="container-contact">
      <div className="contact col-11 col-md-8 col-lg-5 p-5">
        <h2 className="text-capitalize">contactame</h2>
        <p>
          Si está interesado en trabajar conmigo en su próximo proyecto, no dude
          en ponerse en contacto.
        </p>
        <form onSubmit={sendEmail}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre completo
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="nameHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electronnico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
                Nunca compartiremos tu correo electrónico con nadie más.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Cuentame que puedo hacer por ti"
            />
          </div>
          
          <button type="submit" className="btn btn-warning w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
