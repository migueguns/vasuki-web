import "./App.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const moments = [
  {
    title: "Previas",
    text: "El hielo que arranca la noche.",
    image: "/images/previa.png",
    icon: "♫",
  },
  {
    title: "Reuniones",
    text: "Brindis que se disfrutan más.",
    image: "/images/reuniones_corta.png",
    icon: "☼",
  },
  {
    title: "Amigos",
    text: "Momentos que se congelan.",
    image: "/images/pasion_mundialista.png",
    icon: "☀",
  },
];

const benefits = [
  {
    title: "Inmediatez",
    text: "Listo para usar en cualquier momento.",
    icon: "⚡",
  },
  {
    title: "Calidad",
    text: "Hielo premium, limpio y cristalino.",
    icon: "⭐"
  },
  {
    title: "Experiencia",
    text: "Transformamos lo cotidiano en momentos únicos.",
    icon: "🧊"
  },
];

const quickFacts = [
  {
    title: "100% higiénico",
    text: "Sellado de fábrica",
    icon: "❄",
  },
  {
    title: "Hielo cristalino",
    text: "Calidad premium",
    icon: "▧",
  },
  {
    title: "Listo para tomar",
    text: "Abrís, servís y tuki.",
    icon: "▤",
  },
];

type LogoProps = {
  small?: boolean;
};

function VasukiLogo({ small = false }: LogoProps) {
  return (
    <img
      src="/vasuki-logo_transp.png"
      alt="Vasuki"
      className={`vasuki-logo ${small ? "vasuki-logo--medium" : ""}`}
    />
  );
}

type ProductCupProps = {
  compact?: boolean;
};

function ProductCup({ compact = false }: ProductCupProps) {
  return (
    <div
      className={`product-cup ${compact ? "product-cup--compact" : ""}`}
      aria-label="Vaso Vasuki con hielo"
    >
      <img
        className="product-cup__image"
        src="/vasoHielo_t.png"
        alt="Vaso Vasuki con hielo"
      />
    </div>
  );
}

function App() {
  return (
    <main className="vasuki-page">
      <section className="hero" id="inicio">
        <header className="nav">
          <VasukiLogo small />
          <nav className="nav__links" aria-label="Principal">
            <a href="#inicio" className="active">
              Inicio
            </a>
            <a href="#producto">Producto</a>
            <a href="#momentos">Momentos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </header>

        <div className="hero__content">
          <div className="hero__copy">
            <h1>
              Abrís,
              <br />
              servís
              <br />
              y tuki.
            </h1>
            <p>
              Hielo premium listo para consumir. Sellado, limpio y siempre listo
              para el momento.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#contacto">
                Quiero Vasuki <span>→</span>
              </a>
              <a className="btn btn--outline" href="#producto">
                Conocé más <span>→</span>
              </a>
            </div>

            <div className="quick-facts">
              {quickFacts.map((item) => (
                <article className="quick-fact" key={item.title}>
                  <span>{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="hero__product">
            <ProductCup />
            <div className="bubble bubble--1" />
            <div className="bubble bubble--2" />
            <div className="bubble bubble--3" />
            <div className="bubble bubble--4" />
          </div>
        </div>

        <div className="hero__wave" />
      </section>

      <section className="benefits" aria-label="Beneficios principales">
        {benefits.map((item) => (
          <article className="benefit-card" key={item.title}>
            <div className="benefit-card__icon">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="story" id="producto">
        <div className="story__copy">
          <h2>
            No vendemos solo vasos con hielo,
            <br />
            congelamos momentos.
          </h2>
          <div className="section-line" />
          <p>
            Vasuki es una marca de hielo premium lista para consumir en un vaso
            totalmente sellado. Creamos cada vaso para acompañar tus mejores
            momentos sociales, previas y experiencias del día a día.
          </p>
          <a className="text-link" href="#contacto">
            Conocé nuestro producto <span>→</span>
          </a>
        </div>

        <div className="story__visual">
          <img
            src="/images/mano_vaso_hielo.png"
            alt="Mano sosteniendo vaso Vasuki con hielo"
            className="story__visual-image"
          />
          <div className="fog" />
        </div>
      </section>

      <section className="moments" id="momentos">
        <h2>Momentos</h2>
        <div className="moments__grid">
          {moments.map((item) => (
            <article className="moment-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="moment-card__overlay" />
              <div className="moment-card__content">
                <span>{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="vasuki-cta-banner" id="contacto">
        <img className="vasuki-cta-banner__ice" src="/images/ice-cubes_t.png" alt="" />

        <div className="vasuki-cta-banner__content">
          <h2>VASUKI ES PARTE DEL MOMENTO.</h2>
          <p>Sumate a nuestra comunidad y viví la experiencia Vasuki.</p>

          <a href="https://www.instagram.com/vasuki.tuki" className="vasuki-cta-banner__button">
            Sumate a Vasuki 
          </a>
        </div>


      </section>

      <footer className="footer">
      <a
        href="https://www.instagram.com/vasuki.tuki"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__instagram"
        aria-label="Instagram de Vasuki"
      >
        <FaInstagram className="footer__instagram-icon" />
        <span>@vasuki.tuki</span>
      </a>
        <span className="footer__divider" />
        <a
        href="https://wa.me/5491136413029?text=Hola%2C%20quiero%20sumarme%20a%20Vasuki"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__whatsapp"
        aria-label="WhatsApp de Vasuki"
      >
        <FaWhatsapp className="footer__whatsapp-icon" />
            <span>5491136413029</span>
      </a>
      </footer>
    </main>
  );
}

export default App;
