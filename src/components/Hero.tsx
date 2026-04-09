export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__grid" />
      <div className="hero__glow hero__glow--1" aria-hidden />
      <div className="hero__glow hero__glow--2" aria-hidden />

      <div className="hero__inner">
        <p className="hero__eyebrow">Nuevo estándar en frío</p>
        <h1 id="hero-title" className="hero__title">
          Hielo que no se rinde.
          <span className="hero__title-accent"> Vacío que lo protege.</span>
        </h1>
        <p className="hero__lead">
          Un vaso con hielo sellado al vacío: el frío dura mucho más, casi sin
          condensación en el exterior y un acabado que se siente de alta gama
          en la mano.
        </p>
        <div className="hero__actions">
          <a href="#contacto" className="btn btn--primary">
            Quiero saber más
          </a>
          <a href="#beneficios" className="btn btn--ghost">
            Ver detalles
          </a>
        </div>
      </div>

      <div className="hero__visual" aria-hidden>
        <div className="cup-scene">
          <div className="cup-scene__orbit" />
          <svg
            className="cup-scene__svg"
            viewBox="0 0 280 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(224,242,254,0.35)" />
                <stop offset="50%" stopColor="rgba(125,211,252,0.08)" />
                <stop offset="100%" stopColor="rgba(14,165,233,0.2)" />
              </linearGradient>
              <linearGradient id="iceGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
              <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>
            <ellipse cx="140" cy="320" rx="72" ry="14" fill="rgba(34,211,238,0.12)" />
            <path
              d="M76 118h128v168c0 22-28 40-64 40s-64-18-64-40V118Z"
              stroke="url(#glass)"
              strokeWidth="2.5"
              fill="rgba(15,23,42,0.4)"
            />
            <path
              d="M72 108h136a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8v-12a8 8 0 0 1 8-8Z"
              stroke="rgba(224,242,254,0.5)"
              strokeWidth="2"
              fill="rgba(30,58,138,0.25)"
            />
            <ellipse cx="140" cy="118" rx="60" ry="10" fill="rgba(125,211,252,0.15)" />
            <g className="cup-scene__ice">
              <circle cx="120" cy="200" r="28" fill="url(#iceGrad)" opacity="0.95" />
              <circle cx="155" cy="215" r="22" fill="#bae6fd" opacity="0.85" />
              <circle cx="135" cy="235" r="18" fill="#e0f2fe" opacity="0.7" />
            </g>
            <path
              d="M204 98c18 0 32 14 32 32v8c0 6-4 10-10 10h-6"
              stroke="#22d3ee"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.9"
            />
            <circle cx="220" cy="126" r="6" fill="#22d3ee" opacity="0.5" filter="url(#blur)" />
            <text
              x="228"
              y="132"
              fill="#e0f2fe"
              fontSize="11"
              fontFamily="system-ui, sans-serif"
              opacity="0.85"
            >
              vacío
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
