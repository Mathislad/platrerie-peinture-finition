import { company } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-10 text-zinc-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:px-6 lg:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">{company.name}</p>
          <p className="mt-2 text-sm">Plâtrerie · Peinture · Finition</p>
          <p className="text-sm">{company.area}</p>
        </div>
        <div className="text-sm">
          <p>
            Téléphone: <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
          </p>
          <p className="mt-1 text-zinc-500">Site vitrine de présentation</p>
        </div>
      </div>
    </footer>
  );
}
