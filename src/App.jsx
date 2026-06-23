import { useState } from "react";
import Accueil from "./components/Accueil";
import Parcours from "./components/Parcours";
import Competences from "./components/Competences";
import SAE from "./components/SAE";
import Stage from "./components/Stage";
import ProjetPro from "./components/ProjetPro";

const tabs = [
  { id: "accueil",      label: "Accueil",      icon: "⌂" },
  { id: "parcours",     label: "Parcours",     icon: "◎" },
  { id: "competences",  label: "Compétences",  icon: "◈" },
  { id: "sae",          label: "SAÉ",          icon: "◆" },
  { id: "stage",        label: "Stage",        icon: "◉" },
  { id: "projet",       label: "Projet pro",   icon: "▸" },
];

export default function App() {
  const [active, setActive] = useState("accueil");
  const [prev, setPrev] = useState(null);

  const navigate = (id) => {
    if (id === active) return;
    setPrev(active);
    setActive(id);
  };

  const renderSection = () => {
    switch (active) {
      case "accueil":     return <Accueil key="accueil" />;
      case "parcours":    return <Parcours key="parcours" />;
      case "competences": return <Competences key="competences" />;
      case "sae":         return <SAE key="sae" />;
      case "stage":       return <Stage key="stage" />;
      case "projet":      return <ProjetPro key="projet" />;
      default:            return <Accueil key="accueil" />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800/80" style={{ background: 'rgba(9,9,11,0.92)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2.5">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mr-4 shrink-0">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-xs font-bold text-white tracking-tight">VM</div>
            </div>
            {/* Separateur */}
            <div className="w-px h-5 bg-zinc-800 mr-3 shrink-0" />
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => navigate(t.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                  active === t.id
                    ? "bg-indigo-600/20 text-indigo-300 border border-indigo-600/40"
                    : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/60 border border-transparent"
                }`}
              >
                <span className="text-xs opacity-60">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 animate-fade-in">
        {renderSection()}
      </main>

      <footer className="border-t border-zinc-800/60 mt-24 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-xs font-bold text-white">VM</div>
            <span className="text-zinc-500 text-sm">Vakisan Mathignanasingam</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:vakisanmathi10@gmail.com" className="text-zinc-500 hover:text-indigo-400 text-sm transition-colors">
              vakisanmathi10@gmail.com
            </a>
            <span className="text-zinc-700 text-xs">·</span>
            <span className="text-zinc-600 text-xs font-mono">BUT Info · 2e année</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
