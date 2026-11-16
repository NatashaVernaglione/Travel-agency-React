import { Link } from "react-router-dom";
import { altreOfferte } from "../data/destinazioni.js";

export default function Offerte() {
  return (
    <main className="pagina-offerte">
      <h2>Offerte</h2>
      <p className="sottotitolo">Prezzi scontati su partenze selezionate, fino a esaurimento posti.</p>
      
      <section>
        <article className="card offerta-mese">
          <div className="immagine-offerta">
            <img src="/img/Marocco,deserto.jpg" alt="Kasbah nel deserto del Marocco" />
            <span className="chip">Offerta del mese</span>
          </div>
          <div className="card-body">
            <h2 className="card-title">Marocco, deserto e kasbah</h2>
            <p className="card-text">6 giorni tra Marrakech, le gole del Todra e una notte in campo tendato nel Sahara.</p>
            <p className="prezzo"><del>990€</del> <strong>790€</strong> a persona</p>
            <p className="card-text">Partenze fino al 30 novembre</p>
            <Link to="/preventivo" className="button">Prenota</Link>
          </div>
        </article>
      </section>
      <section>
        <h2>Altre offerte</h2>
        <p className="sottotitolo">Posti limitati per ogni partenza</p>
        <div className="griglia-destinazioni">
          {altreOfferte.map((o) => (
            <article className="card" key={o.id}>
              <div className="immagine-offerta">
                {o.img ? (
                  <img src={o.img} className="card-img-top" alt={o.alt} />
                ) : (
                  <div className="card-img-top" role="img" aria-label={o.alt}>{o.emoji}</div>
                )}
                <span className="chip">{o.sconto}</span>
              </div>
              <div className="card-body">
                <h3 className="card-title">{o.titolo}</h3>
                <p className="card-text">{o.descrizione}</p>
                <div className="card-fondo">
                  <span className="prezzo"><del>{o.prezzoVecchio}</del> <strong>{o.prezzoNuovo}</strong></span>
                  <Link to="/preventivo" className="button">Scopri</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
