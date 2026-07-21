import { User, MapPin, Clock, Monitor, Globe2 } from "lucide-react";
import { profile } from "../data/content";

const infoItems = [
  { icon: MapPin, label: "Ubicación", value: profile.location },
  { icon: Clock, label: "Disponibilidad", value: profile.availability },
  { icon: Monitor, label: "Modalidad", value: profile.modality },
  { icon: Globe2, label: "Idiomas", value: profile.languages },
];

export default function About() {
  return (
    <section id="sobre-mi" className="max-w-6xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
      <div className="flex items-center gap-2.5 mb-6">
        <User className="text-accent-400" size={20} />
        <h2 className="font-display text-2xl font-semibold text-white">Sobre mí</h2>
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
        <p className="text-slate-400 leading-relaxed">{profile.about}</p>

        <div className="rounded-xl border border-base-700 bg-base-850 divide-y divide-base-700">
          {infoItems.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 px-5 py-4">
              <Icon className="text-accent-400 shrink-0" size={17} />
              <div>
                <p className="text-xs text-slate-500">{label}</p>
                <p className="text-sm text-slate-200 font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
