"use client";

import { services } from "@/data/site";
import { ArrowRight, X } from "lucide-react";
import { useMemo, useState } from "react";

type ServiceId = (typeof services)[number]["id"];

export function ServicesSection() {
  const [activeId, setActiveId] = useState<ServiceId>(services[0].id);
  const [openedId, setOpenedId] = useState<ServiceId | null>(null);

  const opened = useMemo(
    () => services.find((service) => service.id === openedId) ?? null,
    [openedId],
  );

  return (
    <section id="prestations" className="scroll-mt-24 border-b border-zinc-200 bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Prestations</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Des interventions ciblées pour un intérieur net et soigné
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/90 p-3">
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = activeId === service.id;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => {
                      setActiveId(service.id);
                      setOpenedId(service.id);
                    }}
                    className={`mb-1 flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition ${
                      isActive
                        ? "bg-zinc-950 text-white shadow"
                        : "bg-transparent text-zinc-700 hover:bg-white hover:text-zinc-950"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-medium">
                      <Icon className="h-4 w-4" />
                      {service.title}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  className="group rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
                >
                  <Icon className="h-5 w-5 text-zinc-800" />
                  <h3 className="mt-3 text-lg font-semibold text-zinc-950">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700">{service.short}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveId(service.id);
                      setOpenedId(service.id);
                    }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900"
                  >
                    Voir le détail
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <ServiceModal onClose={() => setOpenedId(null)} opened={opened} />
    </section>
  );
}

function ServiceModal({
  opened,
  onClose,
}: {
  opened: (typeof services)[number] | null;
  onClose: () => void;
}) {
  if (!opened) {
    return null;
  }

  const Icon = opened.icon;

  return (
    /* Backdrop — click outside closes */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-h-[88vh] w-full max-w-2xl overflow-auto rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              <Icon className="h-4 w-4" />
              Prestation
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">{opened.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-zinc-300 p-2 text-zinc-600 transition hover:border-zinc-900 hover:text-zinc-950"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="text-sm leading-relaxed text-zinc-700">{opened.intro}</p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {opened.points.map((point) => (
            <li key={point} className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-800">
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50/60 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Bénéfice client</p>
          <p className="mt-1 text-sm font-medium text-zinc-900">{opened.benefit}</p>
        </div>

        <a
          href="#contact"
          onClick={onClose}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          Demander un devis pour cette prestation
        </a>
      </div>
    </div>
  );
}
