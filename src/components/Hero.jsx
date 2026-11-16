import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header>
      <div className="slogan">
        <h1>altrove</h1>
        <p>
          Con un obiettivo preciso. Prenota ritiri, tour attivi e soggiorni in
          strutture esclusive, tutto in un unico posto.
        </p>
        <Link to="/destinazioni" className="button">Esplora</Link>
      </div>
    </header>
  );
}
