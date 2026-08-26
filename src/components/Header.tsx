import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo-container">
        <Link to="/"><img src={logo} alt="Logo" className="logo-header"/></Link>
        <div className="logo-text">Marius Schmieder</div>
      </div>

      <nav className="nav-links">
        <Link to="/">Startseite</Link>
        <Link to="/projekte/stufe-1">Klassenstufe 11</Link>
        <Link to="/projekte/stufe-2">Klassenstufe 12</Link>
      </nav>
    </header>
  );
}
