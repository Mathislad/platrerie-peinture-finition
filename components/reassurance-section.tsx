import { reassuranceItems } from "@/data/site";

export function ReassuranceSection() {
  return (
    <section className="border-b border-zinc-200 bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Pourquoi nous choisir</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">Un service orienté qualité d’exécution</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {reassuranceItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-zinc-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
