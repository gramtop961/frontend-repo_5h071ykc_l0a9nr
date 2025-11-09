import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ nome: "", email: "", telefono: "", sede: "Napoli", messaggio: "" });
  const [status, setStatus] = useState("idle");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Backend non richiesto: simuliamo invio
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <section id="prenota" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Prenota la tua consulenza gratuita</h2>
          <p className="mt-3 text-slate-600">Un esperto ti ricontatterà entro 24 ore.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nome e Cognome</label>
                <input required name="nome" value={form.nome} onChange={onChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Es. Mario Rossi" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required name="email" value={form.email} onChange={onChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="esempio@mail.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Telefono</label>
                <input required name="telefono" value={form.telefono} onChange={onChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Es. 333 1234567" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Sede preferita</label>
                <select name="sede" value={form.sede} onChange={onChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500">
                  <option>Napoli</option>
                  <option>Salerno</option>
                  <option>Avellino</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Messaggio</label>
                <textarea name="messaggio" value={form.messaggio} onChange={onChange} rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Raccontaci il tuo bisogno"></textarea>
              </div>
            </div>
            <button disabled={status==="loading"} className="mt-6 inline-flex items-center gap-2 rounded-md bg-sky-600 px-5 py-3 text-white font-semibold shadow hover:bg-sky-700 disabled:opacity-60">
              <Send size={18} /> {status==="loading" ? "Invio..." : "Invia richiesta"}
            </button>
            <p className="mt-2 text-xs text-slate-500">Compila il form o chiamaci: ti guideremo verso la soluzione più adatta.</p>
            {status==="success" && <p className="mt-3 text-emerald-700 text-sm">Richiesta inviata con successo! Ti contatteremo entro 24 ore.</p>}
            {status==="error" && <p className="mt-3 text-red-600 text-sm">Si è verificato un errore. Riprova.</p>}
          </form>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">Perché prenotare ora</h3>
            <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2 text-sm">
              <li>Prima consulenza gratuita e senza impegno</li>
              <li>Analisi dell’appoggio plantare e valutazione posturale</li>
              <li>Proposte su misura: plantari, tutori, busti, ausili</li>
              <li>Assistenza continua post-vendita</li>
            </ul>
            <p className="mt-4 text-sm text-slate-600">Keyword locali: ortopedia su misura, consulenza ortopedica personalizzata, plantari su misura, tutori ortopedici, ortopedia Napoli, Salerno, Avellino.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
