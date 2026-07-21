import { ArrowRight, Download, Radar } from "lucide-react";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-base-700 bg-base-900"
    >
      <div className="absolute inset-0 bg-grid-lines bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_60%_at_30%_20%,black,transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <p className="font-mono text-accent-400 text-sm tracking-wide mb-3">
            <span className="text-slate-500">$</span> whoami
            <span className="inline-block w-2 h-4 bg-accent-400 ml-1 align-middle animate-blink" />
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
            {profile.name}
          </h1>
          <p className="mt-4 text-accent-400 font-medium text-base sm:text-lg">
            {profile.role}
          </p>
          <p className="mt-5 text-slate-400 leading-relaxed max-w-xl">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="focus-ring inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-medium text-sm px-5 py-3 rounded-lg transition-colors"
            >
              Ver proyectos <ArrowRight size={16} />
            </a>
            <a
              href="/CV_Kevin_Vanegas_Medina.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 bg-transparent border border-base-600 hover:border-accent-400 text-slate-200 font-medium text-sm px-5 py-3 rounded-lg transition-colors"
            >
              Descargar CV <Download size={16} />
            </a>
          </div>
        </div>

        {/* Signature visual: SOC-style monitoring panel */}
        <div className="relative aspect-[4/3] rounded-2xl border border-base-700 bg-base-850 overflow-hidden shadow-2xl shadow-black/40">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-transparent" />

          {/* fake terminal chrome */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-base-700 bg-base-900/60 relative z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 font-mono text-[11px] text-slate-500">soc-monitor — live</span>
          </div>

          <div className="relative p-5 font-mono text-[11px] leading-relaxed text-slate-400 z-10">
            <p><span className="text-accent-400">[INFO]</span> Escaneando red corporativa...</p>
            <p><span className="text-green-400">[OK]</span> 0 amenazas críticas detectadas</p>
            <p><span className="text-accent-400">[INFO]</span> Sincronizando SIEM · Splunk</p>
            <p><span className="text-yellow-400">[WARN]</span> 2 alertas de baja severidad</p>
            <p><span className="text-accent-400">[INFO]</span> Firewall FortiGate: activo</p>
            <p className="flex items-center gap-1.5 text-slate-300">
              <Radar size={12} className="text-accent-400" /> Monitoreo continuo activo
            </p>
          </div>

          {/* scanning line */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-accent-400/25 to-transparent animate-scan pointer-events-none" />

          {/* radar ping */}
          <div className="absolute bottom-5 right-5 z-10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent-400" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-400" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
