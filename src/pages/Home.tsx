import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-page-wrapper">
      <main className="container">
        <div className="hero">
          <h1 className="home-title">Marius Schmieder</h1>
          <p className="home-text">
            Projekte der Oberstufe Klasse 11 und 12
          </p>
        </div>
        <div className="home-links">
          <div className="home-link-container">
            <div className="home-link-subtext">Projekte der Klassenstufe 11</div>
            <div className="home-link-content">
              <a href="/projekte/stufe-1" className="home-link">zur Klassenstufe 11</a>
              <div className="home-link-info">Übersicht</div>
              <div className="home-link-heading">• Filius</div>
              <div className="home-link-heading">• Python</div>
            </div>
          </div>
          <div className="home-link-container">
            <div className="home-link-subtext">Projekte der Klassenstufe 12</div>
            <div className="home-link-content">
              <a href="/projekte/stufe-2" className="home-link">zur Klassenstufe 12</a>
              <div className="home-link-info">Übersicht</div>
              <div className="home-link-heading">• ....</div>
              <div className="home-link-text"></div>
            </div>
            <div className="home-link-content">
              <div className="home-link-text"></div>
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <span className="footer-text">
          © {new Date().getFullYear()} Marius Schmieder
        </span>
        <nav className="footer-links">
          <a href="https://github.com/Its-Maeae/webseite_schule.git" className="footer-link" rel="noopener noreferrer" target="_blank">Quellcode der Webseite</a>
          <a href="https://m-schmieder.de" className="footer-link" rel="noopener noreferrer" target="_blank">
            Homepage
          </a>
        </nav>
      </footer>
    </div>
  );
}