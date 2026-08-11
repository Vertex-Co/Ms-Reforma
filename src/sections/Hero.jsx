import './Hero.css'

function Hero() {
  return (
    <section
      className="hero"
      id="inicio"
    >
      {/* FUNDO */}
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

        {/* =========================
            CONTEÚDO
        ========================= */}

        <div className="hero__content">

          <div className="hero__eyebrow">
            <span />

            Engenharia, acabamento e reforma
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

          {/* BOTÕES */}
          <div className="hero__actions">

            <a
              className="hero__primary-button"
              href="https://wa.me/5561992452213?text=Olá!%20Vim%20pelo%20site%20da%20MS%20Reforma%20e%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orçamento

              <span aria-hidden="true">
                ↗
              </span>
            </a>

            <a
              className="hero__secondary-button"
              href="#servicos"
            >
              Conhecer serviços
            </a>

          </div>

          {/* INFORMAÇÕES */}
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

        {/* =========================
            VISUAL / LOGO
        ========================= */}

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

          {/* CARD FLUTUANTE */}
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

      {/* INDICADOR DE SCROLL */}
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