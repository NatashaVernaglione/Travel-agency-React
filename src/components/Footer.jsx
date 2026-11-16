import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div>
        <h3>Altrove Viaggi</h3>
        <p>Ritiri, tour attivi e soggiorni esclusivi, tutto in un unico posto.</p>
      </div>
      <div>
        <h3>Pagine</h3>
        <ul>
          <li><Link to="/destinazioni">Destinazioni</Link></li>
          <li><Link to="/offerte">Offerte</Link></li>
          <li><Link to="/contatti">Contatti</Link></li>
          <li><Link to="/preventivo">Preventivo</Link></li>
        </ul>
      </div>
      <div>
        <h3>Seguici</h3>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">TikTok</a></li>
        </ul>
      </div>
      <p className="copyright">© 2026 Altrove Viaggi · Tutti i diritti riservati</p>
    </footer>
  );
}
