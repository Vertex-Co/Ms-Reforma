import './About.css'

function About() {
  return (
    <section
      className="about"
      id="sobre"
    >
      <div className="about__container">

        <div className="about__intro">
          <span className="about__eyebrow">
            SOBRE A MS REFORMA
          </span>

          <h2>
            Experiência para cuidar
            <span> da sua obra.</span>
          </h2>
        </div>

        <div className="about__content">
          <p>
            Há mais de 10 anos, a MS Reforma atua no setor da
            construção civil oferecendo soluções para obras de
            pequeno, médio e grande porte.
          </p>

          <p>
            Atendemos residências, edifícios, empreendimentos
            comerciais e shopping centers em todo o Distrito
            Federal, com serviços de reforma, manutenção e
            acabamento.
          </p>

          <div className="about__features">
            <div>
              <span>01</span>

              <strong>
                Qualidade
              </strong>
            </div>

            <div>
              <span>02</span>

              <strong>
                Compromisso
              </strong>
            </div>

            <div>
              <span>03</span>

              <strong>
                Segurança
              </strong>
            </div>

            <div>
              <span>04</span>

              <strong>
                Profissionalismo
              </strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About