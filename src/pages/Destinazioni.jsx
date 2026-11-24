import { useState } from "react";
import DestinazioneCard from "../components/DestinazioneCard.jsx";
import { ritiri, tour, soggiorni } from "../data/destinazioni.js";

// Sezione riutilizzabile: titolo + sottotitolo + griglia di card
function Sezione({ id, titolo, sottotitolo, mete }) {
  return (
    <section id={id}>
      <h2>{titolo}</h2>
      <p className="sottotitolo">{sottotitolo}</p>
      <div className="griglia-destinazioni">
        {mete.map((m) => (
          <DestinazioneCard key={m.id} {...m} />
        ))}
      </div>
    </section>
  );
}

const sezioni = [
  {
    id: "ritiri",
    chip: "Ritiri",
    titolo: "Ritiri",
    sottotitolo: "Yoga, meditazione e benessere in luoghi tranquilli",
    mete: ritiri,
  },
  {
    id: "tour",
    chip: "Tour attivi",
    titolo: "Tour attivi",
    sottotitolo: "Trekking, kayak e bici con guide locali",
    mete: tour,
  },
  {
    id: "soggiorni",
    chip: "Soggiorni",
    titolo: "Soggiorni",
    sottotitolo: "Strutture esclusive scelte una per una",
    mete: soggiorni,
  },
];

// "Tutte" + un filtro per ogni sezione
const filtri = [{ id: "tutte", chip: "Tutte" }, ...sezioni];

export default function Destinazioni() {
  const [filtroAttivo, setFiltroAttivo] = useState("tutte");

  const sezioniVisibili =
    filtroAttivo === "tutte"
      ? sezioni
      : sezioni.filter((s) => s.id === filtroAttivo);

  return (
    <main>
      <div className="destinazioni">
        <h2>Destinazioni</h2>
        <p className="sottotitolo">
          Scegli il tipo di viaggio e trova la meta giusta per te.
        </p>

        <nav className="filtri" aria-label="Tipo di viaggio">
          {filtri.map((f) => (
            <span
              key={f.id}
              className={
                "chip theme-accent" + (filtroAttivo === f.id ? " attivo" : "")
              }
            >
              <button
                type="button"
                aria-pressed={filtroAttivo === f.id}
                onClick={() => setFiltroAttivo(f.id)}
              >
                {f.chip}
              </button>
            </span>
          ))}
        </nav>

        {sezioniVisibili.map((s) => (
          <Sezione
            key={s.id}
            id={s.id}
            titolo={s.titolo}
            sottotitolo={s.sottotitolo}
            mete={s.mete}
          />
        ))}
      </div>
    </main>
  );
}