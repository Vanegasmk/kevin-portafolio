import { Send, Mail, MapPin } from "lucide-react";
import { profile } from "../data/content";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Contact() {
  return (
    <footer id="contacto" className="max-w-6xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
      <div className="flex items-center gap-2.5 mb-2">
        <Send className="text-accent-400" size={20} />
        <h2 className="font-display text-2xl font-semibold text-white">Conectemos</h2>
      </div>
      <p className="text-slate-400 text-sm mb-8">
        Estoy abierto a nuevas oportunidades y proyectos. Hablemos.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Mail size={16} className="text-accent-400 shrink-0" />
          {profile.email}
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <MapPin size={16} className="text-accent-400 shrink-0" />
          {profile.location}
        </div>

        <a
          href={`https://${profile.linkedin}`}
          target="_blank"
          rel="noreferrer"
          className="focus-ring flex items-center gap-2.5 rounded-lg border border-base-700 bg-base-850 px-4 py-3 text-sm hover:border-accent-500/40 transition-colors"
        >
          <LinkedinIcon size={16} className="text-accent-400 shrink-0" />
          <div className="leading-tight">
            <p className="text-slate-200 font-medium">LinkedIn</p>
            <p className="text-slate-500 text-xs">{profile.linkedin}</p>
          </div>
        </a>

        <a
          href={`https://${profile.github}`}
          target="_blank"
          rel="noreferrer"
          className="focus-ring flex items-center gap-2.5 rounded-lg border border-base-700 bg-base-850 px-4 py-3 text-sm hover:border-accent-500/40 transition-colors"
        >
          <GithubIcon size={16} className="text-accent-400 shrink-0" />
          <div className="leading-tight">
            <p className="text-slate-200 font-medium">GitHub</p>
            <p className="text-slate-500 text-xs">{profile.github}</p>
          </div>
        </a>
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="focus-ring inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-medium text-sm px-5 py-3 rounded-lg transition-colors"
      >
        <Mail size={16} /> Enviar correo
      </a>

      <p className="mt-14 text-xs text-slate-600 border-t border-base-700 pt-6">
        © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
