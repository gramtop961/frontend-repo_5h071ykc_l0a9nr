import { Star, ShieldCheck, HeartHandshake, Award } from "lucide-react";

const perks = [
  {
    icon: Star,
    title: "Consulenza ortopedica personalizzata",
    desc: "Valutazione attenta del tuo bisogno con piani su misura. Niente soluzioni standard: ascolto, analisi e proposte concrete.",
  },
  {
    icon: ShieldCheck,
    title: "Esperienza e tecnologia",
    desc: "Team qualificato e strumenti moderni per la rilevazione dell’appoggio plantare e la progettazione dei dispositivi.",
  },
  {
    icon: HeartHandshake,
    title: "Assistenza completa",
    desc: "Dalla prima visita alla consegna, fino al post-vendita. Il nostro supporto è umano, presente e continuativo.",
  },
  {
    icon: Award,
    title: "Affidabilità certificata",
    desc: "Materiali di qualità, processi controllati e recensioni verificate: il tuo benessere è la nostra priorità.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="perche" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Perché sceglierci</h2>
          <p className="mt-3 text-slate-600">
            Ortopedia su misura, competenza e attenzione alla persona. Migliaia di clienti soddisfatti tra Napoli, Salerno e Avellino.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <p.icon className="text-sky-700" />
              <h3 className="mt-4 font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
