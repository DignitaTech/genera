"use client";
import { ArrowLeft } from "lucide-react";

export function WizardShell({
  step, total, title, onBack, children, hideBack = false,
}: {
  step: number;
  total: number;
  title: string;
  onBack: () => void;
  children: React.ReactNode;
  hideBack?: boolean;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 sm:px-10">
        {!hideBack ? (
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="size-4" /> Atrás
          </button>
        ) : (
          <span />
        )}
        <span className="text-sm text-white/30">
          Paso {step} de {total}
        </span>
      </nav>

      {/* Progress */}
      <div className="h-0.5 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-primary to-orange-400 transition-all duration-500"
          style={{ width: `${(step / total) * 100}%` }}
        />
      </div>

      {/* Content */}
      <main className="flex-1 mx-auto w-full max-w-2xl px-5 py-10 sm:px-8">
        <h1 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h1>
        {children}
      </main>

      {/* Footer */}
      <footer className="px-6 py-5 text-center text-xs text-white/20">
        <a href="https://dignita.tech" className="hover:text-white/50 transition-colors">
          Powered by Dignita
        </a>
      </footer>
    </div>
  );
}
