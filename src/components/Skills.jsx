import {
  Code2,
  Terminal,
  Database,
  Server,
  Users,
  ShieldAlert,
  Activity,
  Workflow,
  BrickWallFire,
  ChartNoAxesCombined,
  FileTerminal
} from "lucide-react";
import { skills } from "../data/content";

const iconMap = {
  "C#": Code2,
  "Power BI": ChartNoAxesCombined,
  "Python": Terminal,
  "Checkpoint Firewall": BrickWallFire,
  "Windows Server": Server,
  "Active Directory": Users,
  "Fortinet Firewall": BrickWallFire,
  "Microsoft Defender EDR": ShieldAlert,
  "Monitoreo SIEM": Activity,
  "Service Now": Workflow,
  "SQL": Database,
  "Automatización y Scripting": FileTerminal,
};

export default function Skills() {
  return (
    <section id="habilidades" className="border-y border-base-700 bg-base-900/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <div className="flex items-center gap-2.5 mb-8">
          <Code2 className="text-accent-400" size={20} />
          <h2 className="font-display text-2xl font-semibold text-white">Habilidades técnicas</h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map(({ name }) => {
            const Icon = iconMap[name] ?? Code2;
            return (
              <div
                key={name}
                className="group flex flex-col items-center justify-center gap-2.5 rounded-xl border border-base-700 bg-base-850 py-6 px-3 text-center hover:border-accent-500/40 hover:bg-base-800 transition-colors"
              >
                <Icon className="text-accent-400 group-hover:scale-110 transition-transform" size={22} />
                <span className="text-xs font-medium text-slate-300">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
