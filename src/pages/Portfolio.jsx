import React from "react";
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
      {/* ===== BANNER IMAGE ===== */}
      <section
        className="portfolio-banner"
        style={{ backgroundImage: `url(${banner})` }}
      ></section>

      {/* ===== TITRE & TEXTE ===== */}
      <section className="portfolio-title">
        <h1><b>Portfolio</b></h1>
        <p>Voici quelques-unes de mes réalisations</p>
        <span className="blue-line"></span>
      </section>

      {/* ===== CARDS ===== */}
      <section className="portfolio-section">
        <div className="portfolio-container">

          {/* CARD 1 */}
          <article className="portfolio-card">
            <img src={freshFood} alt="Fresh Food" />
            <div className="card-body">
              <h3>Fresh Food</h3>
              <p>Site de vente de produits frais en ligne</p>
              <button className="btn-primary">Voir le site</button>
            </div>
            <div className="card-footer">
              Site réalisé avec PHP et MySQL
            </div>
          </article>

          {/* CARD 2 */}
          <article className="portfolio-card">
            <img src={restaurant} alt="Restaurant Akira" />
            <div className="card-body">
              <h3>Restaurant Akira</h3>
              <p>Site de vente de produits frais en ligne</p>
              <button className="btn-primary">Voir le site</button>
            </div>
            <div className="card-footer">
              Site réalisé avec WordPress
            </div>
          </article>

          {/* CARD 3 */}
          <article className="portfolio-card">
            <img src={bienEtre} alt="Espace bien-être" />
            <div className="card-body">
              <h3>Espace bien-être</h3>
              <p>Site de vente de produits frais en ligne</p>
              <button className="btn-primary">Voir le site</button>
            </div>
            <div className="card-footer">
              Site réalisé avec Laravel
            </div>
          </article>

          {/* CARD 4 */}
          <article className="portfolio-card">
            <img src={seo} alt="SEO" />
            <div className="card-body">
              <h3>SEO</h3>
              <p>Amélioration du référencement d’un site e-commerce</p>
              <button className="btn-primary">Voir le site</button>
            </div>
            <div className="card-footer">
              Utilisation des outils SEO
            </div>
          </article>

          {/* CARD 5 */}
          <article className="portfolio-card">
            <img src={api} alt="Création API" />
            <div className="card-body">
              <h3>Création d’une API</h3>
              <p>Création d’une API RESTFUL publique</p>
              <button className="btn-primary">Voir le site</button>
            </div>
            <div className="card-footer">
              PHP – Symfony
            </div>
          </article>

          {/* CARD 6 */}
          <article className="portfolio-card">
            <img src={maquette} alt="Maquette site web" />
            <div className="card-body">
              <h3>Maquette d’un site web</h3>
              <p>Création du prototype d’un site</p>
              <button className="btn-primary">Voir le site</button>
            </div>
            <div className="card-footer">
              Réalisé avec Figma
            </div>
          </article>

        </div>
      </section>

    </main>
  );
}

export default Portfolio;