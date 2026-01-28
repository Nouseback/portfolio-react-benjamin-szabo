import { useState } from "react";
import "../styles/MentionsLegales.css";

function MentionsLegales() {
  const [openSection, setOpenSection] = useState("editor");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <main className="legal-page">
      <section className="legal-header">
        <h1>Mentions légales</h1>
        <span className="blue-line"></span>
      </section>

      <section className="legal-container">
        {["editor", "host", "credits"].map((section) => (
          <div className="legal-item" key={section}>
            <button
              className={`legal-toggle ${openSection === section ? "active" : ""}`}
              onClick={() => toggleSection(section)}
            >
              {section === "editor" && "Éditeur du site"}
              {section === "host" && "Hébergeur"}
              {section === "credits" && "Crédits"}
            </button>

            {openSection === section && (
              <div className="legal-content">
                {section === "editor" && (
                  <>
                    <p><strong>John Doe</strong></p>
                    <p>40 rue Laure Diebold, 69009 Lyon</p>
                    <p>john.doe@gmail.com</p>
                  </>
                )}

                {section === "host" && (
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">
                    www.alwaysdata.com
                  </a>
                )}

                {section === "credits" && (
                  <p>Images libres de droits issues de Pixabay.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}

export default MentionsLegales;