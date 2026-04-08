"use client";

import { company } from "@/data/site";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#prestations", label: "Prestations" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="tracking-tight text-zinc-900" onClick={() => setOpen(false)}>
          <p className="text-[11px] font-semibold uppercase text-zinc-500">Entreprise locale</p>
          <p className="text-base font-semibold sm:text-lg">{company.name}</p>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm text-zinc-700 md:flex">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-zinc-950">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${company.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-900 transition hover:border-zinc-900 hover:bg-zinc-950 hover:text-white sm:px-4 sm:text-sm"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{company.phoneDisplay}</span>
            <span className="sm:hidden">Appeler</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 p-2 text-zinc-700 transition hover:border-zinc-900 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-zinc-200 bg-white px-4 pb-5 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-950"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
