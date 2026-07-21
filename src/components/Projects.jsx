import { FolderKanban, ArrowRight, Terminal, LayoutDashboard, Network, GitCommitHorizontal } from "lucide-react";
import { projects } from "../data/content";
import { GithubIcon } from "./BrandIcons";

const kindIcon = {
  code: Terminal,
  dashboard: LayoutDashboard,
  network: Network,
  pipeline: GitCommitHorizontal,
};

export default function Projects() {
  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2.5">
          <FolderKanban className="text-accent-400" size={20} />
          <h2 className="font-display text-2xl font-semibold text-white">Proyectos destacados</h2>
        </div>
        <a
          href="#proyectos"
          className="focus-ring hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-500"
        >
          Ver todos los proyectos <ArrowRight size={14} />
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p) => {
          const Icon = kindIcon[p.kind] ?? Terminal;
          return (
            <article
              key={p.title}
              className="group rounded-xl border border-base-700 bg-base-850 overflow-hidden hover:border-accent-500/40 transition-colors"
            >
              <div className="h-32 bg-base-900 flex items-center justify-center border-b border-base-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-lines bg-[size:24px_24px] opacity-40" />
                <Icon className="text-accent-400/70 relative z-10" size={34} strokeWidth={1.5} />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-white text-base">{p.title}</h3>
                <p className="mt-1 text-xs font-mono text-accent-400">{p.tags.join(" · ")}</p>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href="#proyectos"
                    className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-500"
                  >
                    Ver proyecto <ArrowRight size={14} />
                  </a>
                  <a
                    href="#proyectos"
                    aria-label={`Repositorio de ${p.title}`}
                    className="focus-ring text-slate-500 hover:text-slate-300"
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
