import { company } from "@/data/site";
import { ArrowRight, BadgeCheck, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80 bg-[linear-gradient(120deg,#fafaf9_0%,#f5f5f4_55%,#ecebe8_100%)]">
      <div className="absolute inset-y-0 right-[-220px] hidden w-[520px] rounded-full bg-zinc-900/5 blur-3xl md:block" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-24">
        {/* Left column */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-zinc-300/80 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
            Plâtrerie · Peinture · Finition
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl sm:leading-[1.05]">
            Des finitions propres et durables pour vos travaux intérieurs
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Entreprise locale à Vals-près-le-Puy. Accompagnement en plâtrerie, peinture et finition,
            en neuf comme en rénovation, avec un objectif simple&nbsp;: un résultat net et soigné.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 active:scale-[.98]"
            >
              Demander un devis
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#prestations"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900 hover:bg-white active:scale-[.98]"
            >
              Découvrir les prestations
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-zinc-200/60 pt-6 text-sm text-zinc-600">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-zinc-500" />
              {company.area}
            </span>
            <a
              href={`tel:${company.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-medium text-zinc-900 hover:underline"
            >
              <Phone className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Right card */}
        <div className="rounded-2xl border border-zinc-200/80 bg-white/95 p-6 shadow-sm lg:col-span-5 lg:p-7">
          <div className="relative h-48 overflow-hidden rounded-xl border border-zinc-200">
            <Image
              src="/images/hero-mineral.svg"
              alt="Ambiance intérieure soignée"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-5 space-y-3">
            {[
              "Chantier propre et organisé",
              "Conseil clair selon votre besoin",
              "Finitions nettes et homogènes",
            ].map((item) => (
              <p key={item} className="flex items-start gap-2 text-sm text-zinc-700">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-zinc-900" />
                {item}
              </p>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-6 block w-full rounded-xl bg-zinc-950 py-3 text-center text-sm font-semibold text-white transition hover:bg-zinc-800 active:scale-[.99]"
          >
            Demander un devis gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
