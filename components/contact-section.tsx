import { company } from "@/data/site";
import { MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-b border-zinc-100 bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="space-y-4 lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">Parlons de votre projet</h2>
          <p className="text-zinc-400">
            Besoin d'un échange rapide pour vos travaux de plâtrerie, peinture ou finition&nbsp;? Contact direct par
            téléphone ou via ce formulaire.
          </p>

          <div className="space-y-3 pt-2">
            <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center gap-2 text-xl font-semibold text-white hover:underline">
              <Phone className="h-5 w-5 text-amber-400" />
              {company.phoneDisplay}
            </a>
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <span>
                {company.address}<br />
                {company.city}<br />
                {company.country}
              </span>
            </a>
          </div>

          <a
            href={`tel:${company.phoneRaw}`}
            className="mt-2 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
          >
            Appeler maintenant
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5 sm:p-6 lg:col-span-7">
          <form className="grid gap-4" action="#" method="post">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1 text-sm font-medium text-zinc-300">
                Nom
                <input
                  type="text"
                  name="name"
                  className="rounded-xl border border-white/10 bg-zinc-800 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-amber-400/60"
                  placeholder="Votre nom"
                />
              </label>
              <label className="grid gap-1 text-sm font-medium text-zinc-300">
                Téléphone
                <input
                  type="tel"
                  name="phone"
                  className="rounded-xl border border-white/10 bg-zinc-800 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-amber-400/60"
                  placeholder="06 XX XX XX XX"
                />
              </label>
            </div>

            <label className="grid gap-1 text-sm font-medium text-zinc-300">
              Email
              <input
                type="email"
                name="email"
                className="rounded-xl border border-white/10 bg-zinc-800 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-amber-400/60"
                placeholder="vous@email.fr"
              />
            </label>

            <label className="grid gap-1 text-sm font-medium text-zinc-300">
              Votre besoin
              <textarea
                name="message"
                rows={5}
                className="rounded-xl border border-white/10 bg-zinc-800 px-3 py-2.5 text-white placeholder:text-zinc-500 outline-none transition focus:border-amber-400/60"
                placeholder="Décrivez rapidement votre projet (type de pièce, nature des travaux, timing)."
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
            >
              Envoyer la demande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
