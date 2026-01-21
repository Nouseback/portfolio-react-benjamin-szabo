function Home() {
  return (
    <main>
      {/* Section présentation */}
      <section className="container my-5">
        
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>

       
      </section>

      {/* Section compétences */}
      <section className="container my-5">
        <h2>Compétences principales</h2>

        <ul>
          <li>HTML5 / CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Responsive Design</li>
          <li>Git & GitHub</li>
        </ul>
      </section>
    </main>
  );
}

export default Home;