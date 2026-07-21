import { useEffect, useState } from "react";
import {
  Home,
  User,
  FolderKanban,
  Briefcase,
  Code2,
  ShieldCheck,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { nav, profile } from "../data/content";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const icons = {
  Inicio: Home,
  "Sobre mí": User,
  Proyectos: FolderKanban,
  Experiencia: Briefcase,
  Habilidades: Code2,
  Certificaciones: ShieldCheck,
  Contacto: Mail,
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 flex items-center justify-between bg-base-900/95 backdrop-blur border-b border-base-700 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-accent-400 text-lg">{profile.initials}</span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="text-white p-2 focus-ring"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed z-30 top-0 left-0 h-full w-64 bg-base-900 border-r border-base-700 flex flex-col
        transition-transform duration-300 lg:translate-x-0
        ${open ? "translate-x-0 pt-16" : "-translate-x-full"} lg:pt-0`}
      >
        <div className="hidden lg:flex items-center gap-2.5 px-6 py-6 border-b border-base-700">
          <div className="w-9 h-9 rounded-lg bg-accent-500/10 border border-accent-500/30 flex items-center justify-center">
            <span className="font-display font-bold text-accent-400 text-sm">{profile.initials}</span>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {nav.map((item) => {
            const Icon = icons[item.label];
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`focus-ring flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${
                  isActive
                    ? "bg-accent-500/10 text-accent-400 border border-accent-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-base-800 border border-transparent"
                }`}
              >
                <Icon size={17} strokeWidth={2} />
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="px-6 py-5 border-t border-base-700 flex items-center gap-4">
          <a
            href={`https://${profile.linkedin}`}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="focus-ring text-slate-400 hover:text-accent-400 transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`https://${profile.github}`}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="focus-ring text-slate-400 hover:text-accent-400 transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Correo"
            className="focus-ring text-slate-400 hover:text-accent-400 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </aside>

      {open && (
        <button
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 z-20 bg-black/60 backdrop-blur-sm"
        />
      )}
    </>
  );
}
