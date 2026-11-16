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

const filtri = [
  { href: "#", testo: "Tutte", attivo: true },
  { href: "#ritiri", testo: "Ritiri" },
  { href: "#tour", testo: "Tour attivi" },
  { href: "#soggiorni", testo: "Soggiorni" },
];

export default function Destinazioni() {
  
  return (
    <main>
      <div className="destinazioni">
        <h2>Destinazioni</h2>
        <p className="sottotitolo">Scegli il tipo di viaggio e trova la meta giusta per te.</p>
        <nav className="filtri" aria-label="Tipo di viaggio">
          {filtri.map((f) => (
            <span className="chip theme-accent" key={f.testo}>
              <a href={f.href} className={f.attivo ? "attivo" : undefined}>{f.testo}</a>
            </span>
          ))}
        </nav>
        <Sezione id="ritiri" titolo="Ritiri" sottotitolo="Yoga, meditazione e benessere in luoghi tranquilli" mete={ritiri} />
        <Sezione id="tour" titolo="Tour attivi" sottotitolo="Trekking, kayak e bici con guide locali" mete={tour} />
        <Sezione id="soggiorni" titolo="Soggiorni" sottotitolo="Strutture esclusive scelte una per una" mete={soggiorni} />
      </div>
    </main>
  );
}
