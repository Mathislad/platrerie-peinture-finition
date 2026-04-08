import { company } from "@/data/site";
import { ArrowRight, BadgeCheck, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-100">
      {/* Photo de fond Unsplash — peinture intérieure lumineuse */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600&q=80"
          alt="Travaux de peinture intérieure"
          fill
          priority
          className="object-cover"
        />
        {/* Dégradé sombre pour lisibilité du texte */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(15,15,15,0.88)_0%,rgba(15,15,15,0.72)_55%,rgba(15,15,15,0.45)_100%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-28">
        {/* Left column */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Plâtrerie · Peinture · Finition
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.05]">
            Des finitions propres et durables pour vos travaux intérieurs
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            Entreprise locale à Vals-près-le-Puy. Accompagnement en plâtrerie, peinture et finition,
            en neuf comme en rénovation, avec un objectif simple&nbsp;: un résultat net et soigné.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 active:scale-[.98]"
            >
              Demander un devis
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#prestations"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/20 active:scale-[.98]"
            >
              Découvrir les prestations
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/20 pt-6 text-sm text-zinc-300">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-zinc-400" />
              {company.area}
            </span>
            <a
              href={`tel:${company.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:underline"
            >
              <Phone className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Right card */}
        <div className="rounded-2xl border border-white/15 bg-zinc-950/70 p-6 backdrop-blur-md lg:col-span-5 lg:p-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Intervention locale</p>
          <p className="mt-1 text-sm text-zinc-300">{company.area}</p>
          <a
            href={`tel:${company.phoneRaw}`}
            className="mt-3 flex items-center gap-2 text-xl font-semibold text-white hover:underline"
          >
            <Phone className="h-5 w-5 text-amber-400" />
            {company.phoneDisplay}
          </a>

          <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
            {[
              "Chantier propre et organisé",
              "Conseil clair selon votre besoin",
              "Finitions nettes et homogènes",
              "En neuf comme en rénovation",
            ].map((item) => (
              <p key={item} className="flex items-start gap-2 text-sm text-zinc-200">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                {item}
              </p>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-7 block w-full rounded-xl bg-white py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 active:scale-[.99]"
          >
            Demander un devis gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
