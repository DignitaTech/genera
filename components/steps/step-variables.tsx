"use client";
import { useState } from "react";
import { ChevronRight, ChevronDown, Users, Clock, DollarSign } from "lucide-react";
import { WizardShell } from "../wizard-shell";
import type { ProcesoInput } from "@/lib/roi";

const fields: {
  key: keyof Omit<ProcesoInput, "id" | "nombre">;
  label: string;
  unit: string;
  min: number;
  max: number;
  icon: React.ElementType;
}[] = [
  { key: "nPersonas", label: "Personas que hacen el proceso", unit: "personas", min: 1, max: 500, icon: Users },
  { key: "nOpDiarias", label: "Operaciones por día", unit: "ops/día", min: 1, max: 10000, icon: ChevronDown },
  { key: "tXOperacionMinutos", label: "Tiempo por operación", unit: "minutos", min: 1, max: 480, icon: Clock },
  { key: "dLaborablesXSemana", label: "Días laborables por semana", unit: "días", min: 1, max: 7, icon: Clock },
  { key: "hTrabajadasXDia", label: "Horas trabajadas por día", unit: "horas", min: 1, max: 24, icon: Clock },
  { key: "salarioMensual", label: "Salario mensual promedio", unit: "USD/mes", min: 100, max: 50000, icon: DollarSign },
  { key: "costoImplementacion", label: "Costo de implementación estimado", unit: "USD", min: 0, max: 1000000, icon: DollarSign },
  { key: "automatizable", label: "% automatizable del proceso", unit: "%", min: 10, max: 100, icon: ChevronDown },
];

export function StepVariables({
  procesos, onUpdate, onNext, onBack,
}: {
  procesos: ProcesoInput[];
  onUpdate: (key: string, field: keyof Omit<ProcesoInput, "id" | "nombre">, value: number) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [open, setOpen] = useState(0);

  return (
    <WizardShell step={3} total={4} title="Variables de cada proceso" onBack={onBack}>
      <p className="mb-6 text-sm text-white/50">
        Completa los datos de cada proceso. Los valores por defecto son estimaciones conservadoras.
      </p>

      <div className="space-y-3">
        {procesos.map((p, pi) => (
          <div key={p.id} className="rounded-2xl border border-white/10 overflow-hidden">
            <button
              onClick={() => setOpen(pi === open ? -1 : pi)}
              className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition"
            >
              <div>
                <div className="font-semibold text-sm">{p.nombre}</div>
                <div className="text-xs text-white/40 mt-0.5">
                  {p.nPersonas} persona{p.nPersonas !== 1 ? "s" : ""} · {p.tXOperacionMinutos} min/op · ${p.salarioMensual.toLocaleString()}/mes
                </div>
              </div>
              <ChevronDown className={`size-4 text-white/40 transition-transform ${pi === open ? "rotate-180" : ""}`} />
            </button>

            {pi === open && (
              <div className="border-t border-white/10 px-5 pb-5 pt-4 grid gap-4 sm:grid-cols-2">
                {fields.map((f) => (
                  <label key={f.key} className="block">
                    <span className="mb-1.5 block text-xs text-white/40">{f.label}</span>
                    <div className="relative">
                      <input
                        type="number"
                        min={f.min}
                        max={f.max}
                        value={p[f.key] as number}
                        onChange={(e) => onUpdate(p.id, f.key, Number(e.target.value))}
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-4 pr-14 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                      />
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/25">{f.unit}</span>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary/90"
      >
        Ver mi propuesta de ROI
        <ChevronRight className="size-4" />
      </button>
    </WizardShell>
  );
}
