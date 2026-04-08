import { company } from "@/data/site";
import { MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-b border-zinc-200 bg-[linear-gradient(135deg,#fafaf9_0%,#f5f5f4_100%)] py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="space-y-4 lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">Parlons de votre projet</h2>
          <p className="text-zinc-700">
            Besoin d'un échange rapide pour vos travaux de plâtrerie, peinture ou finition? Contact direct par
            téléphone ou via ce formulaire.
          </p>

          <div className="space-y-3 pt-2">
            <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center gap-2 text-lg font-semibold text-zinc-950">
              <Phone className="h-5 w-5" />
              {company.phoneDisplay}
            </a>
            <p className="inline-flex items-center gap-2 text-sm text-zinc-700">
              <MapPin className="h-4 w-4" />
              {company.area}
            </p>
          </div>

          <a
            href={`tel:${company.phoneRaw}`}
            className="mt-2 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Appeler maintenant
          </a>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6 lg:col-span-7">
          <form className="grid gap-4" action="#" method="post">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1 text-sm text-zinc-700">
                Nom
                <input
                  type="text"
                  name="name"
                  className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none transition focus:border-zinc-900"
                  placeholder="Votre nom"
                />
              </label>
              <label className="grid gap-1 text-sm text-zinc-700">
                Téléphone
                <input
                  type="tel"
                  name="phone"
                  className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none transition focus:border-zinc-900"
                  placeholder="06 XX XX XX XX"
                />
              </label>
            </div>

            <label className="grid gap-1 text-sm text-zinc-700">
              Email
              <input
                type="email"
                name="email"
                className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none transition focus:border-zinc-900"
                placeholder="vous@email.fr"
              />
            </label>

            <label className="grid gap-1 text-sm text-zinc-700">
              Votre besoin
              <textarea
                name="message"
                rows={5}
                className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none transition focus:border-zinc-900"
                placeholder="Décrivez rapidement votre projet (type de pièce, nature des travaux, timing)."
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Envoyer la demande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
