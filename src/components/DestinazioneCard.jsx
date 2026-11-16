import { Link } from "react-router-dom";

// Card riutilizzabile: mostra una foto se c'è "img", altrimenti l'emoji
export default function DestinazioneCard({ titolo, descrizione, prezzo, img, emoji, alt }) {
  return (
    <section className="card">
      {img ? (
        <img src={img} className="card-img-top" alt={alt} />
      ) : (
        <div className="card-img-top" role="img" aria-label={alt}>{emoji}</div>
      )}
      <div className="card-body">
        <h3 className="card-title">{titolo}</h3>
        <p className="card-text">{descrizione}</p>
        <div className="card-fondo">
          <span className="prezzo">da <strong>{prezzo}</strong></span>
          <Link to="/preventivo" className="button">Scopri</Link>
        </div>
      </div>
    </section>
  );
}
