import { useState } from "react";
import "../styles/MentionsLegales.css";

function MentionsLegales() {
  const [openSection, setOpenSection] = useState("credits");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <main className="legal-page">
      <h1><strong>Mentions légales</strong></h1>
      <div className="title-underline"></div>

      <section className="legal-container">

        {/* ÉDITEUR */}
        <button
          className={`legal-header ${openSection === "editor" ? "active" : ""}`}
          onClick={() => toggleSection("editor")}
          aria-expanded={openSection === "editor"}
        >
          Éditeur du site
          <span className="arrow"></span>
        </button>

        {openSection === "editor" && (
          <div className="legal-content">
            <p><strong>John Doe</strong></p>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>Téléphone : 10 20 30 40 50</p>
            <p>Email : john.doe@gmail.com</p>
          </div>
        )}

        {/* HÉBERGEUR */}
        <button
          className={`legal-header ${openSection === "host" ? "active" : ""}`}
          onClick={() => toggleSection("host")}
          aria-expanded={openSection === "host"}
        >
          Hébergeur
          <span className="arrow"></span>
        </button>

        {openSection === "host" && (
          <div className="legal-content">
            <p><strong>Always Data</strong></p>
            <p>91 rue du Faubourg Saint-Honoré</p>
            <p>75008 Paris</p>
            <p>www.alwaysdata.com</p>
          </div>
        )}

        {/* CRÉDITS */}
        <button
          className={`legal-header ${openSection === "credits" ? "active" : ""}`}
          onClick={() => toggleSection("credits")}
          aria-expanded={openSection === "credits"}
        >
          Crédits
          <span className="arrow"></span>
        </button>

        {openSection === "credits" && (
          <div className="legal-content">
            <h2>Crédits</h2>
            <p>
              Ce site a été réalisé par John Doe, étudiant au{" "}
              <a
                href="https://www.centre-europeen-formation.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Centre Européen de Formation
              </a>.
            </p>

            <p>
              Les images utilisées sur ce site sont libres de droits et ont été
              obtenues sur le site{" "}
              <a
                href="https://pixabay.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixabay
              </a>.
            </p>

            <p>
              La favicon de ce site a été fournie par{" "}
              <a
                href="https://www.flaticon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Freepik - Flaticon
              </a>.
            </p>
          </div>
        )}

      </section>
    </main>
  );
}

export default MentionsLegales;