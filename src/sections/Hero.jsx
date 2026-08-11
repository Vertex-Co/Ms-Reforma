import './Hero.css'

function WhatsAppIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.76.46 3.48 1.34 5L2 22l5.12-1.34A9.93 9.93 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm0 18.18c-1.5 0-2.98-.4-4.26-1.16l-.3-.18-3.04.8.82-2.96-.2-.3A8.16 8.16 0 0 1 3.8 12c0-4.54 3.7-8.22 8.24-8.22A8.2 8.2 0 0 1 20.26 12c0 4.54-3.68 8.18-8.22 8.18Zm4.5-6.14c-.24-.12-1.46-.72-1.68-.8-.22-.08-.38-.12-.54.12-.16.24-.64.8-.78.96-.14.16-.28.18-.52.06-.24-.12-1.04-.38-1.96-1.22-.72-.64-1.22-1.44-1.36-1.68-.14-.24-.02-.38.1-.5.12-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.06 3.6.56.24 1 .38 1.36.5.58.18 1.1.16 1.5.1.46-.06 1.46-.6 1.66-1.16.2-.58.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

function Hero() {
  return (
    <section
      className="hero"
      id="inicio"
    >
      <div
        className="hero__blueprint"
        aria-hidden="true"
      />

      <div
        className="hero__glow hero__glow--one"
        aria-hidden="true"
      />

      <div
        className="hero__glow hero__glow--two"
        aria-hidden="true"
      />

      <div className="hero__container">

        <div className="hero__content">

          <div className="hero__eyebrow">
            <span />

            Acabamento e reforma
          </div>

          <h1>
            Seu projeto merece

            <span>
              atenção em cada detalhe.
            </span>
          </h1>

          <p className="hero__description">
            Soluções completas em reformas, pinturas,
            acabamentos e manutenção para residências,
            edifícios e empreendimentos em todo o
            Distrito Federal.
          </p>

          <div className="hero__actions">

            <a
              className="hero__primary-button"
              href="https://wa.me/5561992452213?text=Olá!%20Vim%20pelo%20site%20da%20MS%20Reforma%20e%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orçamento

              <WhatsAppIcon />
            </a>

            <a
              className="hero__secondary-button"
              href="#servicos"
            >
              Conhecer serviços
            </a>

          </div>

          <div className="hero__trust">

            <div className="hero__trust-item">
              <strong>
                10+
              </strong>

              <span>
                anos de
                <br />
                experiência
              </span>
            </div>

            <div className="hero__divider" />

            <div className="hero__trust-item">
              <strong>
                DF
              </strong>

              <span>
                atendimento em
                <br />
                todo o Distrito Federal
              </span>
            </div>

            <div className="hero__divider" />

            <div className="hero__trust-item">
              <strong>
                P • M • G
              </strong>

              <span>
                obras de pequeno,
                <br />
                médio e grande porte
              </span>
            </div>

          </div>
        </div>

        <div className="hero__visual">

          <div className="hero__logo-card">

            <div className="hero__logo-image">
              <img
                src="/images/logo-ms.png"
                alt="MS Reforma - Acabamento, Revestimento e Pintura"
              />
            </div>

            <div className="hero__logo-card-line" />

            <p>
              ACABAMENTO
              <span>•</span>
              REVESTIMENTO
              <span>•</span>
              PINTURA
            </p>

          </div>

          <div className="hero__floating-card">

            <span
              className="hero__floating-icon"
              aria-hidden="true"
            >
              ✓
            </span>

            <div>
              <strong>
                Qualidade e compromisso
              </strong>

              <small>
                Do planejamento ao acabamento.
              </small>
            </div>

          </div>

        </div>

      </div>

      <a
        className="hero__scroll"
        href="#servicos"
        aria-label="Ir para a seção de serviços"
      >
        <span />
      </a>

    </section>
  )
}

export default Hero