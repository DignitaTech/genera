"use client";
import { useMemo } from "react";
import { TrendingUp, DollarSign, Clock, RotateCcw, ArrowRight } from "lucide-react";
import { WizardShell } from "../wizard-shell";
import { calcularResumen, fmt } from "@/lib/roi";
import type { ProcesoInput } from "@/lib/roi";

function RoiBar({ meses, totalMeses = 60 }: { meses: number; totalMeses?: number }) {
  const pct = Math.min(100, (meses / totalMeses) * 100);
  return (
    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-orange-400 transition-all duration-700"
        style={{ width: `${100 - pct}%` }}
      />
    </div>
  );
}

export function StepResultado({
  empresa, procesos, onBack, onRestart,
}: {
  empresa: string;
  procesos: ProcesoInput[];
  onBack: () => void;
  onRestart: () => void;
}) {
  const res = useMemo(() => calcularResumen(procesos), [procesos]);

  const kpis = [
    {
      label: "Ahorro mensual",
      value: fmt(res.totalAhorroMensual),
      sub: "desde el primer mes",
      icon: DollarSign,
      color: "text-emerald-400",
    },
    {
      label: "Ahorro anual",
      value: fmt(res.totalAhorroAnual),
      sub: "primer año completo",
      icon: TrendingUp,
      color: "text-primary",
    },
    {
      label: "Break-even",
      value: res.totalBreakEvenMes === Infinity ? "—" : `Mes ${res.totalBreakEvenMes}`,
      sub: "recuperación de inversión",
      icon: Clock,
      color: "text-blue-400",
    },
    {
      label: "Ganancia neta año 5",
      value: fmt(Math.max(0, res.ahorroAno5)),
      sub: "ahorro acumulado menos costos",
      icon: TrendingUp,
      color: "text-violet-400",
    },
  ];

  // Timeline anual simplificado
  const annual = [1, 2, 3, 4, 5].map((yr) => ({
    yr,
    ahorro: res.totalAhorroMensual * 12 * yr,
    roi:
      res.totalCostoImplementacion > 0
        ? ((res.totalAhorroMensual * 12 * yr - res.totalCostoImplementacion) /
            res.totalCostoImplementacion) *
          100
        : 0,
  }));

  return (
    <WizardShell step={4} total={4} title={`Propuesta para ${empresa || "tu empresa"}`} onBack={onBack} hideBack>
      <p className="mb-8 text-sm text-white/50">
        Basada en {procesos.length} proceso{procesos.length !== 1 ? "s" : ""} seleccionado{procesos.length !== 1 ? "s" : ""}.
        ROI proyectado mes 1 al año 5.
      </p>

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-2xl border border-white/10 bg-card p-4">
            <div className={`mb-2 ${k.color}`}>
              <k.icon className="size-5" />
            </div>
            <div className="text-2xl font-semibold tracking-tight">{k.value}</div>
            <div className="mt-0.5 text-xs text-white/40">{k.label}</div>
            <div className="mt-1 text-[11px] text-white/25">{k.sub}</div>
          </div>
        ))}
      </div>

      {/* Break-even bar */}
      {res.totalBreakEvenMes !== Infinity && (
        <div className="mt-6 rounded-2xl border border-white/10 bg-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold">Punto de equilibrio</span>
            <span className="text-sm text-primary font-semibold">Mes {res.totalBreakEvenMes}</span>
          </div>
          <RoiBar meses={res.totalBreakEvenMes} />
          <p className="mt-2 text-xs text-white/30">
            A partir del mes {res.totalBreakEvenMes} cada peso ahorrado es ganancia neta.
          </p>
        </div>
      )}

      {/* Proyección anual */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-card overflow-hidden">
        <div className="px-5 py-4 border-b border-white/10">
          <h3 className="font-semibold text-sm">Proyección de retorno</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-5 py-3 text-left text-xs font-medium text-white/40 uppercase tracking-wider">Año</th>
                <th className="px-5 py-3 text-right text-xs font-medium text-white/40 uppercase tracking-wider">Ahorro acumulado</th>
                <th className="px-5 py-3 text-right text-xs font-medium text-white/40 uppercase tracking-wider">ROI</th>
              </tr>
            </thead>
            <tbody>
              {annual.map((row) => (
                <tr key={row.yr} className="border-b border-white/5 last:border-0">
                  <td className="px-5 py-3.5 font-medium">Año {row.yr}</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-emerald-400">{fmt(row.ahorro)}</td>
                  <td className={`px-5 py-3.5 text-right font-semibold ${row.roi >= 0 ? "text-primary" : "text-red-400"}`}>
                    {row.roi >= 0 ? "+" : ""}{row.roi.toFixed(0)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Por proceso */}
      {res.procesos.length > 1 && (
        <div className="mt-4 rounded-2xl border border-white/10 bg-card overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10">
            <h3 className="font-semibold text-sm">Desglose por proceso</h3>
          </div>
          <div className="divide-y divide-white/5">
            {res.procesos.map((p) => (
              <div key={p.proceso} className="flex items-center justify-between px-5 py-3">
                <span className="text-sm text-white/70 truncate max-w-[55%]">{p.proceso}</span>
                <span className="text-sm font-semibold text-emerald-400">{fmt(p.ahorroMensual)}/mes</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTAs */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="https://dignita.tech/contacto"
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          Solicitar propuesta formal
          <ArrowRight className="size-4" />
        </a>
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold transition hover:border-white/30"
        >
          <RotateCcw className="size-4" />
          Nuevo cálculo
        </button>
      </div>

      <p className="mt-5 text-center text-xs text-white/20">
        Los valores son proyecciones basadas en los datos ingresados. Dignita
        desarrolla propuestas formales con análisis detallado.
      </p>
    </WizardShell>
  );
}
