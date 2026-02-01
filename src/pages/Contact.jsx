import "../styles/Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-title">
        <h1>Contact</h1>
        <p>
          Pour me contacter en vue d’un entretien ou d’une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <span className="blue-line"></span>
      </section>

      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-form">
            <h2>Formulaire de contact</h2>
            <span className="blue-line"></span>

            <form>
              <input type="text" placeholder="Votre nom" />
              <input type="email" placeholder="Votre adresse email" />
              <input type="tel" placeholder="Votre numéro de téléphone" />
              <input type="text" placeholder="Sujet" />
              <textarea placeholder="Votre message"></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </div>

          <div className="contact-infos">
            <h2>Mes coordonnées</h2>
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
              title="Localisation"
              src="https://www.google.com/maps?q=40%20Rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;