import { useEffect, useState } from 'react'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <header className="header">
      <div className="header__container">

        <a
          href="#inicio"
          className="header__brand"
          aria-label="MS Reforma - Página inicial"
          onClick={closeMenu}
        >
          <span
            className="header__logo-symbol"
            aria-hidden="true"
          />

          <div className="header__brand-text">
            <strong>
              <span>MS</span> REFORMA
            </strong>

            <small>
              ACABAMENTO • REVESTIMENTO • PINTURA
            </small>
          </div>
        </a>

        <nav
          className={`header__nav ${
            menuOpen ? 'header__nav--open' : ''
          }`}
          aria-label="Navegação principal"
        >
          <a href="#inicio" onClick={closeMenu}>
            Início
          </a>

          <a href="#servicos" onClick={closeMenu}>
            Serviços
          </a>

          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>

          <a href="#contato" onClick={closeMenu}>
            Contato
          </a>

          <a
            className="header__nav-whatsapp"
            href="https://wa.me/5561992452213?text=Olá!%20Vim%20pelo%20site%20da%20MS%20Reforma%20e%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Solicitar orçamento
          </a>
        </nav>

        <a
          className="header__whatsapp"
          href="https://wa.me/5561992452213?text=Olá!%20Vim%20pelo%20site%20da%20MS%20Reforma%20e%20gostaria%20de%20solicitar%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar orçamento
        </a>

        <button
          className={`header__menu-button ${
            menuOpen
              ? 'header__menu-button--open'
              : ''
          }`}
          type="button"
          aria-label={
            menuOpen
              ? 'Fechar menu'
              : 'Abrir menu'
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  )
}

export default Header