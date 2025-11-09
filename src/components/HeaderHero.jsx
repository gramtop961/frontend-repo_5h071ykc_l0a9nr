import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect } from "react";

export default function HeaderHero() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <header className="relative bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-sky-600 text-white grid place-items-center font-bold">CM</div>
            <div>
              <p className="text-lg font-semibold text-slate-900">Ortopedia CM</p>
              <p className="text-xs text-slate-500">Consulenza ortopedica personalizzata</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#servizi" className="text-slate-700 hover:text-sky-700 text-sm">Servizi</a>
            <a href="#perche" className="text-slate-700 hover:text-sky-700 text-sm">Perché noi</a>
            <a href="#sedi" className="text-slate-700 hover:text-sky-700 text-sm">Sedi</a>
            <a href="#recensioni" className="text-slate-700 hover:text-sky-700 text-sm">Recensioni</a>
            <a href="#prenota" className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500">
              Prenota la tua consulenza gratuita
              <ArrowRight size={16} />
            </a>
          </div>
          <a href="#prenota" className="md:hidden inline-flex items-center gap-2 rounded-md bg-sky-600 px-3 py-2 text-white text-sm font-medium shadow hover:bg-sky-700">
            Prenota
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-70" aria-hidden>
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                Ortopedia su misura per il tuo benessere quotidiano
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                "Consulenza personalizzata per offrire soluzioni ortopediche su misura". Plantari personalizzati, tutori ortopedici, ausili per la mobilità e supporto completo in ogni fase.
              </p>
              <ul className="mt-6 space-y-2 text-slate-700">
                <li className="flex items-start gap-2"><CheckCircle className="text-emerald-600 mt-0.5" size={18}/> Analisi gratuita del bisogno</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-emerald-600 mt-0.5" size={18}/> Soluzioni ortopediche su misura</li>
                <li className="flex items-start gap-2"><CheckCircle className="text-emerald-600 mt-0.5" size={18}/> Assistenza continua e post-vendita</li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a href="#prenota" className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-600 px-5 py-3 text-white font-semibold shadow hover:bg-sky-700">
                  Prenota la tua consulenza gratuita
                  <ArrowRight size={18} />
                </a>
                <a href="#sedi" className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-slate-700 font-semibold hover:border-slate-400">
                  Trova la sede più vicina a te
                </a>
              </div>
              <p className="mt-3 text-sm text-slate-500">Il benessere parte dai tuoi passi.</p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-xl bg-white/80 p-4 shadow-lg ring-1 ring-slate-200 backdrop-blur">
                <div className="h-full w-full rounded-lg bg-gradient-to-br from-sky-200 via-sky-100 to-white grid place-items-center">
                  <div className="text-center">
                    <Phone className="mx-auto text-sky-700" size={40} />
                    <p className="mt-3 font-semibold text-slate-800">Parla con un esperto</p>
                    <p className="text-slate-600">Consigli professionali e umani, senza impegno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
