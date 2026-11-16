import { Link } from "react-router-dom";
import DestinazioneCard from "../components/DestinazioneCard.jsx";
import { inEvidenza } from "../data/destinazioni.js";

const passaggi = [
  { titolo: "Scegli la meta", testo: "Sfoglia ritiri, tour e soggiorni divisi per tipo di viaggio." },
  { titolo: "Personalizza", testo: "Date, voli, attività: lo costruiamo insieme a te." },
  { titolo: "Parti", testo: "Ricevi tutti i documenti e un contatto disponibile in viaggio." },
];

const recensioni = [
  { testo: "Organizzazione perfetta, non abbiamo dovuto pensare a niente. Le Lofoten resteranno nel cuore.", autore: "Giulia e Marco, Norvegia" },
  { testo: "“Il ritiro a Bali era esattamente quello di cui avevo bisogno. Tornerò sicuramente.”", autore: "Francesca, Indonesia" },
];

export default function Home() {
  // i form sono solo dimostrativi: blocco l'invio che ricaricherebbe la pagina
  const bloccaInvio = (e) => e.preventDefault();

  return (
    <>
      <main>
        <div className="destinazioni">
          <h2>Destinazioni in evidenza</h2>
          <p className="sottotitolo">Le mete più richieste di questa stagione</p>
          <div className="griglia-destinazioni">
            {inEvidenza.map((d) => (
              <DestinazioneCard key={d.id} {...d} />
            ))}
          </div>
        </div>
        <div className="passaggi">
          <h2>Come funziona</h2>
          <p className="sottotitolo">Dalla scelta alla partenza in tre passaggi</p>
          <div className="row g-4 steps">
            {passaggi.map((p, i) => (
              <div className="col-4" key={p.titolo}>
                <div className="passo h-100 p-4 rounded-4">
                  <span className="numero rounded-circle d-inline-flex align-items-center justify-content-center fw-bold mb-3">{i + 1}</span>
                  <h3 className="h6 fw-bold mb-1">{p.titolo}</h3>
                  <p className="mb-0 text-secondary">{p.testo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="recensioni-section">
          <h2>Chi è partito con noi</h2>
          <p className="sottotitolo">Qualche parola dai nostri viaggiatori</p>
          <div className="recensioni">
            {recensioni.map((r) => (
              <blockquote key={r.autore}>
                <p>{r.testo}</p>
                <cite>{r.autore}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </main>

      <aside>
        <form onSubmit={bloccaInvio}>
          <h2>Preventivo rapido</h2>
          <div className="form-field">
            <label htmlFor="fieldSelect" className="form-label">Destinazione</label>
            <select className="form-control" id="fieldSelect" defaultValue="1">
              <option value="1">Bali</option>
              <option value="2">Lofoten</option>
              <option value="3">Costa Rica</option>
              <option value="4">Altro</option>
            </select>
          </div>
          <label htmlFor="datepickerIconStart" className="form-label">Giorno di partenza</label>
          <div className="form-control form-adorn">
            <input type="text" className="form-ghost" id="datepickerIconStart" data-bs-toggle="datepicker" autoComplete="off" placeholder="gg/mm/aaaa" />
            <div className="form-adorn-icon">
              <svg className="bi" width="16" height="16"><use href="#calendar-week" /></svg>
            </div>
          </div>
          <label htmlFor="persone" className="form-label">Persone</label>
          <div className="form-control form-adorn">
            <input type="number" className="form-ghost" id="persone" name="persone" min="1" step="1" defaultValue="2" />
          </div>
          {/* nell'HTML era un <a> dentro un <button>: in React uso un semplice Link */}
          <Link to="/preventivo" className="button">preventivo</Link>
        </form>

        <div className="offerta">
          <span className="chip">Offerta del mese</span>
          <h2>Marocco, deserto e kasbah</h2>
          <p><del>990€</del> <strong>790€</strong></p>
          <p>6 giorni, partenze fino al 30 novembre.</p>
          <Link to="/offerte" className="button">vedi tutte le offerte</Link>
        </div>

        <form className="light-form" onSubmit={bloccaInvio}>
          <h2>Newsletter</h2>
          <p>Una mail al mese con le nuove mete e le offerte.</p>
          <label className="form-control form-adorn form-adorn-end">
            <div className="form-adorn-icon" aria-hidden="true">
              <svg className="bi" width="16" height="16"><use href="#envelope" /></svg>
            </div>
            <input type="email" className="form-ghost" placeholder="you@example.com" />
          </label>
          <button className="button">Iscriviti</button>
        </form>
      </aside>
    </>
  );
}
