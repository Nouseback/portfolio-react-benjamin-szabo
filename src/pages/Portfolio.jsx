import "../styles/Portfolio.css";
import banner from "../assets/images/banner.jpg";
import freshFood from "../assets/images/portfolio/fresh-food.jpg";
import restaurant from "../assets/images/portfolio/restaurant-japonais.jpg";
import bienEtre from "../assets/images/portfolio/espace-bien-etre.jpg";
import seo from "../assets/images/portfolio/seo.jpg";
import api from "../assets/images/portfolio/coder.jpg";
import maquette from "../assets/images/portfolio/screens.jpg";

function Portfolio() {
  return (
    <main>

      {/* HERO */}
      <header
        className="portfolio-banner"
        style={{ backgroundImage: `url(${banner})` }}
        aria-hidden="true"
      ></header>

      {/* TITRE */}
      <section className="portfolio-title">
        <h1>Portfolio</h1>
        <p>Voici quelques-unes de mes réalisations</p>
        <span className="blue-line"></span>
      </section>

      {/* PROJETS */}
      <section className="portfolio-section">
        <div className="portfolio-container">

          <article className="portfolio-card">
            <img src={freshFood} alt="Fresh Food – PHP et MySQL" />
            <div className="card-body">
              <h3>Fresh Food</h3>
              <p>Site de vente de produits frais en ligne</p>
              <a href="#" className="btn-primary">Voir le site</a>
            </div>
            <div className="card-footer">Réalisé avec PHP et MySQL</div>
          </article>

          <article className="portfolio-card">
            <img src={restaurant} alt="Restaurant Akira – WordPress" />
            <div className="card-body">
              <h3>Restaurant Akira</h3>
              <p>Site vitrine pour restaurant japonais</p>
              <a href="#" className="btn-primary">Voir le site</a>
            </div>
            <div className="card-footer">Réalisé avec WordPress</div>
          </article>

          <article className="portfolio-card">
            <img src={bienEtre} alt="Espace bien-être – Laravel" />
            <div className="card-body">
              <h3>Espace bien-être</h3>
              <p>Site de présentation d’un centre bien-être</p>
              <a href="#" className="btn-primary">Voir le site</a>
            </div>
            <div className="card-footer">Réalisé avec Laravel</div>
          </article>

          <article className="portfolio-card">
            <img src={seo} alt="SEO" />
            <div className="card-body">
              <h3>SEO</h3>
              <p>Optimisation du référencement naturel</p>
              <a href="#" className="btn-primary">Voir le site</a>
            </div>
            <div className="card-footer">Outils SEO</div>
          </article>

          <article className="portfolio-card">
            <img src={api} alt="Création API – Symfony" />
            <div className="card-body">
              <h3>Création d’une API</h3>
              <p>API REST publique</p>
              <a href="#" className="btn-primary">Voir le site</a>
            </div>
            <div className="card-footer">PHP – Symfony</div>
          </article>

          <article className="portfolio-card">
            <img src={maquette} alt="Maquette site web – Figma" />
            <div className="card-body">
              <h3>Maquette de site web</h3>
              <p>Prototype graphique</p>
              <a href="#" className="btn-primary">Voir le site</a>
            </div>
            <div className="card-footer">Figma</div>
          </article>

        </div>
      </section>
    </main>
  );
}

export default Portfolio;