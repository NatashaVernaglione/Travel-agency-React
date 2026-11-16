import { Link } from "react-router-dom";
import CampoTesto from "../components/CampoTesto.jsx";

const info = [
  { titolo: "Indirizzo", testo: "Via Roma 12, 70010 Casamassima (BA)" },
  { titolo: "Telefono", testo: "080 123 4567" },
  { titolo: "Email", testo: "info@altroveviaggi.it" },
  { titolo: "Orari", testo: "Lun–Ven 9:00–19:00 · Sab 9:00–13:00" },
];

export default function Contatti() {
  return (
    <main>
      <div className="destinazioni">
        <h2>Contatti</h2>
        <p className="sottotitolo">Passa in agenzia, chiamaci o scrivici: rispondiamo entro un giorno lavorativo.</p>
        <div className="griglia-destinazioni">
          {info.map((i) => (
            <section className="card" key={i.titolo}>
              <div className="card-body">
                <h3 className="card-title">{i.titolo}</h3>
                <p className="card-text">{i.testo}</p>
              </div>
            </section>
          ))}
        </div>
        <section className="card">
          <div className="card-body">
            <h3 className="card-title">Dove siamo</h3>
            <p className="card-text">Qui va la mappa (iframe di Google Maps)</p>
          </div>
        </section>
      </div>
      <div>
        <h2>Scrivici</h2>
        <p className="sottotitolo">
          Per domande generali. Per un viaggio usa la pagina <Link to="/preventivo">Preventivo</Link>.
        </p>
        <form className="light-form" onSubmit={(e) => e.preventDefault()}>
          <CampoTesto id="nome" label="Nome" type="text" name="nome" required />
          <CampoTesto id="email" label="Email" type="email" name="email" required />
          <CampoTesto id="oggetto" label="Oggetto" type="text" name="oggetto" />
          <CampoTesto id="messaggio" label="Messaggio" as="textarea" name="messaggio" rows="4" required />
          <label><input type="checkbox" required /> Acconsento al trattamento dei dati personali.</label>
          <button type="submit" className="button">Invia messaggio</button>
        </form>
      </div>
    </main>
  );
}
