import { Footprints, Wheelchair, Dumbbell, Activity } from "lucide-react";

const services = [
  {
    icon: Footprints,
    title: "Plantari su misura",
    desc: "Realizzati dopo analisi dell’appoggio e valutazione posturale. Comfort e sostegno per camminare senza dolore.",
  },
  {
    icon: Activity,
    title: "Tutori ortopedici",
    desc: "Supporti personalizzati per ginocchio, caviglia, polso, spalla e schiena. Stabilità, protezione e recupero.",
  },
  {
    icon: Wheelchair,
    title: "Ausili per la mobilità",
    desc: "Carrozzine, deambulatori e scooter elettrici configurati sulle tue esigenze per muoverti in autonomia.",
  },
  {
    icon: Dumbbell,
    title: "Busti e soluzioni posturali",
    desc: "Dispositivi su misura per sostenere la colonna e migliorare l’allineamento, riducendo dolori e tensioni.",
  },
];

export default function Services() {
  return (
    <section id="servizi" className="py-16 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Soluzioni su misura</h2>
          <p className="mt-3 text-slate-600">
            Dai plantari personalizzati ai tutori ortopedici, fino a protesi e ausili per la mobilità. Scopri come possiamo aiutarti.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
              <s.icon className="text-sky-700" />
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 flex-1">{s.desc}</p>
              <div className="mt-4 flex gap-3">
                <a href="#prenota" className="text-sm font-semibold text-sky-700 hover:text-sky-800">Richiedi una consulenza →</a>
                <a href="#prenota" className="text-sm text-slate-600 hover:text-slate-800">Scopri di più</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
