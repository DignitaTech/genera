"use client";
import { useState } from "react";
import { ChevronRight, Check } from "lucide-react";
import { WizardShell } from "../wizard-shell";
import { areas } from "@/lib/areas";

export function StepProcesos({
  seleccionados, onToggle, onNext, onBack,
}: {
  seleccionados: string[];
  onToggle: (key: string, nombre: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [areaAbierta, setAreaAbierta] = useState(0);

  return (
    <WizardShell step={2} total={4} title="Selecciona procesos a automatizar" onBack={onBack}>
      <p className="mb-6 text-sm text-white/50">
        Elige los procesos que más tiempo consumen en tu empresa. Puedes seleccionar varios.
      </p>

      <div className="space-y-2">
        {areas.map((area, ai) => (
          <div key={area.nombre} className="rounded-2xl border border-white/10 overflow-hidden">
            <button
              onClick={() => setAreaAbierta(ai === areaAbierta ? -1 : ai)}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-white/5"
            >
              <span className="font-semibold text-sm">{area.nombre}</span>
              <div className="flex items-center gap-2">
                {area.subAreas.flatMap((sa) => sa.procesos).filter((p) => seleccionados.includes(p.key)).length > 0 && (
                  <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary font-semibold">
                    {area.subAreas.flatMap((sa) => sa.procesos).filter((p) => seleccionados.includes(p.key)).length}
                  </span>
                )}
                <ChevronRight className={`size-4 text-white/40 transition-transform ${ai === areaAbierta ? "rotate-90" : ""}`} />
              </div>
            </button>

            {ai === areaAbierta && (
              <div className="border-t border-white/10 px-5 pb-4 pt-3 space-y-4">
                {area.subAreas.map((sa) => (
                  <div key={sa.nombre}>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/30">{sa.nombre}</p>
                    <div className="space-y-1.5">
                      {sa.procesos.map((p) => {
                        const selected = seleccionados.includes(p.key);
                        return (
                          <button
                            key={p.key}
                            onClick={() => onToggle(p.key, p.nombre)}
                            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                              selected
                                ? "bg-primary/15 text-white ring-1 ring-primary/30"
                                : "bg-white/3 text-white/60 hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            <div className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${selected ? "border-primary bg-primary" : "border-white/20"}`}>
                              {selected && <Check className="size-3" />}
                            </div>
                            {p.nombre}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={seleccionados.length === 0}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Siguiente: ingresar variables ({seleccionados.length} proceso{seleccionados.length !== 1 ? "s" : ""})
        <ChevronRight className="size-4" />
      </button>
    </WizardShell>
  );
}
