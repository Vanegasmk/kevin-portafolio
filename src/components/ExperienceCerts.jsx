import { Briefcase, ShieldCheck, ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import { experience, certifications } from "../data/content";

export default function ExperienceCerts() {
  return (
    <section
      id="experiencia"
      className="border-t border-base-700 bg-base-900/60"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-14 lg:py-20 grid lg:grid-cols-[1.4fr_1fr] gap-12">
        {/* Experience */}
        <div>
          <div className="flex items-center gap-2.5 mb-8">
            <Briefcase className="text-accent-400" size={20} />
            <h2 className="font-display text-2xl font-semibold text-white">Experiencia profesional</h2>
          </div>

          <ol className="relative border-l border-base-700 ml-1.5 space-y-9">
            {experience.map((job) => (
              <li key={job.role + job.period} className="pl-6 relative">
                <span
                  className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full border-2 border-base-900 ${
                    job.current ? "bg-accent-400" : "bg-base-600"
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display font-semibold text-white text-base">{job.role}</h3>
                  <span className="text-xs font-mono text-slate-500">{job.period}</span>
                </div>
                <p className="text-sm text-accent-400 font-medium">{job.company}</p>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed whitespace-pre-line">{job.description}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Certifications */}
        <div id="certificaciones">
          <div className="flex items-center gap-2.5 mb-8">
            <ShieldCheck className="text-accent-400" size={20} />
            <h2 className="font-display text-2xl font-semibold text-white">Certificaciones</h2>
          </div>

          <div className="space-y-3">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="flex items-start gap-3 rounded-xl border border-base-700 bg-base-850 px-4 py-3.5 hover:border-accent-500/40 transition-colors"
              >
                {c.status === "Completado" ? (
                  <CheckCircle2 className="text-accent-400 mt-0.5 shrink-0" size={17} />
                ) : (
                  <Clock3 className="text-yellow-400/80 mt-0.5 shrink-0" size={17} />
                )}
                <div>
                  <p className="text-sm font-medium text-slate-200 leading-snug">{c.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {c.issuer} · {c.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
