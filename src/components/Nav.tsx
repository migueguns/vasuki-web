export function Nav() {
  return (
    <header className="nav">
      <a href="#" className="nav__logo">
        <span className="nav__mark" aria-hidden />
        Vasuki
      </a>
      <nav className="nav__links" aria-label="Principal">
        <a href="#beneficios">Beneficios</a>
        <a href="#como">Cómo funciona</a>
        <a href="#contacto" className="nav__cta">
          Lista de espera
        </a>
      </nav>
    </header>
  );
}
