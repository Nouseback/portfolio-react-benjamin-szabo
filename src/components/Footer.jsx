import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h4>John Doe</h4>
          <p>
            40 rue Laure Diebold<br />
            69009 Lyon, France
          </p>
          <p>10 20 30 40 50</p>
          <p>john.doe@gmail.com</p>

          <div className="social-icons">
            <a href="#" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div>
          <h4>Liens utiles</h4>
          <ul>
            <li>Accueil</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Mentions légales</li>
          </ul>
        </div>

        <div>
          <h4>Mes dernières réalisations</h4>
          <ul>
            <li>Fresh Food</li>
            <li>Restaurant Akira</li>
            <li>Espace bien-être</li>
            <li>SEO</li>
            <li>Création d'une API</li>
            <li>Maquette d'un site</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;