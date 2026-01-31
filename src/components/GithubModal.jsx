import "../styles/GithubModal.css";

function GithubModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div
      className="github-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="github-modal-title"
    >
      <div className="github-modal">

        {/* Header */}
        <div className="github-modal-header">
          <h2 id="github-modal-title">Mon profil GitHub</h2>

          <button
            type="button"
            className="close-btn"
            onClick={onClose}
            aria-label="Fermer la fenêtre"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="github-modal-body">
          <div className="github-avatar">
            <img
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              alt="Avatar GitHub de John Doe"
              width="120"
              height="120"
              loading="lazy"
            />
          </div>

          <div className="github-infos">
            <p className="github-name">
              <strong>John Doe</strong>
            </p>

            <p className="github-bio">
              Développeur web souhaitant contribuer à des projets open source
              tout en restant discret.
            </p>

            <ul className="github-stats">
              <li><strong>Dépôts :</strong> 1</li>
              <li><strong>Abonnés :</strong> 16</li>
              <li><strong>Abonnements :</strong> 0</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="github-modal-footer">
          <a
            href="https://github.com/Nouseback"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            Voir le profil GitHub
          </a>

          <button
            type="button"
            className="close-footer-btn"
            onClick={onClose}
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
}

export default GithubModal;