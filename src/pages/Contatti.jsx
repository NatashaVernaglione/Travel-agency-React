import { useState } from "react";
import { Link } from "react-router-dom";
import CampoTesto from "../components/CampoTesto.jsx";

const info = [
  { titolo: "Indirizzo", testo: "Piazza Sant'Oronzo, 73100 Lecce (LE)" },
  { titolo: "Telefono", testo: "080 123 4567" },
  { titolo: "Email", testo: "info@altroveviaggi.it" },
  { titolo: "Orari", testo: "Lun–Ven 9:00–19:00 · Sab 9:00–13:00" },
];

export default function Contatti() {
/* ===== BOTTONE "INVIA MESSAGGIO" ===== */
  const [consenso, setConsenso] = useState(false);

  const cambiaConsenso = (e) => {
    setConsenso(e.target.checked);
  };

  const stileBottone = consenso
    ? { backgroundColor: "var(--magenta)", opacity: 1, cursor: "pointer" }
    : { backgroundColor: "var(--grigio)", opacity: 0.2, cursor: "not-allowed" };

  return (
    <main>
      <div className="destinazioni">
        <h2>Contatti</h2>
        <p className="sottotitolo">
          Passa in agenzia, chiamaci o scrivici: rispondiamo entro un giorno lavorativo.
        </p>

        <div className="contatti-layout">
          {/* colonna stretta: le informazioni */}
          <div className="contatti-info">
            {info.map((i) => (
              <section className="card" key={i.titolo}>
                <div className="card-body">
                  <h3 className="card-title">{i.titolo}</h3>
                  <p className="card-text">{i.testo}</p>
                </div>
              </section>
            ))}
          </div>

          {/* colonna larga: la mappa */}
          <section className="card contatti-mappa">
            <div className="card-body">
              <h3 className="card-title">Dove siamo</h3>
            </div>
            <iframe
              title="Mappa: Piazza Sant'Oronzo, Lecce"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.0321587297035!2d18.169650976603187!3d40.353204171450095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13442ee150512531%3A0xa5ac1b6edd59c09e!2sPiazza%20Sant'Oronzo%2C%2073100%20Lecce%20LE!5e1!3m2!1sit!2sit!4v1795513342462!5m2!1sit!2sit"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </section>
        </div>
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
          <label>
            <input
              type="checkbox"
              required
              id="consenso"
              checked={consenso}
              onChange={cambiaConsenso}
            />{" "}
            Acconsento al trattamento dei dati personali.
          </label>
          <button
            type="submit"
            className="button"
            id="invia"
            disabled={!consenso}
            style={stileBottone}
          >
            Invia messaggio
          </button>
        </form>
      </div>
    </main>
  );
}