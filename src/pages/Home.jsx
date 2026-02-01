import { useState } from "react";
import "../styles/Home.css";
import heroBg from "../assets/images/hero-bg.jpg";
import aboutImg from "../assets/images/john-doe-about.jpg";
import GithubModal from "../components/GithubModal";

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      {/* HERO */}
      <section
        className="hero">
        <div className="hero-content">
          <h1><strong>Bonjour, je suis John Doe</strong></h1>
          <h2><strong>Développeur web full stack</strong></h2>
          <button
            className="btn-primary"
            onClick={() => setShowModal(true)}
            aria-label="Ouvrir le profil GitHub"
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* A PROPOS + COMPETENCES */}
      <section className="about-skills">
        <div className="about-skills-card">
          <div className="about">
            <h3><strong>A propos</strong></h3>
            <span className="blue-line"></span>
            <img src={aboutImg} alt="Portrait de John Doe" />
            <p>
              Passionné par l'informatique et les nouvelles technologies,
              j’ai suivi une formation d’intégrateur développeur web.
            </p>
            <p>
              Aujourd’hui, je maîtrise les différentes étapes techniques
              de la création d’un site ou d’une application web.
            </p>
          </div>

          <div className="skills">
            <h3><strong>Mes compétences</strong></h3>
            <span className="blue-line"></span>

            <div className="skill">
              <span>HTML5 90%</span>
              <div className="bar html"></div>
            </div>

            <div className="skill">
              <span>CSS3 80%</span>
              <div className="bar css"></div>
            </div>

            <div className="skill">
              <span>JavaScript 70%</span>
              <div className="bar js"></div>
            </div>

            <div className="skill">
              <span>PHP 60%</span>
              <div className="bar php"></div>
            </div>

            <div className="skill">
              <span>React 50%</span>
              <div className="bar react"></div>
            </div>
          </div>
        </div>
      </section>

      <GithubModal show={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}

export default Home;