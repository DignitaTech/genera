"use client";
import { Building2, ChevronRight } from "lucide-react";
import { WizardShell } from "../wizard-shell";
import type { WizardState } from "../wizard";

const sectores = [
  "Servicios financieros", "Manufactura", "Retail", "Salud",
  "Tecnología", "Educación", "Logística", "Otro",
];

export function StepEmpresa({
  empresa, sector, onChange, onNext, onBack,
}: {
  empresa: string;
  sector: string;
  onChange: (p: Partial<WizardState>) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <WizardShell step={1} total={4} title="Tu empresa" onBack={onBack}>
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-xs font-medium text-white/50 uppercase tracking-widest">
            Nombre de la empresa
          </label>
          <div className="relative">
            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/30" />
            <input
              type="text"
              value={empresa}
              onChange={(e) => onChange({ empresa: e.target.value })}
              placeholder="Ej: Mi Empresa S.A.C."
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20 placeholder:text-white/20"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium text-white/50 uppercase tracking-widest">
            Sector
          </label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {sectores.map((s) => (
              <button
                key={s}
                onClick={() => onChange({ sector: s })}
                className={`rounded-2xl border px-3 py-2.5 text-sm transition ${
                  sector === s
                    ? "border-primary bg-primary/15 text-white"
                    : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!empresa.trim()}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Siguiente: seleccionar procesos
        <ChevronRight className="size-4" />
      </button>
    </WizardShell>
  );
}
