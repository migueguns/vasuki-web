const items = [
  {
    title: "Frio que se nota",
    body: "El vacío reduce la transferencia de calor. Tu bebida se mantiene helada notablemente más tiempo que en un vaso convencional.",
  },
  {
    title: "Menos gotas, más clase",
    body: "La pared exterior permanece mucho más seca. Menos manchas en la mesa y una sensación premium al sostenerlo.",
  },
  {
    title: "Sellado de verdad",
    body: "Cámara de vacío entre capas: ingeniería sencilla de explicar, difícil de copiar. Diseñado para el día a día.",
  },
];

export function Features() {
  return (
    <section id="beneficios" className="section features" aria-labelledby="features-title">
      <div className="section__head">
        <h2 id="features-title" className="section__title">
          Por qué es distinto
        </h2>
        <p className="section__subtitle">
          No es solo estética: es física aplicada a algo que usas todos los días.
        </p>
      </div>
      <ul className="features__grid">
        {items.map((item) => (
          <li key={item.title} className="feature-card">
            <span className="feature-card__index" aria-hidden />
            <h3 className="feature-card__title">{item.title}</h3>
            <p className="feature-card__body">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
