export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__brand">Vasuki</span>
        <p className="footer__tagline">Hielo al vacío.</p>
        <p className="footer__copy">© {year} Vasuki. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
