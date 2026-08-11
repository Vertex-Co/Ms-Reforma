import './Services.css'

const services = [
  {
    number: '01',
    title: 'Pinturas em geral',
    description:
      'Pintura residencial, predial e de garagens, com preparação e acabamento.',
  },
  {
    number: '02',
    title: 'Drywall',
    description:
      'Instalação de gesso acartonado para divisórias, ambientes e acabamentos.',
  },
  {
    number: '03',
    title: 'Reformas e reparos',
    description:
      'Reformas de pequeno, médio e grande porte, além de manutenções em geral.',
  },
  {
    number: '04',
    title: 'Instalações',
    description:
      'Serviços de elétrica, hidráulica, azulejista e outras necessidades da obra.',
  },
  {
    number: '05',
    title: 'Limpeza de estruturas',
    description:
      'Limpeza de fachadas, placas, muros e outras estruturas.',
  },
  {
    number: '06',
    title: 'Piso laminado',
    description:
      'Instalação de piso laminado para renovar ambientes com conforto e praticidade.',
  },
]

function Services() {
  return (
    <section
      className="services"
      id="servicos"
    >
      <div className="services__container">

        <div className="services__header">
          <div>
            <span className="services__eyebrow">
              NOSSOS SERVIÇOS
            </span>

            <h2>
              Soluções para sua
              <span> obra ou reforma.</span>
            </h2>
          </div>

          <p>
            Do pequeno reparo à reforma completa,
            a MS Reforma atende diferentes necessidades
            em todo o Distrito Federal.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <span className="service-card__number">
                {service.number}
              </span>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="services__cta">
          <p>
            Precisando de algum desses serviços?
          </p>

          <a
            href="https://wa.me/5561992452213?text=Olá!%20Vim%20pelo%20site%20da%20MS%20Reforma%20e%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar orçamento
            <span aria-hidden="true">↗</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Services