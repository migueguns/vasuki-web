export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contacto" className="footer">
      <div className="footer__inner">
        <div className="footer__row">
          
          <a
            href="https://instagram.com/vasuki.tuki"
            target="_blank"
            rel="noreferrer"
            className="footer__instagram"
            aria-label="Instagram de Vasuki"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="footer__instagram-icon">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4.25" />
              <circle cx="17.4" cy="6.6" r="1.15" />
            </svg>
            <span>@vasuki.tuki</span>
          </a>
          <a href="tel:+5491136413029" className="footer__phone" aria-label="Telefono de Vasuki">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="footer__phone-icon">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.88.32 1.74.6 2.56a2 2 0 0 1-.45 2.11L9 10.54a16 16 0 0 0 4.46 4.46l1.15-1.15a2 2 0 0 1 2.11-.45c.82.28 1.68.48 2.56.6A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span>+54 9 11 3641-3029</span>
          </a>
        </div>
        <p className="footer__tagline">El hielo de la previa.</p>
        <p className="footer__copy">© {year} Vasuki. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
