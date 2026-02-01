import "../styles/Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      {/* TITRE */}
      <section className="contact-title">
        <h1><strong>Contact</strong></h1>
        <p>
          Pour me contacter en vue d’un entretien ou d’une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <span className="blue-line"></span>
      </section>

      {/* CONTENU */}
      <section className="contact-section">
        <div className="contact-card">

          {/* FORMULAIRE */}
          <div className="contact-form">
            <h2><strong>Formulaire de contact</strong></h2>
            <span className="blue-line"></span>

            <form>
              <input type="text" placeholder="Votre nom" aria-label="Nom" />
              <input type="email" placeholder="Votre adresse email" aria-label="Email" />
              <input type="tel" placeholder="Votre numéro de téléphone" aria-label="Téléphone" />
              <input type="text" placeholder="Sujet" aria-label="Sujet" />
              <textarea placeholder="Votre message" aria-label="Message"></textarea>

              <button type="submit" className="btn-primary">
                Envoyer
              </button>
            </form>
          </div>

          {/* INFOS */}
          <div className="contact-infos">
            <h2><strong>Mes coordonnées</strong></h2>
            <span className="blue-line"></span>

            <p><strong>John Doe</strong></p>
            <p>40 Rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>
              <a href="tel:1020304050">10 20 30 40 50</a>
            </p>
            <p>
              <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
            </p>

            <iframe
              title="Localisation John Doe"
              src="https://www.google.com/maps?q=40%20Rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;