import "../styles/Services.css";
import banner from "../assets/images/banner.jpg";

function Services() {
  return (
    <main>
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${banner})` }}
        aria-hidden="true"
      ></section>

      <section className="services-header">
        <h1>Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
        <span className="blue-line"></span>
      </section>

      <section className="services-list container">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <article className="card service-card text-center">
              <div className="card-body">
                <i className="fas fa-paint-brush service-icon" aria-hidden="true"></i>
                <h2 className="h5">UX Design</h2>
                <p>
                  L'UX Design consiste à concevoir des produits en plaçant
                  l’utilisateur au centre des préoccupations.
                </p>
              </div>
            </article>
          </div>

          <div className="col-md-4 mb-4">
            <article className="card service-card text-center">
              <div className="card-body">
                <i className="fas fa-code service-icon" aria-hidden="true"></i>
                <h2 className="h5">Développement web</h2>
                <p>
                  Création de sites et applications avec HTML, CSS,
                  JavaScript, PHP, React ou Bootstrap.
                </p>
              </div>
            </article>
          </div>

          <div className="col-md-4 mb-4">
            <article className="card service-card text-center">
              <div className="card-body">
                <i className="fas fa-search service-icon" aria-hidden="true"></i>
                <h2 className="h5">Référencement</h2>
                <p>
                  Optimisation SEO pour améliorer la visibilité
                  sur les moteurs de recherche.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;