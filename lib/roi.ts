export interface ProcesoInput {
  id: string;
  nombre: string;
  nPersonas: number;
  nOpDiarias: number;
  hTrabajadasXDia: number;
  dLaborablesXSemana: number;
  tXOperacionMinutos: number;
  salarioMensual: number;
  costoImplementacion: number;
  automatizable: number; // 0-100
}

export interface ROIYear {
  mes: number;
  ahorroMensual: number;
  ahorroAcumulado: number;
  costoAcumulado: number;
  roi: number;
  breakEven: boolean;
}

export interface ROIResult {
  proceso: string;
  ahorroMensual: number;
  ahorroAnual: number;
  fteHorasAnuales: number;
  breakEvenMes: number;
  timeline: ROIYear[]; // 60 meses (5 años)
}

export interface ResumenROI {
  procesos: ROIResult[];
  totalAhorroMensual: number;
  totalAhorroAnual: number;
  totalCostoImplementacion: number;
  totalBreakEvenMes: number;
  ahorroAno5: number;
}

export function calcularROIProceso(p: ProcesoInput): ROIResult {
  const salarioHora =
    p.hTrabajadasXDia > 0 && p.dLaborablesXSemana > 0
      ? p.salarioMensual / (p.hTrabajadasXDia * p.dLaborablesXSemana * 4.33)
      : 0;

  const fteHorasAnuales =
    (p.nOpDiarias * p.dLaborablesXSemana * 52 * p.tXOperacionMinutos) /
    60 *
    p.nPersonas;

  const ahorroAnual = fteHorasAnuales * salarioHora * (p.automatizable / 100);
  const ahorroMensual = ahorroAnual / 12;

  const breakEvenMes =
    ahorroMensual > 0
      ? Math.ceil(p.costoImplementacion / ahorroMensual)
      : Infinity;

  const timeline: ROIYear[] = [];
  for (let mes = 1; mes <= 60; mes++) {
    const ahorroAcumulado = ahorroMensual * mes;
    const roi =
      p.costoImplementacion > 0
        ? ((ahorroAcumulado - p.costoImplementacion) /
            p.costoImplementacion) *
          100
        : 0;
    timeline.push({
      mes,
      ahorroMensual,
      ahorroAcumulado,
      costoAcumulado: p.costoImplementacion,
      roi,
      breakEven: mes >= breakEvenMes && breakEvenMes !== Infinity,
    });
  }

  return {
    proceso: p.nombre || `Proceso ${p.id}`,
    ahorroMensual,
    ahorroAnual,
    fteHorasAnuales,
    breakEvenMes,
    timeline,
  };
}

export function calcularResumen(procesos: ProcesoInput[]): ResumenROI {
  const resultados = procesos.map(calcularROIProceso);
  const totalAhorroMensual = resultados.reduce((s, r) => s + r.ahorroMensual, 0);
  const totalCosto = procesos.reduce((s, p) => s + p.costoImplementacion, 0);
  const breakEvenMes =
    totalAhorroMensual > 0 ? Math.ceil(totalCosto / totalAhorroMensual) : Infinity;

  return {
    procesos: resultados,
    totalAhorroMensual,
    totalAhorroAnual: totalAhorroMensual * 12,
    totalCostoImplementacion: totalCosto,
    totalBreakEvenMes: breakEvenMes,
    ahorroAno5: totalAhorroMensual * 60 - totalCosto,
  };
}

export function fmt(n: number, currency = true): string {
  if (!isFinite(n)) return "—";
  const abs = Math.abs(n);
  let val: string;
  if (abs >= 1_000_000) val = `${(n / 1_000_000).toFixed(1)}M`;
  else if (abs >= 1_000) val = `${(n / 1_000).toFixed(1)}K`;
  else val = n.toFixed(0);
  return currency ? `$${val}` : val;
}
