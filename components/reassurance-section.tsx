import { CheckCircle2, Clock3, MapPinned, Sparkles } from "lucide-react";

const items = [
  {
    icon: CheckCircle2,
    title: "Travail propre et soigné",
    text: "Organisation rigoureuse du chantier et attention portée à chaque détail de finition.",
  },
  {
    icon: Sparkles,
    title: "Conseils adaptés à votre projet",
    text: "Accompagnement clair pour choisir les solutions les plus cohérentes selon vos besoins.",
  },
  {
    icon: MapPinned,
    title: "Intervention locale et réactive",
    text: "Présence de proximité sur le secteur du Puy-en-Velay pour un suivi plus simple.",
  },
  {
    icon: Clock3,
    title: "Finitions nettes et durables",
    text: "Objectif constant : un rendu homogène, propre visuellement et pensé pour durer.",
  },
];

export function ReassuranceSection() {
  return (
    <section className="border-b border-zinc-800 bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Pourquoi nous choisir</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Un service orienté qualité d’exécution
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/15">
                  <Icon className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
