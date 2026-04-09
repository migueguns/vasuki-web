export function CTA() {
  return (
    <section id="contacto" className="section cta" aria-labelledby="cta-title">
      <div className="cta__card">
        <h2 id="cta-title" className="cta__title">
          Sé de los primeros
        </h2>
        <p className="cta__text">
          Estamos preparando el lanzamiento. Déjanos tu correo y te avisamos
          cuando abramos pedidos — sin spam, solo lo importante.
        </p>
        <form
          className="cta__form"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const email = String(data.get("email") ?? "");
            const subject = encodeURIComponent("Lista de espera Vasuki");
            const body = encodeURIComponent(`Quiero unirme a la lista.\n\nEmail: ${email}`);
            window.location.href = `mailto:hola@vasuki.example?subject=${subject}&body=${body}`;
          }}
        >
          <label htmlFor="waitlist-email" className="visually-hidden">
            Correo electrónico
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@correo.com"
            className="cta__input"
          />
          <button type="submit" className="btn btn--primary btn--block">
            Apuntarme
          </button>
        </form>
        <p className="cta__note">
          Sin registro en servidor por ahora: al enviar se abre tu correo con el mensaje
          listo para que nos escribas.
        </p>
      </div>
    </section>
  );
}
