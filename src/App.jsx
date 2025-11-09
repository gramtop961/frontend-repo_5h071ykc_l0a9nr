import HeaderHero from "./components/HeaderHero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import LocationsAndReviews from "./components/LocationsAndReviews";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="font-inter antialiased text-slate-900">
      <HeaderHero />
      <main>
        {/* Chi siamo / Mission */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Chi siamo</h2>
                <p className="mt-4 text-slate-700">
                  Ortopedia CM è un punto di riferimento per l’ortopedia su misura nel territorio campano. Uniamo esperienza, competenza e tecnologia per offrire consulenze ortopediche personalizzate e dispositivi progettati sulle tue esigenze.
                </p>
                <p className="mt-3 text-slate-700">
                  Siamo presenti con più sedi per garantirti comodità e vicinanza. Il nostro approccio è umano: ascolto, trasparenza e assistenza continua anche dopo l’acquisto.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold">La nostra mission</h3>
                <p className="mt-2 text-slate-700">
                  Migliorare la qualità di vita delle persone con soluzioni ortopediche su misura, accompagnandole in ogni fase del percorso.
                </p>
                <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2 text-sm">
                  <li>Ascolto e valutazione accurata</li>
                  <li>Soluzioni personalizzate, non standard</li>
                  <li>Assistenza post-vendita dedicata</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <Services />
        <HowItWorks />
        <LocationsAndReviews />
        <ContactForm />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Ortopedia CM — Tutti i diritti riservati</p>
            <a href="#prenota" className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-sky-700">
              Prenota la tua consulenza gratuita
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
