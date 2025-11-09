import { MapPin, Phone, Clock, Quote } from "lucide-react";

const locations = [
  {
    city: "Napoli",
    address: "Via Roma 123, 80100 Napoli",
    phone: "+39 081 123 4567",
    hours: "Lun–Ven 9:00–19:00, Sab 9:00–13:00",
    gmaps: "https://maps.google.com/?q=Via+Roma+123+Napoli",
  },
  {
    city: "Salerno",
    address: "Corso Garibaldi 56, 84100 Salerno",
    phone: "+39 089 765 4321",
    hours: "Lun–Ven 9:00–19:00",
    gmaps: "https://maps.google.com/?q=Corso+Garibaldi+56+Salerno",
  },
  {
    city: "Avellino",
    address: "Piazza Libertà 9, 83100 Avellino",
    phone: "+39 0825 123 987",
    hours: "Lun–Ven 9:00–18:30",
    gmaps: "https://maps.google.com/?q=Piazza+Libert%C3%A0+9+Avellino",
  },
];

const reviews = [
  {
    name: "Maria R.",
    text: "Con i plantari su misura ho ricominciato a camminare senza dolore. Personale preparato e gentile.",
  },
  {
    name: "Luigi P.",
    text: "Mi hanno seguito dalla prima visita alla consegna del busto. Professionalità e attenzione umana.",
  },
  {
    name: "Giulia T.",
    text: "Consulenza chiara e soluzione veloce per il tutore. Consigliatissimi.",
  },
];

export default function LocationsAndReviews() {
  return (
    <section id="sedi" className="py-16 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Dove trovarci</h2>
          <p className="mt-3 text-slate-600">Scegli la sede più comoda tra Napoli, Salerno e Avellino.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <div key={l.city} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <MapPin className="text-sky-700" /> {l.city}
              </div>
              <p className="mt-2 text-sm text-slate-600">{l.address}</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-slate-700"><Phone size={16}/> {l.phone}</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-slate-700"><Clock size={16}/> {l.hours}</p>
              <a href={l.gmaps} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-sky-700 hover:text-sky-800">Apri in Google Maps →</a>
            </div>
          ))}
        </div>

        <div id="recensioni" className="mt-16">
          <h3 className="text-2xl font-semibold text-slate-900">Cosa dicono i nostri clienti</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <Quote className="text-sky-700" />
                <blockquote className="mt-3 text-slate-700 text-sm">{r.text}</blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-slate-900">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
