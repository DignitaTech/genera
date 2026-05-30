"use client";

import { useState } from "react";
import { StepLanding } from "./steps/step-landing";
import { StepEmpresa } from "./steps/step-empresa";
import { StepProcesos } from "./steps/step-procesos";
import { StepVariables } from "./steps/step-variables";
import { StepResultado } from "./steps/step-resultado";
import type { ProcesoInput } from "@/lib/roi";

export type WizardState = {
  empresa: string;
  sector: string;
  procesosSeleccionados: string[]; // keys de areas.ts
  procesosNombres: Record<string, string>;
  inputs: Record<string, Omit<ProcesoInput, "id" | "nombre">>;
};

const defaultInput: Omit<ProcesoInput, "id" | "nombre"> = {
  nPersonas: 2,
  nOpDiarias: 50,
  hTrabajadasXDia: 8,
  dLaborablesXSemana: 5,
  tXOperacionMinutos: 10,
  salarioMensual: 1500,
  costoImplementacion: 5000,
  automatizable: 70,
};

const initialState: WizardState = {
  empresa: "",
  sector: "",
  procesosSeleccionados: [],
  procesosNombres: {},
  inputs: {},
};

export function Wizard() {
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [state, setState] = useState<WizardState>(initialState);

  const update = (partial: Partial<WizardState>) =>
    setState((s) => ({ ...s, ...partial }));

  const toggleProceso = (key: string, nombre: string) => {
    setState((s) => {
      const selected = s.procesosSeleccionados.includes(key)
        ? s.procesosSeleccionados.filter((k) => k !== key)
        : [...s.procesosSeleccionados, key];
      const nombres = { ...s.procesosNombres, [key]: nombre };
      const inputs = { ...s.inputs };
      if (!inputs[key]) inputs[key] = { ...defaultInput };
      return { ...s, procesosSeleccionados: selected, procesosNombres: nombres, inputs };
    });
  };

  const updateInput = (
    key: string,
    field: keyof typeof defaultInput,
    value: number
  ) => {
    setState((s) => ({
      ...s,
      inputs: {
        ...s.inputs,
        [key]: { ...(s.inputs[key] ?? defaultInput), [field]: value },
      },
    }));
  };

  const procesoInputs: ProcesoInput[] = state.procesosSeleccionados.map((k) => ({
    id: k,
    nombre: state.procesosNombres[k] ?? k,
    ...(state.inputs[k] ?? defaultInput),
  }));

  const goNext = () => setStep((s) => Math.min(4, s + 1) as typeof step);
  const goBack = () => setStep((s) => Math.max(0, s - 1) as typeof step);
  const restart = () => { setState(initialState); setStep(0); };

  if (step === 0) return <StepLanding onStart={goNext} />;
  if (step === 1)
    return (
      <StepEmpresa
        empresa={state.empresa}
        sector={state.sector}
        onChange={update}
        onNext={goNext}
        onBack={goBack}
      />
    );
  if (step === 2)
    return (
      <StepProcesos
        seleccionados={state.procesosSeleccionados}
        onToggle={toggleProceso}
        onNext={goNext}
        onBack={goBack}
      />
    );
  if (step === 3)
    return (
      <StepVariables
        procesos={procesoInputs}
        onUpdate={updateInput}
        onNext={goNext}
        onBack={goBack}
      />
    );
  return (
    <StepResultado
      empresa={state.empresa}
      procesos={procesoInputs}
      onBack={goBack}
      onRestart={restart}
    />
  );
}
