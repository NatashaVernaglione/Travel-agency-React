import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="barra-logo">
        <Link to="/">
          <img src="/img/logo-altrove-bianco.svg" alt="Altrove Viaggi" className="logo" />
        </Link>
      </div>
      <div className="onlymobile">
        <button className="btn-solid theme-primary button" type="button" data-bs-toggle="menu" aria-expanded="false">
          altro
        </button>
        <div className="menu">
          <Link className="menu-item" to="/destinazioni">Destinazioni</Link>
          <Link className="menu-item" to="/offerte">Offerte</Link>
          <Link className="menu-item" to="/contatti">Contatti</Link>
          <Link className="menu-item" to="/preventivo">Preventivo</Link>
        </div>
      </div>
      <nav className="menu-principale">
        <ul>
          <li><Link to="/destinazioni">Destinazioni</Link></li>
          <li><Link to="/offerte">Offerte</Link></li>
          <li><Link to="/contatti">Contatti</Link></li>
        </ul>
      </nav>
      <Link to="/preventivo" className="preventivo">Preventivo</Link>
    </div>
  );
}
