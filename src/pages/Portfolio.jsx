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
      <section
        className="portfolio-banner"aria-hidden="true"
      ></section>

      <section className="portfolio-title">
        <h1>Portfolio</h1>
        <p>Voici quelques-unes de mes réalisations</p>
        <span className="blue-line"></span>
      </section>

      <h2 id="portfolio-projects" className="sr-only">
        Projets web réalisés
      </h2>
      <section className="portfolio-section" aria-labelledby="portfolio-projects">
        <div className="portfolio-container">
          {[ 
            { img: freshFood, title: "Fresh Food", tech: "PHP et MySQL" },
            { img: restaurant, title: "Restaurant Akira", tech: "WordPress" },
            { img: bienEtre, title: "Espace bien-être", tech: "Laravel" },
            { img: seo, title: "SEO", tech: "Outils SEO" },
            { img: api, title: "Création d’une API", tech: "Symfony" },
            { img: maquette, title: "Maquette site web", tech: "Figma" },
          ].map((item, index) => (
            <article className="portfolio-card" key={index}>
              <img
                src={item.img}
                alt={`Projet ${item.title} – ${item.tech}`}/>
              <div className="card-body">
                <h3>{item.title}</h3>
                <a href="#" className="btn-primary" aria-label={`Voir le projet ${item.title}`}>
                  Voir le site
                </a>
              </div>
              <div className="card-footer">Réalisé avec {item.tech}</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;