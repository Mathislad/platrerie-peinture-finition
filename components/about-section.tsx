import Image from "next/image";

const pillars = [
  { label: "Propreté du chantier" },
  { label: "Écoute du besoin" },
  { label: "Finitions soignées" },
  { label: "Intervention locale" },
];

export function AboutSection() {
  return (
    <section id="apropos" className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50/60 py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        {/* Visual */}
        <div className="lg:col-span-5">
          <div className="relative h-64 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 sm:h-80">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80"
              alt="Intérieur rénové avec finitions soignées"
              fill
              className="object-cover"
            />
            {/* Badge flottant */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/30 bg-zinc-950/80 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold text-white">Rénovation intérieure</span>
            </div>
          </div>
          {/* Pillar chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {pillars.map((p) => (
              <span
                key={p.label}
                className="rounded-full border border-zinc-900 bg-zinc-950 px-3 py-1 text-xs font-medium text-white"
              >
                {p.label}
              </span>
            ))}
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">À propos</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Une approche locale,<br className="hidden sm:block" /> humaine et rigoureuse
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-zinc-600">
            <p>
              PLATRERIE-PEINTURE,FINITION accompagne les projets intérieurs en privilégiant la propreté
              du chantier, la clarté des échanges et la qualité de la finition.
            </p>
            <p>
              Chaque intervention est pensée pour répondre au besoin réel&nbsp;: support bien préparé,
              exécution soignée et rendu final net, en neuf comme en rénovation.
            </p>
            <p>
              Une même exigence de résultat, que ce soit pour une pièce à rafraîchir ou un chantier
              complet à livrer.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
