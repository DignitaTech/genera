"use client";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, TrendingUp, Clock } from "lucide-react";

const stats = [
  { icon: TrendingUp, label: "ROI promedio", value: "340%" },
  { icon: Clock, label: "Recuperación", value: "< 4 meses" },
  { icon: Sparkles, label: "Ahorro FTE", value: "60–80%" },
];

export function StepLanding({ onStart }: { onStart: () => void }) {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 sm:px-10">
        <a href="https://dignita.tech" className="text-sm font-semibold tracking-tight opacity-70 hover:opacity-100 transition-opacity">
          ← Dignita
        </a>
        <span className="text-sm font-semibold text-primary">Genera</span>
      </nav>

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="size-3.5" /> IA + Automatización
          </span>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Genera tu propuesta de{" "}
            <span className="text-gradient">IA y Automatización</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-white/60">
            Ingresa tus procesos, horas y costos. En minutos tendrás una
            propuesta comercial con el ahorro real y el ROI mes a mes hasta el
            año 5.
          </p>

          <button
            onClick={onStart}
            className="group mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary/90 active:scale-95"
          >
            Calcular mi ROI
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          <p className="text-xs text-white/30">
            Gratuito · Sin registro · Exportable
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-white/5 text-primary ring-1 ring-white/10">
                <s.icon className="size-5" />
              </div>
              <div className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {s.value}
              </div>
              <div className="text-xs text-white/40">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Casos reales */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-xs text-white/25"
        >
          Usado por Verisure · Fitesa · Idego y más de 16 empresas
        </motion.p>
      </section>
    </main>
  );
}
