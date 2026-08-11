import './Contact.css'

function Contact() {
  return (
    <section
      className="contact"
      id="contato"
    >
      <div className="contact__container">

        <div className="contact__content">
          <span className="contact__eyebrow">
            FALE COM A MS REFORMA
          </span>

          <h2>
            Precisando reformar
            <span> seu ambiente?</span>
          </h2>

          <p>
            Entre em contato e conte o que você precisa.
            Atendemos em todo o Distrito Federal.
          </p>
        </div>

        <div className="contact__cards">

          <a
            className="contact-card contact-card--primary"
            href="https://wa.me/5561992452213?text=Olá!%20Vim%20pelo%20site%20da%20MS%20Reforma%20e%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <span>
                Atendimento e orçamentos
              </span>

              <strong>
                Matheus Cavalcante
              </strong>

              <small>
                (61) 99245-2213
              </small>
            </div>

            <span
              className="contact-card__arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          <a
            className="contact-card"
            href="https://wa.me/5561995954749?text=Olá!%20Vim%20pelo%20site%20da%20MS%20Reforma%20e%20gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <span>
                Segundo contato
              </span>

              <strong>
                MS Reforma
              </strong>

              <small>
                (61) 99595-4749
              </small>
            </div>

            <span
              className="contact-card__arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

        </div>

        <div className="contact__future">
          <span>
            Instagram
            <small>em breve</small>
          </span>

          <span>
            E-mail
            <small>em breve</small>
          </span>
        </div>

      </div>
    </section>
  )
}

export default Contact