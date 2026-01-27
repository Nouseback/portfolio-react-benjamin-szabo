import { useState } from "react";
import "../styles/MentionsLegales.css";

function MentionsLegales() {
  const [openSection, setOpenSection] = useState("editor");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <main className="legal-page">

      {/* ===== TITLE ===== */}
      <section className="legal-header">
        <h1>Mentions légales</h1>
        <span className="blue-line"></span>
      </section>

      {/* ===== ACCORDION ===== */}
      <section className="legal-container">

        {/* ===== ÉDITEUR ===== */}
        <div className="legal-item">
          <button
            className={`legal-toggle ${openSection === "editor" ? "active" : ""}`}
            onClick={() => toggleSection("editor")}
          >
            Éditeur du site
            <span>{openSection === "editor" ? "▲" : "▼"}</span>
          </button>

          {openSection === "editor" && (
            <div className="legal-content">
              <p><strong>John Doe</strong></p>
              <p>40 rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>10 20 30 40 50</p>
              <p>john.doe@gmail.com</p>
            </div>
          )}
        </div>

        {/* ===== HÉBERGEUR ===== */}
        <div className="legal-item">
          <button
            className={`legal-toggle ${openSection === "host" ? "active" : ""}`}
            onClick={() => toggleSection("host")}
          >
            Hébergeur
            <span>{openSection === "host" ? "▲" : "▼"}</span>
          </button>

          {openSection === "host" && (
            <div className="legal-content">
              <p><strong>alwaysdata</strong></p>
              <p>91 Rue du Faubourg Saint-Honoré</p>
              <p>75008 Paris</p>
              <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">
                www.alwaysdata.com
              </a>
            </div>
          )}
        </div>

        {/* ===== CRÉDITS ===== */}
        <div className="legal-item">
          <button
            className={`legal-toggle ${openSection === "credits" ? "active" : ""}`}
            onClick={() => toggleSection("credits")}
          >
            Crédits
            <span>{openSection === "credits" ? "▲" : "▼"}</span>
          </button>

          {openSection === "credits" && (
            <div className="legal-content">
              <h2>Crédits</h2>

              <p>
                Ce site a été réalisé par John Doe, étudiant au{" "}
                <a href="#" className="legal-link">
                  Centre Européen de formation
                </a>.
              </p>

              <p>
                Les images utilisées sur ce site sont libres de droits et ont été
                obtenues sur le site{" "}
                <a href="https://pixabay.com" target="_blank" rel="noreferrer">
                  Pixabay
                </a>.
              </p>

              <p>
                La favicon de ce site a été fournie par{" "}
                <a href="https://www.flaticon.com" target="_blank" rel="noreferrer">
                  John Doe icons erstellt von Freepik - Flaticon
                </a>.
              </p>
            </div>
          )}
        </div>

      </section>
    </main>
  );
}

export default MentionsLegales;