function Services() {
  return (
    <main className="container my-5">
      <h1>Mes services</h1>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <article className="card h-100">
            <div className="card-body">
              <h2 className="card-title h5">Développement Front-End</h2>
              <p className="card-text">
                Création d’interfaces web modernes avec HTML, CSS, JavaScript et
                React.
              </p>
            </div>
          </article>
        </div>

        <div className="col-md-4 mb-4">
          <article className="card h-100">
            <div className="card-body">
              <h2 className="card-title h5">Responsive Design</h2>
              <p className="card-text">
                Adaptation des interfaces pour mobile, tablette et ordinateur.
              </p>
            </div>
          </article>
        </div>

        <div className="col-md-4 mb-4">
          <article className="card h-100">
            <div className="card-body">
              <h2 className="card-title h5">Intégration React</h2>
              <p className="card-text">
                Développement d’applications React avec une navigation fluide
                et une structure maintenable.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default Services;