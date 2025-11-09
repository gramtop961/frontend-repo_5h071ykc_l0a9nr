import { Search, ClipboardCheck, Wrench } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Analisi gratuita del bisogno",
      desc: "Colloquio iniziale e valutazione dell’appoggio e della postura. Senza impegno.",
    },
    {
      icon: ClipboardCheck,
      title: "Proposta su misura",
      desc: "Presentazione della soluzione più adatta: plantari, tutori, busti, ausili e altro.",
    },
    {
      icon: Wrench,
      title: "Realizzazione e assistenza",
      desc: "Produzione, consegna e affiancamento continuo per assicurare risultati e comfort.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Come funziona la consulenza personalizzata</h2>
          <p className="mt-3 text-slate-600">Un percorso semplice, pensato per darti risposte chiare e soluzioni efficaci.</p>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <s.icon className="text-sky-700" />
                <p className="text-sm font-semibold text-sky-700">Step {i + 1}</p>
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
