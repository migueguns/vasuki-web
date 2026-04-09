const steps = [
  {
    step: "01",
    title: "Doble pared",
    text: "Dos capas de material de alta calidad con espacio entre medias.",
  },
  {
    step: "02",
    title: "Vacío",
    text: "Ese espacio se evacúa: casi no hay aire que lleve calor al hielo.",
  },
  {
    step: "03",
    title: "Tu ritual",
    text: "Rellena, cierra si aplica, y disfruta el frío sin prisas.",
  },
];

export function HowItWorks() {
  return (
    <section id="como" className="section how" aria-labelledby="how-title">
      <div className="section__head">
        <h2 id="how-title" className="section__title">
          Cómo funciona
        </h2>
        <p className="section__subtitle">
          Tres ideas claras. Sin jerga innecesaria.
        </p>
      </div>
      <ol className="how__steps">
        {steps.map((s) => (
          <li key={s.step} className="how__step">
            <span className="how__badge">{s.step}</span>
            <div>
              <h3 className="how__step-title">{s.title}</h3>
              <p className="how__step-text">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
