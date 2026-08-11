import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">

        <a
          href="#inicio"
          className="footer__brand"
        >
          <strong>
            <span>MS</span> REFORMA
          </strong>

          <small>
            ACABAMENTO • REVESTIMENTO • PINTURA
          </small>
        </a>

        <p>
          Atendimento em todo o Distrito Federal.
        </p>

        <span className="footer__copyright">
          © Todos os direitos reservados {year} MS Reforma.
        </span>

      </div>
    </footer>
  )
}

export default Footer