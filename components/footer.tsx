import { company } from "@/data/site";
import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-12 pb-8 text-zinc-400">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Entreprise locale</p>
            <p className="mt-2 text-lg font-semibold text-white">{company.name}</p>
            <p className="mt-1 text-sm">Plâtrerie · Peinture · Finition</p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Contact</p>
            <a
              href={`tel:${company.phoneRaw}`}
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-zinc-200 hover:text-white"
            >
              <Phone className="h-4 w-4 text-amber-400" />
              {company.phoneDisplay}
            </a>
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-start gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <span>
                {company.address}<br />
                {company.city}
              </span>
            </a>
          </div>

          {/* Nav rapide */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Navigation</p>
            <nav className="mt-2 flex flex-col gap-1 text-sm">
              {[
                { href: "#prestations", label: "Prestations" },
                { href: "#apropos", label: "À propos" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="text-zinc-400 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">
          Site vitrine de présentation &mdash; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
