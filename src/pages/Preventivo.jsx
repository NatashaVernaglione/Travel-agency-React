import { useEffect, useRef, useState } from "react";
import CampoTesto from "../components/CampoTesto.jsx";

export default function Preventivo() {
  /* ===== ALERT "TORNA INDIETRO" ===== */
  useEffect(() => {
    const logo = document.querySelector(".barra-logo");
    if (!logo) return;

    const avviso = () => {
      // \n va a capo, \" inserisce le virgolette, \t fa il tab
      alert("Stai annullando la richiesta preventivo.\nI dati inseriti andranno persi.");
      console.log("Cliccato il bottone:\n\t\"Torna indietro\"");
    };
    logo.addEventListener("click", avviso);
    return () => logo.removeEventListener("click", avviso); // pulizia quando esco dalla pagina
  }, []);

  /* ===== BOTTONE "RICHIEDI PREVENTIVO" ===== */
  const [consenso, setConsenso] = useState(false);

  // useRef: il contatore cambia ma non serve ridisegnare la pagina
  const numeroCambi = useRef(0);

  const cambiaConsenso = (e) => {
    const spuntato = e.target.checked;
    setConsenso(spuntato);
    console.log("Consenso spuntato: " + spuntato);
    numeroCambi.current += 1;
    console.log("Hai cambiato il consenso " + numeroCambi.current + " volte");
  };

  const stileBottone = consenso
    ? { backgroundColor: "var(--acqua)", opacity: 1, cursor: "pointer" }
    : { backgroundColor: "var(--grigio)", opacity: 0.2, cursor: "not-allowed" };

  const [partenza, setPartenza] = useState("");
const oggi = new Date().toLocaleDateString("en-CA"); // formato aaaa-mm-gg
  return (
    <main>
      <h2>Richiedi un preventivo</h2>
      <p className="sottotitolo">Raccontaci il viaggio che hai in mente: ti mandiamo una proposta su misura entro 48 ore.</p>
      <form className="modulo" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend>Il viaggio</legend>
          <div className="form-field">
            <label htmlFor="destinazione" className="form-label">Destinazione</label>
            <select className="form-control" id="destinazione" defaultValue="1">
              <option value="1">Bali, Indonesia</option>
              <option value="2">Lofoten, Norvegia</option>
              <option value="3">Costa Rica</option>
              <option value="4">Marocco</option>
              <option value="5">Non ho ancora deciso</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label">Tipo di viaggio</label>
            <div className="scelte">
              <label><input type="radio" name="tipo" defaultChecked /> Ritiro</label>
              <label><input type="radio" name="tipo" /> Tour attivo</label>
              <label><input type="radio" name="tipo" /> Soggiorno</label>
            </div>
          </div>
          <CampoTesto
            id="partenza"
            label="Partenza"
            type="date"
            name="partenza"
            min={oggi}
            value={partenza}
            onChange={(e) => setPartenza(e.target.value)}
          />
          <CampoTesto
            id="ritorno"
            label="Ritorno"
            type="date"
            name="ritorno"
            min={partenza || oggi}
          />
          <CampoTesto id="adulti" label="Adulti" type="number" name="adulti" min="1" step="1" defaultValue="2" />
          <CampoTesto id="bambini" label="Bambini" type="number" name="bambini" min="0" step="1" defaultValue="0" />

          <div className="form-field">
            <label htmlFor="budget" className="form-label">Budget a persona</label>
            <select id="budget" name="budget" className="form-control">
              <option>Fino a 1.000€</option>
              <option>1.000€ – 2.000€</option>
              <option>Oltre 2.000€</option>
            </select>
          </div>

          <div className="form-field">
            <label className="form-label">Servizi</label>
            <div className="scelte">
              <label><input type="checkbox" defaultChecked /> Volo</label>
              <label><input type="checkbox" /> Assicurazione</label>
              <label><input type="checkbox" /> Transfer</label>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>I tuoi dati</legend>
          <div className="form-field">
            <CampoTesto id="p-nome" label="Nome e cognome" type="text" name="nome" required />
          </div>
          <div className="form-field">
            <CampoTesto id="p-email" label="Email" type="email" name="email" required />
          </div>
          <div className="form-field">
            <CampoTesto id="p-tel" label="Telefono" type="tel" name="telefono" />
          </div>
          <div className="form-field">
            <CampoTesto id="note" label="Note" as="textarea" name="note" placeholder="Esigenze particolari, attività che ti interessano…" />
          </div>
        </fieldset>

        <label className="consenso">
          <input type="checkbox" required id="consenso" checked={consenso} onChange={cambiaConsenso} />{" "}
          Acconsento al trattamento dei dati personali.
        </label>
        <button type="submit" className="button" id="invia" disabled={!consenso} style={stileBottone}>
          Richiedi preventivo
        </button>
      </form>
    </main>
  );
}
